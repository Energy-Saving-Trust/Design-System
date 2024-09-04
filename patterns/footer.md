---
title: Footer
layout: content
section: patterns
---

# Footer

The Footer pattern is a consistent set of links to company information, mandatory items such as a privacy statement and cookie policy, a copyright statement and social media links.



## Footer

{% capture code_render %}
  {% include reusable-components/footer.md %}{% endcapture %}
{% include component-example.html code_render=code_render show_standalone_page="footer" image_path="../assets/previews/footer.png" %}

## Product footer

{% capture code_render %}
  {% include reusable-components/footer-product.md %}
{% endcapture %}
{% include component-example.html code_render=code_render show_standalone_page="footer-product" image_path="../assets/previews/footer-product.png" %}

## Footer (partner website)

{% capture code_render %}
  {% include reusable-components/footer-partner.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="footer-partner" image_path="../assets/previews/footer-partner.png" %}
