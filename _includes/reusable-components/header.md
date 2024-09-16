<header class="site-header">
  <div class="header-padding-wrap rm-padding-on-mobile">
    <!-- Mobile header -->
    <div class="row align-items-center py-3 d-lg-none px-mobile">
      <div class="col-auto">
        <a href="/" class="navbar-brand">
          <img src="/assets/images/logo-est.svg" alt="Energy Saving Trust" height="auto">
        </a>
      </div>
      <div class="col  d-flex justify-content-end">
        <button class="btn btn-link" id="mobile-search-trigger">
          <img src="/assets/images/search-icon.svg" alt="Search" class="me-1">
          <span>Search</span>
        </button>
        <button id="burger-menu" class="navbar-toggler ms-2 d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMainNavigation" aria-controls="mobileMainNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <img class="me-1" src="/assets/images/menu.svg" alt="Menu">
          <span>Menu</span>
        </button>
      </div>
    </div>
    <!-- Mobile search bar (hidden by default) -->
    <div id="mobile-search-bar" class="d-none d-lg-none">
      <div class="header-padding-wrap">
        <div class="row justify-content-center">
          <div class="col-12">
            {% include reusable-components/search-large.md %}
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop header -->
    <div class="d-none d-lg-block">
      <div class="row align-items-center py-2 navbar-collapse">
        <div class="col d-none d-lg-block">
          <ul class="nav justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link nav-link-sm">Contact</a></li>
            <li class="nav-item"><a href="#" class="nav-link nav-link-sm">Location: Scotland</a></li>
            <li class="nav-item"><a href="#" class="nav-link nav-link-sm" id="search-trigger"><img class="me-1" src="/assets/images/search-icon.svg" alt="Search">Search</a></li>
            <li class="nav-item"><a href="#" class="nav-link nav-link-sm">Subscribe to newsletter</a></li>
          </ul>
        </div>
      </div>
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
      <div class="row align-items-center py-3">
        <div class="col-auto">
          <a href="/" class="navbar-brand">
            <img src="/assets/images/logo-est.svg" alt="Energy Saving Trust" height="auto">
          </a>
        </div>
        <div class="col">
          <nav class="navbar navbar-expand-lg" aria-label="Main navigation">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#desktopMainNavigation" aria-controls="desktopMainNavigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="desktopMainNavigation">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Who we are</a></li>
                <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Energy at home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Low carbon travel</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                <li class="nav-item"><a class="nav-link" href="#">News and events</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Policy</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Mobile controls - back and close -->
    <div class="mobile-controls d-none">
      <button class="back-button">
        <img class="me-1" src="/assets/images/left-chevron.svg" alt="Back">
        <span>Back</span>
      </button>
      <button class="close-button">
        <span class="me-1">Close</span>
        <img src="/assets/images/close-icon.svg" alt="Close">
      </button>
    </div>

    <!-- Navigation (collapsed on mobile) -->
    <div class="collapse navbar-collapse" id="mobileMainNavigation">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Who we are</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#" aria-current="page">Energy at home</a>
          <ul class="navbar-nav logo-padding d-none">
            <li class="nav-inside">
              <a class="nav-link nav-link-y-padding" href="#" role="button">
                Secondary nav item
              </a>
              <div class="inside-nav-container">
                  <div class="row gx-5">
                    <div class="col-md-4">
                      <h2 class="h6">Secondary nav header 1</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Heating your home</a></li>
                        <li><a class="nav-inside" href="#">Inspiration for my next home improvement project</a></li>
                        <li><a class="nav-inside" href="#">How to save money on my energy bills</a></li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <h2 class="h6">Secondary nav header 2</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Help for my community</a></li>
                        <li><a class="nav-inside" href="#">Fixing damp and condensation</a></li>
                        <li><a class="nav-inside" href="#">Energy-efficient appliances</a></li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <h2 class="h6">Secondary nav header 3</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Renewable energy options</a></li>
                        <li><a class="nav-inside" href="#">Insulation tips</a></li>
                        <li><a class="nav-inside" href="#">Energy-saving lighting</a></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </li>
            <li class="nav-inside">
              <a class="nav-link nav-link-y-padding" href="#" role="button">
                Secondary nav item
              </a>
              <div class="inside-nav-container">
                  <div class="row gx-5">
                    <div class="col-md-4">
                      <h2 class="dropdown-header h6">Secondary nav header 1</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Inspiration for my next home improvement project</a></li>
                        <li><a class="nav-inside" href="#">Fixing damp and condensation</a></li>
                        <li><a class="nav-inside" href="#">Heating your home</a></li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <h2 class="dropdown-header h6">Secondary nav header 2</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Energy-efficient windows</a></li>
                        <li><a class="nav-inside" href="#">Smart home technology</a></li>
                        <li><a class="nav-inside" href="#">Water conservation tips</a></li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <h2 class="dropdown-header h6">Secondary nav header 3</h2>
                      <ul class="list-unstyled">
                        <li><a class="nav-inside" href="#">Solar panel installation</a></li>
                        <li><a class="nav-inside" href="#">Heat pump solutions</a></li>
                        <li><a class="nav-inside" href="#">Energy-efficient roofing</a></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </li>
            <li class="nav-inside"><a class="nav-link nav-link-y-padding" href="#">Secondary nav item</a></li>
            <li class="nav-inside"><a class="nav-link nav-link-y-padding" href="#">Secondary nav item</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Low carbon travel</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#">News and events</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Policy</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</header>

