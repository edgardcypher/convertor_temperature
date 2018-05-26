/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var $ = function (id) {
    return document.getElementById(id);
}
label_F_to_C = function () {
    $("label1").firstChild.nodeValue = "Enter (°F) Degree:";
    $("label2").firstChild.nodeValue = "Degrees Celcius";
}
label_C_to_F = function () {
    $("label1").firstChild.nodeValue = "Enter (°C) Degree:";
    $("label2").firstChild.nodeValue = "Degrees Fahrenheit";
}
var reset = function () {
    $("error").innerHTML='<span> * </span>'
    $("entry").value = "";

}
var processConvertor = function () {
    var user_input = parseFloat($("entry").value);

    if (isNaN(user_input)) {
        alert('enter number');
    } else if (document.querySelector('input[name="choice"]:checked').value === "toCelcius") {

        var celcius = (user_input - 32) * 5 / 9;
        $("response").value = celcius.toFixed(0);
    } else if (document.querySelector('input[name="choice"]:checked').value === "toFahreneit") {
        if (user_input <= -100 || user_input >= 212) {
            $("error").setAttribute("style", "font-size:.7em")
            $("error").firstChild.nodeValue = "you entered a value under -100 or greater than 212"
            $("entry").value = "";

        } else {
            $("error").firstChild.nodeValue = "*"
            var farheineit = (user_input * 9 / 5) + +32;
            $("response").value = farheineit.toFixed(0);
        }
    }


}
window.onload = function () {
    $("entry").focus();
    $("button").onclick = processConvertor;
    $("res").onclick = reset;

}

