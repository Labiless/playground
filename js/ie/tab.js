getFile = function getFile(data) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    data.callback({
      json: JSON.parse(this.responseText),
      element: data.element
    });
  };

  xhttp.open("GET", data.path + data.fileName + ".json");
  xhttp.send();
};

createTab = function createTab() {
  var tabTitles = document.getElementsByClassName("tab-title");
  var container = document.getElementsByClassName("tab-text")[0];
  container.appendChild(loader());

  for (i = 0; i < tabTitles.length; i++) {
    tabTitles[i].appendChild(loader());

    tabTitles[i].onclick = function (e) {
      titleClick(e);
    };

    getFile({
      fileName: tabTitles[i].getAttribute("data-tab"),
      path: "ajax/",
      element: tabTitles[i],
      callback: setTab
    });
  }
}; //callback


setTab = function setTab(data) {
  var json = data.json.item;
  data.element.innerHTML = json.title + "<p class='tab-title-arrow'> &#x276F; </p>";
  var text = "";
  json.content.forEach(function (content) {
    text += content + " ";
  });

  if (data.element.classList.contains("active-tab")) {
    showTabText(text);
  }

  data.element.setAttribute("data-text", text);
};

loader = function loader() {
  var img = document.createElement("img");
  img.setAttribute("src", "img/loader.png");
  img.classList.add("loader");
  return img;
};

showTabText = function showTabText(text) {
  var container = document.getElementsByClassName("tab-text")[0];
  container.style.opacity = 0;
  setTimeout(function () {
    container.innerHTML = text;
    container.style.opacity = 1;
  }, 300);
};

titleClick = function titleClick(e) {
  document.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
  e.target.classList.add("active-tab");
  showTabText(e.target.getAttribute("data-text"));
};