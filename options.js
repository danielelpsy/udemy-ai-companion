// options.js

document.addEventListener('DOMContentLoaded', () => {
  const openaiApiKeyInput = document.getElementById('openaiApiKey');
  const saveBtn = document.getElementById('saveBtn');
  const message = document.getElementById('message');

  chrome.storage.sync.get(['openaiApiKey'], (result) => {
    if (result.openaiApiKey) {
      openaiApiKeyInput.value = result.openaiApiKey;
    }
  });

  saveBtn.addEventListener('click', () => {
    const apiKey = openaiApiKeyInput.value.trim();
    chrome.storage.sync.set({ openaiApiKey: apiKey }, () => {
      message.innerHTML = '<div class="alert alert-success" role="alert">API Key saved successfully!</div>';
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    });
  });
});
