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

function showWindow(elId) {
    var el = $('#' + elId); // $("#errorWindow");
    if(el.css("visibility") != "visible") {
        playSound("assets/98_error.wav", 0.5);
        el.css("visibility", "visible");
    }
}

function doSomethingToWindow(elId) {
    switch(Math.floor(Math.random() * 3)) {
        case 0: $("#" + elId).css({"--shit": "rotate(180deg)"}); console.log(0); break;
        case 1: $("#" + elId).css({"--shit": "skewY(20deg)"}); console.log(1); break;
        case 2: $("#" + elId).css({"--shit": "scaleY(0.7)"}); console.log(2); break;
        case 3: $("#" + elId).css({"--shit": "scalex(1.618)"}); console.log(2); break;
    }
}

function hideWindow(elId) {
    $("#" + elId).css({visibility: "hidden", top: "30%", left: "50%", "--shit": "rotate(0deg)"});
}

/* Ifall jag vill skapa rutor eftersom istället för att bara visa/dölja en:
   (kan då enklare lägga till saker som laggande fönster etc, bör kanske dock lägga till andra saker istället...)
   Se även: https://www.html5rocks.com/en/tutorials/webcomponents/customelements/ */
// function createErrorWindow() {
// 
// }
// function closeErrorWindow() {
// 
// }

function maximizeWindow(elId) {
    hideWindow(elId);
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