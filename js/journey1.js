let currentTab = null;
const tabContainers = document.querySelectorAll('.tab-container');
tabContainers.forEach(tab => {
  tab.style.display = 'none';
});

function toggleTab(tabId) {
  const tab = document.getElementById(tabId);
  if (currentTab && currentTab !== tab) {
    currentTab.style.display = 'none';
  }
  if (tab.style.display === 'none' || tab.style.display === '') {
    tab.style.display = 'block';
    currentTab = tab;
  } else {
    tab.style.display = 'none';
    currentTab = null;
  }
}
  function applyFadingEffect() {
  const content = document.getElementById('tab-content');

  // Calculate the height of the fading effect (in pixels)
  const fadeHeight = 200;

  // Apply fading effect to the top and bottom edges
  content.style.paddingTop = fadeHeight + 'px';
  content.style.paddingBottom = fadeHeight + 'px';
}

// Apply the fading effect when the window is loaded or resized
window.addEventListener('load', applyFadingEffect);
window.addEventListener('resize', applyFadingEffect);
