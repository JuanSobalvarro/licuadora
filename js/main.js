let state = 0;
let soundBlender = new Audio("sounds/blender_on.mp3");
let soundButton = new Audio("sounds/button.mp3");

function switchBlender() {
    if (state === 0) {
        state = 1;
    }
    else {
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