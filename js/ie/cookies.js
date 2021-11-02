function checkCookie(cname) {
  var decodedCookie = decodeURIComponent(document.cookie).split(';');
  var match = false;
  decodedCookie.forEach(function (cookie) {
    if (cookie.split("=")[0] == cname) {
      match = true;
      return;
    }
  });

  if (!match) {
    createCookieAlert();
  }
};

function createCookieAlert() {
  var container = document.createElement("contaier");
  container.classList.add("cookie-container");
  var cookieText = document.createElement("p");
  cookieText.innerText = "Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.";
  var cookieButton = document.createElement("button");
  cookieButton.innerText = "ok";

  cookieButton.onclick = function (e) {
    container.style.display = "none";
    createCookie("playground", "playground", 1);
  };

  container.appendChild(cookieText);
  container.appendChild(cookieButton)
  document.body.appendChild(container);
};

function createCookie(name, cvalue, days) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
};