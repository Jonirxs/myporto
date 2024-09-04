let Redt = document.querySelectorAll('.abmetext, .Pics, .skill');

function turnRed(event) {
    event.target.style.color = 'red';
}

function resetColor(event) {
    event.target.style.color = ""
}

Redt.forEach(element => {
    element.addEventListener('mouseover', turnRed);
    element.addEventListener('mouseout', resetColor);
});

let Blued = document.querySelectorAll('.text3, .text2, .text1');

function turnBlue(event) {
    event.target.style.color = 'blue';
}

function resetColor2(event) {
    event.target.style.color = ""
}

Blued.forEach(element => {
    element.addEventListener('mouseover', turnBlue);
    element.addEventListener('mouseout', resetColor2);
});

let textElements = document.getElementsByClassName('text3');
let forestElements = document.getElementsByClassName('forpic');

function toggleImage(event) {
    let clickedText = event.target;
    
    let index = Array.prototype.indexOf.call(textElements, clickedText);
    
    if (forestElements[index].style.visibility === 'hidden') {
        forestElements[index].style.visibility = 'visible';
    } else {
        forestElements[index].style.visibility = 'hidden';
    }
}

for (let i = 0; i < textElements.length; i++) {
    textElements[i].addEventListener('click', toggleImage);
}

console.log(textElements);


let textElements2 = document.getElementsByClassName('text2');
let wasElements = document.getElementsByClassName('was');

function toggleImage2(event) {
    let clickedText = event.target;
    
    let index = Array.prototype.indexOf.call(textElements2, clickedText);
    
    if (wasElements[index].style.visibility === 'hidden') {
        wasElements[index].style.visibility = 'visible';
    } else {
        wasElements[index].style.visibility = 'hidden';
    }
}

for (let i = 0; i < textElements2.length; i++) {
    textElements2[i].addEventListener('click', toggleImage2);
}

console.log(textElements2);



let textElements3 = document.getElementsByClassName('text1');
let snowElements = document.getElementsByClassName('snow');

function toggleImage3(event) {
    let clickedText = event.target;
    
    let index = Array.prototype.indexOf.call(textElements3, clickedText);
    
    if (snowElements[index].style.visibility === 'hidden') {
        snowElements[index].style.visibility = 'visible';
    } else {
        snowElements[index].style.visibility = 'hidden';
    }
}

for (let i = 0; i < textElements3.length; i++) {
    textElements3[i].addEventListener('click', toggleImage3);
}

console.log(textElements3);