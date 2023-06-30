//click open menu button

const menuBtn = document.getElementById("menuBtn");
const menuLogo = document.getElementById("menuLogo");
const navBar = document.getElementById("navBar");
const menuIcon = document.getElementById("menuIcon");

const toggleMenu = () => {
    menuLogo.classList.toggle("active");
    menuBtn.classList.toggle("invert");
    navBar.classList.toggle("open");
}

menuBtn.addEventListener("click", () => {
    toggleMenu();
    if (menuLogo.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else if (!menuLogo.classList.contains("active")) {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
})