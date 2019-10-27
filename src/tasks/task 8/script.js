'use strict';

function removeElement() {
  document.addEventListener('click', function(event) {
    const unhappyElement = document.elementFromPoint(event.clientX, event.clientY);
    unhappyElement.remove();
  });
}

removeElement();
