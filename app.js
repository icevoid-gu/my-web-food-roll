// 美食数据列表
const foodList = [
  '汉堡', '披萨', '日料寿司', '拉面', '烤肉',
  '火锅', '麻辣烫', '饺子', '炒饭', '炒面',
  '烤肉拌饭', '凉皮', '肉夹馍', '煲仔饭', '螺蛳粉',
  '米线', '酸菜鱼', '川菜', '包子', '东北菜',
  '新疆菜', '粤菜', '烤鸭', '炸鸡', '烧烤',
  '烤鸭', '生煎', '江浙菜', '西餐', '减脂餐'
];

// DOM元素引用
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const card = document.querySelector('.card');
const cardFront = document.querySelector('.card-front');

// 动画结束处理函数
function handleAnimationEnd() {
  card.removeEventListener('transitionend', handleAnimationEnd);
}

// 开始按钮点击事件
startBtn.addEventListener('click', () => {
  // 随机选择美食
  const randomIndex = Math.floor(Math.random() * foodList.length);
  cardFront.textContent = foodList[randomIndex];
  
  // 触发翻转动画
  card.classList.add('flipped');
  startBtn.disabled = true;
  
  // 监听动画结束
  card.addEventListener('transitionend', handleAnimationEnd, { once: true });
});

// 重置按钮点击事件
resetBtn.addEventListener('click', () => {
  // 移除翻转状态
  card.classList.remove('flipped');

  // 立即禁用按钮防止重复点击
  startBtn.disabled = false;
  resetBtn.disabled = false;

  // 动画结束后恢复按钮状态
  card.addEventListener('transitionend', () => {
    startBtn.disabled = card.classList.contains('flipped');
    // 移除清空卡片文字的逻辑
    // cardFront.textContent = '';
  }, { once: true });
});