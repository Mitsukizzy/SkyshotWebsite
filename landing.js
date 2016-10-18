var update = true;
var layers = document.getElementsByClassName("splashart-layer");

var navbar = document.getElementById("navbar-main");
var logo = document.getElementById("navbar-logo");

/*function startParallax() {
    setInterval(unlockParallax, 8);
}

function unlockParallax() {
    update = true;
}*/

function parallax() {
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

    if (document.body.scrollTop > document.body.clientHeight) {
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "#222";
        document.getElementById("navbar-logo");
        logo.style.opacity = "1";
        logo.style.minWidth = "150px";
        logo.style.marginLeft = "50px";
        logo.style.marginRight = "50px";
    }
    else {
        navbar.style.position = "absolute";
        navbar.style.top = "100vh";
        navbar.style.backgroundColor = "#000";
        logo.style.opacity = "0";
        logo.style.minWidth = "0";
        logo.style.marginLeft = "0";
        logo.style.marginRight = "0";
    }
}