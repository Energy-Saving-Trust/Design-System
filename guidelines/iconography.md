---
title: Iconography
layout: documentation-page
section: guidelines
---


A set of icons and pictograms have been designed especially for Energy Saving Trust to compliment our core brand assets, and to help add personality and warmth to our communications. They are useful where there is lack of budget for photography as well as help supplement it.

Whether icons, pictograms or illustrations should be used depends on both the size of use and purpose.

## Functional icons

{% for icon in site.icons %}

  <div>
    <a href="{{ icon.url }}">
      {{ icon.content }}
    </a>
  </div>

{% endfor %}

{% for file in site.static_files %}
  <div>{{ file.path }}</div>
{% endfor %}
