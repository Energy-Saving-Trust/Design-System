---
title: Buttons
layout: content
section: components
---

# Buttons

Buttons documentation goes here.


#### Examples of the code render/preview blocks

Render and preview use the same code block:

{% capture code_render %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
{% endcapture %}

{% include component-example.html code_render=code_render %}

Render and preview use different code blocks:

{% capture code_render %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
{% endcapture %}

{% capture code_example %}
<button type="button" class="btn btn-primary">Primary</button>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}