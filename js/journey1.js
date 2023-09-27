function createStampedImage(src, top, left) {
const stampedImage = document.createElement('img');
stampedImage.src = src;
stampedImage.alt = 'Stamped Image';
stampedImage.classList.add('stamped-image');
stampedImage.style.top = `${top}px`;
stampedImage.style.left = `${left}px`;
document.getElementById('imageContainer').appendChild(stampedImage);
}

// Create three stamped images with different positions and rotations
createStampedImage("https://via.placeholder.com/300", 0, 100);
createStampedImage("https://via.placeholder.com/300", 0, 200);
createStampedImage("https://via.placeholder.com/300", 0, 300);
