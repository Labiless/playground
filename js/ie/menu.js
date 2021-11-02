function createMenu(data) {
  var menuOpen = false;

  openMenu = function openMenu() {
    mobileMenu.style.display = "block";
    setTimeout(function () {
      menu.style.height = "100vh";
      menu.style.backgroundColor = "#000000e0";
      mobileMenu.style.top = "15%";
      mobileMenu.style.opacity = 1;
    }, 100);
  };

  closeMenu = function closeMenu() {
    mobileMenu.style.top = "15%";
    mobileMenu.style.opacity = 0;
    menu.style.backgroundColor = "transparent";
    setTimeout(function () {
      mobileMenu.style.display = "none";
    }, 300);
    menu.style.height = "10vh";
  };

  var menu = document.getElementsByClassName("menu")[0];
  var deskMenu = document.getElementsByClassName("link-container-desktop")[0];
  var mobileMenu = document.getElementsByClassName("link-container-mobile")[0];
  var linksText = Object.keys(data);
  linksText.forEach(function (text) {
    var link = createLink({
      link: data[text],
      text: text
    });
    deskMenu.appendChild(link);
    mobileMenu.appendChild(link.cloneNode(true));
  });

  for (var i = 0; i < mobileMenu.children.length; i++) {
    mobileMenu.children[i].onclick = closeMenu;
  }

  var mobileIcon = document.getElementsByClassName("menu-mobile-icon")[0];

  mobileIcon.onclick = function () {
    menuOpen = !menuOpen;

    if (menuOpen) {
      openMenu();
      return;
    }

    closeMenu();
  };
};

function createLink(data) {
  var a = document.createElement("a");
  a.setAttribute("href", data.link);
  a.innerText = data.text;
  a.classList.add("menu-item");
  return a;
};