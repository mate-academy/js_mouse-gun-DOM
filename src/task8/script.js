alert(function destroyElement () {
  document.addEventListener('click', event => {
    const elemToDestroy = document.elementFromPoint(event.clientX, event.clientY);
    elemToDestroy.remove();
  });
});
