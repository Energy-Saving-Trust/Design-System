---
title: Buttons
layout: documentation-page
section: components
---

Use a button to help users perform actions, such as submitting a form or dynamically adding, removing, showing, or hiding elements on a page.

## Usage guidance

Buttons should not be used for navigation purposes; use [links](/components/links.html) instead.

Write button text in sentence case, clearly describing the action it performs.
The button label should be short, clear, and direct. For example: "Save and continue" or "Sign in."

Button colours should not be altered. If a new button colour is needed, always ensure the colours meet accessibility standards.

The disabled state for buttons has been intentionally omitted, as we aim to avoid using buttons in a disabled state.

## Base classes

{% capture code_render %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Sizes

{% capture code_render %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Variants

{% capture code_render %}
<!-- Grassy green -->
<button type="button" class="btn btn-info">Button</button>
<!-- Deep rose -->
<button type="button" class="btn btn-danger">Button</button>
<!-- Honey yellow -->
<button type="button" class="btn btn-success">Button</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}


## Close button

{% capture code_render %}
<button type="button" class="btn-close" aria-label="Close"><span>Close</span></button>
{% endcapture %}

{% include component-example.html code_render=code_render %}
