

function showErrorWindow() {
    var audio = new Audio('98_error.mp3');
    audio.play();
    document.getElementById("errorWindow").style.display = "block";
}

function hideErrorWindow() {
    document.getElementById("errorWindow").style.display = "none"; 
}
