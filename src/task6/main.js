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
  const div = document.createElement('div');
  if (isDown) {
    div.style.cssText = `background-color: red;
    width: 25px;
    height: 25px;
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    left: ${event.clientX}px;
    top: ${event.clientY}px`;
    document.body.append(div);
  } else {
     let divList = [...document.querySelectorAll('div')];
     for (let i = 0; i < divList.length; i++) {
       divList[i].style.display = 'none';
    }
  }
});
