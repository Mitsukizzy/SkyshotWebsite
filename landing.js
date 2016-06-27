function parallax() {
    var layers = document.getElementsByClassName("splashart-layer");
    for (var i = 0; i < layers.length; i++) {
        var parallaxOffset = -document.body.scrollTop / layers[i].dataset.speed;
        layers[i].style.top = parallaxOffset + "px";
    }
}