---
title: Checkboxes & radios
layout: documentation-page
section: components
---

The Checkbox component allows users to select one or more options from a list. A Radio button is used when the user can select only one option from several choices.

### When to use checkboxes

- When you need the user to select multiple items from a list.
- For opt-ins, when the user needs to certify their agreement with a statement.

### When to use radio buttons

- When the user is restricted to selecting a single option.

### When not to use radio buttons

- If the list contains more than ten items, use a Select component or dropdown menu instead of radio buttons.

## Checkboxes

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

## Radio buttons

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
