---
title: Log in / Sign up
layout: content
section: patterns
---

# Log in / Sign up

The Log in / Sign up pattern provides users with a predictable way of logging in or signing up when using a product from Energy Saving Trust. 

**Usage guidance**

- Using predictable and consistent language is important to avoid confusion.
- We always say ‘Log in’ as a noun or ‘Login’ as a verb when referring to existing users accessing their account.
- We always use the terms ‘Sign up’ as a noun or ‘Signup’ as a verb when directing new users to create an account. In certain instances we also use the term ‘Create an account’ but never ‘Register’.

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

{% include component-example.html code_render=code_render show_standalone_page="login" %}

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

{% include component-example.html code_render=code_render show_standalone_page="login-signup" %}
