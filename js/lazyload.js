lazyLoad = () => {
    let allBack = document.querySelectorAll("[data-lazy-back]");
    if(allBack.length == 0){
        lazyLoad = ()=>{};
        return;
    }
    for(i=0; i < allBack.length;i++){
        if(allBack[i].offsetTop-200 < (window.scrollY + window.innerHeight)){
            allBack[i].style.backgroundImage = `url("${allBack[i].getAttribute("data-lazy-back")}")`;
            allBack[i].removeAttribute("data-lazy-back");
        }
    }
}

