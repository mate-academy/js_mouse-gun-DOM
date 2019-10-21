'use strict';

const redCircle = document.createElement('div');

redCircle.classList.add('redCircle');
document.body.appendChild(redCircle);


document.addEventListener('mousedown', (event) => {
  redCircle.style.display = 'block';
 });

document.addEventListener('mouseup', (event) => {
  redCircle.style.display = 'none';
});

document.addEventListener('mousemove', (event) => {
  redCircle.style.top = `${event.pageY - (redCircle.clientHeight / 2)}px`;
  redCircle.style.left = `${event.pageX - (redCircle.clientWidth / 2)}px`;
});


function killHtmlElement() {   // 8 пункт
  document.addEventListener('click', (event) => {
    const element = document.elementFromPoint(event.pageX, event.pageY);
    element.remove();
  });
}

function changeHtmlElementPosition() {   // 9 пункт
  let element = null;
  let elementPosition = null;
  let isClick = false;

  document.addEventListener('mousedown', (event) => {
    element = document.elementFromPoint(event.pageX, event.pageY);
    element.style.width = 'max-content';
    elementPosition = element.getBoundingClientRect();
    isClick = true;
  });

  document.addEventListener('mouseup', (event) => {
    isClick = false;
  });

  document.addEventListener('mousemove', (event) => {
    if (isClick) {
      const positionX = event.pageX - elementPosition.x - element.clientLeft - (element.clientWidth / 2);
      const positionY = event.pageY - elementPosition.y - element.clientTop - (element.clientHeight / 2);

      element.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
  });
}

