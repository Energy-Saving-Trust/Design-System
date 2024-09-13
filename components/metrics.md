---
title: Metrics
layout: documentation-page
section: components
---

The Metrics component displays the title and value of a metric. A single stat can be used by itself or side-by-side with other single stats to display a topical set of metrics.


## Dashboard example

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
