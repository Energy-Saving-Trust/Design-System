---
title: Links
layout: content
section: components
---

# Links

The Link component is an alternative to using a button. It is meant for primary call to actions.

**When to use**

- Use for titles of cards or any component where the user needs to click on a piece of text.
- Use with an accompanying arrow at a call to action in place of a button.
- Links are appropriate with the text that needs to be linked would look awkward in a button.

**When not to use**

Do not use for in-line text links. These should follow the normal typography guidelines for linked text (appear blue and underlined).

## Example

{% capture code_render %}
<div><a href="#" class="cta-link arrow-link h6">Sign-up now</a></div>
<div><a href="#" class="cta-link h5">The United Kingdom has a new Labour government and a new prime minister in Keir Starmer</a></div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
