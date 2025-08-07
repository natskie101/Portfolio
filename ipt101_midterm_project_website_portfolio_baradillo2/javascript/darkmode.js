// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved user preference or use system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
  updateToggleIcon(true);
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateToggleIcon(isDark);
});

// Update the toggle icon based on current mode
function updateToggleIcon(isDark) {
  const moonIcon = document.querySelector('.theme-toggle .fa-moon');
  const sunIcon = document.querySelector('.theme-toggle .fa-sun');
  
  if (isDark) {
    moonIcon.style.opacity = '0';
    sunIcon.style.opacity = '1';
  } else {
    moonIcon.style.opacity = '1';
    sunIcon.style.opacity = '0';
  }
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.body.classList.add('dark-mode');
      updateToggleIcon(true);
    } else {
      document.body.classList.remove('dark-mode');
      updateToggleIcon(false);
    }
  }
});

// Theme toggle functionality (if needed)
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    // Save theme preference to localStorage if needed
});