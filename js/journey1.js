 function createStampedImage(src, top, left, tabId) {
    const container = document.createElement('div');
    container.classList.add('image-container');

    const stampedImage = document.createElement('img');
    stampedImage.src = src;
    stampedImage.alt = 'Stamped Image';
    stampedImage.classList.add('stamped-image');
    stampedImage.style.top = `${top}px`;
    stampedImage.style.left = `${left}px`;

    const button = document.createElement('button');
    button.innerText = 'Open Tab';
    button.classList.add('button');
    button.onclick = function() {
      toggleTab(tabId);
    };

    container.appendChild(stampedImage);
    container.appendChild(button);

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(container);
  }

  createStampedImage('https://via.placeholder.com/300', -75, -400, 'tab1');
  createStampedImage('https://via.placeholder.com/300', -200, 200, 'tab2');
  createStampedImage('https://via.placeholder.com/300', -400, 800, 'tab3');

  function toggleTab(tabId) {
    const tab = document.getElementById(tabId);
    if (tab.style.display === 'none' || tab.style.display === '') {
      tab.style.display = 'block';
    } else {
      tab.style.display = 'none';
    }
  }
