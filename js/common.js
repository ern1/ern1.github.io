function playSound(src, volume) {
    let audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}

function getRandomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function generateBackground(baseColor) {
    //$("body").append("");
    return;
}