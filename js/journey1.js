function toggleTab(tabId) {
  const tab = document.getElementById(tabId);
  if (tab.style.display === 'none' || tab.style.display === '') {
    tab.style.display = 'block';
  } else {
    tab.style.display = 'none';
  }
}
