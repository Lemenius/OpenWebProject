let currentTab = null;
function toggleTab(tabId) {
  const tab = document.getElementById(tabId);
  if (currentTab === tab) {
    tab.style.display = 'none';
    currentTab = null;
  } else {
    if (currentTab) {
      currentTab.style.display = 'none';
    }
    tab.style.display = 'block';
    currentTab = tab;
  }
}
