'use strict';

document.addEventListener('click', function() {
  document.addEventListener('mouseup', function() {
    console.log('up');
  });

  document.addEventListener('mousedown', function() {
    console.log('down');
  });
})
