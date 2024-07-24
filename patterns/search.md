---
title: Search
layout: content
section: patterns
---

# Search

Search documentation goes here.



## Small search for sidebar

{% capture code_render %}
<form action="/search" method="get" class="sidebar-search-container est-search-container col-5">
  <label for="search-input" class="visually-hidden">Search:</label>
  <input type="search" id="search-input" name="query" class="search-input" placeholder="Search" aria-label="Search">
  <button type="button" class="clear-search" aria-label="Clear search" onclick="document.getElementById('search-input').value = '';">
    &#x2715;
  </button>
  <button type="submit" class="search-button" aria-label="Submit search"></button>
</form>
{% endcapture %}

{% include component-example.html code_render=code_render %}