/* EcoVida — comportamentos compartilhados entre as páginas */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // Preferências de acessibilidade salvas (tamanho da fonte / reduzir animações)
  try {
    const fs = localStorage.getItem('ecovida-fs');
    if (fs) root.setAttribute('data-fs', fs);
    if (localStorage.getItem('ecovida-motion') === 'off') root.classList.add('no-motion');
  } catch (e) { /* armazenamento indisponível */ }

  // Menu mobile
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    const icon = btn.querySelector('i');
    const setOpen = (open) => {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      icon.classList.toggle('ph-x', open);
      icon.classList.toggle('ph-list', !open);
    };
    btn.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  // Menu "Mais" (desktop)
  const moreBtn = document.getElementById('more-btn');
  const moreMenu = document.getElementById('more-menu');
  if (moreBtn && moreMenu) {
    const toggle = (open) => {
      moreMenu.classList.toggle('hidden', !open);
      moreBtn.setAttribute('aria-expanded', String(open));
    };
    moreBtn.addEventListener('click', () => toggle(moreMenu.classList.contains('hidden')));
    document.addEventListener('click', e => { if (!document.getElementById('more-wrap').contains(e.target)) toggle(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { toggle(false); moreBtn.focus(); } });
  }

  // Ano no rodapé
  const y = document.getElementById('current-year');
  if (y) y.textContent = new Date().getFullYear();
});
