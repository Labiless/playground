

getFile = (data) =>{
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        data.callback({json: JSON.parse(this.responseText), element: data.element});
    }
    xhttp.open("GET", data.path + data.fileName + ".json");
    xhttp.send();
}
createTab = () => {
    let tabTitles = document.getElementsByClassName("tab-title");
    let container = document.getElementsByClassName("tab-text")[0];
    container.append(loader());
    for(i=0; i < tabTitles.length; i++){
        tabTitles[i].append(loader())
        tabTitles[i].onclick = (e) => {
            titleClick(e);
        }
        getFile({
            fileName : tabTitles[i].getAttribute("data-tab"),
            path: "ajax/",
            element: tabTitles[i],
            callback : setTab
        })
    }
}
//callback
setTab = (data) => {
    let json = data.json.item;
    data.element.innerHTML = json.title + "<p class='tab-title-arrow'> &#x276F; </p>";
    let text = "";
    json.content.forEach(content => {
        text += content + " ";
    });
    if(data.element.classList.contains("active-tab")){
        showTabText(text);
    }
    data.element.setAttribute("data-text",text )
}
loader = () => {
    let img = document.createElement("img");
    img.setAttribute("src", "img/loader.png")
    img.classList.add("loader");
    return img;
}
showTabText = (text) =>{
    let container = document.getElementsByClassName("tab-text")[0];
    container.style.opacity = 0;
    setTimeout(() => {
        container.innerHTML = text;
        container.style.opacity = 1;
    }, 300);

}
titleClick= (e)=>{
    document.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    e.target.classList.add("active-tab");
    showTabText(e.target.getAttribute("data-text"));
}