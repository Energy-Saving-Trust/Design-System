---
title: Quotes
layout: documentation-page
section: components
---

The Quote component is used to highlight information from an individual or organisation we want to cite.

## Plain quote

{% capture code_render %}
<figure class="blockquote-wrapper">
  <blockquote class="blockquote">
    <p>The savings are incredible. It’s a no-brainer - just do it!</p>
  </blockquote>
  <cite class="blockquote-footer">
    Graham<br>
    <span>Optional organisation</span>
  </cite>
</figure>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Quote variant 1

{% capture code_render %}
<figure class="blockquote-wrapper green">
  <blockquote class="blockquote">
    <p>The savings are incredible. It’s a no-brainer - just do it!</p>
  </blockquote>
  <cite class="blockquote-footer">
    Graham<br>
    <span>Optional organisation</span>
  </cite>
</figure>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Quote variant 2

{% capture code_render %}
<div class="blockquote-img yellow">
  <figure class="blockquote-wrapper">
    <blockquote class="blockquote">
      <p>Quote from our leaders here to set the scene and inspire whoever is reading this. </p>
    </blockquote>
    <cite class="blockquote-footer">
      Mike Thornton, Chief Executive
    </cite>
  </figure>
  <div class="blockquote-bg-img" style="background-image: url('../assets/example-images/quote-img.jpeg');"></div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
