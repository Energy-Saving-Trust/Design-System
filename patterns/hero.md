---
title: Hero
layout: content
section: patterns
---

# Hero

The Hero pattern is used to draw the user into a page. It clearly identifies which page they are on, the title and image further support the intended purpose of the page.



## Hero example 1

{% capture code_render %}
<div class="hero">
  <div class="hero-left honeyyellow">
    <div class="group">
      <span class="label">Energy Saving Trust</span>
      <h1 class="title">How to save money on my energy bills</h1>
      <a href="#" class="btn btn-primary">Find out how</a>
    </div>
  </div>
  <div class="hero-right switch-container sq-container--100px sq-container--trans sq-left sq-pos--50 honeyyellow" style="background-image: url('../assets/example-images/hero.png');">
    <div class="square">
      <svg class="corner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g><path d="m10,0H0v10C0,4.48,4.48,0,10,0Z"></path></g></svg>
      <svg class="corner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g><path d="m10,0H0v10C0,4.48,4.48,0,10,0Z"></path></g></svg>
    </div>
  </div>
</div>
{% endcapture %}
{% include component-example.html code_render=code_render show_standalone_page="hero" image_url="../assets/previews/hero.png" %}

## Hero example 2

{% capture code_render %}
<div class="hero">
  <div class="hero-left honeyyellow">
    <div class="group">
      <span class="label">Energy Saving Trust</span>
      <h1 class="title">How to save money on my energy bills</h1>
      <span class="description">Support for communities, local authorities, supply chain and businesses</span>
    </div>
  </div>
  <div class="hero-right switch-container sq-container--100px sq-container--trans sq-left sq-pos--50 honeyyellow" style="background-image: url('../assets/example-images/hero.png');">
    <div class="square">
      <svg class="corner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g><path d="m10,0H0v10C0,4.48,4.48,0,10,0Z"></path></g></svg>
      <svg class="corner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g><path d="m10,0H0v10C0,4.48,4.48,0,10,0Z"></path></g></svg>
    </div>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="hero-2" image_url="../assets/previews/hero-2.png" %}
