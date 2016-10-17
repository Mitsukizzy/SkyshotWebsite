var update = true;
var layers = document.getElementsByClassName("splashart-layer");

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