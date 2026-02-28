# EchoWise - 英语听写智能批改工具 🎯

> 📸 通过 OCR 技术自动识别学生听写作业并批改正确率  
> 📸 Auto-grade English dictation homework using OCR technology

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📖 产品简介 / Introduction

**EchoWise** 是一款专为英语教学设计智能批改工具，帮助学生和老师快速批改听写作业。

**EchoWise** is a smart grading tool designed for English teaching, helping students and teachers quickly correct dictation homework.

### 核心功能 / Key Features

- 📸 **拍照识别** / **Photo Upload**: 支持拍照或上传听写图片，自动识别手写文字  
  Support photo upload and automatic handwriting recognition

- 🔍 **OCR 识别** / **OCR Recognition**: 集成百度 OCR 手写文字识别 API，准确率高达 95%+  
  Integrated with Baidu OCR API, 95%+ accuracy rate

- ✅ **智能批改** / **Smart Grading**: 自动对比标准答案，计算正确率  
  Auto-compare with standard answers and calculate accuracy

- 📊 **结果展示** / **Visual Results**: 直观显示每个单词的对错，绿色✅正确，红色❌错误  
  Display correct/wrong marks for each word with green✅/red❌

- 📱 **移动友好** / **Mobile Friendly**: 响应式设计，支持手机、平板、电脑全平台  
  Responsive design, support mobile, tablet, and desktop

### 适用场景 / Use Cases

- 🏫 英语培训机构听写批改 / English training centers
- 👨‍👩‍👧‍👦 家长辅导孩子听写 / Parents helping children
- 📚 学生自测练习 / Student self-practice
- 👩‍🏫 教师批量批改作业 / Teachers grading assignments

---

## 🎯 产品名称 / Product Name

**EchoWise** = Echo (回声/跟读) + Wise (智慧)

**寓意** / **Meaning**: 通过智能技术，让每一次听写练习都得到即时反馈，帮助学生不断进步。  
Through smart technology, every dictation practice gets instant feedback to help students improve.

---

## 🖼️ 使用截图 / Screenshots

### 步骤 1: 上传听写图片 / Step 1: Upload Dictation Photo

