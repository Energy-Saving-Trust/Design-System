---
title: Search
layout: content
section: testing
---

<form action="/search" method="get" class="sidebar-search-container est-search-container col-5">
  <label for="search-input" class="visually-hidden">Search:</label>
  <input type="search" id="search-input" name="query" class="search-input" placeholder="Search" aria-label="Search">
  <button type="button" class="clear-search" aria-label="Clear search" onclick="document.getElementById('search-input').value = '';">
    &#x2715;
  </button>
  <button type="submit" class="search-button" aria-label="Submit search"></button>
</form>

<div class="large-search-wrap col-10">
  <form action="/search" method="get" class="large-search-container est-search-container">
    <label for="search-input" class="visually-hidden">Search:</label>
    <input type="search" id="large-search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="showSuggestions()">
    <button type="button" class="clear-search" aria-label="Clear search" onclick="document.getElementById('large-search-input').value = '';">
      &#x2715;
    </button>
    <button type="submit" class="search-button" aria-label="Submit search"></button>
  </form>
  <div id="suggestions-container" class="suggestions-container" style="display:none;"></div>
</div>