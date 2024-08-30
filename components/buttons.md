---
title: Buttons
layout: content
section: components
---

# Buttons

The Button component guides the user to take a specific action. Unlike links, buttons are for primary call to actions or to submit forms.

**Usage guidance**

- Button colours should not be changed. If there is a need for a new colour of button always check the accessibility of the colours
- The disabled state for buttons has been intentionally left off. We avoid having buttons in a disabled state. 

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
<button type="button" class="btn btn-success">Success</button>
<!-- Deep rose -->
<button type="button" class="btn btn-danger">Danger</button>
<!-- Honey yellow -->
<button type="button" class="btn btn-warning">Warning</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Outline buttons

{% capture code_render %}
<!-- Grassy green -->
<button type="button" class="btn btn-outline-success">Success</button>
<!-- Deep rose -->
<button type="button" class="btn btn-outline-danger">Danger</button>
<!-- Honey yellow -->
<button type="button" class="btn btn-outline-warning">Warning</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Close button

{% capture code_render %}
<button type="button" class="btn-close" aria-label="Close"></button>
{% endcapture %}

{% include component-example.html code_render=code_render %}
