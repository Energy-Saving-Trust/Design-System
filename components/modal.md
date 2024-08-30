---
title: Modal
layout: content
section: components
---

# Modal

The Modal component lets the user to view content in a dialog box that overlays over existing content.

**When to use**

- We try to minimise use of modals. Always see if your content would fit in a Hint first.
- That said they may be necessary when there is additional contextual information only relevant to certain users that isn’t specifically linked to a form field.

**When not to use**

Do not use if the content is directly associated with a specific question or form field. In those instances use a Hint instead.

## Example

{% capture code_render %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Body content goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-sm">Save changes</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
