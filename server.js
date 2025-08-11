const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 提供静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 主路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`❤️ 爱心动画服务器已启动，访问地址: http://localhost:${PORT}`);
    console.log(`🚀 服务器运行在端口 ${PORT}`);
}); 