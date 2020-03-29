var roboto = document.createElement('link');
roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300&display=swap';
roboto.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(roboto);

var icons = document.createElement('link');
icons.href = './fontawesome/css/all.css';
icons.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(icons);

var leftDist = 0;
var appendTxt = '';

function change(n) {
    leftDist -= n;
    if (leftDist < -300) {
        leftDist = 0;
    }

    if (leftDist > 0) {
        leftDist = -300;
    }
    appendTxt = `${leftDist}%`;
    document.getElementById('slide-container').style.left = appendTxt;
}