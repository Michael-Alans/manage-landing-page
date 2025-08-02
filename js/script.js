const hamburgerToggle = document.getElementById("HamburgerToggle");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        hamburgerToggle.src = "img/icon-hamburger.svg";
    } else {
        hamburgerToggle.src = "img/icon-close.svg";
    }
};

hamburgerToggle.addEventListener("click", toggleMenu);