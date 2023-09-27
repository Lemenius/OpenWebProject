function toggleTab(tabId) {
  const tabs = document.querySelectorAll('.tab-container');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
}
