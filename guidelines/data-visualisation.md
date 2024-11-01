---
title: Data visualisation
layout: documentation-page
section: guidelines
---

## Colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.


## EPC energy-efficiency rating chart

{% capture code_render %}
<table class="epc-rating">
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
        <div class="epc-bar epc-bar-band-a">A</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-b">B</div>
      </td>
      <td></td>
      <td>
        <div class="epc-label epc-color-band-b">71</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-c">C</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-d">D</div>
      </td>
      <td></td>
      <td>
        <div class="epc-label epc-color-band-d">D</div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-e">E</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-f">F</div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div class="epc-bar epc-bar-band-g">G</div>
      </td>
      <td>
        <div class="epc-label epc-color-band-g">G</div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td class="epc-scale-explained" colspan="3">Not energy efficient</td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include component-example.html code_render=code_render %}


### Categorical colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.

### Sequential colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.

### Diverging colour scales

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci porttitor, scelerisque tellus sit amet, accumsan urna. Suspendisse nec imperdiet sapien, eget auctor tortor.