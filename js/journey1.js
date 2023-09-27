document.addEventListener('DOMContentLoaded', () => {
function createStampedImage(src, top, left, animationDelay) {
    const stampedImage = document.createElement('img');
    stampedImage.src = src;
    stampedImage.alt = 'Stamped Image';
    stampedImage.classList.add('stamped-image');
    stampedImage.style.top = `${top}px`;
    stampedImage.style.left = `${left}px`;
    document.getElementById('imageContainer').appendChild(stampedImage);
  }

  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 50, 1000); 
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, -500, 2000); 
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 500, 3000); 

  function fadeInImage() {
    const fadeInImage = document.createElement('img');
    fadeInImage.src = src;
    fadeInImage.alt = 'Fading In Image';
    fadeInImage.classList.add('fading-image');
    fadeInImage.style.top = '150px';  
    fadeInImage.style.left = '300px';  
    document.getElementById('imageContainer').appendChild(fadeInImage);
  }

    createFadeInImage('https://imgpile.com/images/DCfr9l.png', 50, 50, 1000);

};
