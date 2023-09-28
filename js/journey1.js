let currentTab = null;
const tabContainers = document.querySelectorAll('.tab-container');
tabContainers.forEach(tab => {
  tab.style.display = 'none';
});

function toggleTab(tabId) {
  const tab = document.getElementById(tabId);

  // Fade out the current tab's content
  if (currentTab && currentTab !== tab) {
    fadeOut(currentTab);
  }

  if (tab.style.display === 'none' || tab.style.display === '') {
    // Fade in the tab's content
    fadeIn(tab);
    currentTab = tab;
  } else {
    // Fade out the tab's content
    fadeOut(tab);
    currentTab = null;
  }
}

function fadeIn(element) {
  element.style.opacity = 0;

  const fadeInAnimation = element.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    {
      duration: 500, // Adjust the duration as needed
      easing: 'ease-in',
      fill: 'forwards'
    }
  );

  fadeInAnimation.onfinish = () => {
    element.style.opacity = 1;
  };
}

function fadeOut(element) {
  const fadeOutAnimation = element.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    {
      duration: 500, // Adjust the duration as needed
      easing: 'ease-out',
      fill: 'forwards'
    }
  );

  fadeOutAnimation.onfinish = () => {
    element.style.display = 'none';
  };
}
