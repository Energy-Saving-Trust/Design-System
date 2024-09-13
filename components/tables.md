---
title: Tables
layout: documentation-page
section: components
---

The Table component is used to present data to users.

## Mobile guidance

- Tables are best suited for desktop users, because of this their use should be limited for customer facing content.
- On mobile tables keep their format with the exception of a horizontal scroll bar that lets user view table content that spills off of the page.

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

{% capture code_example %}
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
        ...
    </tbody>
  </table>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render code_example=code_example %}
