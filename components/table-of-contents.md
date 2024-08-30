---
title: Table of Contents
layout: content
section: components
---

# Table of Contents

The Table of contents component lets users see and navigate to different sections within a long informational page.

## Example:

{% capture code_render %}
<div class="contents-table">
  <h2 class="h5">On this page</h2>
  <ul>
    <li><a href="">What is wall insulation?</a></li>
    <li><a href="">Working out your wall type</a></li>
    <li><a href="">Cavity wall insulation explained</a></li>
    <li><a href="">Costs and savings</a></li>
    <li><a href="">Is cavity wall insulation right for your home?</a></li>
  </ul>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
