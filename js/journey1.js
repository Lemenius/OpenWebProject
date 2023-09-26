function createStampedImage(src, top, left) {
const stampedImage = document.createElement('img');
stampedImage.src = src;
stampedImage.alt = 'Stamped Image';
stampedImage.classList.add('stamped-image');
stampedImage.style.top = `${top}px`;
stampedImage.style.left = `${left}px`;
document.getElementById('imageContainer').appendChild(stampedImage);
}

createStampedImage('https://via.placeholder.com/300', 50, 50);
createStampedImage('https://via.placeholder.com/300', 50, -500);
createStampedImage('https://via.placeholder.com/300', 50, 500);
