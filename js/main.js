let state = 0;
let soundBlender = new Audio("sounds/blender_on.mp3");
let soundButton = new Audio("sounds/button.mp3");
let blender = document.getElementById("blender");
let button = document.getElementById("blender_button");

let green = "#00FF0044";
let red = "#FF000044";

function switchBlender() {
    if (state === 0) {
        activateBlender();
        state = 1;
    }
    else {
        deactivateBlender();
        state = 0;
    }
    playSounds();
}

function playSounds() {
    if (state === 1) {
        soundButton.play();
        soundBlender.play();
        soundBlender.loop = true;
    }
    else {
        soundButton.play();
        soundBlender.pause();
        soundBlender.currentTime = 0;
    }
}

function activateBlender() {
    blender.classList.add("active");
    button.style.backgroundColor = red;
}

function deactivateBlender() {
    blender.classList.remove("active");
    button.style.backgroundColor = green;
}