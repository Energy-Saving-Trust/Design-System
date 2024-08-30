---
title: Back to Top
layout: content
section: components
---

# Back to Top

The Back to top component assist users in quickly returning to the top of the page.

**When to use**

- Use on all websites with content that extends beyond the fold
- Mobile users will have a greater need for this component as even content that appears short on Desktop can require a lot of scrolling on mobile

**When not to use**

Do not include on the page if the user never needs to scroll past the fold.

**Usage guidance**

- Always place in the bottom right of the screen
- Should appear after the user has scrolled past the fold
- Should stop before the footer to avoid covering important links

## Back to Top example:

{% capture code_render %}
<a href="#" class="back-to-top">Back to top</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}
