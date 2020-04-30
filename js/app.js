var pageX = 0;
var pageY = 0;

$(document).ready(function () {
    $("header").css("background-color", getRandomColor());

    $(".title-bar").mousedown(function(){
        pageX = event.pageX;
        pageY = event.pageY;
        $(this).parent().on("mousemove", onMouseMove);
        $(document).on("mouseup", onMouseUp);
    });
});

function showErrorWindow() {
    var el = $("#errorWindow");
    if(el.css("visibility") != "visible") {
        playSound("assets/98_error.wav", 0.5);
        el.css("visibility", "visible");
    }
}

function hideErrorWindow() {
    $("#errorWindow").css({visibility: "hidden", top: "30%", left: "50%"});
}

/*
// Ifall jag vill skapa rutor eftersom istället för att bara visa/dölja en:
// Se även: https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
function createErrorWindow() {
    // ...
}
function closeErrorWindow() {
    // ...
}
*/

function maximizeErrorWindow() {
    hideErrorWindow();
    $("body").css("background-color", "#c0c0c0");
    $("header").css("background-image", "linear-gradient(to right, #000081, #1084d0)");
}

function onMouseMove(event) {
    let moveX = event.originalEvent.pageX - pageX;
    let moveY = event.originalEvent.pageY - pageY;
    pageX = event.originalEvent.pageX;
    pageY = event.originalEvent.pageY;
    
    $(this).css({top: "+=" + moveY + 'px', left: "+=" + moveX + 'px'}); // let el = $(this); // let el = $(event.currentTarget);
}

function onMouseUp(event) {
    $(".window").off("mousemove");
    $(event.currentTarget).off("mouseup");
}

function playSound(src, volume) {
    var audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}

function getRandomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}