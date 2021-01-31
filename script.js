let images = document.querySelectorAll(".infinite-slider img");
let current = 1;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("hide-image");
    }
    images[current].classList.remove("hide-image");
}


document.querySelector(".infinite-slider").onclick = slider;
document.querySelector(".btn-infinite-next").onclick = function sliderRight() {
    if (current - 1 == -1) {
        current = images.length - 1;
    }
    else {
        current--;
    }
    slider();
};

document.querySelector(".btn-infinite-previous").onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};

function sliderRight() {
    if (current - 1 == -1) {
        current = images.length - 1;
    }
    else {
        current--;
    }

    slider();
    autoSlider();
};


// Add timer
autoSlider();

function autoSlider() {
    setTimeout(sliderRight, 2000);
}