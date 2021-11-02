function show() {
  var allShow = document.querySelectorAll("[data-show]");
  if (allShow.length == 0) {
    return;
  }
  for (i = 0; i < allShow.length; i++) {
    if ((allShow[i].offsetTop + 200) < (document.documentElement.scrollTop + window.innerHeight)) {
      var time = allShow[i].getAttribute("data-show-delay") ? parseInt(allShow[i].getAttribute("data-show-delay")) : 0;
      var el = allShow[i];
      setTimeout(function () {
        el.removeAttribute("data-show");
      }, time);
    }
  }
};