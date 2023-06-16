// JavaScript code for dark mode toggle

// Check if the user has a preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get the dark mode toggle element
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Initialize dark mode based on user preference
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Add event listener to the dark mode toggle
darkModeToggle.addEventListener('change', () => {
  toggleDarkMode();
});
