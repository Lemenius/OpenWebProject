function createStampedImage(src, top, left) {
const stampedImage = document.createElement('img');
stampedImage.src = src;
stampedImage.alt = 'Stamped Image';
stampedImage.classList.add('stamped-image');
stampedImage.style.top = `${top}px`;
stampedImage.style.left = `${left}px`;
document.getElementById('imageContainer').appendChild(stampedImage);
}

function createImageButton(src, alt, width, height, top, left) {
  const imageButton = document.createElement('img');
  imageButton.src = src;
  imageButton.alt = alt;
  imageButton.classList.add('buttonClass');
  imageButton.width = width;
  imageButton.height = height;
  imageButton.style.position = 'absolute';
  imageButton.style.top = `${top}px`;
  imageButton.style.left = `${left}px`;
  document.body.appendChild(imageButton);
}


createStampedImage("https://via.placeholder.com/300", -75, -400);
createStampedImage("https://via.placeholder.com/300", -200, 200);


createImageButton('path_to_your_image1.jpg', '', 100, 50, -75, -400);
createImageButton('path_to_your_image2.jpg', '', 100, 50, -200, 200);
createImageButton('https://imgpile.com/images/DxLOnN.png', '', 100, 50, -400, 800);
