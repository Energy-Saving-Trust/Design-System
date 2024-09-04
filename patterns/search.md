---
title: Search
layout: content
section: patterns
---

# Search

The Search pattern lets users search a site for a phrase or keyword.

**Usage guidance**

- Use the large search by default. Only use the small search for pages that need their own search (for example search results within a page).
- The ‘Header’ pattern shows how to integrate the search into the navigation on mobile versus desktop.

## Small search for sidebar

{% capture code_render %}
<form action="/search" method="get" class="sidebar-search-container est-search-container col-5">
  <label for="search-input" class="visually-hidden">Search:</label>
  <input type="search" id="search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="toggleClearButton('search-input', 'clear-button-small')">
  <button type="button" id="clear-button-small" class="clear-search" aria-label="Clear search" onclick="clearSearch('search-input', 'clear-button-small')" style="display:none;">
    &#x2715;
  </button>
  <button type="submit" class="search-button" aria-label="Submit search"></button>
</form>
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="search-small" %}

## Large search

{% capture code_render %}
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
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="search-large" %}
