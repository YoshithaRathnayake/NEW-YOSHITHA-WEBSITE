// Pre-Loader

var preloader = document.querySelector(".main");

window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear");
}