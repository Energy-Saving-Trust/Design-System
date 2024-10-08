---
title: Log in & sign up
layout: documentation-page
section: patterns
---

The Log in / Sign up pattern provides users with a predictable way of logging in or signing up when using a product from Energy Saving Trust.

## Usage guidance

- Using predictable and consistent language is important to avoid confusion.
- We always say ‘Log in’ as a noun or ‘Login’ as a verb when referring to existing users accessing their account.
- We always use the terms ‘Sign up’ as a noun or ‘Signup’ as a verb when directing new users to create an account. In certain instances we also use the term ‘Create an account’ but never ‘Register’.

## Log in form example

{% capture code_render %}
  {% include reusable-components/login.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="login" %}

## Sign up form example

{% capture code_render %}
  {% include reusable-components/login-signup.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="login-signup" %}
