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

createImageButton('path_to_your_image1.jpg', 'Image Button', 100, 50, -75, -400);
createImageButton('path_to_your_image2.jpg', 'Image Button', 100, 50, -200, 200);
createImageButton('https://imgpile.com/images/DxLOnN.png', 'Image Button', 100, 50, -400, 800);
