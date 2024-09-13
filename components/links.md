---
title: Link
layout: documentation-page
section: components
---

The Link component serves as an alternative to using a button for primary calls to action.

### When to use

- Use for titles of cards or any component where the user needs to click on a piece of text.
- Use with an accompanying arrow for a call to action in place of a button.
- Links are appropriate when the linked text would look awkward as a button.

### When not to use

- Do not use for inline text links. These should follow normal typography guidelines for linked text (blue and underlined).

## Example

{% capture code_render %}
<div><a href="#" class="cta-link arrow-link h6">Sign-up now</a></div>
<div><a href="#" class="cta-link h5">The United Kingdom has a new Labour government and a new prime minister in Keir Starmer</a></div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
