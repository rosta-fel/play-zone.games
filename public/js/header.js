const navbarItems = document.getElementById("navbar-items");
const navbarToggle = document.getElementById("navbar-toggle");

navbarToggle.addEventListener("click", function () {
    navbarToggle.classList.toggle("on");
    navbarItems.classList.toggle("hidden")
});