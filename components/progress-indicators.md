---
title: Progress indicators
layout: content
section: components
---

# Links

Links documentation goes here.



## Progress bar

{% capture code_render %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Progress bar with step text

{% capture code_render %}
<div class="progress progress-steps">
  <div class="progress-steps-grid">
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
  </div>
  <div class="main-label">
    <div class="position-number">
      <span class="circle">3</span><span class="of"> of 6</span>
    </div>
    <span class="position-label">House details</span>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Progress reading

{% capture code_render %}
<div class="progress progress-reading">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}


