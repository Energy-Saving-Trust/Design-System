---
title: Modal
layout: documentation-page
section: components
---

A modal is a dialog that appears on top of the page to display important information or request a response from the user.

It disables interaction with the main page content while keeping it visible. The modal remains on the screen until the user completes the required action or closes the dialog.

## Usage guidance

### When to use

- We try to minimise use of modals. Always check if your content would fit in a [Hint](/components/hint.html) first.
- That said they may be necessary when there is additional contextual information only relevant to certain users that isn’t specifically linked to a form field.

### When not to use

- To notify of an error in the interface or system.
- To show content that is required for the user to complete the main task in the interface. In those instances use a [Hint](/components/hint.html) instead.

## Example

{% capture code_render %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" role="alertdialog" aria-modal="true" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span>Close</span></button>
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
