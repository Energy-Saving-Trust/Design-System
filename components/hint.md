---
title: Hint
layout: content
section: components
---

# Hint

Hint documentation goes here.

## Hint example:

{% capture code_render %}
<a class="hint-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
<div class="collapse" id="collapseExample">
  <div class="hint-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}