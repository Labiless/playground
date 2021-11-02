initSlider = (data) => {
    //tracking var
    let sliderIndex = 0;
    let touchX;
    let sliderInterval;
    //element
    let slider = document.getElementsByClassName("slider")[0];
    let sliderElements = document.getElementsByClassName("slider-element");
    let prevArrow = document.getElementsByClassName("nav-arrow")[0];
    let nextArrow = document.getElementsByClassName("nav-arrow")[1];
    let navDots = document.getElementsByClassName("nav-dots")[0];
    //arrow slide
    prevArrow.onclick = (e) => {
        clearInterval(sliderInterval);
        moveSlider(0);
    }
    nextArrow.onclick = (e) => {
        clearInterval(sliderInterval);
        moveSlider(1);
    }
    //touch slide
    for (i = 0; i < sliderElements.length; i++) {
        sliderElements[i].ontouchstart = (e) => {
            clearInterval(sliderInterval);
            touchX = e.touches[0].clientX;
        }
        sliderElements[i].ontouchend = (e) => {
            if (touchX < e.changedTouches[0].clientX) {
                moveSlider(0);
                return;
            }
            moveSlider(1);
        }
    }
    //move slider function
    moveSlider = (dir) => {
        if (dir > 0 && sliderIndex < (sliderElements.length - 1)) {
            sliderIndex++;
            for (i = 0; i < sliderElements.length; i++) {
                sliderElements[i].style.transform = `translateX(-${slider.clientWidth * sliderIndex}px)`;
            }
            return
        }
        if (dir == 0 && sliderIndex > 0) {
            sliderIndex--;
            for (i = 0; i < sliderElements.length; i++) {
                sliderElements[i].style.transform = `translateX(-${slider.clientWidth * sliderIndex}px)`;
            }
        }
    }
    //create dots function
    createNavDot = (index) => {
        var dot = document.createElement("button");
        dot.classList.add("nav-dot");
        dot.onclick = () => {
            clearInterval(sliderInterval);
            let indexJump = index - sliderIndex;
            for (x = 0; x < Math.abs(indexJump); x++) {
                moveSlider(indexJump < 0 ? 0 : 1);
            }
        }
        return dot;
    }
    //setup nav position
    prevArrow.style.top = (slider.clientTop + slider.clientHeight / 2) - (prevArrow.clientHeight / 2) + "px";
    nextArrow.style.top = (slider.clientTop + slider.clientHeight / 2) - (prevArrow.clientHeight / 2) + "px";
    navDots.style.top = (slider.clientTop + slider.clientHeight - 30) + "px";
    //create dot from slide number
    for (i = 0; i < sliderElements.length; i++) {
        navDots.append(createNavDot(i));
    }
    if(data.autoplay){
        sliderInterval = setInterval(() => {
            if(sliderIndex == (sliderElements.length - 1)){
                for (i = 0; i < sliderElements.length*2; i++) {
                    moveSlider(0);
                }
                return;
            }
            moveSlider(1);
        }, data.autoplay);
    }
}

