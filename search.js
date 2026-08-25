   document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') return; // Only search on Enter key press
    const searchTerm = event.target.value.toLowerCase(); // Get search term and convert to lowercase
    window.find(searchTerm);
  });
});