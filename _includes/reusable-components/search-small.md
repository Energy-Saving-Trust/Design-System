<form action="/search" method="get" class="sidebar-search-container est-search-container col-5">
  <label for="search-input" class="visually-hidden">Search:</label>
  <input type="search" id="search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="toggleClearButton('search-input', 'clear-button-small')">
  <button type="button" id="clear-button-small" class="clear-search" aria-label="Clear search" onclick="clearSearch('search-input', 'clear-button-small')" style="display:none;">
    &#x2715;
  </button>
  <button type="submit" class="search-button" aria-label="Submit search"></button>
</form>