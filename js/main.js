var pageX = 0;
var pageY = 0;

$(document).ready(function () {
    $("header").css("background-color", getRandomColor());

    $("body").click(function(){
        if(!$(event.target).is("a, .window *, #errorWindow")) {
            showWindow("errorWindow")
        }
    });
    $(".title-bar").on("mousedown", onMouseDown);
});

function showWindow(winId) {
    var el = $('#' + winId);
    if(el.css("visibility") != "visible") {
        playSound("assets/98_error.wav", 0.5);
        el.css("visibility", "visible");
    }
}

function doSomethingToWindow(winId) {
    switch(Math.floor(Math.random() * 6)) {
        case 0: $("#" + winId).css({"--shit": "rotate(180deg)"}); break;
        case 1: $("#" + winId).css({"--shit": "skewY(20deg)"}); break;
        case 2: $("#" + winId).css({"-webkit-animation": "morph 2s 3 alternate",
                "animation": "morph 2s 3 alternate", "-moz-animation": "morph 2s 3 alternate"}); break;
        case 3: $("#" + winId).css({"--shit": "scaleY("+ (Math.E / Math.PI) + ")"}); break;
        case 4: $("#" + winId).css({"--shit": "scalex(1.618)"}); break;
        case 5: $("#" + winId).css({"-webkit-animation": "morph 5s 2 alternate",
                "animation": "morph 5s 2 alternate", "-moz-animation": "morph 5s 2 alternate"}); break;
    }
}

function hideWindow(winId) {
    $("#" + winId).css({
        visibility: "hidden",
        top: "30%",
        left: "50%",
        "--shit": "rotate(0deg)",
    });
}

function maximizeWindow(winId) {
    hideWindow(winId);
    $("body").css("background-color", "#c0c0c0");
    $("header").css(
        "background-image",
        "linear-gradient(to right, #000081, #1084d0)");
}

function onMouseDown(event) {
    pageX = event.pageX;
    pageY = event.pageY;
    $(this).parent().on("mousemove", onMouseMove);
    $(document).on("mouseup", onMouseUp);
}

function onMouseMove(event) {
    let moveX = event.originalEvent.pageX - pageX;
    let moveY = event.originalEvent.pageY - pageY;
    pageX = event.originalEvent.pageX;
    pageY = event.originalEvent.pageY;
    $(this).css({top: "+=" + moveY + 'px', left: "+=" + moveX + 'px'});
}

function onMouseUp(event) {
    $(".window").off("mousemove");
    $(event.currentTarget).off("mouseup");
}