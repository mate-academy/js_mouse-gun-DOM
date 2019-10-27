'use strict';

function coordinateLoger() {
  document.addEventListener('click', function(event) {
    console.log(`X:${event.clientX} Y: ${event.clientY}`);
  });
}

coordinateLoger();
