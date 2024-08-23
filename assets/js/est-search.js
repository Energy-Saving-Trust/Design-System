  const suggestions = ["Search suggestion 1", "Search suggestion 2", "Search suggestion 3"];
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchInput = document.getElementById('large-search-input');

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
