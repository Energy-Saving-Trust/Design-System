  const suggestions = ["Search suggestion 1", "Search suggestion 2", "Search suggestion 3"];
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchInput = document.getElementById('large-search-input');
  const largeClearButton = document.getElementById('large-clear-button');

  function showSuggestions() {
    suggestionsContainer.innerHTML = ''; 
    const ul = document.createElement('ul'); 
    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.innerText = suggestion;
      button.type = 'button';
      button.onclick = function() { selectSuggestion(suggestion); };
      li.appendChild(button);
      ul.appendChild(li); 
    });
    suggestionsContainer.appendChild(ul);
    suggestionsContainer.style.display = 'block'; 
  }

  function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    suggestionsContainer.style.display = 'none';
    searchInput.focus();
  }

  function toggleClearButton(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const clearButton = document.getElementById(buttonId);
    if (input.value.trim() !== '') {
      clearButton.style.display = 'inline-block';
    } else {
      clearButton.style.display = 'none';
    }
  }
  
  function clearSearch(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const clearButton = document.getElementById(buttonId);
    input.value = '';
    clearButton.style.display = 'none';
    suggestionsContainer.style.display = 'none';
  }

  // Search overlay functionality
  const searchTrigger = document.getElementById('search-trigger');
  const searchOverlay = document.querySelector('.search-overlay');
  const largeSearchInput = document.getElementById('large-search-input');

  if (searchTrigger && searchOverlay && largeSearchInput) {
    searchTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.style.display = 'block';
      largeSearchInput.focus();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.style.display === 'block') {
        closeSearchOverlay();
      }
    });

    // Add close button functionality
    const closeSearchButton = document.querySelector('.close-search-overlay');
    if (closeSearchButton) {
      closeSearchButton.addEventListener('click', closeSearchOverlay);
    }
  }

  // Function to close the search overlay
  function closeSearchOverlay() {
    if (searchOverlay) searchOverlay.style.display = 'none';
    if (largeSearchInput) largeSearchInput.value = '';
    if (largeClearButton) largeClearButton.style.display = 'none';
    if (suggestionsContainer) suggestionsContainer.style.display = 'none';
  }
