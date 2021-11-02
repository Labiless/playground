
createMenu = (data) => {
    var menuOpen = false;
    openMenu = () => {
        mobileMenu.style.display = "block";
        setTimeout(() => {
            menu.style.height = "100vh";
            menu.style.backgroundColor = "#000000e0";
            mobileMenu.style.top = "15%"
            mobileMenu.style.opacity = 1;
        }, 100)
    }
    closeMenu = () => {
        mobileMenu.style.top = "15%"
        mobileMenu.style.opacity = 0;
        menu.style.backgroundColor = "transparent";
        setTimeout(() => {
            mobileMenu.style.display = "none";
        }, 300)
        menu.style.height = "10vh"
    }
    let menu = document.getElementsByClassName("menu")[0];
    let deskMenu = document.getElementsByClassName("link-container-desktop")[0];
    let mobileMenu = document.getElementsByClassName("link-container-mobile")[0];
    let linksText = Object.keys(data);
    linksText.forEach(text => {
        let link = createLink({
            link: data[text],
            text: text
        })
        deskMenu.append(link);
        mobileMenu.append(link.cloneNode(true));
    });
    for (let i = 0; i < mobileMenu.children.length; i++) {
        mobileMenu.children[i].onclick = closeMenu;
    }
    let mobileIcon = document.getElementsByClassName("menu-mobile-icon")[0];
    mobileIcon.onclick = () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            openMenu();
            return;
        }
        closeMenu();
    }
}
createLink = (data) => {
    let a = document.createElement("a");
    a.setAttribute("href", data.link);
    a.innerText = data.text;
    a.classList.add("menu-item");
    return a;
}
