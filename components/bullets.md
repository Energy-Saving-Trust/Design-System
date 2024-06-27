---
title: Bullet Point Lists
layout: content
section: components
---

# Bullet Point Lists

Bullet Point Lists documentation goes here.

## Circle bullet example:

{% capture code_render %}
<ul>
  <li>This is a list.</li>
  <li>Structurally, it's still a list.</li>
  <li>Nested lists:
    <ul>
      <li>This is the nested list content</li>
      <li>Still showing a bullet</li>
      <li>And has appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Square bullet example:

{% capture code_render %}
<ul class="list-square">
  <li>This is a list with square bullets.</li>
  <li>Structurally, it's still a list.</li>
  <li>Nested lists:
    <ul>
      <li>This is the nested list content</li>
      <li>Still showing a bullet</li>
      <li>And has appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{% endcapture %}

{% include component-example.html code_render=code_render %}