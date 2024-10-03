---
title: SVG sprite generator
layout: documentation-page
---

SVG Sprite Generator allows you to pick vector icons and compile them into a single, optimized SVG sprite. Instead of loading an entire icon library, you can select only the images you need.

Select the icons you need for your project and hit download to save your sprite. Each download comes with a configuration file which you can always import to recreate the settings of your sprite later.



## Create SVG sprite


### 1. Select icons

Select the icons you want to include in your sprite, or drag and drop a config.json file to restore selection settings of your previous download.

<div id="drop-area" class="sprite-config-drop-area js-sprite-config-drop-area">Drag and drop config.json file here</div>

<div class="sprite-icon-grid">
  {% for icon in site.icons %}
    <div class="sprite-icon-item js-sprite-icon-item">{{ icon.content }}</div>
  {% endfor %}
</div>

### 2. Download your sprite

<button id="downloadZip" class="btn btn-primary js-download-svg-sprite">Download</button>
<div class="invalid-feedback js-download-feedback">Please select at least one icon before generating the sprite.</div>

## Code example

An SVG sprite is an external SVG file that contains a collection of SVG graphics wrapped in `<symbol>` tags. Each symbol has an `id` attribute so you can reference it later.

{% capture code_render %}
<!-- /path/to/sprite.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="circle" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8" />
  </symbol>
  <symbol id="square" viewBox="0 0 16 16">
    <rect width="16" height="16" />
  </symbol>
</svg>
{% endcapture %}

<div class="ds-example-wrapper">
  <div class="ds-example-code" style="padding: 8px 25px 8px 12px;">
  <pre><code class="language-html">{{ code_render | strip | escape }}</code></pre>
  </div>
</div>

To display an icon in an HTML file, all you need is its `id`.

{% capture code_render %}
<!-- index.html -->
<svg width="32" height="32">
  <use xlink:href="/path/to/sprite.svg#circle" />
</svg>
{% endcapture %}

<div class="ds-example-wrapper">
  <div class="ds-example-code" style="padding: 8px 25px 8px 12px;">
  <pre><code class="language-html">{{ code_render | strip | escape }}</code></pre>
  </div>
</div>

## SVG sprites and icon fonts

Advantages of SVG sprites:

- Scalability and resolution independence: SVG icons are perfect for high-DPI and retina displays because they scale without losing quality.
- Advanced styling: SVGs can be styled with CSS, allowing you to change properties like fill, stroke, width, and height. You can even use CSS animations.
- Accessibility: SVGs are semantically richer than icon fonts. They can include attributes like aria-label for screen readers, making them more accessible.
- Flexibility: You can use gradients, shadows, and complex shapes, which are not possible with icon fonts.
- No font-related issues: Since they aren’t font files, SVGs avoid problems such as text selection, anti-aliasing, and rendering differences across browsers.

Advantages of icon fonts:

- Easy to use: Using icon fonts is simple, especially if you're already familiar with how web fonts work. You just include the icon using CSS classes or HTML entities, similar to regular text.
- Browser compatibility: Icon fonts work across all browsers, even older ones, making them more consistent in terms of rendering.
- Lightweight: Fonts are highly optimized, and using an icon font file is usually lighter than embedding multiple SVGs, especially for large sets of icons.

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<script src="/assets/js/svg-sprite-tool.js"></script>
