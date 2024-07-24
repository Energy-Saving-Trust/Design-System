// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

          // Clear previous validation errors
          var errorList = document.getElementById('errorList');
          errorList.innerHTML = '';

          // Collect validation errors
          var errors = [];
          var invalidFields = form.querySelectorAll(':invalid');
          invalidFields.forEach(function (field) {
            var fieldLabel = '';
            // Find the label text
            if (field.labels && field.labels.length > 0) {
              fieldLabel = field.labels[0].innerText.replace('(required)', '').trim();
            } else {
              fieldLabel = field.getAttribute('aria-label') || field.name || 'Field';
            }
            var errorMessage = field.validationMessage || 'Invalid input';
            errors.push(`<li>${fieldLabel}: ${errorMessage}</li>`);
          });

          if (errors.length > 0) {
            // Show validation summary
            errorList.innerHTML = `<ul>${errors.join('')}</ul>`;
            var validationSummary = document.getElementById('validationSummary');
            validationSummary.classList.remove('d-none');
            form.classList.add('was-validated');
          } 

        }

        form.classList.add('was-validated')
      }, false)
    })
})()