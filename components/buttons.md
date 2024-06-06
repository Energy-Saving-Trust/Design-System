---
title: Buttons
layout: content
section: components
---

# Buttons

Buttons documentation goes here.

## Primary and secondary buttons:

{% capture code_render %}
<button type="button" class="est-btn">Primary</button>
<button type="button" class="est-btn est-btn__secondary">Secondary</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Small buttons:

{% capture code_render %}
<button type="button" class="est-btn est-btn__small">Primary</button>
<button type="button" class="est-btn est-btn__small est-btn__secondary">Secondary</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Close button:

{% capture code_render %}
<button type="button" class="est-close" aria-label="Close"></button>
{% endcapture %}

{% include component-example.html code_render=code_render %}
