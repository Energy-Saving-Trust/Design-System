---
title: Progress indicators
layout: documentation-page
section: components
---


The Progress indicator component helps a user understand how far into a particular journey they are and how much further they have.

## Usage guidance

The Progress bar with step text should expand to fill the page. If there are only three steps the progress bar should still fill the top of the page.

### When to use

- Always include a progress indicator for forms or questionnaires spread out over longer than one page. This is essential as it helps the user anticipate how long they will need to complete the journey.
- Use the **Progress bar with step text** when the users journey always has a set number of steps.
- Use the **Progress bar that shows a percentage** if the number of steps is variable.
- Use the **Progress reading bar** solely for when users are scrolling through long content (blogs, articles, in-depth guides) on a single page.


## Progress bar

{% capture code_render %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="25%">25%</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Progress bar with step text

{% capture code_render %}
<div class="progress progress-steps">
  <div class="progress-steps-grid">
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="100% complete" class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="100% complete" class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="100% complete" class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="0% complete" class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="0% complete" class="step-label">House details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div aria-label="0% complete" class="step-label">House details</div>
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

## Reading progress

{% capture code_render %}
<div class="progress progress-reading">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
