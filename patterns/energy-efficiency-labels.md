---
title: Energy efficiency labels
layout: documentation-page
section: patterns

color_tokens:
  - color_token_group: "EPC colour scale"
    color_token:
      - variable_name: "$epc-color-sap-band-a"
        hex: "#006837"
        role: "EPC rating A"
      - variable_name: "$epc-color-sap-band-b"
        hex: "#009245"
        role: "EPC rating B"
      - variable_name: "$epc-color-sap-band-c"
        hex: "#39b54a"
        role: "EPC rating C"
      - variable_name: "$epc-color-sap-band-d"
        hex: "#fcee21"
        role: "EPC rating D"
      - variable_name: "$epc-color-sap-band-e"
        hex: "#fbb03b"
        role: "EPC rating E"
      - variable_name: "$epc-color-sap-band-f"
        hex: "#f15a24"
        role: "EPC rating F"
      - variable_name: "$epc-color-sap-band-g"
        hex: "#ed1c24"
        role: "EPC rating G"
---

The energy efficiency rating labels are one of the most recognisable visual aids for communicating how efficiently a building uses energy.

The energy efficiency rating scale is one of the key elements of Energy Performance Certificates (EPCs) where it helps property owners, renters, and buyers quickly understand a building’s energy performance, allowing them to make informed decisions and potentially take steps to improve energy efficiency if needed.

## Base example

{% capture code_render %}
<table class="epc-rating-chart">
  <tbody>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-a">A</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-b">B</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-c">C</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-d">D</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-e">E</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-f">F</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-g">G</div>
      </td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% capture code_example %}
<table class="epc-rating-chart">
  <tbody>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-a">A</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-b">B</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-c">C</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-d">D</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-e">E</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-f">F</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-g">G</div>
      </td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

## Captions and labels

{% capture code_render %}
<table class="epc-rating-chart">
  <thead>
    <tr>
      <th scope="col">Energy efficiency rating</th>
      <th scope="col">Current</th>
      <th scope="col">Potential</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="epc-scale-explained" colspan="3">Very energy efficient</td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-a">A</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-b">B</div>
      </td>
      <td></td>
      <td>
        <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-b est-epc-rating-label-sm">71 B</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-c">C</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-d">D</div>
      </td>
      <td>
        <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-d est-epc-rating-label-sm">62 D</div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-e">E</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-f">F</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-g">G</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="epc-scale-explained" colspan="3">Not energy efficient</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Energy efficiency rating labels

### Base label

{% capture code_render %}
<div class="est-epc-rating-label">A</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

### Band rating variants

Add `.est-epc-rating-label-band-*` class to set a rating on a label.

{% capture code_render %}
<div class="d-flex gap-4 flex-wrap">
  <div class="est-epc-rating-label est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-a">A</div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="est-epc-rating-label est-epc-rating-label-band-g">G</div>
<div class="est-epc-rating-label est-epc-rating-label-band-f">F</div>
<div class="est-epc-rating-label est-epc-rating-label-band-e">E</div>
<div class="est-epc-rating-label est-epc-rating-label-band-d">D</div>
<div class="est-epc-rating-label est-epc-rating-label-band-c">C</div>
<div class="est-epc-rating-label est-epc-rating-label-band-b">B</div>
<div class="est-epc-rating-label est-epc-rating-label-band-a">A</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

### Sizes

Rating labels are also available in both small and large variants. Add `.est-epc-rating-label-lg` or `.est-epc-rating-label-sm` for additional sizes.

{% capture code_render %}
<div class="d-flex gap-4 flex-wrap">
  <div class="est-epc-rating-label est-epc-rating-label-band-d est-epc-rating-label-lg">67 D</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-lg">C</div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="est-epc-rating-label est-epc-rating-label-band-d est-epc-rating-label-lg">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-lg">C</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

{% capture code_render %}
<div class="d-flex gap-4 flex-wrap">
<div class="est-epc-rating-label est-epc-rating-label-band-d est-epc-rating-label-sm">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-sm">C</div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="est-epc-rating-label est-epc-rating-label-band-d est-epc-rating-label-sm">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-sm">C</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

### Shape and direction variants

Rating labels can be also styled with `.est-epc-rating-label-left` or `.est-epc-rating-label-no-fins` classes.

