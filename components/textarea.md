---
title: Textarea
layout: content
section: components
---

# Textarea

Textarea documentation goes here.

## Text area example:

{% capture code_render %}
<div class="est-field-group est-field-row">
  <label for="example_field1" class="est-label">What is your reason for contacting us?</label>
  <textarea class="est-input" id="example_field1"></textarea>
</div>
<div class="est-field-group est-field-row">
  <label for="example_field2" class="est-label">More info<span>*</span></label>
  <p class="est-help-text">Helper text goes here</p>
  <textarea class="est-input" id="example_field2"></textarea>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
