window.onload = function () {
  createMenu({
    "we are": "#we-are",
    "we do": "#we-do",
    "careers": "#careers",
    "contact us": "#contact-us"
  });
  
  initSlider({
    autoplay: 4000
  });
  createTab();
  checkCookie("playground");
  initForm();
  lazyLoad();
  show();
};

window.onscroll = function () {
  lazyLoad();
  show();
};