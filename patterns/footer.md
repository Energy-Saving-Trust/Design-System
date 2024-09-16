---
title: Footer
layout: documentation-page
section: patterns
---

The Footer pattern is a consistent set of links to company information, mandatory items such as a privacy statement and cookie policy, a copyright statement and social media links.

## Footer

{% capture code_render %}
  {% include reusable-components/footer.md %}{% endcapture %}
{% include component-example.html code_render=code_render show_standalone_page="footer" image_path="../assets/previews/footer.png" %}

## Footer for products

{% capture code_render %}
<img src="/assets/previews/footer-product.png" style="width: 100%;" alt="Footer preview">
{% endcapture %}

{% capture code_example %}
<footer class="est-footer">
  <div class="est-footer-island">
    <div class="container">

      <div class="est-footer-links-container">
        <div class="left">
          <ul>
            <li class="est-footer-link"><a href="#">Information for installers</a></li>
            <li class="est-footer-link"><a href="#">Installer registration</a></li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li class="est-footer-link"><a href="#">Help</a></li>
            <li class="est-footer-link"><a href="#">Contact us</a></li>
            <li class="est-footer-link"><a href="#">About Go Renewable</a></li>
          </ul>
          <ul>
            <li class="est-footer-link"><a href="#">Privacy policy</a></li>
            <li class="est-footer-link"><a href="#">Cookies</a></li>
            <li class="est-footer-link"><a href="#">Website terms of use</a></li>
          </ul>
        </div>
      </div>

      <div class="est-footer-brand">
        <a href="/" class="est-logo">
          <img src="/assets/images/logo-est.svg" alt="Energy Saving Trust logo">
        </a>
        <a href="/" class="est-partner-logo">
          <img src="/assets/images/mcs-logo.svg" alt="MCS Logo">
        </a>
        <div class="est-programme">
          <p class="est-programme-name">Go Renewable</p>
        </div>
      </div>

    </div>
  </div>
  <p class="copyright">Energy Saving Trust 2024</p>
</footer>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example show_standalone_page="footer-product" image_path="../assets/previews/footer-product.png" %}

## Footer for partner website

{% capture code_render %}
  {% include reusable-components/footer-partner.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="footer-partner" image_path="../assets/previews/footer-partner.png" %}
