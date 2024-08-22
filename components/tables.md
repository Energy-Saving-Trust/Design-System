---
title: Tables
layout: content
section: components
---

# Tables

Tables documentation goes here.

## Example

{% capture code_render %}
<div class="table-wrapper">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Header cell</th>
        <th scope="col">Header cell</th>
        <th scope="col">Header cell</th>
        <th scope="col">Header cell</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Header cell</th>
        <td>Content cell</td>
        <td>Content cell</td>
        <td>Content cell</td>
      </tr>
      <tr>
        <th scope="row">Header cell</th>
        <td>Content cell</td>
        <td>Content cell</td>
        <td>Content cell</td>
      </tr>
      <tr>
        <th scope="row">Header cell</th>
        <td>Content cell</td>
        <td>Content cell</td>
        <td>Content cell</td>
      </tr>
    </tbody>
  </table>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}