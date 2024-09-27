{% assign header_colour = include.colour | default: "white" %}
{% if header_colour == "deepblue" or header_colour == "deeprose" %}
  {% assign text_colour = "product-text-white" %}
{% else %}
  {% assign text_colour = "" %}
{% endif %}

<header class="site-header header-product px-3 header-product-{{ header_colour }}">
  <div class="col d-flex justify-content-end pt-2 pb-2">
    <ul class="nav {{ text_colour }}">
      <li class="nav-item">
        <a href="#" class="nav-link nav-link-sm" id="search-trigger">
          {% if text_colour == "product-text-white" %}
            <img class="me-1" src="/assets/images/search-icon-white.svg" alt="Search">
          {% else %}
            <img class="me-1" src="/assets/images/search-icon.svg" alt="Search">
          {% endif %}
          Search
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-link-sm">
          {% if text_colour == "product-text-white" %}
            <img class="me-1" src="/assets/images/login-white.svg" alt="User">
          {% else %}
            <img class="me-1" src="/assets/images/login.svg" alt="User">
          {% endif %}
          Log in
        </a>
      </li>
      <li class="nav-item"><a href="#" class="nav-link nav-link-sm">Your dashboard</a></li>
    </ul>
  </div>
  <!-- Desktop header -->
  <div class="d-lg-block pt-2 pb-3">
    <div class="row align-items-center py-3">
      <div class="col-auto d-flex align-items-center">
        <a href="/" class="navbar-brand">
          {% if text_colour == "product-text-white" %}
            <img src="/assets/images/logo-est-white.svg" alt="Energy Saving Trust" height="auto">
          {% else %}
            <img src="/assets/images/logo-est.svg" alt="Energy Saving Trust" height="auto">
          {% endif %}
        </a>
        <a href="/" class="navbar-brand ms-4">
          {% if text_colour == "product-text-white" %}
            <img src="/assets/images/mcs-logo-white.svg" alt="MCS" height="auto">
          {% else %}
            <img src="/assets/images/mcs-logo.svg" alt="MCS" height="auto">
          {% endif %}
        </a>
        <div class="product-title-description ms-5 {{ text_colour }}">
          <a class="navbar-title" href="#">Go Renewable</a>
          <span class="navbar-subtitle">Tagline lorem ipsum dolor sit amet, consectetur adipiscing elit dolor dignissim, tincidunt</span>
        </div>
      </div>
    </div>

    <!-- Search overlay -->
    <div class="search-overlay" style="display: none;">
      <button class="close-search-overlay" aria-label="Close search overlay">
        <img src="/assets/images/close-icon.svg" alt="Close">
        <span aria-hidden="true">Close</span>
      </button>
      <div class="header-padding-wrap">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            {% include reusable-components/search-large.md %}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<nav class="navbar navbar-expand-lg main-nav-product main-nav-{{ header_colour }}">
  <div class="container-fluid justify-content-end d-flex">
    <button class="navbar-toggler product-nav-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#productNavigation" aria-controls="productNavigation" aria-expanded="false" aria-label="Toggle navigation">
      <img class="menu-icon" src="/assets/images/menu.svg" alt="Menu">
      <img class="close-icon" src="/assets/images/close-icon.svg" alt="Close">
    </button>
    <div class="collapse navbar-collapse" id="productNavigation">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About this tool</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
      </ul>
    </div>
  </div>
</nav>
