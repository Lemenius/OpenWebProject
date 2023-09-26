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

  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 50);
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, -500);
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 500);
});
