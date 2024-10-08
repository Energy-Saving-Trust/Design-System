---
title: Validation
layout: documentation-page
section: components
---

Validation is how the form responds when a user enters a form field correctly or incorrectly. The following gives guidance on how to display error and success states in a way that best reduces the burden on the user.

## Usage guidance

- We always use the text ‘required’ to indicate mandatory fields as asterisks are not accessible.
- We place the burden of correcting formatting on the system not the user. For example, a user should be able to enter their postcode with or without spaces. E.g. ‘N1 9NG’ or ‘N19NG’ are both accepted by the system.
- Validation should use a combination of colour and text or iconography to communicate the state of the form field to ensure accessibility.
- We have intentionally avoided the use of tooltips or modals. Any changes to the design could impact the accessibility of these designs.

### When to use

Use validation for form inputs such as email, phone, and password to help guide the user in providing the correct response.

### When not to use

Do not use validation unless absolutely necessary (email, password, phone number). Wherever possible correct users; formatting to match the requested format type automatically.

## Example

{% capture code_render %}
<form class="row g-3 needs-validation" novalidate>
  <div id="validationSummary" class="validation-summary alert alert-danger d-none">
    <div class="h6 alert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
      <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>Please review the following errors</div>
  <div id="errorList" class="error-list"></div>
  </div>
  <div class="col-md-12">
    <label for="validationCustom01" class="form-label">First name (required)</label>
    <input type="text" class="form-control" id="validationCustom01" value="Greta" required>
  </div>
  <div class="col-md-12">
    <label for="validationCustom02" class="form-label">Last name (required)</label>
    <input type="text" class="form-control" id="validationCustom02" value="Thunberg" required>
  </div>
  <div class="col-12">
    <label for="validationCustom03" class="form-label">City (required)</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
{% endcapture %}

{% include component-example.html code_render=code_render %}
