---
title: Search
layout: documentation-page
section: patterns
---

The Search pattern lets users search a site for a phrase or keyword.

## Usage guidance

- Use the large search by default. Only use the small search for pages that need their own search (for example search results within a page).
- The ‘Header’ pattern shows how to integrate the search into the navigation on mobile versus desktop.

## Small search for sidebar

{% capture code_render %}
  {% include reusable-components/search-small.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="search-small" %}

## Large search

{% capture code_render %}
  {% include reusable-components/search-large.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="search-large" %}
