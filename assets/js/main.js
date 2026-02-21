(function () {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!open));
      menu.style.display = open ? 'none' : 'block';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faqItem .faqQ').forEach((q) => {
    q.addEventListener('click', () => {
      const item = q.closest('.faqItem');
      item.classList.toggle('open');
    });
  });

  // Simple "copy" helper for bank/refs if you add buttons later
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = 'Copy'), 1200);
      } catch (e) {
        // no-op
      }
    });
  });
})();
