'use strict';
document.querySelector('.coordinates').style.textAlign = 'center';

let isDown = false;

document.addEventListener('mousedown', () => {
  isDown = true;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});

document.addEventListener('mousemove', event => {
  if (isDown) {
    document.querySelector('.coordinates').textContent = (`X:${event.clientX} Y: ${event.clientY}`);
  }
});


