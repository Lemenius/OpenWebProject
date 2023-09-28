let currentTab = null;
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
