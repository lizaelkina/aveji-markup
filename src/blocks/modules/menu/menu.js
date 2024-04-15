const page = document.querySelector(".page");
const menu = page.querySelector(".menu");
const buttonOpenMenu = page.querySelector(".header__burger");
const buttonCloseMenu = page.querySelector(".btn_menu_close");

function openMenu() {
    menu.classList.add("menu_opened");
}

function closeMenu() {
    menu.classList.remove("menu_opened");
}

buttonOpenMenu.addEventListener("click", openMenu);

buttonCloseMenu.addEventListener("click", closeMenu);