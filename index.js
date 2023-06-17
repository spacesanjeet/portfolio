// Check if the user has a preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get the dark mode toggle element
const darkModeToggle = document.getElementById('darkModeToggle');
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Function to toggle dark mode
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Function to toggle mobile menu
function toggleMenu() {
  menu.classList.toggle('active');
}

// Set the initial dark mode based on the user's preference
if (prefersDarkMode) {
  darkModeToggle.checked = true;
  toggleDarkMode();
}

// Listen for changes to the dark mode toggle
darkModeToggle.addEventListener('change', toggleDarkMode);

// Listen for clicks on the menu icon
menuIcon.addEventListener('click', toggleMenu);
