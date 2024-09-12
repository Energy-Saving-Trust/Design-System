---
title: Alerts
layout: documentation-page
section: components
---

Alert is a component for displaying messages related to events concerning the user's work in the interface.

## Usage guidance

If it is a dismissible alert it should display at the top of the screen overlaid over other content.

All other alerts should display at the top of the content section as close to the section it relates to as possible.

### When to use

- The user needs feedback before or after an action.
- There is important information the user must review before or after moving to another section of the site, or taking an action.

### When not to use

- Do not use page alerts to simply highlight important content. They are for information that is new, critical, and temporary.
- Do not put more than one page alert on a page.


## Alert content examples

{% capture code_render %}
<div class="alert alert-info alert-dismissible" role="alert">
  A simple primary alert—check it out!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-info alert-dismissible" role="alert">
  <h2 class="h6">Notification header</h2>
  A simple primary alert with a header.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-info alert-dismissible" role="alert">
  <h2 class="h6 alert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>Notification header</h2>
  A simple primary alert with a header and an icon.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-info alert-dismissible" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>A simple primary alert with an icon.
  </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Colour variants

Accessibility Tip: Provide additional visual cues, such as content and iconography, alongside colour to convey the intention of the alert. The meaning of colour may not be conveyed to users of assistive technologies, such as screen readers.

{% capture code_render %}
<div class="alert alert-warning alert-dismissible" role="alert">
  <h2 class="h6">Warning notification</h2>
  A simple primary alert with a header.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-danger alert-dismissible" role="alert">
  <h2 class="h6">Danger notification</h2>
  A simple primary alert with a header.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-success alert-dismissible" role="alert">
  <h2 class="h6">Success notification</h2>
  A simple primary alert with a header.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
