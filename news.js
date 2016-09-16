// JavaScript source code
function resizeNewsWidgets() {
    var fbWidget = document.getElementById("fb-widget");
    var twitterWidget = document.getElementById("twitter-widget");
    fbWidget.setAttribute("data-height", document.body.clientHeight);
    twitterWidget.setAttribute("data-height", document.body.clientHeight);
}