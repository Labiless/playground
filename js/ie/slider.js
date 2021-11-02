initSlider = function initSlider(data) {
  //tracking var
  var sliderIndex = 0;
  var touchX;
  var sliderInterval; //element

  var slider = document.getElementsByClassName("slider")[0];
  var sliderElements = document.getElementsByClassName("slider-element");
  var prevArrow = document.getElementsByClassName("nav-arrow")[0];
  var nextArrow = document.getElementsByClassName("nav-arrow")[1];
  var navDots = document.getElementsByClassName("nav-dots")[0]; //arrow slide

  prevArrow.onclick = function (e) {
    clearInterval(sliderInterval);
    moveSlider(0);
  };

  nextArrow.onclick = function (e) {
    clearInterval(sliderInterval);
    moveSlider(1);
  }; //touch slide


  for (i = 0; i < sliderElements.length; i++) {
    sliderElements[i].ontouchstart = function (e) {
      touchX = e.touches[0].clientX;
    };

    sliderElements[i].ontouchend = function (e) {
      if (touchX < e.changedTouches[0].clientX) {
        moveSlider(0);
        return;
      }

      moveSlider(1);
    };
  } //move slider function


  moveSlider = function moveSlider(dir) {
    if (dir > 0 && sliderIndex < sliderElements.length - 1) {
      sliderIndex++;

      for (i = 0; i < sliderElements.length; i++) {
        sliderElements[i].style.transform = "translateX(-".concat(slider.clientWidth * sliderIndex, "px)");
      }

      return;
    }

    if (dir == 0 && sliderIndex > 0) {
      sliderIndex--;

      for (i = 0; i < sliderElements.length; i++) {
        sliderElements[i].style.transform = "translateX(-".concat(slider.clientWidth * sliderIndex, "px)");
      }
    }
  }; //create dots function


  createNavDot = function createNavDot(index) {
    var dot = document.createElement("button");
    dot.classList.add("nav-dot");

    dot.onclick = function () {
      clearInterval(sliderInterval);
      var indexJump = index - sliderIndex;

      for (x = 0; x < Math.abs(indexJump); x++) {
        moveSlider(indexJump < 0 ? 0 : 1);
      }
    };

    return dot;
  }; //setup nav position


  prevArrow.style.top = slider.clientTop + slider.clientHeight / 2 - prevArrow.clientHeight / 2 + "px";
  nextArrow.style.top = slider.clientTop + slider.clientHeight / 2 - prevArrow.clientHeight / 2 + "px";
  navDots.style.top = slider.clientTop + slider.clientHeight - 30 + "px"; //create dot from slide number

  for (i = 0; i < sliderElements.length; i++) {
    navDots.appendChild(createNavDot(i));
  }

  if (data.autoplay) {
    sliderInterval = setInterval(function () {
      if (sliderIndex == sliderElements.length - 1) {
        for (i = 0; i < sliderElements.length * 2; i++) {
          moveSlider(0);
        }

        return;
      }
      moveSlider(1);
    }, data.autoplay);
  }
};