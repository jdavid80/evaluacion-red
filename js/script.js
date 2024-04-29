let iconMenu = document.getElementById("iconMenu");
let mainNav = document.getElementById("mainNav");

iconMenu.addEventListener("click", function() {
    if (mainNav.classList.contains("nav-visible")) {
        mainNav.classList.remove("nav-visible");
    }
    else {
        mainNav.classList.add("nav-visible");
    }
    
});