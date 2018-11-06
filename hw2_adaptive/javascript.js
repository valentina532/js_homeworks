let nav = document.getElementsByClassName("nav");
let nav_menu = document.getElementsByClassName("nav_menu");
let fa_bars = document.getElementsByClassName("fa-bars");
let fa_times = document.getElementsByClassName("fa-times");
// let smallScreen = window.matchMedia("(max-width: 980px)");

fa_bars[0].onclick = function(){
    fa_bars[0].style.display = "none";
    fa_times[0].style.display = "block";
    nav[0].style.display = "block";
}
fa_times[0].onclick = function () {
    fa_bars[0].style.display = "block";
    fa_times[0].style.display = "none";
    nav[0].style.display = "none";
}
// nav[0].onmouseleave = function(){
//     nav[0].style.display = "none";
//     fa_bars[0].style.display = "block";
//     fa_times[0].style.display = "none";
// }

