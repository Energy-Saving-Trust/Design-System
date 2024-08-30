---
title: Pagination
layout: content
section: patterns
---

# Pagination

The Pagination pattern lets users navigate through a long list of results.



## Desktop example

{% capture code_render %}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{% endcapture %}

{% include component-example.html code_render=code_render %}
