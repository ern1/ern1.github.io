$(document).ready(function () {
    var color = tinycolor.random();
    $(":root").css({"--bcolor1": color, "--bcolor2": tinycolor(color.toString()).darken(10), "--hcolor": tinycolor(color.toString()).spin(20)});
});