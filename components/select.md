---
title: Select
layout: documentation-page
section: components
---

The Select component lets users select a single item from a list.

## Usage guidance

The Select component intentionally keeps to the system default styling. This ensures that it will be accessible and optimised for use on both desktop and mobile browsers.

### When to use

Use the Select instead of a [Radio component](/components/checkbox-radio.html) when the list is sufficiently long enough that it would cause excessive scrolling for the user if all the options were presented.

### When not to use

Use the [Radio component](/components/checkbox-radio.html) in place of the Select if there are around eight or less items and it would not cause the user to need to do excessive scrolling.

## Example

{% capture code_render %}
<div class="form-group mb-4">
  <label for="exampleFormControlSelect1" class="form-label">Is this your main residence?</label>
  <div id="exampleHelpBlock" class="form-text">
    Please confirm that this is not a holiday home or second home.
  </div>
  <select id="exampleFormControlSelect1" class="form-select" aria-label="Default select example">
    <option selected>Please select</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
