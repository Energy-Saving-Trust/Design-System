---
title: Hint
layout: content
section: components
---

# Hint

The Hint component lets users view content to assist them in filling out a form field. This is used in place of placeholder text or tooltips.

**When to use**

Use if certain users (but not all) will require additional context in order to fill out a section of the form. 

**When not to use**

If all users will always need the information present do not hide information in a hint.  An example would be password guidance, where every user will always need to know the number of characters necessary for their password to be suitably strong.

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
