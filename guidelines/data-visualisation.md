---
title: Data visualisation
layout: documentation-page
section: guidelines
---

Data visualisation uses charts, graphs, maps, and diagrams to represent information visually, making complex data easier to understand. It helps users explore, monitor, and explain data by revealing patterns, trends, comparisons, and progress.

## The Energy Performance Certificate (EPC) rating chart

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
        <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-sm epc-rating-band-b">71</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-c">C</div>
      </td>
      <td></td>
      <td>
        <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-sm epc-rating-band-c">C</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-rating-chart-bar epc-rating-chart-bar-band-d">D</div>
      </td>
      <td>
        <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-sm epc-rating-band-d">D</div>
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

## Horizontal

{% capture code_render %}
<div class="epc-rating-chart-horizontal">
  <div class="epc-rating epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-band-a">A</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Size variants

The horizontal energy efficiency rating chart is available in both small and large variants. Use the `.epc-rating-lg` or `.epc-rating-sm` classes to apply the respective sizes.

{% capture code_render %}
<div class="epc-rating-chart-horizontal mb-4">
  <div class="epc-rating epc-rating-sm epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal mb-4">
  <div class="epc-rating epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="epc-rating epc-rating-lg epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-a">A</div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="epc-rating-chart-horizontal">
  <div class="epc-rating epc-rating-sm epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-sm epc-rating-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="epc-rating epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-band-a">A</div>
</div>

<div class="epc-rating-chart-horizontal">
  <div class="epc-rating epc-rating-lg epc-rating-band-g">G</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-f">F</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-e">E</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-d">D</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-c">C</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-b">B</div>
  <div class="epc-rating epc-rating-lg epc-rating-band-a">A</div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

## Energy efficiency labels

{% capture code_render %}
<div class="row">
  <div class="col-3">
    <div class="epc-rating epc-rating-left epc-rating-sm epc-rating-band-a mb-4">A</div>
    <div class="epc-rating epc-rating-left epc-rating-band-b mb-4">B</div>
    <div class="epc-rating epc-rating-left epc-rating-lg epc-rating-band-c mb-4">C</div>
  </div>
  <div class="col-3">
    <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-sm epc-rating-band-a mb-4">A</div>
    <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-band-b mb-4">B</div>
    <div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-lg epc-rating-band-c mb-4">C</div>
  </div>
  <div class="col-3">
    <div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-sm epc-rating-band-d mb-4">D</div>
    <div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-band-e mb-4">E</div>
    <div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-lg epc-rating-band-f mb-4">C</div>
  </div>
  <div class="col-3">
    <div class="epc-rating epc-rating-right epc-rating-sm epc-rating-band-d mb-4">D</div>
    <div class="epc-rating epc-rating-right epc-rating-band-e mb-4">E</div>
    <div class="epc-rating epc-rating-right epc-rating-lg epc-rating-band-f mb-4">C</div>
  </div>
</div>
{% endcapture %}

{% capture code_example %}
<div class="epc-rating epc-rating-left epc-rating-sm epc-rating-band-a">A</div>
<div class="epc-rating epc-rating-left epc-rating-band-b">B</div>
<div class="epc-rating epc-rating-left epc-rating-lg epc-rating-band-c">C</div>

<div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-sm epc-rating-band-a">A</div>
<div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-band-b">B</div>
<div class="epc-rating epc-rating-left epc-rating-no-fins epc-rating-lg epc-rating-band-c">C</div>

<div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-sm epc-rating-band-d">D</div>
<div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-band-e">E</div>
<div class="epc-rating epc-rating-right epc-rating-no-fins epc-rating-lg epc-rating-band-f">C</div>

<div class="epc-rating epc-rating-right epc-rating-sm epc-rating-band-d">D</div>
<div class="epc-rating epc-rating-right epc-rating-band-e">E</div>
<div class="epc-rating epc-rating-right epc-rating-lg epc-rating-band-f">F</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}

## Usage examples

{% capture code_render %}
<h3>Energy efficiency of your property</h3>
<div class="d-flex gap-4 mt-4">
  <div class="epc-rating epc-rating-lg epc-rating-right epc-rating-band-f">F</div>
  <div class="d-flex flex-column">
    <div class="fw-bold fs-2 lh-1 mt-auto">580</div>
    <div class="fw-light fs-7 lh-1 pb-2 pt-1">kWh / m<sup>2</sup> per year</div>
  </div>
</div>
{% endcapture %}
{% include component-example.html code_render=code_render  %}



## Colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.


### Categorical colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.

### Sequential colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.

### Diverging colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.