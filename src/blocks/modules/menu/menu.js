const page = document.querySelector(".page");
const menu = page.querySelector(".menu");
const clickForOverlay = page.querySelector(".overlay");
const buttonOpenMenu = page.querySelector(".header__burger");
const buttonCloseMenu = page.querySelector(".btn_menu_close");

function closeMenuByEsc(event) {
    if (event.key === "Escape") {
        menu.querySelector(".menu_opened");
        closeMenu();
    }
}

function openMenu() {
    menu.classList.add("menu_opened");
    document.addEventListener("keydown", closeMenuByEsc);
}

function closeMenu() {
    menu.classList.remove("menu_opened");
    document.removeEventListener("keydown", closeMenuByEsc);
}

buttonOpenMenu.addEventListener("click", openMenu);

buttonCloseMenu.addEventListener("click", closeMenu);

clickForOverlay.addEventListener("click", closeMenu);