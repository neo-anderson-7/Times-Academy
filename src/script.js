window.onload = copyright;
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

window.onload = copyright;

function copyright() {
    var date = new Date();
    var year = date.getFullYear();

    var copyTxt = '<span style="font-weight: 600; font-size: 0.95em;">Jaitely\'s  Times Academy - IELTS</span><br></br>';
    copyTxt += '<span>LIC  No : 147/MC1/MA</span><br><br>';
    copyTxt += '<span>SCO -33, Ground Floor, Garha Road Near Alert Gym,<br> Opp. Taj Restaurant, Chotti Baradari Part -2,<br>Jalandhar, Punjab - 144001</span><br><br>';
    copyTxt += '<span>Contact No: +91-86218 86218</span><br>';
    copyTxt += '<span>Email - <a href="mailto:EnterEmail@Here.com">EnterEmail@Here.com</a></span><br><br>';

    copyTxt += "<span>Copyright &copy; " + year + ". Jaitely\'s Times Academy. All rights reserved.</span>";
    document.getElementById("info").innerHTML = copyTxt;
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