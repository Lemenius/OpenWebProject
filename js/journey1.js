document.addEventListener('DOMContentLoaded', () => {
  function createStampedImage(src, top, left) {
    const stampedImage = document.createElement('img');
    stampedImage.src = src;
    stampedImage.alt = 'Stamped Image';
    stampedImage.classList.add('stamped-image');
    stampedImage.style.top = `${top}px`;
    stampedImage.style.left = `${left}px`;
    document.getElementById('imageContainer').appendChild(stampedImage);
  }

  function fadeInImage() {
    const fadeInImage = document.createElement('img');
    fadeInImage.src = 'https://imgpile.com/images/DCfr9l.png';
    fadeInImage.alt = 'Fading In Image';
    fadeInImage.classList.add('fading-image');
    fadeInImage.style.top = '150px';
    fadeInImage.style.left = '300px';
    document.getElementById('imageContainer').appendChild(fadeInImage);
  }

  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 50);
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, -500);
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 500);
