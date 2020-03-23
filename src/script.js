var show = false;

function toggle() {
    var scrolled = window.pageYOffset;
    var pixels = (scrolled + 90).toString() + "px";
    document.getElementById("dropDown").style.top = pixels;            

    show = !show;
    document.getElementById("dropDown").style.display = (show) ? "block" : "none";
}

function scroll() {
    if (show) {
        var scrolled = window.pageYOffset;
        var pixels = (scrolled + 90).toString() + "px";
        document.getElementById("dropDown").style.top = pixels;
    }
}

// function click(event) {
//     var txt = event.target.textContent;
//     if (txt == "IELTS" || txt == "Spoken English") {
//         var scrolled = window.pageYOffset;
//         var pixels = (scrolled + 90).toString() + "px";
//         document.getElementById("dropDown").style.top = pixels;

//         show = !show;
//         document.getElementById("dropDown").style.display = (show) ? "block" : "none";
//     } else {
//         document.getElementById("dropDown").style.display = "none";
//     }
// }