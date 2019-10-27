'use strict';

document.addEventListener('click', function() {
  document.addEventListener('mousemove', function (event) {
    console.log(`X:${event.clientX} Y: ${event.clientY}`);
  });
})

