function getElementCoordinates() {
  document.addEventListener('click', event => {
    console.log(`X: ${event.clientX}; Y: ${event.clientY}`);
  });
}
