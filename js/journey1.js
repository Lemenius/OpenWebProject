function createStampedImage(src, top, left, animationDelay) {
    const stampedImage = document.createElement('img');
    stampedImage.src = src;
    stampedImage.alt = 'Stamped Image';
    stampedImage.classList.add('stamped-image');
    stampedImage.style.top = `${top}px`;
    stampedImage.style.left = `${left}px`;
    document.getElementById('imageContainer').appendChild(stampedImage);
  }, animationDelay);
}

document.addEventListener('DOMContentLoaded', () => {
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 50, 1000);  // Add a 1-second delay for the first image
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, -500, 2000);  // Add a 2-second delay for the second image
  createStampedImage('https://imgpile.com/images/D9KINP.md.png', 50, 500, 3000);  // Add a 3-second delay for the third image

  function fadeInImage() {
    const fadeInImage = document.createElement('img');
    fadeInImage.src = 'https://imgpile.com/images/DCfr9l.png';
    fadeInImage.alt = 'Fading In Image';
    fadeInImage.classList.add('fading-image');
    fadeInImage.style.top = '150px';  // Adjust top position as needed
    fadeInImage.style.left = '300px';  // Adjust left position as needed
    document.getElementById('imageContainer').appendChild(fadeInImage);
  }

  setTimeout(fadeInImage, 4000);  // Adjust the delay as needed
});
