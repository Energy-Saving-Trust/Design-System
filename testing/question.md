---
title: Question
layout: content
section: testing
---

<style>
  .hidden {
    display: none !important;
  }
</style>

<div id="progress-bar" class="progress progress-steps mb-5">
  <div class="progress-steps-grid">
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">Funding application</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">Login</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">Address</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">Search</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">Funding details</div>
    </div>
    <div class="progress-step">
      <div class="progress-bar empty" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="step-label">House details</div>
    </div>
  </div>
  <div class="main-label">
    <div class="position-number">
      <span class="circle">3</span><span class="of"> of 6</span>
    </div>
    <span class="position-label">Address</span>
  </div>
</div>

<fieldset id="automatic-address">
  <legend><h2 class="h4 mb-2 mt-3">What is your primary address?</h2></legend>
  <a class="hint-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Help me answer this question
  </a>
  <div class="collapse" id="collapseExample">
    <div class="hint-body">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
  </div>
  <div class="mb-4 mt-4">
    <label for="address_2" class="form-label">House number or name (optional)</label>
    <div class="form-text">Example: Unit 7, The Lodge</div>
    <input type="text" class="form-control" id="address_2">
  </div>
  <div class="mb-4">
    <label for="postcode" class="form-label">Postcode</label>
    <div class="form-text">Example: LL13 7AS<br>
  Please leave a space between the two parts of the postcode.</div>
    <input required type="text" class="form-control w-50" id="postcode">
  </div>
  <a style="color:#15487A" href="#manual-entry">Enter my address manually</a>
</fieldset>

<fieldset id="address-found" class="hidden">
  <legend><h2 class="h4 mb-2">Address found</h2></legend>
  <div class="mb-4">
    <p><b>1, Valley Place, 68 Glenbuck Road
    <br>Surbiton
    <br>Kingston Upon Thames
    <br>KT6 ^DL</b></p>
  </div>
  <div class="mb-4">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Yes
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
        No
      </label>
    </div>
  </div>
  <a style="color:#15487A" href="#manual-entry">Enter my address manually</a>
</fieldset>

<fieldset id="manual-address" class="hidden">
  <legend><h3 class="h4 mb-2">Enter your address</h3></legend>
  <div class="mb-4">
    <a class="hint-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Why do we need to know your address?
      </a>
    <div class="collapse" id="collapseExample">
      <div class="hint-body">
        We'll use your address to search our database. The database contains models of property characteristics based on your address. This helps us predict your energy demands.
      </div>
    </div>
  </div>
  <div class="mb-4">
    <label for="address_1" class="form-label">Address line 1</label>
    <div class="form-text">Example: 223-231 Pentonville Rd</div>
    <input type="text" class="form-control" id="address_1">
  </div>
  <div class="mb-4">
    <label for="address_2" class="form-label">Address line 2 (optional)</label>
    <div class="form-text">Example: Unit 7, The Lodge</div>
    <input type="text" class="form-control" id="address_2">
  </div>
  <div class="mb-4">
    <label for="address_3" class="form-label">Town or city</label>
    <input type="text" class="form-control" id="address_3">
  </div>
  <div class="mb-4">
    <label for="postcode" class="form-label">Postcode</label>
    <div class="form-text">Example: LL13 7AS<br>
  Please leave a space between the two parts of the postcode.</div>
    <input type="text" class="form-control w-50" id="postcode">
  </div>
  <p>Skip manual entry. <a style="color:#15487A" href="#automatic-entry">Find my address</a></p>
</fieldset>

<div id="address-buttons" class="d-flex justify-content-between mt-5">
  <button id="address-back" type="button" class="btn btn-secondary">Back</button>
  <button id="address-next" type="button" class="btn btn-primary">Next</button>
</div>

<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;" class="hidden mt-5" id="completed">
  <h2 style="text-align: center">Task successfully completed</h2>
  <button type="button" class="btn btn-primary mt-4">Next task</button>
</div>

<script>
document.querySelector('.nav.col-12.col-lg-auto.mb-2.justify-content-center.mb-md-0').style.display = 'none';
document.getElementById('test-nav').style.display = 'flex';
document.getElementById('test-back').href = '/testing/search.html';
document.getElementById('test-next').href = '/testing/filter.html';
document.getElementById('sidebar').style.display = 'none';

document.addEventListener("DOMContentLoaded", function() {
  const steps = {
    'automatic-address': {
      'back': null,
      'next': 'address-found'
    },
    'address-found': {
      'back': 'automatic-address',
      'next': 'completed'
    },
    'manual-address': {
      'back': 'automatic-address',
      'next': 'completed'
    },
    'completed': {
      'back': null,
      'next': null
    }
  };

  let currentStep = 'automatic-address';

  const backButton = document.getElementById("address-back");
  const nextButton = document.getElementById("address-next");
  const progressBar = document.querySelector("#progress-bar");
  const addressButtons = document.querySelector("#address-buttons");

  function showStep(step) {
    currentStep = step;
    Object.keys(steps).forEach(stepId => {
      const stepElement = document.getElementById(stepId);
      if (stepId === currentStep) {
        stepElement.classList.remove('hidden');
      } else {
        stepElement.classList.add('hidden');
      }
    });

    if (currentStep === 'completed') {
      if (progressBar) progressBar.style.display = 'none';
      if (addressButtons) addressButtons.classList.add('hidden');
    } else {
      if (progressBar) progressBar.style.display = 'block';
      if (addressButtons) addressButtons.style.display = 'flex';
      if (addressButtons) addressButtons.classList.remove('hidden');
    }
  }

  backButton.addEventListener('click', function() {
    const previousStep = steps[currentStep].back;
    if (previousStep) {
      showStep(previousStep);
    }
  });

  nextButton.addEventListener('click', function() {
    const nextStep = steps[currentStep].next;
    if (nextStep) {
      showStep(nextStep);
    }
  });

  document.querySelector("a[href='#manual-entry']").addEventListener('click', function(event) {
    event.preventDefault();
    showManualEntry();
  });

  document.querySelector("a[href='#automatic-entry']").addEventListener('click', function(event) {
    event.preventDefault();
    showAutomaticEntry();
  });

  function showManualEntry() {
    currentStep = 'manual-address'; 
    showStep(currentStep);
  }

  function showAutomaticEntry() {
    currentStep = 'automatic-address'; 
    showStep(currentStep);
  }

  showStep(currentStep);
});

</script>
