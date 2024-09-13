---
title: Hero
layout: documentation-page
section: patterns
---

The Hero pattern is used to draw the user into a page. It clearly identifies which page they are on, the title and image further support the intended purpose of the page.

## Example 1

{% capture code_render %}
  {% include reusable-components/hero.md %}
{% endcapture %}
{% include component-example.html code_render=code_render show_standalone_page="hero" image_path="../assets/previews/hero.png" %}

## Example 2

{% capture code_render %}
  {% include reusable-components/hero.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="hero-2" image_path="../assets/previews/hero-2.png" %}
