---
title: Breadcrumbs
layout: documentation-page
section: components
---

The Breadcrumbs component provides users with a clear sense of where they are within a site with multiple levels and helps them understand the overall site structure.

## Usage guidance

Always place breadcrumbs outside of the hero section, directly below.

### When not to use

Do not use breadcrumbs within questionnaires, calculators, or account setup flows.

## Example

{% capture code_render %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}

{% include component-example.html code_render=code_render %}
