//  HTML dynamic meta files

var roboto = document.createElement('link');
roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300&display=swap';
roboto.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(roboto);

var icons = document.createElement('link');
icons.href = './fontawesome/css/all.css';
icons.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(icons);

//  DropDown width settings

function setWidth() {
    var fixedVal;
    switch (window.location.pathname) {
        case "/C:/Users/HP/Desktop/Anikin/Websites/Yaksh%20IELTS/Times-Academy/src/index.html":
            fixedVal = 32;
            break;
        case "/C:/Users/HP/Desktop/Anikin/Websites/Yaksh%20IELTS/Times-Academy/src/contact.html":
            fixedVal = 0;
            break;
        default:
            fixedVal = 0;
    }

    elemWidth = document.getElementById('dropDownTrigger').offsetWidth;
    elemWidth -= fixedVal;
    elemWidth += "px";
    document.getElementsByClassName('drop-item')[0].style.width = elemWidth;
    document.getElementsByClassName('drop-item')[1].style.width = elemWidth;
}

//  Copyright section details

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