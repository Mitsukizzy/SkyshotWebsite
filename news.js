// JavaScript source code
function resizeNewsWidgets() {
    var fbWidget = document.getElementById("fb-widget");
    var twitterWidget = document.getElementById("twitter-widget");
    fbWidget.setAttribute("data-height", document.body.clientHeight - 800);
    twitterWidget.setAttribute("data-height", document.body.clientHeight - 800);
}