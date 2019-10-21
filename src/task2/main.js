'use strict';
document.querySelector('.coordinates').style.textAlign = 'center';

document.addEventListener('mousemove', event => {
  document.querySelector('.coordinates').textContent = `X:
  ${event.clientX} Y: ${event.clientY}`;
});
