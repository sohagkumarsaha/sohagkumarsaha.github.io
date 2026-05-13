// Handle Follow button toggle for mobile/tablet with smooth animations
document.addEventListener('DOMContentLoaded', function() {
  const details = document.querySelector('.author__urls-details');
  const summary = details ? details.querySelector('summary') : null;

  if (!details || !summary) return;

  let isAnimating = false;

  // Check if mobile/tablet view (max-width: 1024px)
  function isMobileView() {
    return window.innerWidth <= 1024;
  }

  // Handle toggle with smooth animation
  function handleToggle(e) {
    if (e) {
      e.preventDefault();
    }

    // Prevent double-clicking during animation
    if (isAnimating) return;

    const isOpen = details.hasAttribute('open');
    const urlsList = details.querySelector('.author__urls');

    if (!urlsList) return;

    if (isOpen) {
      // Closing animation
      isAnimating = true;
      urlsList.style.animation = 'slideUp 0.3s ease-out forwards';
      setTimeout(() => {
        details.removeAttribute('open');
        urlsList.style.animation = '';
        isAnimating = false;
      }, 300);
    } else {
      // Opening - set open attribute, CSS animation handles it
      isAnimating = true;
      details.setAttribute('open', '');
      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }
  }

  // Initial setup based on view
  function initializeView() {
    if (isMobileView()) {
      // Remove any existing 'open' attribute on mobile
      if (details.hasAttribute('open')) {
        details.removeAttribute('open');
      }
      // Remove default summary behavior and use our custom handler
      summary.removeEventListener('click', handleToggle);
      summary.addEventListener('click', handleToggle);
    } else {
      // Desktop: always open
      if (!details.hasAttribute('open')) {
        details.setAttribute('open', '');
      }
      // Remove click handler on desktop
      summary.removeEventListener('click', handleToggle);
    }
  }

  // Initialize on load
  initializeView();

  // Handle window resize
  window.addEventListener('resize', function() {
    initializeView();
  });
});
