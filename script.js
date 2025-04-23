
let k = document.getElementById("select11")
let k1 = document.getElementById("select12")
let k2 = document.getElementById("select13")
let color1 = document.getElementById("background1")
let color2 = document.getElementById("background2")
let color3 = document.getElementById("background3")

let allSelects = k.querySelectorAll("select");
function hide() {
    k.style.display = "block";
    k1.style.display = "none";
    k2.style.display = "none";
    color1.style.border = "2px solid #007c6d";
    color1.style.backgroundColor = "#f0fdfc";
}
function hide1() {

    k1.style.display = "block";
    k.style.display = "none";
    k2.style.display = "none";
    color2.style.border = "2px solid #007c6d";
    color2.style.backgroundColor = "#f0fdfc";
}
function hide2() {
    k2.style.display = "block";
    k1.style.display = "none";
    k.style.display = "none";
    color3.style.border = "2px solid #007c6d";
    color3.style.backgroundColor = "#f0fdfc";
}
