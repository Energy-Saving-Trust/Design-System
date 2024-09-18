---
title: Cards
layout: documentation-page
section: components
---

The Card component divides content into blocks, making it easier for users to scan. Each card focuses on a single topic.

### When to use

- When you have similar content (e.g., blog posts, products, news).
- To segment content and make it easier to scan.

### When not to use

- Do not use cards when users need to compare multiple options.
- Cards are less scannable than a list. If users are likely to know what they are searching for, use a list format to display content more efficiently.

## Default card

{% capture code_render %}
<a href="#" class="card">
  <img class="card-img-top" src="../assets/example-images/card-img.jpeg" alt="">
  <div class="card-body">
    <h5 class="card-title">Are you an installer?</h5>
    <p class="card-text">If you're an MCS certified installer, you can join Go Renewable and start quoting for the renewable technologies your business is certified to install.</p>
  </div>
</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Article card

{% capture code_render %}
<a href="#" class="card card-article">
  <div class="card-body">
    <hgroup>
      <h5 class="card-title">Policy briefing: accelerating retrofit through advice and information</h5>
      <h6 class="card-subtitle">17 May 2024</h6>
    </hgroup>
    <p class="card-text">In November 2023, Energy Saving Trust convened a group of retrofit policy experts. The aim was to consider how effective provision of…</p>
  </div>
</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Category card

{% capture code_render %}
<a href="#" class="card card-category">
  <div class="card-body">
  <hgroup>
    <h6 class="card-category">Product</h6>
    <h5 class="card-title">Go Renewable</h5>
  </hgroup>
  <img class="card-img-bottom" src="../assets/example-images/card-img.jpeg" alt="">
  </div>
</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Simple article card

{% capture code_render %}
<a href="#" class="card card-simple-article">
  <div class="card-body">
    <hgroup>
      <h5 class="card-title">Article title link</h5>
      <h6 class="card-subtitle mb-3 text-muted">17 May 2024</h6>
    </hgroup>
    <p class="card-text">Our response to the July 2024 energy price cap announcement, with commentary from Energy Saving Trust chief executive Mike Thornton.</p>
  </div>
</a>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Button card

{% capture code_render %}
<div class="card card-button card-borderless">
<img class="card-img-top" src="../assets/example-images/card-img.jpeg" alt="">
  <div class="card-body">
    <h5 class="card-title">Avoid these seven common mistakes that waste energy</h5>
    <p class="card-text">If you're an MCS certified installer, you can join Go Renewable and start quoting for the renewable technologies your business is certified to install.</p>
    <a href="#" class="btn btn-primary">Button</a>
    <a href="#" class="btn btn-secondary">Button</a>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Arrow card

{% capture code_render %}
<div class="card card-arrow card-borderless" style="width: 18rem;">
<img class="card-img-top" src="../assets/example-images/card-img.jpeg" alt="">
  <div class="card-body">
    <hgroup>
      <h5 class="card-title">Avoid these seven common mistakes that waste energy</h5>
      <h6 class="card-subtitle">17 May 2024</h6>
    </hgroup>
    <p class="card-text">If you're an MCS certified installer, you can join Go Renewable and start quoting for the renewable technologies your business is certified to install.</p>
    <a aria-label="Avoid these seven common mistakes that waste energy: Sign-up now" href="#" class="arrow-link cta-link">Sign-up now</a>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
