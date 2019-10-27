'use strict';

let start = false;

document.addEventListener('mouseup', function() {
  start = true;
});

document.addEventListener('mousedown', function() {
  start = false;
});

document.addEventListener('mousemove', function(event) {
  if (start) {
    console.log(`X:${event.clientX} Y: ${event.clientY}`);
  }
});
