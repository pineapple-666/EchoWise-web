// EchoWise Web 应用 - 主逻辑

let selectedImage = null;

// DOM 元素
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const ocrSection = document.getElementById('ocrSection');
const recognizedText = document.getElementById('recognizedText');
const reRecognizeBtn = document.getElementById('reRecognizeBtn');
const checkBtn = document.getElementById('checkBtn');
const resultSection = document.getElementById('resultSection');
const accuracyCircle = document.getElementById('accuracyCircle');
const accuracyValue = document.getElementById('accuracyValue');
const wordResults = document.getElementById('wordResults');
const resetBtn = document.getElementById('resetBtn');

// 图片选择处理
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        selectedImage = file;
        
        // 显示预览
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            document.querySelector('.upload-placeholder').style.display = 'none';
            uploadBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }
});

// 上传并识别
uploadBtn.addEventListener('click', async function() {
    if (!selectedImage) {
        alert('请先选择图片');
        return;
    }
    
    console.log('📤 开始上传图片...');
    uploadBtn.textContent = '识别中...';
    uploadBtn.disabled = true;
    
    try {
        const formData = new FormData();
        formData.append('image', selectedImage);
        
        console.log('🔄 发送请求到 /api/ocr');
        const response = await fetch('/api/ocr', {
            method: 'POST',
            body: formData
        });
        
        console.log('📥 响应状态:', response.status);
        const data = await response.json();
        console.log('📦 响应数据:', data);
        
        if (data.success) {
            console.log('✅ 识别成功，文字:', data.recognized_text);
            recognizedText.value = data.recognized_text || '未识别到文字';
            ocrSection.style.display = 'block';
            ocrSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('❌ 识别失败:', data.error);
            alert('识别失败：' + (data.error || '未知错误'));
        }
    } catch (error) {
        console.error('💥 请求异常:', error);
        alert('请求失败：' + error.message);
    } finally {
        uploadBtn.textContent = '开始识别';
        uploadBtn.disabled = false;
    }
});

// 重新识别
reRecognizeBtn.addEventListener('click', function() {
    ocrSection.style.display = 'none';
    uploadBtn.click();
});

// 开始批改
checkBtn.addEventListener('click', function() {
    const text = recognizedText.value.trim();
    if (!text) {
        alert('请先输入或识别文字');
        return;
    }
    
    // 简单分词处理（按行分割）
    const words = text.split('\n').filter(line => line.trim());
    
    // 模拟批改结果（实际应该与预期单词对比）
    displayResults(words);
});

// 显示批改结果
function displayResults(words) {
    wordResults.innerHTML = '';
    
    let correctCount = 0;
    
    words.forEach((word, index) => {
        // 模拟正确率（实际应该对比词库）
        const isCorrect = Math.random() > 0.3; // 临时模拟
        if (isCorrect) correctCount++;
        
        const wordItem = document.createElement('div');
        wordItem.className = `word-item ${isCorrect ? 'correct' : 'incorrect'}`;
        wordItem.innerHTML = `
            <span class="word-label">${index + 1}. ${word.trim()}</span>
            <span class="word-status">${isCorrect ? '✅' : '❌'}</span>
        `;
        wordResults.appendChild(wordItem);
    });
    
    // 计算正确率
    const accuracy = Math.round((correctCount / words.length) * 100);
    accuracyValue.textContent = `${accuracy}%`;
    
    // 设置圆环颜色
    accuracyCircle.className = 'accuracy-circle';
    if (accuracy >= 80) {
        accuracyCircle.classList.add('high');
    } else if (accuracy >= 60) {
        accuracyCircle.classList.add('medium');
    } else {
        accuracyCircle.classList.add('low');
    }
    
    // 显示结果区域
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 重新开始
resetBtn.addEventListener('click', function() {
    // 重置所有状态
    selectedImage = null;
    imageInput.value = '';
    imagePreview.style.display = 'none';
    document.querySelector('.upload-placeholder').style.display = 'block';
    uploadBtn.disabled = true;
    recognizedText.value = '';
    ocrSection.style.display = 'none';
    resultSection.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 页面加载完成
console.log('🎯 EchoWise Web App loaded successfully!');
