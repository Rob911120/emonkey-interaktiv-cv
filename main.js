(() => {
  const overlay = document.getElementById('overlay');
  const btn = document.getElementById('analyzeBtn');
  let remaining = 100;
  const unlockThreshold = 80;

  const reduce = (amount = 1) => {
    if (remaining <= 0) return;
    remaining = Math.max(0, remaining - amount);
    overlay.style.width = remaining + '%';

    if (remaining <= unlockThreshold && !btn.classList.contains('unlocked')) {
      btn.classList.add('unlocked');
      btn.style.cursor = 'pointer';
      btn.removeAttribute('disabled');
    }
  };

  ['mousemove', 'scroll'].forEach(evt =>
    window.addEventListener(evt, () => reduce(0.2), { passive: true })
  );

  // Toggle sections
  const icons = document.querySelectorAll('.icon');
  const sections = document.querySelectorAll('.cv-section');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      const id = icon.dataset.section;
      icons.forEach(i => i.classList.toggle('active', i === icon));
      sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
      reduce(5);
    });
  });

  // Analyze button
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('unlocked')) return;
    btn.disabled = true;
    btn.textContent = 'Analysis generating…';

    fetch('https://example.com/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'analyze' })
    }).catch(() => {});
  });
})();
