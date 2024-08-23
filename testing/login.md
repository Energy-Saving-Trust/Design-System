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

<div id="task-wrap">
  <div id="login-wrap">
    <h2 class="mt-5 mb-4">Log in</h2>
    <div class="mb-4">
      <label for="email" class="form-label">Email address<span>*</span></label>
      <div class="form-text">example@gmail.com</div>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-4">
      <label for="password" class="form-label">Password<span>*</span></label>
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
      <button type="button" onclick="complete_task()" class="btn btn-primary">Login</button>
    </div>
    <p>No account? <button style="padding: 0;border: 0;background: transparent;text-decoration: underline;color: #15487A;" onclick="showCreateAccount()">Create an account</button></p>
  </div>

  <div id="create-account-wrap" class="hidden">
    <h2 class="mt-5 mb-4">Create an account</h2>
    <div class="mb-4">
      <label for="name" class="form-label">Full name</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="mb-4">
      <label for="email" class="form-label">Email address<span>*</span></label>
      <div class="form-text">example@gmail.com</div>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-4">
      <label for="password" class="form-label">Password<span>*</span></label>
      <div class="form-text strong">
        <ul>
          <li>Must be at least 10 characters in length</li>
          <li>Must contain both upper and lowercase characters</li>
        </ul>
      </div>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-4">
      <label for="confirm_password" class="form-label">Confirm password<span>*</span></label>
      <div class="form-text strong">
        Re-enter the password you entered above
      </div>
      <input type="password" class="form-control" id="confirm_password">
    </div>
    <fieldset class="form-check mb-4">
      <legend>Terms and conditions</legend>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        By submitting this form you consent to Energy Saving Trust contacting you. You can opt-out from receiving these updates at any time. Please read our privacy policy for more information.
      </label>
    </fieldset>
    <div class="mb-4">
      <button onclick="complete_task()" type="button" class="btn btn-primary">Create account</button>
    </div>

    <p>Have an account? <button style="padding: 0;border: 0;background: transparent;text-decoration: underline;color: #15487A;" onclick="showLogin()">Log in</button></p>
  </div>
</div>

<div style="display: none;flex-direction: column;justify-content: center;align-items: center;" class="mt-5" id="completed">
  <h2 style="text-align: center">Task successfully completed</h2>
  <a href="/testing/content.html" type="button" class="btn btn-primary mt-4">Next task</a>
</div>


<script>
  document.querySelector('#primary-nav').style.display = 'none';
  document.getElementById('test-nav').style.display = 'block';
  document.getElementById('test-back').href = '/testing/contact-form.html';
  document.getElementById('test-next').href = '/testing/content.html';
  document.getElementById('sidebar').style.display = 'none';

  function showCreateAccount() {
    document.getElementById('login-wrap').classList.add('hidden');
    document.getElementById('create-account-wrap').classList.remove('hidden');
  }

  function showLogin() {
    document.getElementById('create-account-wrap').classList.add('hidden');
    document.getElementById('login-wrap').classList.remove('hidden');
  }

  function complete_task() {
      document.getElementById('task-wrap').style.display = 'none';
      document.getElementById('completed').style.display = 'flex';
    }
</script>
