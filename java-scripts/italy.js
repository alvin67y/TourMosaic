let images = document.querySelector(".slideshow .images");
let imgs = document.querySelectorAll(".slideshow .images .imgs");
let dots = document.querySelectorAll(".slideshow .dots li");
let desc = document.querySelectorAll(".desc");
let left = document.getElementById("left");
let right = document.getElementById("right");
let descButton = document.getElementById("descButton");

console.log(desc)

let active = 0;
let lengthImgs = imgs.length - 1;

right.onclick = function () {
    if(active + 1 > lengthImgs) {
        active = 0;
    } else {
        active++;
    }
    reloadSlider();
}

left.onclick = function() {
    if(active - 1 < 0) {
        active = lengthImgs;
    } else {
        active--;
    }
    reloadSlider();
}

descButton.onclick = function() {
    if (desc[1].style.transform) {
        for (let i = 1; 1 < 4; i++) {
            desc[i].style.transform = "";
        }
    } else {
        for (let i = 1; 1 < 4; i++) {
            desc[i].style.transform = "translateY(-100%)";
        }
    }
}

function reloadSlider() {
    let checkLeft = imgs[active].offsetLeft;
    images.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slideshow .dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener("click", function() {
        active = key;
        reloadSlider();
    })
})

