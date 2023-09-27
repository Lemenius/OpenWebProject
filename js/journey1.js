function createImageButton(src, top, left) {
  const button = document.createElement('button');
  button.classList.add('button-image');
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Button Image';
  button.appendChild(img);
  button.style.position = 'absolute';
  button.style.top = `${top}px`;
  button.style.left = `${left}px`;
  document.body.appendChild(button);
}

createImageButton('image1.jpg', -75, -400);
createImageButton('image2.jpg', -200, 200);
createImageButton('https://imgpile.com/images/DxLOnN.png', -400, 800);
