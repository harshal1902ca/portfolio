(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');

  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    root.setAttribute('data-theme', 'dark');
    label.textContent = 'Dark';
  }

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    label.textContent = next === 'dark' ? 'Dark' : 'Light';
    localStorage.setItem('theme', next);
  });
})();
