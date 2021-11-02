show = () => {
    let allShow = document.querySelectorAll("[data-show]");
    if(allShow.length == 0){
        return;
    }
    for(i=0; i < allShow.length;i++){
        if(allShow[i].offsetTop + 200 < (window.scrollY + window.innerHeight)){
            let time = allShow[i].getAttribute("data-show-delay") ? parseInt(allShow[i].getAttribute("data-show-delay")) : 0;
            let el = allShow[i];
            setTimeout(() => {
                el.removeAttribute("data-show");
            }, time);
        }
    }
}