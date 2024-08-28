---
title: Log in / Sign up
layout: content
section: patterns
---

# Log in / Sign up

Log in / Sign up documentation goes here.



## Log in example

{% capture code_render %}
<div class="mb-4">
  <label for="email" class="form-label">Email address (required)</label>
  <div class="form-text">example@gmail.com</div>
  <input type="email" class="form-control" id="email">
</div>
<div class="mb-4">
  <label for="password" class="form-label">Password (required)</label>
  <div class="form-text">example: est123</div>
  <input type="password" class="form-control" id="password">
</div>
<div class="form-check mb-4">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Remember me
  </label>
</div>
<div class="mb-4">
  <button type="button" class="btn btn-primary">Login</button>
</div>
<p>No account? <a href="#">Create an account</a></p>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Sign up example

{% capture code_render %}
<div class="mb-4">
  <label for="name" class="form-label">Full name</label>
  <input type="text" class="form-control" id="name">
</div>
<div class="mb-4">
  <label for="email" class="form-label">Email address (required)</label>
  <div class="form-text">example@gmail.com</div>
  <input type="email" class="form-control" id="email">
</div>
<div class="mb-4">
  <label for="password" class="form-label">Password (required)</label>
  <div class="form-text strong">
    <ul>
      <li>Must be at least 10 characters in length</li>
      <li>Must contain both upper and lowercase characters</li>
    </ul>
  </div>
  <input type="password" class="form-control" id="password">
</div>
<div class="mb-4">
  <label for="confirm_password" class="form-label">Confirm password (required)</label>
  <div class="form-text strong">
    Re-enter the password you entered above
  </div>
  <input type="password" class="form-control" id="confirm_password">
</div>
<div class="form-check mb-4">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    By submitting this form you consent to Energy Saving Trust contacting you. You can opt-out from receiving these updates at any time. Please read our privacy policy for more information.
  </label>
</div>
<div class="mb-4">
  <button type="button" class="btn btn-primary">Create account</button>
</div>
<p>Have an account? <a href="#">Log in</a></p>
{% endcapture %}

{% include component-example.html code_render=code_render %}
