---
title: Footer
layout: content
section: patterns
---

# Footer

The Footer pattern is a consistent set of links to company information, mandatory items such as a privacy statement and cookie policy, a copyright statement and social media links.



## Footer

{% capture code_render %}
<footer class="footer">
  <section class="footer-top row">
    <div class="col">
      <a href="/" class="d-flex align-items-center link-dark text-decoration-none">
        <img src="../assets/images/est-logo.png"/>
      </a>
    </div>
    <div class="col">
      <h2>Follow us</h2>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link p-0">LinkedIn</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">X (Twitter)</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Facebook</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Instagram</a></li>
      </ul>
    </div>
    <div class="col">
      <h2>Follow us</h2>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link p-0">LinkedIn</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">X (Twitter)</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Facebook</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Instagram</a></li>
      </ul>
    </div>
    <div class="col full">
      <h2>Energywire newsletter</h2>
      <a class="btn btn-primary" href="#">Subscribe to newsletter</a>
    </div>
  </section>
  <section class="footer-bottom">
    <span class="site-name">Energy Saving Trust 2023</span>
    <a class="nav-link" href="#">Terms and conditions</a>
    <a class="nav-link" href="#">Privacy policy</a>
    <a class="nav-link" href="#">Cookie policy</a>
  </section>
</footer>
{% endcapture %}
{% include component-example.html code_render=code_render %}

## Product footer

{% capture code_render %}
<footer class="footer">
  <section class="footer-top footer-top-slim row">
    <div class="col">
      <ul class="nav flex-row">
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Information for installers</a></li>
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Installer registration</a></li>
      </ul>
    </div>
    <div class="col">
      <ul class="nav flex-row">
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Help</a></li>
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Contact us</a></li>
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">About Go Renewable</a></li>
      </ul>
      <ul class="nav flex-row mt-2">
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Privacy Policy</a></li>
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Cookies</a></li>
        <li class="nav-item nav-item-sm"><a href="#" class="nav-link p-0 m-0">Website terms of use</a></li>
      </ul>
    </div>
    <div class="nav flex-row mt-5">
      <a class="p-2" href="#"><img src="/assets/images/logo-est.svg"/></a>
      <a class="p-2" href="#"><img src="/assets/images/mcs-logo.svg"/></a>
      <span class="p-2">Go Renewable</span>
    </div>
  </section>
  <section class="footer-bottom footer-bottom-slim">
    <span class="site-name">Energy Saving Trust 2023</span>
  </section>
</footer>
{% endcapture %}
{% include component-example.html code_render=code_render %}

## Footer (partner website)

{% capture code_render %}
<footer class="footer">
  <section class="footer-top row">
    <div class="col">
      <a href="/" class="d-flex align-items-center link-dark text-decoration-none">
        <img src="../assets/images/partner-logo.png"/>
      </a>
    </div>
    <div class="col">
      <h2>Follow us</h2>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link p-0">LinkedIn</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">X (Twitter)</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Facebook</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Instagram</a></li>
      </ul>
    </div>
    <div class="col">
      <h2>Follow us</h2>
      <ul class="nav flex-column">
        <li class="nav-item"><a href="#" class="nav-link p-0">LinkedIn</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">X (Twitter)</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Facebook</a></li>
        <li class="nav-item"><a href="#" class="nav-link p-0">Instagram</a></li>
      </ul>
    </div>
  </section>
  <section class="footer-bottom">
    <span class="site-name">Partner website 2023</span>
    <a class="nav-link" href="#">Terms and conditions</a>
    <a class="nav-link" href="#">Privacy policy</a>
    <a class="nav-link" href="#">Cookie policy</a>
  </section>
</footer>
{% endcapture %}

{% include component-example.html code_render=code_render %}
