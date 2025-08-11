# 💖 浪漫爱心跳动动画

一个美丽的爱心跳动动画页面，包含粒子效果、星空背景、流星和小王子元素。

## ✨ 功能特色

- 💗 红色爱心跳动动画
- ✨ 粒子效果和星空背景
- 🌟 流星划过效果
- 👤 可爱的小王子角色
- 💕 浮动的小爱心
- 🎵 交互式音效
- 📱 响应式设计

## 🚀 快速开始

### 本地运行

```bash
# 安装依赖
npm install

# 启动服务器
npm start
```

访问 http://localhost:3000 即可查看动画效果。

### Docker 部署

```bash
# 构建 Docker 镜像
docker build -t heart-animation .

# 运行容器
docker run -p 3000:3000 heart-animation
```

## 🎮 交互功能

- **点击爱心**：触发爆炸效果
- **鼠标移动**：跟随光标的小爱心
- **空格键**：触发爱心效果
- **R键**：重新加载页面
- **🎵按钮**：音乐控制

## 🛠️ 技术栈

- Node.js v18.20.5
- Express.js
- HTML5 & CSS3
- JavaScript (ES6+)
- Docker

## 📝 项目结构

```
heart-animation/
├── public/
│   ├── index.html      # 主页面
│   ├── style.css       # 样式文件
│   └── script.js       # JavaScript 脚本
├── server.js           # Express 服务器
├── package.json        # 项目配置
├── Dockerfile          # Docker 配置
└── README.md          # 项目说明
```

## 🎨 动画效果

1. **爱心跳动**：使用CSS transform和filter创建心跳效果
2. **粒子系统**：周围飘散的彩色粒子
3. **星空背景**：多层星星闪烁动画
4. **流星效果**：定时划过的流星
5. **小王子**：浮动的角色动画
6. **渐变文字**：彩色渐变的标题文字

## 💡 自定义

你可以通过修改以下文件来自定义动画：

- `public/style.css`：调整颜色、大小、动画速度
- `public/script.js`：添加新的交互效果
- `public/index.html`：修改页面结构

## 🌟 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License 