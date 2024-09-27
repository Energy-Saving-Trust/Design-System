---
title: Address finder
layout: documentation-page
section: patterns
---

The Address pattern helps users provide their address using their postcode or by entering it manually.

## Usage guidance

Place the burden of correcting formatting on the system not the user. For example, a user should be able to enter their postcode with or without spaces. E.g. ‘N1 9NG’ or ‘N19NG’ are both accepted by the system.

### When to use

- Wherever possible use the postcode finder with the option to enter addresses manually
- Always offer the option to enter their address manually

## Manual address entry

{% capture code_render %}
  {% include reusable-components/address-manual.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="address-manual" %}

## Address search

{% capture code_render %}
  {% include reusable-components/address-postcode.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="address-postcode" %}

## Address select

{% capture code_render %}
  <h3 class="h4 mb-2">Select correct address</h3>
  <p><a href="#">Enter my address manually</a></p>
  <ul class="link-list">
    <li><a href="#">17 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">1 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">2 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">3 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">4 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">5 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">6 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">7 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">8 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">9 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">10 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">11 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">12 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
    <li><a href="#">13 Valley Place, 68 Glenbuck Road, Surbiton, KT6 6DL</a></li>
  </ul>

{% endcapture %}

{% include component-example.html code_render=code_render %}
