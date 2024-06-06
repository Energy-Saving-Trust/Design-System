---
title: Input
layout: content
section: components
---

# Input

Input documentation goes here.

## Field example:

{% capture code_render %}
<div class="est-field-group est-field-row">
  <label for="example_field1" class="est-label">Email address</label>
  <input type="email" class="est-input" id="example_field1" placeholder="name@example.com">
</div>
<div class="est-field-group est-field-row">
  <label for="example_field2" class="est-label">Full name<span>*</span></label>
  <p class="est-help-text">Helper text goes here</p>
  <input type="text" class="est-input" id="example_field2" placeholder="Jane Smith">
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}