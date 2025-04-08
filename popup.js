const button = document.getElementById('ShukatuTrans')
button.addEventListener('click', () => {
  chrome.storage.local.set({ enabled: false });
})
