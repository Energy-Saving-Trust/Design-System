---
title: Input
layout: documentation-page
section: components
---

Input component allows the user to enter a single line of text. It is one of the basic elements used in forms, search fields, and similar applications.

## Usage guidance

Input components need to be clearly labeled, appropriately sized for the expected input, and accompanied by any hints users may need to fill them successfully.

### Input label

All text inputs must have visible labels. Placeholder text is not an acceptable substitute for a label, as it disappears when users start typing.

Labels are positioned above the text input they refer to. They should be short, direct, and written in sentence case.

### Use appropriately-sized text inputs

Help users understand what they should enter by making each text input box the right size for its intended content.

By default, the width of text inputs in the design system is fluid and will fit the full width of the container they are placed in.

If a smaller input is needed, you can either use a fixed-width input or apply width override classes to create a smaller fluid-width input.

### When to use text input

Use text input fields in forms where users need to enter email addresses, passwords, phone numbers, or any other single-line text data.

### When not to use

If you expect users to provide multiple lines of text, do not use the text input component. Instead, use the [textarea component](/components/textarea.html).

## Example

{% capture code_render %}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Full name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1">
</div>

<div>
  <label for="exampleFormControlInput2" class="form-label">EPC Report Reference Number (required)</label>
  <div id="exampleHelpBlock" class="form-text">
    You can find the Report Reference Number (RRN) in the top right-hand corner of your Energy Performance Certificate (EPC). It will be a 20-digit number in this format: 1111-2222-3333-4444-5555.
  </div>
  <input type="text" class="form-control" id="exampleFormControlInput2">
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
