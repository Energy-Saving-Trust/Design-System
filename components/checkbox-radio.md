---
title: Checkbox & Radio
layout: content
section: components
---

# Checkbox & Radio

Checkbox & Radio documentation goes here.

## Checkbox & Radio example:

{% capture code_render %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}