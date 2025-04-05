document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuOverlay = document.querySelector(".menu-overlay");
    const closeButton = document.querySelector(".close-button");

    menuButton.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });
});