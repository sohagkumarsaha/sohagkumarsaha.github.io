/**
 * Auto Day/Night Theme Switcher with Manual Override
 * - Auto: dark from 8 PM to 6 AM US Central Time
 * - Manual: moon/sun button toggles and saves to localStorage
 * - Updates Giscus comment widget theme on every switch
 */
(function () {
  var STORAGE_KEY = 'theme-preference';
  var icon = null;

  function getCentralHour() {
    return parseInt(
      new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        hour12: false
      }), 10
    );
  }

  function applyTheme(dark) {
    var html = document.documentElement;
    if (dark) {
      html.classList.add('dark-mode');
      html.classList.remove('light-mode');
    } else {
      html.classList.add('light-mode');
      html.classList.remove('dark-mode');
    }
    updateIcon(dark);
    updateGiscus(dark);
  }

  function updateIcon(dark) {
    if (!icon) icon = document.getElementById('theme-icon');
    if (!icon) return;
    icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  }

  /* Send theme message to Giscus iframe */
  function updateGiscus(dark) {
    var frame = document.querySelector('iframe.giscus-frame');
    if (!frame) return;
    try {
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: dark ? 'dark_dimmed' : 'light' } } },
        'https://giscus.app'
      );
    } catch (e) {}
  }

  function getAutoTheme() {
    var h = getCentralHour();
    return h < 6 || h >= 20;
  }

  function loadTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark')  return applyTheme(true);
    if (saved === 'light') return applyTheme(false);
    applyTheme(getAutoTheme());
  }

  function toggleTheme() {
    var newDark = !document.documentElement.classList.contains('dark-mode');
    localStorage.setItem(STORAGE_KEY, newDark ? 'dark' : 'light');
    applyTheme(newDark);
  }

  /* Apply before render to prevent FOUC */
  loadTheme();

  document.addEventListener('DOMContentLoaded', function () {
    icon = document.getElementById('theme-icon');
    updateIcon(document.documentElement.classList.contains('dark-mode'));

    var btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();






// Blog page left sidebar sticky positioning with CSS Grid workaround
document.addEventListener('DOMContentLoaded', function() {
  const blogColLeft = document.querySelector('.blog-col-left.sticky');
  const blogLayout = document.querySelector('.blog-layout');
  
  if (!blogColLeft || !blogLayout) return; // Exit if not on blog page
  
  function applyBlogStickyLogic() {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth < 1025) {
      // Mobile/Tablet: Reset to static
      blogColLeft.style.position = 'static';
      blogColLeft.style.height = 'auto';
      return;
    }
    
    // Desktop: Use fixed + calculate position
    const rect = blogColLeft.getBoundingClientRect();
    const topOffset = 32; // 2em in pixels
    
    // Apply absolute positioning within parent
    blogColLeft.style.position = 'sticky';
    blogColLeft.style.top = topOffset + 'px';
    blogColLeft.style.maxHeight = 'calc(100vh - ' + (topOffset * 2) + 'px)';
    blogColLeft.style.overflowY = 'auto';
    blogColLeft.style.zIndex = '10';
    blogColLeft.style.alignSelf = 'start';
  }
  
  // Apply on load
  setTimeout(applyBlogStickyLogic, 100);
  
  // Reapply on resize
  window.addEventListener('resize', applyBlogStickyLogic);
});


