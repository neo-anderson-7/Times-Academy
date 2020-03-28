function student(src, name, reading, speaking, listening, writing, overallBands) {
    this.src = src;
    this.name = name;
    this.reading = reading;
    this.speaking = speaking;
    this.listening = listening;
    this.writing = writing;
    this.overallBands = overallBands;
    this.display = display;
}

var student1 = new student(1, "Dilshad Ladia", 8.5, 7, 8, 7, 7.5);
var student2 = new student(2, "Iramet Kaur", 7.5, 7.5, 8, 7, 7.5);
var student3 = new student(3, "HairatPreet Kaur", 7, 6.5, 8.5, 7, 7.5);
var student4 = new student(4, "Ekroop Kaur", 7, 6.5, 9, 6.5, 7.5);
var student5 = new student(5, "Gauravdeep", 7, 7, 8, 6.5, 7);
var student6 = new student(6, "Roop Ishwar Singh", 8, 6, 8, 6, 7);
var student7 = new student(7, "Gurtegbir Singh", 6, 7, 8, 6, 7);
var student8 = new student(8, "Paras", 7, 6, 8, 6, 7);
var student9 = new student(9, "Jatin", 6, 6.5, 7.5, 6.5, 6.5);
var student10 = new student(10, "Sayam Kalra", 6, 6.5, 7.5, 6, 6.5);
var student11 = new student(11, "Taranpreet Kaur", 6, 6, 7.5, 6, 6.5);
var student12 = new student(12, "Harsha", 7, 6, 6, 6, 6.5);
var student13 = new student(13, "Ramanpreet Singh", 7, 6, 6.5, 5.5, 6.5);
var student14 = new student(14, "Gurtej Singh", 6.5, 6, 6.5, 6, 6.5);
var student15 = new student(15, "Palak", 6, 6.5, 6, 6, 6);
var student16 = new student(16, "Deepika", 6, 6, 6, 6, 6);

function display() {
    var card = document.createElement('div');
    card.className = 'card';

    var imgCont = document.createElement('div');
    imgCont.className = 'img-container';
    var image = document.createElement('img');
    image.src = `images/students/${this.src}.jpg`;
    // image.src = 'images/students/prototype.png';
    imgCont.appendChild(image);
    card.appendChild(imgCont);

    var dataholder = document.createElement('div');
    dataholder.className = 'text-container';

    var stuName = document.createElement('p');
    stuName.className = 'name';
    var stuNameText = document.createTextNode(this.name);
    stuName.appendChild(stuNameText);
    dataholder.appendChild(stuName);

    var totalBands = document.createElement('p');
    var totalBandsData = document.createTextNode(`${this.overallBands} Bands`);
    totalBands.appendChild(totalBandsData);
    dataholder.appendChild(totalBands);

    card.appendChild(dataholder);



    // var bandTable = document.createElement('table');

    // var row1 = document.createElement('tr');

    // var tdata1 = document.createElement('td');
    // var tdata1Text = document.createTextNode(`Reading: ${this.reading}`);
    // tdata1.appendChild(tdata1Text);
    // row1.appendChild(tdata1);

    // var tdata2 = document.createElement('td');
    // var tdata2Text = document.createTextNode(`Speaking: ${this.speaking}`);
    // tdata2.appendChild(tdata2Text);
    // row1.appendChild(tdata2);

    // var row2 = document.createElement('tr');

    // var tdata3 = document.createElement('td');
    // var tdata3Text = document.createTextNode(`Listening: ${this.listening}`);
    // tdata3.appendChild(tdata3Text);
    // row2.appendChild(tdata3);

    // var tdata4 = document.createElement('td');
    // var tdata4Text = document.createTextNode(`Writing: ${this.writing}`);
    // tdata4.appendChild(tdata4Text);
    // row2.appendChild(tdata4);

    // bandTable.appendChild(row1);
    // bandTable.appendChild(row2);

    // card.appendChild(bandTable);
    document.getElementById('main').appendChild(card);
}

student1.display();
student2.display();
student3.display();
student4.display();
student5.display();
student6.display();
student7.display();
student8.display();
student9.display();
student10.display();
student11.display();
student12.display();
student13.display();
student14.display();
student15.display();
student16.display();

// var card = document.createElement('div');
// card.className = 'card';

// var imgCont = document.createElement('div');
// imgCont.className = 'img-container';
// var image = document.createElement('img');
// image.src = `images/students/${student1.src}.jpg`;
// // image.src = 'images/students/prototype.png';
// imgCont.appendChild(image);
// card.appendChild(imgCont);

// var stuName = document.createElement('p');
// stuName.className = 'name';
// var stuNameText = document.createTextNode(student1.name);
// stuName.appendChild(stuNameText);
// card.appendChild(stuName);

// var totalBands = document.createElement('p');
// var totalBandsData = document.createTextNode(`Total bands: ${student1.overallBands}`);
// totalBands.appendChild(totalBandsData);
// card.appendChild(totalBands);



// var bandTable = document.createElement('table');

// var row1 = document.createElement('tr');

// var tdata1 = document.createElement('td');
// var tdata1Text = document.createTextNode(`Reading: ${student1.reading}`);
// tdata1.appendChild(tdata1Text);
// row1.appendChild(tdata1);

// var tdata2 = document.createElement('td');
// var tdata2Text = document.createTextNode(`Speaking: ${student1.speaking}`);
// tdata2.appendChild(tdata2Text);
// row1.appendChild(tdata2);

// var row2 = document.createElement('tr');

// var tdata3 = document.createElement('td');
// var tdata3Text = document.createTextNode(`Listening: ${student1.listening}`);
// tdata3.appendChild(tdata3Text);
// row2.appendChild(tdata3);

// var tdata4 = document.createElement('td');
// var tdata4Text = document.createTextNode(`Writing: ${student1.writing}`);
// tdata4.appendChild(tdata4Text);
// row2.appendChild(tdata4);

// bandTable.appendChild(row1);
// bandTable.appendChild(row2);

// card.appendChild(bandTable);
// document.getElementById('main').appendChild(card);



// function student(src, name) {
//     this.src = src;
//     this.name = name;
// }

// var student1 = new  student(1, "ABC");

// var card = document.createElement('div');
// card.className = 'card';

// var image = document.createElement('img');
// image.src = 'images\/students\/' + student1.src + '.jpg';
// card.appendChild(image);

// var stuName = document.createElement('p');
// stuName.className = 'name';
// var stuNameText = document.createTextNode(student1.name);
// stuName.appendChild(stuNameText);
// card.appendChild(stuName);
// var main=document.getElementById('main')
// main.appendChild(card);
