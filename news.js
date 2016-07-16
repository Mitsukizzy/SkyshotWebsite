function appendCSS() {
var cssLink = document.createElement("link")
    cssLink.href = "news.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    frames[0].document.body.appendChild(cssLink);
}