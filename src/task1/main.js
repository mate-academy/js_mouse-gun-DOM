'use strict';
document.querySelector('.coordinates').style.textAlign = 'center';

document.addEventListener('click', event => {
  document.querySelector('.coordinates').textContent = `X:
  ${event.clientX} Y: ${event.clientY}`;
});
