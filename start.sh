#!/bin/bash

# EchoWise Web 应用原型 - 启动脚本

echo "🚀 EchoWise Web 应用原型启动中..."

# 检查 Python
if ! command -v python3 &> /dev/null; then
    echo "❌ 未找到 Python3，请先安装 Python3"
    exit 1
fi

# 进入项目目录
cd "$(dirname "$0")"

# 创建虚拟环境（如果不存在）
if [ ! -d "venv" ]; then
    echo "📦 创建虚拟环境..."
    python3 -m venv venv
fi

# 激活虚拟环境
source venv/bin/activate

# 安装依赖
echo "📦 安装依赖..."
pip install flask requests -q

# 启动服务器
echo "✅ 启动服务器..."
echo "📍 访问地址：http://localhost:5000"
echo "📱 手机访问：http://[你的 IP]:5000"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""
python3 server/server.py
