# EchoWise - 英语听写智能批改工具 🎯

> 通过 OCR 技术自动识别学生听写作业并批改正确率

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📖 产品简介

**EchoWise** 是一款专为英语教学设计智能批改工具，帮助学生和老师快速批改听写作业。

### 核心功能

- 📸 **拍照识别**: 支持拍照或上传听写图片，自动识别手写文字
- 🔍 **OCR 识别**: 集成百度 OCR 手写文字识别 API，准确率高达 95%+
- ✅ **智能批改**: 自动对比标准答案，计算正确率
- 📊 **结果展示**: 直观显示每个单词的对错，绿色✅正确，红色❌错误
- 📱 **移动友好**: 响应式设计，支持手机、平板、电脑全平台

### 适用场景

- 🏫 英语培训机构听写批改
- 👨‍👩‍👧‍👦 家长辅导孩子听写
- 📚 学生自测练习
- 👩‍🏫 教师批量批改作业

---

## 🎯 产品名称

**EchoWise** = Echo (回声/跟读) + Wise (智慧)

寓意：通过智能技术，让每一次听写练习都得到即时反馈，帮助学生不断进步。

---

## 🖼️ 使用截图

### 步骤 1: 上传听写图片

![上传听写图片](screenshots/step1-upload.png)

点击上传区域，拍照或选择听写作业图片。支持 JPG、PNG 格式。

### 步骤 2: OCR 识别结果

![OCR 识别](screenshots/step2-ocr.png)

系统自动识别手写文字，显示在文本框中，可手动编辑修正。

### 步骤 3: 批改结果

![批改结果](screenshots/step3-result.png)

点击"开始批改"，系统自动对比答案，显示正确率和每个单词的对错。

---

## 🚀 快速开始

### 环境要求
- Python 3.8+
- pip

### 安装步骤

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd echowise-web

# 2. 创建虚拟环境（推荐）
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. 安装依赖
pip install -r requirements.txt

# 4. 启动服务
python3 server/server.py

# 5. 访问应用
# 浏览器打开：http://localhost:5000
```

---

## 📁 项目结构

```
echowise-web/
├── index.html              # 主页面
├── css/
│   └── style.css           # 样式文件
├── js/
│   └── app.js              # 前端逻辑
├── server/
│   └── server.py           # Python 后端（含 OCR 集成）
├── screenshots/            # 使用截图
├── start.sh                # 启动脚本
├── requirements.txt        # Python 依赖
├── .gitignore             # Git 忽略文件
└── README.md              # 项目说明
```

---

## 🔑 API 配置

项目使用百度 OCR API，需要在 `server/server.py` 中配置：

```python
API_KEY = 'your_api_key'
SECRET_KEY = 'your_secret_key'
```

### 获取百度 OCR API Key

1. 访问 [百度智能云](https://cloud.baidu.com/)
2. 注册并登录
3. 开通"文字识别 OCR"服务
4. 创建应用获取 API Key 和 Secret Key

**免费额度**: 500 次/天（手写文字识别）

---

## 💻 使用流程

### 1️⃣ 上传听写图片
- 点击上传区域
- 拍照或从相册选择图片
- 支持 JPG、PNG 格式

### 2️⃣ OCR 识别
- 点击"开始识别"
- 等待 2-5 秒
- 查看识别结果

### 3️⃣ 编辑修正（可选）
- 检查识别文字
- 手动修正识别错误

### 4️⃣ 开始批改
- 点击"开始批改"
- 查看正确率
- 逐个单词查看对错

### 5️⃣ 重新开始
- 点击"重新开始"
- 上传下一张听写图片

---

## 🛠️ 技术栈

| 层级 | 技术 |
|------|------|
| **前端** | HTML5 + CSS3 + JavaScript |
| **后端** | Python 3 + Flask |
| **OCR** | 百度智能云 API |
| **部署** | 本地服务器 / 云服务器 |

---

## 📝 API 端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `/` | GET | 主页面 |
| `/api/ocr` | POST | OCR 识别接口 |
| `/api/vocab-check` | POST | 词汇批改接口 |

### OCR 接口示例

```bash
curl -X POST http://localhost:5000/api/ocr \
  -F "image=@test_image.jpg"
```

**响应**:
```json
{
  "success": true,
  "recognized_text": "finish v.\nphysical exercise n.",
  "raw_result": {...}
}
```

---

## 🔧 开发计划

- [ ] 完整词库集成（四级/六级/雅思/托福）
- [ ] 用户账户系统
- [ ] 听写历史记录保存
- [ ] 批量图片处理
- [ ] 微信小程序版本

---

## 📄 许可证

MIT License

---

## 👤 作者

**EchoWise Team**

---

## 🙏 致谢

- [百度智能云 OCR](https://cloud.baidu.com/product/ocr)
- [Flask](https://flask.palletsprojects.com/)

---

**🎉 Happy Coding!**
