
// Cambio de tamaño de fotos mientras haces click

const img = document.getElementById('imagen');

function getRandomSize() {
  return Math.floor(Math.random() * 500) + 100;
}

function changeSize() {
  const newWidth = getRandomSize();
  const newHeight = getRandomSize();
  
  img.style.width = newWidth + 'px';
  img.style.height = newHeight + 'px';
}

img.addEventListener('click', changeSize);
