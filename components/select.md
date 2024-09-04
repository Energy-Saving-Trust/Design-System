---
title: Select
layout: content
section: components
---

# Select

The Select component lets users select a single item from a list.

**When to use**

Use the Select instead of a Radio component when the list is sufficiently long enough that it would cause excessive scrolling for the user if all the options were presented.

**When not to use**

Use the Radio in place of the Select if there are around eight or less items and it would not cause the user to need to do excessive scrolling.

**Usage guidance**

The Select component intentionally keeps to the system default styling. This ensures that it will be accessible and optimised for use on both Desktop and Mobile.

## Example

{% capture code_render %}
<div class="form-group mb-4">
  <label for="exampleFormControlSelect1" class="form-label">Select from below</label>
  <select id="exampleFormControlSelect1" class="form-select" aria-label="Default select example">
    <option selected>Please select</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
