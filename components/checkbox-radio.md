---
title: Checkbox & Radio
layout: content
section: components
---

# Checkbox & Radio

Checkbox & Radio documentation goes here.

**When to use checkboxes**

- When you have multiple items in a list you need the user to select.
- For opt-ins when you need the user to certify their agreement with a statement.

**When to use radios**

- When the user is restricted to choosing a single answer

**When not to use radios**

- If the list is longer than ten items use the Select component or a dropdown menu instead of radio buttons

## Checkbox example:

{% capture code_render %}
<fieldset>
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
</fieldset>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Radio example:

{% capture code_render %}
<fieldset>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
</fieldset>
{% endcapture %}

{% include component-example.html code_render=code_render %}
