function lazyLoad() {
  var allBack = document.querySelectorAll("[data-lazy-back]");
  if (allBack.length == 0) {
    lazyLoad = function lazyLoad() { };
    return;
  }
  for (i = 0; i < allBack.length; i++) {
    if (allBack[i].offsetTop - 200 < document.documentElement.scrollTop + window.innerHeight) {
      allBack[i].style.backgroundImage = "url(\"".concat(allBack[i].getAttribute("data-lazy-back"), "\")");
      allBack[i].removeAttribute("data-lazy-back");
    }
  }
}