---
title: Select
layout: content
section: components
---

# Select

Select documentation goes here.

## Example

{% capture code_render %}
<div class="form-group mb-4">
  <label for="exampleFormControlSelect1" class="form-label">Select from below</label>
  <select id="exampleFormControlSelect1" class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}