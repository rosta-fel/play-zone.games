window.onload = function () {
    // Hide the loading-info div
    document.getElementById("loading-info").classList.add("hidden");

    // Show the loaded-content main section
    let elements = document.getElementsByClassName("loaded-content");

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
};
