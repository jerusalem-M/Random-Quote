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
const tipEl = document.getElementById('tip');
tipEl.textContent = localStorage.getItem('lastTip') || tipEl.textContent;

document.getElementById('new-tip').onclick = () => {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  tipEl.textContent = tip;
  localStorage.setItem('lastTip', tip);
};
const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',
    document.body.classList.contains('dark') ? 'dark' : 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
