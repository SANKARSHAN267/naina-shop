// Handle product button clicks
document.querySelectorAll('.btn-primary').forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    // Show contact modal instead of adding to cart
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
  });
});

// Close modal when X is clicked
document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('contactModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function (event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle CTA button
document.querySelector('.btn-secondary').addEventListener('click', function () {
  chrome.tabs.create({
    url: 'https://example.com/shop',
  });
});

// Handle contact button
document.querySelector('.btn-outline').addEventListener('click', function () {
  chrome.tabs.create({
    url: 'mailto:sales@joosmicsale.com',
  });
});

// Notification function
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #5a3a7f;
    color: white;
    padding: 12px 16px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    z-index: 9999;
    animation: slideDown 0.3s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  document.body.prepend(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
