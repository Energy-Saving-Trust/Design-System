---
title: Search
layout: content
section: testing
---

<div id="task-wrap">

  <form action="/search" method="get" class="sidebar-search-container est-search-container col-5 mt-5 mb-5">
    <label for="search-input" class="visually-hidden">Search:</label>
    <input type="search" id="search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="toggleClearButton('search-input', 'clear-button-small')">
    <button type="button" id="clear-button-small" class="clear-search" aria-label="Clear search" onclick="clearSearch('search-input', 'clear-button-small')" style="display:none;">
      &#x2715;
    </button>
    <button onclick="complete_task();" type="button" class="search-button" aria-label="Submit search"></button>
  </form>

<div class="large-search-wrap col-10">
  <form action="/search" method="get" class="large-search-container est-search-container">
    <label for="search-input" class="visually-hidden">Search:</label>
    <input type="search" id="large-search-input" name="query" class="search-input" placeholder="Search" aria-label="Search" oninput="showSuggestions(); toggleClearButton('large-search-input', 'clear-button-large')">
    <button type="button" id="clear-button-large" class="clear-search" aria-label="Clear search" onclick="clearSearch('large-search-input', 'clear-button-large')" style="display:none;">
      &#x2715;
    </button>
    <button type="button" onclick="complete_task();" class="search-button" aria-label="Submit search"></button>
  </form>
  <div id="suggestions-container" class="suggestions-container" style="display:none;"></div>
</div>


<div style="display: none;flex-direction: column;justify-content: center;align-items: center;" class="mt-5" id="completed">
  <h2 style="text-align: center">Task successfully completed</h2>
  <a href="/testing/question.html" type="button" class="btn btn-primary mt-4">Next task</a>
</div>

<script>
  document.querySelector('.nav.col-12.col-lg-auto.mb-2.justify-content-center.mb-md-0').style.display = 'none';
  document.getElementById('test-nav').style.display = 'flex';
  document.getElementById('test-back').href = '/testing/login.html';
  document.getElementById('test-next').href = '/testing/question.html';
  document.getElementById('sidebar').style.display = 'none';

  function complete_task() {
    document.getElementById('task-wrap').style.display = 'none';
    document.getElementById('completed').style.display = 'flex';
  }
</script>