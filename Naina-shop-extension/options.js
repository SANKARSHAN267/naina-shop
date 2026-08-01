// Load saved settings
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(
    {
      notifications: true,
      soundAlert: true,
      storeName: "Naina's Shop",
      storeEmail: 'hello@nainashop.com',
      darkMode: false,
    },
    (items) => {
      document.getElementById('notifications').checked = items.notifications;
      document.getElementById('soundAlert').checked = items.soundAlert;
      document.getElementById('storeName').value = items.storeName;
      document.getElementById('storeEmail').value = items.storeEmail;
      document.getElementById('darkMode').checked = items.darkMode;
    }
  );
});

// Save settings
document.getElementById('save').addEventListener('click', () => {
  const settings = {
    notifications: document.getElementById('notifications').checked,
    soundAlert: document.getElementById('soundAlert').checked,
    storeName: document.getElementById('storeName').value,
    storeEmail: document.getElementById('storeEmail').value,
    darkMode: document.getElementById('darkMode').checked,
  };

  chrome.storage.sync.set(settings, () => {
    const status = document.getElementById('status');
    status.textContent = '✓ Settings saved successfully!';
    status.className = 'status-message success';

    setTimeout(() => {
      status.className = 'status-message';
    }, 3000);
  });
});