{% capture code_render %}
<div class="row">
  <div class="col-3 d-flex flex-column gap-4 align-items-start">
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-d">67 D</div>
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
  </div>
  <div class="col-3 d-flex flex-column gap-4 align-items-start">
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-d">67 D</div>
    <div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
  </div>
  <div class="col-3 d-flex flex-column gap-4 align-items-start">
    <div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
    <div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-d">67 D</div>
    <div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
  </div>
  <div class="col-3 d-flex flex-column gap-4 align-items-start">
    <div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
    <div class="est-epc-rating-label est-epc-rating-label-band-d">67 D</div>
    <div class="est-epc-rating-label est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
  </div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-d">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>

<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-d">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-left est-epc-rating-label-no-fins est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>

<div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
<div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-d">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-no-fins est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>

<div class="est-epc-rating-label est-epc-rating-label-band-c est-epc-rating-label-sm">79 C</div>
<div class="est-epc-rating-label est-epc-rating-label-band-d">67 D</div>
<div class="est-epc-rating-label est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

## Label example

{% capture code_render %}
<h3>Energy efficiency of your property</h3>
<p>The energy efficiency of a property tells us how much energy it uses per square meter. The energy consumption per square meter allows for fair comparison of the efficiency of properties with different floor areas.</p>
<p>An EPC (Energy Performance Certificate) rating measures both a property's energy efficiency and environmental impact. An EPC rating of <strong>F</strong> indicates that a property is very energy inefficient, meaning it consumes a large amount of energy, leading to higher utility costs and a significant environmental impact.</p>

<div class="d-flex gap-5 mt-4">
  <div class="est-epc-rating-label est-epc-rating-label-band-f est-epc-rating-label-lg">F</div>
  <div class="my-auto">
    <strong class="fw-bold fs-2">580</strong>
    <small class="fs-7">kWh/m<sup>2</sup> per year</small>
  </div>
</div>
{% endcapture %}
{% include component-example.html code_render=code_render  %}

## Horizontal scale

{% capture code_render %}
<div class="epc-rating-chart-horizontal">
  <div class="est-epc-rating-label est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-a">A</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Sizes

The horizontal energy efficiency rating chart is available in both small and large variants. Use the `.est-epc-rating-label-lg` or `.est-epc-rating-label-sm` classes to apply the respective sizes.

{% capture code_render %}
<div class="epc-rating-chart-horizontal mb-4">
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal mb-4">
  <div class="est-epc-rating-label est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-a">A</div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="epc-rating-chart-horizontal">
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-f">F</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-e">E</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-d">D</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-c">C</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-b">B</div>
  <div class="est-epc-rating-label est-epc-rating-label-sm est-epc-rating-label-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="est-epc-rating-label est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-band-f">F</div>
  ...
  <div class="est-epc-rating-label est-epc-rating-label-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-g">G</div>
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-f">F</div>
  ...
  <div class="est-epc-rating-label est-epc-rating-label-lg est-epc-rating-label-band-a">A</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

## EPC colour scale

### Colour tokens

{% for group in page.color_tokens %}
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
        <td><code>{{ token.hex | upcase }}</code><button class="btn-clipboard js-btn-clipboard" title="Copy HEX colour value"></button></td>
        <td>{{ token.role }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
{% endfor %}

<h3>HEX codes maps</h3>
<div class="ds-example-wrapper">
  <div class="ds-example-code">
    <pre style="white-space: break-spaces;"><code class="language-javascript">
{%- for group in page.color_tokens -%}
{%- for token in group.color_token -%}
{%- if forloop.first == true -%}// JavaScript ['A'...'G'] array
const colors = [
{%- endif -%}
{{- token.hex | upcase | prepend: '"' | append: '"' -}}
{%- unless forloop.last %}, {% endunless -%}
{%- endfor -%}
{%- endfor %}];

// R vector
colors <- c(
{% for group in page.color_tokens -%}
{%- for token in group.color_token -%}
{{ token.role | replace: "EPC rating ", "" | prepend: '  "' | append: '" = ' -}}
{{ token.hex | upcase | prepend: '"' | append: '"' -}}
{% unless forloop.last %},{% endunless %}
{% endfor -%})
{%- endfor -%}
      </code></pre>
  </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="/assets/js/libs/clipboard.min.js"></script>
<script type="text/javascript">

  $(document).ready(function() {

    var clipboard = new ClipboardJS('.js-btn-clipboard', {
      target: function(trigger) {
        return trigger.previousElementSibling;
      }
    });

    clipboard.on('success', function(e) {
      $(e.trigger).addClass("copied")
      e.clearSelection();
      setTimeout(
        function() {
          $(e.trigger).removeClass("copied")
        }, 3000);
    });

  });

</script>