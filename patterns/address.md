---
title: Address finder
layout: content
section: patterns
---

# Address finder

Address finder documentation goes here.



## Manual address example

{% capture code_render %}
<h3 class="h4 mb-2">What is your address?</h3>
<div class="mb-4">
  <a class="hint-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      Why do I need to do this?
    </a>
  <div class="collapse" id="collapseExample">
    <div class="hint-body">
      Creating an account will allow us save your results and offer more customised advice. 
    </div>
  </div>
</div>
<div class="mb-4">
  <label for="address_1" class="form-label">Address line 1</label>
  <div class="form-text">Example: 223-231 Pentonville Rd</div>
  <input type="text" class="form-control" id="address_1">
</div>
<div class="mb-4">
  <label for="address_2" class="form-label">Address line 2 (optional)</label>
  <div class="form-text">Example: Unit 7, The Lodge</div>
  <input type="text" class="form-control" id="address_2">
</div>
<div class="mb-4">
  <label for="address_3" class="form-label">Town or city</label>
  <input type="text" class="form-control" id="address_3">
</div>
<div class="mb-4">
  <label for="postcode" class="form-label">Postcode</label>
  <div class="form-text">Example: LL13 7AS<br>
Please leave a space between the two parts of the postcode.</div>
  <input type="text" class="form-control" id="postcode">
</div>
<p>Skip manual entry. <a href="#">Find my address</a></p>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Postcode example

{% capture code_render %}
<h3 class="h4 mb-2">What is your address?</h3>
<div class="mb-4">
  <a class="hint-link" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
      Why do I need to do this?
    </a>
  <div class="collapse" id="collapseExample2">
    <div class="hint-body">
      Creating an account will allow us save your results and offer more customised advice. 
    </div>
  </div>
</div>
<div class="mb-4">
  <label for="address_1" class="form-label">House number or name (optional)</label>
  <div class="form-text">Example: Unit 7, The Lodge</div>
  <input type="text" class="form-control" id="address_1">
</div>
<div class="mb-4">
  <label for="postcode" class="form-label">Postcode</label>
  <div class="form-text">Example: LL13 7AS<br>
Please leave a space between the two parts of the postcode.</div>
  <input type="text" class="form-control" id="postcode">
</div>
<p><a href="#">Enter my address manually</a></p>
{% endcapture %}

{% include component-example.html code_render=code_render %}