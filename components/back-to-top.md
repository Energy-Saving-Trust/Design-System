---
title: Back to top
layout: documentation-page
section: components
---

The Back to top component assist users in quickly returning to the top of the page.

## Usage guidance

- Always place it in the bottom right of the screen.
- It should appear after the user has scrolled past the fold.
- Ensure it stops before the footer to avoid covering important links.

### When to use

- Use this component on websites with content that extends beyond the fold.
- It is particularly useful for mobile users, as content that appears short on desktop can require extensive scrolling on mobile.

### When not to use

Do not include this component if users never need to scroll past the fold.

## Example

{% capture code_render %}
<a href="#" class="back-to-top">Back to top</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}
