---
title: Typography
layout: documentation-page
section: guidelines
---

Text is the primary way our users access information and complete tasks. Effective, accessible content relies on a clear font, consistent headings, succinct body text paragraphs, descriptive links, and scannable lists.

Typography brings consistency across experiences and platforms. Good typographic principles establish a clear visual hierarchy and to maximise readability.

#### Typography and accessibility

Energy Saving Trust Design System components meet level AA of the [Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/TR/WCAG21/#text-spacing) for text spacing and AAA for visual presentation.

## Typeface

Our core typeface is Poppins - a geometric sans serif designed by Jonny Pinhorn and Ninad Kale for Indian Type Foundry.

Poppins is an open source typeface available either as an embed or a download via [Google Fonts](https://fonts.google.com/specimen/Poppins) and [Adobe Fonts](https://fonts.adobe.com/fonts/poppins).

## Type scale

The type scale changes based on screen size.

The scale for ‘large screens’ is used when the screen is wider than the tablet breakpoint (640px).

### Large screens

<table class="table">
  <thead>
    <tr>
      <th>Element</th>
      <th>Font size</th>
      <th>Line height</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>H1</td>
      <td>42.5px</td>
      <td>51px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H2</td>
      <td>33px</td>
      <td>40.80px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H3</td>
      <td>25px</td>
      <td>35.70px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H4</td>
      <td>19px</td>
      <td>30.60px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H5</td>
      <td>tbc</td>
      <td>tbc</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H6</td>
      <td>tbc</td>
      <td>tbc</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>p/body-01</td>
      <td>17px</td>
      <td>26px</td>
      <td>Regular/400</td>
    </tr>
    <tr>
      <td>body-02</td>
      <td>16px</td>
      <td>19.20px</td>
      <td>Regular/400</td>
    </tr>
  </tbody>
</table>

### Small screens

<table class="table">
  <thead>
    <tr>
      <th>Element</th>
      <th>Font size</th>
      <th>Line height</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>H1</td>
      <td>35px</td>
      <td>51px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H2</td>
      <td>27px</td>
      <td>40.80px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H3</td>
      <td>23px</td>
      <td>35.70px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H4</td>
      <td>19px</td>
      <td>30.60px</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H5</td>
      <td>tbc</td>
      <td>tbc</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>H6</td>
      <td>tbc</td>
      <td>tbc</td>
      <td>SemiBold/600</td>
    </tr>
    <tr>
      <td>p/body-01</td>
      <td>17px</td>
      <td>26px</td>
      <td>Regular/400</td>
    </tr>
    <tr>
      <td>body-02</td>
      <td>16px</td>
      <td>19.20px</td>
      <td>Regular/400</td>
    </tr>
  </tbody>
</table>

## Headings

{% capture code_render %}

<h1>H1. Example heading</h1>
<h2>H2. Example heading</h2>
<h3>H3. Example heading</h3>
<h4>H4. Example heading</h4>

{% endcapture %}

{% include component-example.html code_render=code_render %}

## Body content

{% capture code_render %}

<p>Text is the primary way our users access information and complete tasks. Effective, accessible content relies on a clear font, consistent headings, succinct body text paragraphs, descriptive links, and scannable lists.</p>

{% endcapture %}

{% include component-example.html code_render=code_render %}