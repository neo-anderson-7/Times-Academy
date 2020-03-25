//  HTML dynamic meta files

var roboto = document.createElement('link');
roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300&display=swap';
roboto.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(roboto);

var icons = document.createElement('link');
icons.href = './fontawesome/css/all.css';
icons.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(icons);


// var elements = document.querySelectorAll('.drop-item');
// for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = '173px';
// }

function setWidth() {
    elemWidth = document.getElementById('dropDownTrigger').offsetWidth;
    elemWidth -= 33;
    elemWidth += "px";
    document.getElementsByClassName('drop-item')[0].style.width = elemWidth;
    document.getElementsByClassName('drop-item')[1].style.width = elemWidth;
}


// var dropDownWidth = document.getElementById('dropDownTrigger').offsetWidth;
// var dropDownWidthPx = dropDownWidth + "px";
// document.getElementsByClassName('drop-item')[0].getElementsByClassName.width = dropDownWidthPx;

// var show = false;

// function toggle() {
//     var scrolled = window.pageYOffset;
//     var pixels = (scrolled + 90).toString() + "px";
//     document.getElementById("dropDown").style.top = pixels;            

//     show = !show;
//     document.getElementById("dropDown").style.display = (show) ? "block" : "none";
// }

// function scroll() {
//     if (show) {
//         var scrolled = window.pageYOffset;
//         var pixels = (scrolled + 90).toString() + "px";
//         document.getElementById("dropDown").style.top = pixels;
//     }
// }

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