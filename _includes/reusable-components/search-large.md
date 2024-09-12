<div class="large-search-wrap col-10">
  <form action="/search" method="get" class="large-search-container est-search-container">
    <label for="search-input" class="visually-hidden">Search:</label>
    <input type="search" id="large-search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="showSuggestions(); toggleClearButton('large-search-input', 'clear-button-large')">
    <button type="button" id="clear-button-large" class="clear-search" aria-label="Clear search" onclick="clearSearch('large-search-input', 'clear-button-large')" style="display:none;">
      &#x2715;
    </button>
    <button type="submit" class="search-button" aria-label="Submit search"></button>
  </form>
  <div id="suggestions-container" class="suggestions-container" style="display:none;"></div>
</div>