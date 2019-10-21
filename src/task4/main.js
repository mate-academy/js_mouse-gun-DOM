'use strict';
document.querySelector('.coordinates').style.textAlign = 'center';

document.addEventListener('mousedown', () => {
  document.querySelector('.coordinates').textContent = 'down';
});

document.addEventListener('mouseup', () => {
  document.querySelector('.coordinates').textContent = 'up';
});

