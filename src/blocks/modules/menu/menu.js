const body = document.querySelector('.root');
const page = document.querySelector('.page');
const menu = page.querySelector('.menu');
const clickForOverlay = page.querySelector('.overlay');
const buttonOpenMenu = page.querySelector('.header__burger');
const buttonCloseMenu = menu.querySelector('.btn_menu_close');
const anchorMenu = menu.querySelectorAll('.menu__link');

function openMenu() {
  menu.classList.add('menu_opened');
  body.classList.add('root__modal-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  body.classList.remove('root__modal-open');
  document.removeEventListener('keydown', closeMenuByEsc);
}

function closeMenuByEsc(event) {
  if (event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}

buttonOpenMenu.addEventListener('click', openMenu);

buttonCloseMenu.addEventListener('click', closeMenu);

clickForOverlay.addEventListener('click', closeMenu);

anchorMenu.forEach(link => link.addEventListener('click', () => closeMenu()));
