---
title: Textarea
layout: content
section: components
---

# Textarea

The Textarea component is a form field that lets a user enter multiple lines of text.

**When not to use**

Do not use a text area to ask users for information the user is unfamiliar with, for example: the type of heating system in their home. In these cases it is better to provide the user with a list of options from which they can select.


## Example

{% capture code_render %}
<div class="form-group mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Description (required)</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>

<div class="form-group">
  <label for="exampleFormControlTextarea1" class="form-label">Tell us a bit more about your enquiry</label>
  <div id="passwordHelpBlock" class="form-text">
    Do not include personal or financial information.
  </div>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
