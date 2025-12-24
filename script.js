const tips = [
  "Take short breaks every hour.",
  "Practice coding daily.",
  "Review notes after studying.",
  "Try teaching what you learn.",
  "Stay hydrated and rest well."
];

document.getElementById('new-tip').addEventListener('click', () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('tip').textContent = randomTip;
});
