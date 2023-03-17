'use strict';
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');

const btn1 = document.querySelector('.show-modal1');
btn1.addEventListener('click', function() {
    document.querySelector('.modal').style.display = "block";
})
btnclosemodal.addEventListener('click', function() {
    document.querySelector('.modal').style.display = "none";
})
const btn2 = document.querySelector('.show-modal2');
btn2.addEventListener('click', function() {
    document.querySelector('.modal').style.display = "block";
})
const btn3 = document.querySelector('.show-modal3');
btn3.addEventListener('click', function() {
    document.querySelector('.modal').style.display = "block";
})
