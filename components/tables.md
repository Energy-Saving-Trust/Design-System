---
title: Tables
layout: content
section: components
---

# Tables

Tables documentation goes here.

## Example

{% capture code_render %}
<div class="form-group mb-4">
  <label for="exampleFormControlTextarea1" class="form-label">Description<span>*</span></label>
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