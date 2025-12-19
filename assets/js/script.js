const dialogMenu = document.querySelector('.dialog-menu');
const dialogMenuClose = document.querySelector('.dialog-menu__close button');
const dialogMenuOpen = document.querySelector('.header__menu-button');

dialogMenuOpen.addEventListener('click', () => {
  dialogMenu.showModal();
  dialogMenuOpen.setAttribute('aria-expanded', 'true');
});

dialogMenuClose.addEventListener('click', () => {
  dialogMenu.close();
  dialogMenuOpen.setAttribute('aria-expanded', 'false');
});

const windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
  if (window.innerWidth !== windowWidth) {
    if (dialogMenu.open) {
      dialogMenu.close();
      dialogMenuOpen.setAttribute('aria-expanded', 'false');
    }
  }
});
