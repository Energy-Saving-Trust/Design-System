---
title: Accordion
layout: documentation-page
section: components
---

Accordions are expandable sections of content. Each section contains a summary element, and more body text when opened.

Accordions help organise information, shorten the page length and reduce the scroll time by hiding information that most people do not need to see.

## Usage guidance

Accordions hide information until someone opens them, requiring an additional action. This means users have to do extra work to access the information. If most users need to see the content, include it in the body so it’s easier to scan.

If you only have enough content for one accordion, consider dividing it into sections and avoiding the accordion altogether.

### When to use

- Use accordions to hide content most readers do not need.
- When users only need certain information.

### When not to use

- If more than a third of your readers need the information captured in the accordion.
- To make a page look shorter.

## Example

{% capture code_render %}
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Definition List accordion example:

{% capture code_render %}
<dl class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <dt class="accordion-header" id="dl-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dl-collapseOne" aria-expanded="false" aria-controls="dl-collapseOne">
        Accordion Item #1
      </button>
    </dt>
    <dd id="dl-collapseOne" class="accordion-collapse collapse" aria-labelledby="dl-headingOne">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-dl</code> class. This is the first item's accordion body.</div>
    </dd>
  </div>
  <div class="accordion-item">
    <dt class="accordion-header" id="dl-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dl-collapseTwo" aria-expanded="false" aria-controls="dl-collapseTwo">
        Accordion Item #2
      </button>
    </dt>
    <dd id="dl-collapseTwo" class="accordion-collapse collapse" aria-labelledby="dl-headingTwo">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </dd>
  </div>
  <div class="accordion-item">
    <dt class="accordion-header" id="dl-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dl-collapseThree" aria-expanded="false" aria-controls="dl-collapseThree">
        Accordion Item #3
      </button>
    </dt>
    <dd id="dl-collapseThree" class="accordion-collapse collapse" aria-labelledby="dl-headingThree">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </dd>
  </div>
</dl>
{% endcapture %}

{% include component-example.html code_render=code_render %}
