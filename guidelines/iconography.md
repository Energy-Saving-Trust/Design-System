---
title: Iconography
layout: documentation-page
section: guidelines
---


A set of icons and pictograms have been designed especially for Energy Saving Trust to compliment our core brand assets, and to help add personality and warmth to our communications. They are useful where there is lack of budget for photography as well as help supplement it.

Whether icons, pictograms or illustrations should be used depends on both the size of use and purpose.

## Functional icons

<div class="icon-sample-grid">
  {% for icon in site.icons %}
    <a class="icon-sample" href="{{ icon.url }}.html" data-name="{{ icon.name }}" data-id="{{ icon.class }}">
      {% if icon.source=="Red Stonex" %}
        <div class="icon-sample-preview rs">{{ icon.content }}</div>
      {% else %}
        <div class="icon-sample-preview">{{ icon.content }}</div>
      {% endif %}
      <div class="icon-sample-class">{{ icon.title | replace: " ", "-"}}</div>
    </a>
  {% endfor %}
</div>

<style>

.icon-sample-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 35px;
}

.icon-sample {
  vertical-align: -.125em;
  color: #000;
  text-decoration: none !important;
  width: 165px;
}


a.icon-sample:hover svg {
  color: #084298;
}

a.icon-sample:hover .icon-sample-class {
  color: #084298;
}

.icon-sample-preview {
  text-align: center !important;
  background-color: #F2F2F0;
  border-radius: 6px;
  padding: 25px 0;
  width: 165px
}

.icon-sample-preview.rs {
  background-color: #d0dae4;
}

.icon-sample-preview svg {
  width: 32px;
  height: 32px;
  vertical-align: -.125em;
  color: #000;
}

.icon-sample-preview.pictogram svg {
  width: 88px;
  height: 88px;
}

.icon-sample-class {
  font-size: 80%;
  color: #6c757d;
  text-decoration: none !important;
  text-align: center !important;
  padding-top: 10px;
}



</style>
