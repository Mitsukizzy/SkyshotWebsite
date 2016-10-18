var update = true;
var layers = document.getElementsByClassName("splashart-layer");

var navbar = document.getElementById("navbar_main");

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
    if (!navbar) {
        navbar = document.getElementById("navbar_main");
    }
    if (document.body.scrollTop > document.body.clientHeight) {
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "#222";
    }
    else {
        navbar.style.position = "absolute";
        navbar.style.top = "100vh";
        navbar.style.backgroundColor = "#000";
    }
}