<nav class="navbar navbar-expand-lg navbar-bg navbar-green" aria-label="Secondary navigation">
  <div class="header-padding-wrap alignment-fix">
    <div class="collapse navbar-collapse" id="secondaryNavigation">
      <ul class="navbar-nav logo-padding">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link-y-padding" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Secondary nav item
          </a>
          <div class="dropdown-menu meganav full-width-meganav">
            <div class="header-padding-wrap">
              <div class="row gx-5 alignment-fix">
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 1</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Heating your home</a></li>
                    <li><a class="dropdown-item" href="#">Inspiration for my next home improvement project</a></li>
                    <li><a class="dropdown-item" href="#">How to save money on my energy bills</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 2</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Help for my community</a></li>
                    <li><a class="dropdown-item" href="#">Fixing damp and condensation</a></li>
                    <li><a class="dropdown-item" href="#">Energy-efficient appliances</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 3</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Renewable energy options</a></li>
                    <li><a class="dropdown-item" href="#">Insulation tips</a></li>
                    <li><a class="dropdown-item" href="#">Energy-saving lighting</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link-y-padding" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Secondary nav item
          </a>
          <div class="dropdown-menu meganav full-width-meganav">
            <div class="header-padding-wrap">
              <div class="row gx-5">
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 1</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Inspiration for my next home improvement project</a></li>
                    <li><a class="dropdown-item" href="#">Fixing damp and condensation</a></li>
                    <li><a class="dropdown-item" href="#">Heating your home</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 2</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Energy-efficient windows</a></li>
                    <li><a class="dropdown-item" href="#">Smart home technology</a></li>
                    <li><a class="dropdown-item" href="#">Water conservation tips</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2 class="dropdown-header h6">Secondary nav header 3</h2>
                  <ul class="list-unstyled">
                    <li><a class="dropdown-item" href="#">Solar panel installation</a></li>
                    <li><a class="dropdown-item" href="#">Heat pump solutions</a></li>
                    <li><a class="dropdown-item" href="#">Energy-efficient roofing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link nav-link-y-padding" href="#">Secondary nav item</a></li>
        <li class="nav-item"><a class="nav-link nav-link-y-padding" href="#">Secondary nav item</a></li>
      </ul>
    </div>
  </div>
</nav>