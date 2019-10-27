'use strict';

let circle = document.querySelector('#red-circle');
let start = false;

document.addEventListener('mouseup', function() {
  start = true;
  start ? circle.classList.remove('hide') : circle.classList.add('hide');
});

document.addEventListener('mousedown', function() {
  start = false;
  start ? circle.classList.remove('hide') : circle.classList.add('hide');
});

document.addEventListener('mousemove', function(event) {
  if (start) {
    circle.style.left = `${event.clientX - 10}px`;
    circle.style.top = `${event.clientY - 10}px`;
  }
});
