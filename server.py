from flask import Flask, request, jsonify, send_from_directory
import requests
import base64
import json
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 获取项目根目录
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__, static_folder=BASE_DIR, static_url_path='')

# 百度 OCR API 配置（从环境变量读取）
API_KEY = os.getenv('BAIDU_API_KEY')
SECRET_KEY = os.getenv('BAIDU_SECRET_KEY')

# 检查 API Key 是否配置
if not API_KEY or not SECRET_KEY:
    print('⚠️ 警告：未找到百度 OCR API Key，请配置 .env 文件')
    print('📝 参考 .env.example 文件进行配置')

# 获取 access token
def get_access_token():
    url = 'https://aip.baidubce.com/oauth/2.0/token'
    params = {
        'grant_type': 'client_credentials',
        'client_id': API_KEY,
        'client_secret': SECRET_KEY
    }
    response = requests.post(url, params=params)
    return response.json().get('access_token')

# 通用文字识别
def ocr_general(image_base64):
    access_token = get_access_token()
    url = f'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token={access_token}'
    
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    data = {'image': image_base64}
    
    response = requests.post(url, headers=headers, data=data)
    return response.json()

# 手写文字识别（推荐用于听写作业）
def ocr_handwriting(image_base64):
    access_token = get_access_token()
    url = f'https://aip.baidubce.com/rest/2.0/ocr/v1/handwriting?access_token={access_token}'
    
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    data = {'image': image_base64}
    
    response = requests.post(url, headers=headers, data=data)
    return response.json()

@app.route('/')
def index():
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/api/ocr', methods=['POST'])
def process_ocr():
    try:
        if 'image' not in request.files:
            return jsonify({'error': '没有图片文件'}), 400
        
        file = request.files['image']
        image_data = file.read()
        image_base64 = base64.b64encode(image_data).decode('utf-8')
        
        # 先尝试手写识别
        result = ocr_handwriting(image_base64)
        
        # 如果手写识别失败，尝试通用识别
        if 'words_result' not in result:
            result = ocr_general(image_base64)
        
        # 提取文字
        texts = []
        if 'words_result' in result:
            for item in result['words_result']:
                texts.append(item['words'])
        
        return jsonify({
            'success': True,
            'recognized_text': '\n'.join(texts),
            'raw_result': result
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/vocab-check', methods=['POST'])
def check_vocabulary():
    try:
        data = request.json
        recognized_words = data.get('words', [])
        expected_words = data.get('expected', [])
        
        # 简单匹配检查
        results = []
        for i, word in enumerate(recognized_words):
            expected = expected_words[i] if i < len(expected_words) else ''
            results.append({
                'recognized': word,
                'expected': expected,
                'correct': word.strip().lower() == expected.strip().lower()
            })
        
        correct_count = sum(1 for r in results if r['correct'])
        total = len(results)
        
        return jsonify({
            'success': True,
            'results': results,
            'accuracy': correct_count / total if total > 0 else 0,
            'correct_count': correct_count,
            'total': total
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print('🚀 EchoWise Web Server starting...')
    print('📍 Access at: http://localhost:5000')
    app.run(host='0.0.0.0', port=5000, debug=True)
