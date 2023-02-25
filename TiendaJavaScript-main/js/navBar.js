//JUAN DIEGO

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 1) {
        document.getElementById("bg-custom").style.backgroundColor = "#101010";
    } else {
        document.getElementById("bg-custom").style.backgroundColor = "transparent";
    }
}