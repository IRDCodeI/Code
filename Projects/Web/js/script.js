const $btnMenu = document.getElementById("btn-menu");
const $menu = document.getElementById("menu");

$btnMenu.addEventListener("click", () => {
    console.log("Click en el Menu")

    $menu.style.display = "block";
});

$menu.addEventListener("click", () => {
    $menu.style.display = "none";
});

$btnMenu.style.cursor = "pointer";

