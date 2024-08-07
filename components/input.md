---
title: Input
layout: content
section: components
---

# Input

Input documentation goes here.



## Example

{% capture code_render %}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Full name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1">
</div>

<div>
  <label for="exampleFormControlInput2" class="form-label">Email address (required)</label>
  <div id="passwordHelpBlock" class="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>
  <input type="text" class="form-control" id="exampleFormControlInput2">
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
