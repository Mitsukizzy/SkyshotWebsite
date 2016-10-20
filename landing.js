var update = true;
var layers = document.getElementsByClassName("splashart-layer");

var navbar = document.getElementById("navbar-main");
var logo = document.getElementById("navbar-logo");
var navbarItems = document.getElementsByClassName("pure-menu-item");
var navbarContainer = document.getElementsByClassName("pure-menu-horizontal")[0];

/*function startParallax() {
    setInterval(unlockParallax, 8);
}

function unlockParallax() {
    update = true;
}*/

function parallax() {
    if (window.innerWidth <= 800 && window.innerHeight <= 600)
        return;
    //if (update) {
        for (var i = 0; i < layers.length; i++) {
            var parallaxOffset = document.body.scrollTop / layers[i].dataset.speed;
            layers[i].style.transform = "translateY(" + parallaxOffset + "px)";
        }
        update = false;
    //}
}

function fixNavbar() {
    if (!navbar)
        navbar = document.getElementById("navbar-main");
    if (!logo)
        logo = document.getElementById("navbar-logo");
    if (!navbarItems)
        navbarItems = document.getElementsByClassName("pure-menu-item");
    if (!navbarContainer)
        navbarContainer = document.getElementsByClassName("pure-menu-horizontal")[0];

    if (document.body.scrollTop > document.body.clientHeight) {
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "#222";
        logo.style.opacity = "1";
        logo.style.width = "25%";
        for(var i=1; i< navbarItems.length; i++) {
            navbarItems[i].style.width = "25%";
        }
        navbarContainer.style.maxWidth = "1000px";
    }
    else {
        navbar.style.position = "absolute";
        navbar.style.top = "100vh";
        navbar.style.backgroundColor = "#000";
        logo.style.opacity = "0";
        logo.style.width = "0%";
        for (var i = 1; i < navbarItems.length; i++) {
            navbarItems[i].style.width = "33%";
        }
        navbarContainer.style.maxWidth = "750px";
    }
}