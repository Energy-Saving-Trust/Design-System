---
title: Hint
layout: documentation-page
section: components
---

The Hint component provides users with additional content to assist them in filling out a form field. It is used instead of placeholder text or tooltips.

## Usage guidance

The recommended practice is to provide supporting text directly without using a component. The Hint component should be considered only for less critical or more complex information.

- If the information is **very important** and most or all users will need it, include it in the form field label.
- If the information is **fairly important** and many users will need it, provide it as help text that is visible by default.
- If the information is **less important** and only a minority of users will need it, use a Hint to display the text.

### When to use

- Use the Hint component if a smaller percentage of users require additional context to fill out a section of the form.

### When not to use

- Do not use a Hint if the majority of users rely on the information; it should be visible without hiding.
- Hints are specific to forms. For standard content pages, use the [Accordion component](/components/accordion.html) instead.

## Example

{% capture code_render %}
<a class="hint-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Why do we need this information?
</a>
<div class="collapse" id="collapseExample">
  <div class="hint-body">
    <p>To provide you with more accurate and tailored advice, we would like to ask a few simple questions about how energy is used in the property. You can skip the entire section or individual questions as they are presented.</p>
    <p>This will only take a minute and will help us offer personalised recommendations for saving energy and reducing bills.</p>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
