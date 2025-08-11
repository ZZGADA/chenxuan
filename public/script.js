// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('💖 浪漫爱心动画页面已加载');
    
    // 创建更多动态星星
    createDynamicStars();
    
    // 创建更多粒子效果
    createMoreParticles();
    
    // 添加点击爱心效果
    addHeartClickEffect();
    
    // 添加鼠标跟随效果
    addMouseFollowEffect();
});

// 创建动态星星
function createDynamicStars() {
    const starsContainer = document.querySelector('.stars-container');
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'dynamic-star';
        star.innerHTML = '✨';
        star.style.position = 'absolute';
        star.style.color = 'rgba(255, 255, 255, 0.8)';
        star.style.fontSize = Math.random() * 15 + 10 + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starsContainer.appendChild(star);
    }
}

// 创建更多粒子效果
function createMoreParticles() {
    const heartContainer = document.querySelector('.heart-container');
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'extra-particle';
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `extra-particle-float ${Math.random() * 3 + 2}s ease-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // 随机位置
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 80;
        particle.style.left = Math.cos(angle) * radius + 'px';
        particle.style.top = Math.sin(angle) * radius + 'px';
        
        heartContainer.appendChild(particle);
    }
}

// 添加点击爱心效果
function addHeartClickEffect() {
    const heart = document.querySelector('.heart');
    
    heart.addEventListener('click', function(e) {
        // 创建爆炸效果
        createHeartExplosion(e.target);
        
        // 播放音效（如果有的话）
        playHeartSound();
        
        // 临时增强跳动效果
        heart.style.animation = 'heartbeat 0.3s ease-in-out 3';
        setTimeout(() => {
            heart.style.animation = 'heartbeat 1.2s ease-in-out infinite';
        }, 900);
    });
}

// 创建爱心爆炸效果
function createHeartExplosion(target) {
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        heart.style.animation = `explosion-heart 2s ease-out forwards`;
        heart.style.transform = `translate(${vx}px, ${vy}px) scale(0)`;
        heart.style.opacity = '0';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 2000);
    }
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 创建跟随光标的小爱心
        if (Math.random() < 0.1) { // 10% 的概率创建
            createFollowHeart(mouseX, mouseY);
        }
    });
}

// 创建跟随光标的小爱心
function createFollowHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = ['💕', '💖', '💗', '💝'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.animation = 'fade-out-up 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (document.body.contains(heart)) {
            document.body.removeChild(heart);
        }
    }, 2000);
}

// 播放心跳音效（模拟）
function playHeartSound() {
    // 使用Web Audio API创建简单的心跳音效
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const AudioContextClass = AudioContext || webkitAudioContext;
        const audioContext = new AudioContextClass();
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// 音乐控制功能
function toggleMusic() {
    const btn = document.getElementById('musicBtn');
    // 这里可以添加背景音乐控制逻辑
    console.log('🎵 音乐控制被点击');
    btn.innerHTML = btn.innerHTML === '🎵' ? '🔇' : '🎵';
}

// 添加额外的CSS动画定义
const additionalStyles = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes extra-particle-float {
        0% {
            transform: translateY(0px) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-60px) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-120px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes explosion-heart {
        0% {
            transform: translate(0px, 0px) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(var(--vx, 0px), var(--vy, 0px)) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translate(var(--vx, 0px), calc(var(--vy, 0px) + 100px)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes fade-out-up {
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px);
            opacity: 0;
        }
    }
`;

// 将额外样式添加到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('💤 页面隐藏，动画可能会暂停');
    } else {
        console.log('👀 页面可见，动画继续运行');
    }
});

// 禁用右键菜单以获得更沉浸的体验
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case ' ': // 空格键
            e.preventDefault();
            document.querySelector('.heart').click();
            break;
        case 'r': // R键重置动画
        case 'R':
            location.reload();
            break;
    }
});

console.log('✨ 爱心动画脚本初始化完成！');
console.log('💡 提示：点击爱心有惊喜，按空格键也可以！'); 