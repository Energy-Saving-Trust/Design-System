---
title: Colour
layout: documentation-page
section: guidelines

color_tokens:
  - color_token_group: "Text"
    color_token:
      - variable_name: "$scss_variable_tbc"
        hex: "#1B1F22"
        role: "Primary text"
      - variable_name: "$scss_variable_tbc"
        hex: "#363D44"
        role: "Secondary text"
      - variable_name: "$scss_variable_tbc"
        hex: "#525C66"
        role: "Tertiary text"
  - color_token_group: "Links"
    color_token:
      - variable_name: "$scss_variable_tbc"
        hex: "#15487A"
        role: "Link"
      - variable_name: "$scss_variable_tbc"
        hex: "#1F6BB7"
        role: "Link hover"
      - variable_name: "$scss_variable_tbc"
        hex: "#15487A"
        role: "Link visited"
  - color_token_group: "State"
    color_token:
      - variable_name: "$scss_variable_tbc"
        hex: "#363D44"
        role: "Input border colour"
      - variable_name: "$scss_variable_tbc"
        hex: "#1B1F22"
        role: "Default focus state border 2"
      - variable_name: "$scss_variable_tbc"
        hex: "#D2D6DB"
        role: "Default focus state border 1"
      - variable_name: "$scss_variable_tbc"
        hex: "#1B1F22"
        role: "Input fields, focus state border"
      - variable_name: "$scss_variable_tbc"
        hex: "#D2D6DB"
        role: "Focus colour for input field drop shadow border"
      - variable_name: "$scss_variable_tbc"
        hex: "#E1EDFA"
        role: "Focus fill / Hover, Pressing"
      - variable_name: "$scss_variable_tbc"
        hex: "#363D44"
        role: "Selected fill / background"
  - color_token_group: "Status"
    color_token:
      - variable_name: "$scss_variable_tbc"
        hex: "#65A346"
        role: "Success"
      - variable_name: "$scss_variable_tbc"
        hex: "#DFEED8"
        role: "Success background"
      - variable_name: "$scss_variable_tbc"
        hex: "#FFAF0A"
        role: "Warning"
      - variable_name: "$scss_variable_tbc"
        hex: "#FFEECC"
        role: "Warning background"
      - variable_name: "$scss_variable_tbc"
        hex: "#B7133A"
        role: "Error"
      - variable_name: "$scss_variable_tbc"
        hex: "#F9C8D3"
        role: "Error background"
      - variable_name: "$scss_variable_tbc"
        hex: "#15487A"
        role: "Information"
      - variable_name: "$scss_variable_tbc"
        hex: "#DDF1F3"
        role: "Information background"

---



Colour serves as a powerful tool that can establish structure, highlight priority actions, communicate status, and convey meaning. It helps distinguish our brand and fosters a familiar and consistent experience across our products.

The following guidelines are based on the [*Brand hub* materials available on Connect](https://est.interactgo.com/page/10061), and are designed to extend *Brand hub* guidance to support the creation of digital products.


## How we use colour to enhance usability

Good colour choices can make a significant difference in how people understand and connect with our pages, products and services, and our message.

When designing with colour, it’s important to keep three key principles in mind: intentionality, accessibility, and consistency.

### 1. We use colour intentionally

We use colour intentionally. It’s not just decoration; colour is meant to be functional.

Our web components and patterns predominantly use neutral colours. Additionally, selected components offer supplementary variants that extend to our core brand colours (and their varying shades), allowing them to work with a wide array of supporting colours, photography, and illustrations.

Sticking to a limited palette ensures that these designs will be effective in various contexts.

### 2. We don't rely on colour to convey meaning

Colour vision deficiency affects a significant percentage of our audience. In the UK, [approximately 0.5% of adult women and 8% of adult men](https://www.colourblindawareness.org/colour-blindness/) are colour blind.

To ensure that our designs are accessible to people who cannot see well or distinguish colours, we never use colour as the only means of providing information or requesting an action.

We use additional visual cues, such as text and iconography, alongside colour to convey meaning. This applies to graphs, diagrams, or indicators of status in notices and alerts (e.g., success, warning, error).

### 3. We use colour consistently

The use of colour is often purposefully tied to a specific meaning to support a message or status. For instance, red signifies critical errors, green represents success messages, and blue is used to draw attention.

We need to ensure that the purpose and meaning of using colour are clear and consistent across our products.


## Colour palette for digital products

Our digital colour palette is split into two distinct groups; Core colours and Neutral colours.

### Core colours

Our digital colour palette extends our Core colours into a set of official swatches to allow for much richer and more refined user interfaces.

Each colour offers text contrast accessibility check.

<div class="js-color-block" data-color-group="core"></div>


### Neutral colours

Shades of grey are used for text, borders, backgrounds, and shadows.

<div class="js-color-block" data-color-group="neutral"></div>

## Colour tokens

Color tokens define the colour palette for components and global styles.

Using these tokens helps maintain consistency when building experiences. Consistent, recognizable, and accessible colours allow people to complete tasks more efficiently.

Always use the Design System colour styles, as they meet or exceed all accessibility requirements.

{% for group in page.color_tokens %}
  <h3>{{ group.color_token_group }}</h3>
  <table class="design-token-table">
    <thead>
      <tr>
        <th class="first-column">Colour</th>
        <th class="second-column">Sass variable</th>
        <th class="third-column">Hex code</th>
        <th class="last-column">Role</th>
      </tr>
    </thead>
    <tbody>
      {% for token in group.color_token %}
      <tr>
        <td>
          <div class="color-token-preview" style="background-color:{{ token.hex }}"></div>
        </td>
        <td><code>{{ token.variable_name }}</code><button class="btn-clipboard js-btn-clipboard" title="Copy variable name"></button></td>
        <td><code>{{ token.hex }}</code><button class="btn-clipboard js-btn-clipboard" title="Copy HEX colour value"></button></td>
        <td>{{ token.role }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>

{% endfor %}


<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js" integrity="sha512-2V49R8ndaagCOnwmj8QnbT1Gz/rie17UouD9Re5WxbzRVUGoftCu5IuqqtAM9+UC3fwfHCSJR1hkzNQh/2wdtg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/values.js"></script>
<script src="/assets/js/libs/clipboard.min.js"></script>
<script src="/assets/js/libs/tinycolor-min.js"></script>
<script src="/assets/js/colour-palette.js"></script>
<script src="/assets/js/colour-gen.js"></script>