![image alt](https://github.com/pineapple-666/EchoWise-web/blob/8675cd05c4e5e28036d3f117431466dc223b35a3/screenshots/screenshots%3Astep1-upload.png)

点击上传区域，拍照或选择听写作业图片。支持 JPG、PNG 格式。  
Click the upload area to take a photo or select dictation image. Support JPG, PNG formats.

### 步骤 2: OCR 识别结果 / Step 2: OCR Recognition Results

![image alt](https://github.com/pineapple-666/EchoWise-web/blob/6f97db7cdf06d39aef74350522c3b09c71d1da2e/screenshots/Weixin%20Image_20260228094548_19_33.png)

系统自动识别手写文字，显示在文本框中，可手动编辑修正。  
System automatically recognizes handwriting and displays in text box, editable.

### 步骤 3: 批改结果 / Step 3: Grading Results

![image alt](https://github.com/pineapple-666/EchoWise-web/blob/6f97db7cdf06d39aef74350522c3b09c71d1da2e/screenshots/Weixin%20Image_20260228094728_20_33.png)

点击"开始批改"，系统自动对比答案，显示正确率和每个单词的对错。  
Click "Start Grading" to auto-compare answers and display accuracy with correct/wrong marks.

---

## 🚀 快速开始 / Quick Start

### 环境要求 / Requirements

- Python 3.8+
- pip

### 安装步骤 / Installation

```bash
# 1. 克隆项目 / Clone project
git clone <your-repo-url>
cd echowise-web

# 2. 创建虚拟环境 / Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. 安装依赖 / Install dependencies
pip install -r requirements.txt

# 4. 启动服务 / Start server
python3 server/server.py

# 5. 访问应用 / Access application
# 浏览器打开 / Open browser: http://localhost:5000
```

---

## 📁 项目结构 / Project Structure

```
echowise-web/
├── index.html              # 主页面 / Main page
├── css/
│   └── style.css           # 样式文件 / Stylesheet
├── js/
│   └── app.js              # 前端逻辑 / Frontend logic
├── server/
│   └── server.py           # Python 后端（含 OCR 集成）/ Backend with OCR
├── screenshots/            # 使用截图 / Screenshots
├── start.sh                # 启动脚本 / Startup script
├── requirements.txt        # Python 依赖 / Dependencies
├── .gitignore             # Git 忽略文件 / Git ignore rules
└── README.md              # 项目说明 / Documentation
```

---

## 🔑 API 配置 / API Configuration

项目使用百度 OCR API，需要在 `server/server.py` 中配置环境变量。  
This project uses Baidu OCR API. Configure environment variables in `server/server.py`.

### 获取百度 OCR API Key / Get Baidu OCR API Key

1. 访问 [百度智能云](https://cloud.baidu.com/) / Visit Baidu AI Cloud
2. 注册并登录 / Register and login
3. 开通"文字识别 OCR"服务 / Enable "OCR" service
4. 创建应用获取 API Key 和 Secret Key / Create app to get API Key and Secret Key

**免费额度** / **Free Quota**: 500 次/天 / 500 requests per day（手写文字识别 / Handwriting recognition）

### 配置环境变量 / Configure Environment Variables

```bash
# 复制模板文件 / Copy template file
cp .env.example .env

# 编辑 .env 文件，填入你的 API Key / Edit .env file with your API Key
```

---

## 💻 使用流程 / How to Use

### 1️⃣ 上传听写图片 / Upload Dictation Photo
- 点击上传区域 / Click upload area
- 拍照或从相册选择图片 / Take photo or select from album
- 支持 JPG、PNG 格式 / Support JPG, PNG formats

### 2️⃣ OCR 识别 / OCR Recognition
- 点击"开始识别" / Click "Start Recognition"
- 等待 2-5 秒 / Wait 2-5 seconds
- 查看识别结果 / View recognition results

### 3️⃣ 编辑修正（可选）/ Edit (Optional)
- 检查识别文字 / Check recognized text
- 手动修正识别错误 / Manually correct errors

### 4️⃣ 开始批改 / Start Grading
- 点击"开始批改" / Click "Start Grading"
- 查看正确率 / View accuracy rate
- 逐个单词查看对错 / Check each word's correctness

### 5️⃣ 重新开始 / Start Over
- 点击"重新开始" / Click "Start Over"
- 上传下一张听写图片 / Upload next dictation photo

---

## 🛠️ 技术栈 / Tech Stack

| 层级 / Layer | 技术 / Technology |
|--------------|-------------------|
| **前端** / Frontend | HTML5 + CSS3 + JavaScript |
| **后端** / Backend | Python 3 + Flask |
| **OCR** / OCR | 百度智能云 API / Baidu AI Cloud |
| **部署** / Deployment | 本地服务器 / 云服务器 Local Server / Cloud Server |

---

## 📝 API 端点 / API Endpoints

| 端点 / Endpoint | 方法 / Method | 说明 / Description |
|-----------------|---------------|-------------------|
| `/` | GET | 主页面 / Home page |
| `/api/ocr` | POST | OCR 识别接口 / OCR recognition |
| `/api/vocab-check` | POST | 词汇批改接口 / Vocabulary checking |

### OCR 接口示例 / OCR API Example

```bash
curl -X POST http://localhost:5000/api/ocr \
  -F "image=@test_image.jpg"
```

**响应** / **Response**:
```json
{
  "success": true,
  "recognized_text": "finish v.\nphysical exercise n.",
  "raw_result": {...}
}
```

---

## 🔧 开发计划 / Roadmap

- [ ] 完整词库集成（四级/六级/雅思/托福）/ Full vocabulary database (CET-4/6, IELTS, TOEFL)
- [ ] 用户账户系统 / User account system
- [ ] 听写历史记录保存 / Dictation history tracking
- [ ] 批量图片处理 / Batch image processing
- [ ] 微信小程序版本 / WeChat Mini Program version

---

## 📄 许可证 / License

MIT License

---

## 👤 作者 / Author

**pineapple-666 and her clawbot agent**

---

## 🙏 致谢 / Acknowledgments

- [百度智能云 OCR](https://cloud.baidu.com/product/ocr)
- [Flask](https://flask.palletsprojects.com/)

---

**🎉 Happy Coding!**
