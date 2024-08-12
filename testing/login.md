---
title: Login
layout: content
section: testing
---

<style>
  .hidden {
    display: none;
  }
</style>

<div id="login-wrap">
  <h2>Log in</h2>
  <p>Don't have an account? <button onclick="showCreateAccount()">Sign up</button></p>
</div>

<div id="create-account-wrap" class="hidden">
  <h2>Create an account</h2>
  <p>Have an account? <button onclick="showLogin()">Log in</button></p>
</div>


<script>
    function showCreateAccount() {
      document.getElementById('login-wrap').classList.add('hidden');
      document.getElementById('create-account-wrap').classList.remove('hidden');
    }

    function showLogin() {
      document.getElementById('create-account-wrap').classList.add('hidden');
      document.getElementById('login-wrap').classList.remove('hidden');
    }
  </script>
