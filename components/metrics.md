---
title: Metrics
layout: content
section: components
---

# Metrics

Metrics documentation goes here.



## Dashboard metrics

{% capture code_render %}
<div class="metric-group metric-dashboard">
  <div class="metric">
    <div class="metric-label-top">Sites</div>
    <div class="metric-content">
      <span class="metric-number">652</span>
      <span class="metric-label-side">Total</span>
    </div>
  </div>

  <div class="metric">
    <div class="metric-label-top">Pages</div>
    <div class="metric-content">
      <span class="metric-number">1411</span>
      <span class="metric-label-side">Total</span>
    </div>
  </div>

  <div class="metric">
    <div class="metric-content">
      <span class="metric-number">463</span>
      <span class="metric-label-side">Cached</span>
    </div>
  </div>

  <div class="metric">
    <div class="metric-content">
      <span class="metric-number">925</span>
      <span class="metric-label-side">Not cached</span>
    </div>
  </div>

  <div class="metric">
    <div class="metric-content">
      <span class="metric-number">21</span>
      <span class="metric-label-side">Parsed</span>
    </div>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

