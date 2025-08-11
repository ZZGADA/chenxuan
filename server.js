const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// 提供静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 主路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`❤️ 爱心动画服务器已启动，访问地址: http://${HOST}:${PORT}`);
    console.log(`🚀 服务器运行在 ${HOST}:${PORT}`);
    console.log(`🌐 可通过以下地址访问:`);
    console.log(`   - http://localhost:${PORT}`);
    console.log(`   - http://127.0.0.1:${PORT}`);
    console.log(`   - http://[你的IP地址]:${PORT}`);
}); 