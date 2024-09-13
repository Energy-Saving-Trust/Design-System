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
