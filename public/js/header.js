const navbarItems = document.getElementById("navbar-items");
const navbarToggle = document.getElementById("navbar-toggle");
const formLogout = document.getElementsByClassName('logout-form')
const logoutLink = document.getElementsByClassName('logout-link');

navbarToggle.addEventListener("click", function () {
    navbarToggle.classList.toggle("on");
    navbarItems.classList.toggle("hidden")
});

for (let i = 0; i < logoutLink.length; i++) {
    logoutLink[i].addEventListener("click", function () {
        formLogout[i].submit();
    });
}