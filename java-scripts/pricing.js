const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const move = document.getElementsByClassName("imgs");
console.log(move);

let currentImg = 0;

leftButton.addEventListener("click", slideLeft, false);
rightButton.addEventListener("click", slideRight, false);


function slideLeft() {
    if(currentImg === 2) {
        move[0].style.transform = "translateX(-100%)";
        move[1].style.transform = "translateX(-100%)";
        move[2].style.transform = "translateX(-100%)";
        currentImg--;
    } else if (currentImg === 1) {
        move[0].style.transform = "translateX(0%)";
        move[1].style.transform = "translateX(0%)";
        move[2].style.transform = "translateX(0%)";
        currentImg--;
    } else {}
};

function slideRight() {
    if(currentImg === 0) {
        move[0].style.transform = "translateX(-100%)";
        move[1].style.transform = "translateX(-100%)";
        move[2].style.transform = "translateX(-100%)";
        currentImg++;
    } else if (currentImg === 1) {
        move[0].style.transform = "translateX(-200%)";
        move[1].style.transform = "translateX(-200%)";
        move[2].style.transform = "translateX(-200%)";
        currentImg++;
    } else {}
};