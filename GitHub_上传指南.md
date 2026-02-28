# GitHub 网页上传指南 📦

> 无需使用 Git 命令行，通过浏览器直接上传文件

---

## 📋 上传前准备

### 需要上传的文件清单

```
echowise-web/
├── index.html              ✅ 上传
├── css/
│   └── style.css           ✅ 上传
├── js/
│   └── app.js              ✅ 上传
├── server/
│   └── server.py           ✅ 上传（已隐藏 API Key）
├── screenshots/
│   ├── step1-upload.png    ✅ 上传（你的截图）
│   ├── step2-ocr.png       ✅ 上传
│   └── step3-result.png    ✅ 上传
├── start.sh                ✅ 上传
├── README.md               ✅ 上传
├── requirements.txt        ✅ 上传
├── .gitignore              ✅ 上传
├── .env.example            ✅ 上传
└── .env                    ❌ 不要上传！（包含密码）
```

---

## 🚀 详细步骤

### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com
2. 登录你的账号
3. 点击右上角 **+** → **New repository**
4. 填写信息：
   - **Repository name**: `echowise-web`
   - **Description**: `EchoWise - 英语听写智能批改工具`
   - **Public** ✅（公开，让别人看到）
   - **Initialize this repository with a README**: ❌ 不要勾选
5. 点击 **Create repository**

---

### 步骤 2: 上传文件

#### 方法 A: 拖拽上传（推荐）⭐

1. 在 GitHub 仓库页面，点击 **uploading an existing file**
2. 打开你的文件文件夹：
   ```
   /home/clawbot/.openclaw/workspace/echowise-web/
   ```
3. **选中所有文件**（除了 `.env`）
4. 拖拽到 GitHub 上传区域
5. 等待上传完成
6. 填写提交信息：
   - **Commit message**: `Initial commit: EchoWise Web App v1.0`
7. 点击 **Commit changes**

#### 方法 B: 逐个上传

1. 点击 **uploading an existing file**
2. 点击 **choose your files**
3. 选择一个文件
4. 点击 **Commit changes**
5. 重复以上步骤上传其他文件

---

### 步骤 3: 上传截图（重要！）

1. 在 GitHub 仓库页面，点击 **Add file** → **Upload files**
2. 创建文件夹：在文件名中输入 `screenshots/step1-upload.png`
3. 拖拽你的 3 张截图：
   - `step1-upload.png`
   - `step2-ocr.png`
   - `step3-result.png`
4. 点击 **Commit changes**

---

### 步骤 4: 检查 README 显示

1. 回到仓库主页
2. 向下滚动查看 README
3. 确认截图正常显示
4. 检查格式是否正确

---

## ⚠️ 重要提醒

### ❌ 不要上传的文件

| 文件 | 原因 |
|------|------|
| `.env` | 包含百度 OCR 密码 |
| `venv/` | 虚拟环境（太大，每台机器重新生成） |
| `__pycache__/` | Python 缓存文件 |

### ✅ 必须上传的文件

| 文件 | 原因 |
|------|------|
| `.env.example` | 给别人参考的模板 |
| `requirements.txt` | Python 依赖列表 |
| `.gitignore` | Git 忽略规则 |

---

## 🔧 本地测试（上传前）

上传前确保代码能正常运行：

```bash
# 1. 安装新依赖
cd /home/clawbot/.openclaw/workspace/echowise-web
pip install python-dotenv

# 2. 启动服务
python3 server/server.py

# 3. 访问测试
# 浏览器打开：http://localhost:5000
```

---

## 📝 上传后的检查清单

- [ ] README 显示正常
- [ ] 截图正常显示
- [ ] 代码文件完整
- [ ] `.env` 没有上传
- [ ] 仓库是 Public（公开）

---

## 🎉 完成！

上传完成后，你的 GitHub 仓库链接：
```
https://github.com/YOUR_USERNAME/echowise-web
```

可以分享给别人展示了！🚀

---

## 💡 常见问题

### Q: 上传后截图不显示？
A: 检查文件名是否正确，路径是否为 `screenshots/xxx.png`

### Q: README 格式乱了？
A: 在 GitHub 上点击 README → 编辑 → 预览 → 保存

### Q: 不小心上传了 `.env`？
A: 立即删除该文件，并重新生成百度 OCR 的 API Key

---

**祝你上传顺利！** 🎊
