---
title: Select
layout: content
section: components
---

# Select

Select documentation goes here.

## Field example:

{% capture code_render %}
<div class="est-field-group est-field-row">
  <label for="example_select1" class="est-label">Select dropdown</label>
  <select id="example_select1" class="est-select" aria-label="Please select value" required>
    <option disabled selected value="">Please select value</option>
    <option value="1">Value 1</option>
    <option value="2">Value 2</option>
    <option value="3">Value 3</option>
  </select>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}