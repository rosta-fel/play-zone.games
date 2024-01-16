const navbarItems = document.getElementById("navbar-items");
const navbarToggle = document.getElementById("navbar-toggle");
const formLogout = document.getElementById('logout-form')
const logoutLink = document.getElementById('logout-link');

navbarToggle.addEventListener("click", function () {
    navbarToggle.classList.toggle("on");
    navbarItems.classList.toggle("hidden")
});

logoutLink.addEventListener("click", function () {
   formLogout.submit();
});