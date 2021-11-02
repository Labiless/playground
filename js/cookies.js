checkCookie = (cname) => {
    let decodedCookie = decodeURIComponent(document.cookie).split(';');
    let match = false;
    decodedCookie.forEach(cookie => {
        if(cookie.split("=")[0] == cname){
            match = true;
            return;
        }
    });
    if(!match){
        createCookieAlert();
    }
}

createCookieAlert = () => {
    let container = document.createElement("contaier");
        container.classList.add("cookie-container");
    let cookieText = document.createElement("p");
    cookieText.innerText = "Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy."
    let cookieButton = document.createElement("button");
    cookieButton.innerText = "ok";
    cookieButton.onclick = (e) => {
        container.style.display = "none";
        createCookie("playground", "playground", 1);
    }
    container.append(cookieText,cookieButton);
    document.body.append(container);
}

createCookie = (name, cvalue, days) => {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie =(name + "=" + cvalue + ";" + expires + ";path=/");
}