//// Validation lists

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


//// Modal focus

// Ensures that focus stays in the modal on open

// Select all elements with the class 'modal'
document.querySelectorAll('.modal').forEach(function(modal) {
  // Add an event listener for each modal
  modal.addEventListener('shown.bs.modal', function () {
    // Find the input inside the modal and focus on it
    // const input = modal.querySelector('.btn-close');
    // if (input) {
      modal.focus();
    // }
  });
});



//// Filter dropdown accessibility

// Ensures that the filter dropdowns can be open and closed via keyboard controls (enter and spacebar)
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function(element) {
  element.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {  // Handles both Enter and Spacebar
      event.preventDefault(); // Prevent default behavior (e.g., scrolling with Spacebar)
      element.click(); // Simulate a click to toggle the collapse
    }
  });
});


//// Show password toggle

// Shows/hides the password on click and via keyboard controls

function toggleVisibility(el) {
  const control = el.getAttribute('aria-controls');
  const expanded = el.getAttribute('aria-expanded') === 'false';
  document.querySelector(`#${control}`).type = expanded ? 'text' : 'password';
  el.setAttribute('aria-expanded', String(expanded));
  el.setAttribute('aria-label', expanded ? 'Hide password' : 'Show password');
  el.textContent = expanded ? 'Hide' : 'Show';
}

const passwordToggle = document.querySelector('.password-input-toggle');

if (passwordToggle) {
  passwordToggle.addEventListener('click', ({ target }) => toggleVisibility(target));
  passwordToggle.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {  // Handles both Enter and Spacebar
      event.preventDefault(); // Prevent default behavior (e.g., scrolling with Spacebar)
      toggleVisibility(event.target); // Simulate a click to toggle the collapse
    }
  });
}


//// TESTING CODE ////

//// Stop anchor links going to top
document.querySelectorAll('.ds-example-preview a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



//// Filter testing code

// Predefined terms from taxonomies
const taxonomy1 = ['Government/local authority', 'Option 2', 'Option 3'];
const taxonomy2 = ['Heat pumps', 'Option B', 'Option C'];

let filteredResults = []; // Global variable to store filtered results

const resultsPerPage = 5;
let currentPage = 1;
let totalPages = 1;

// Function to generate 20 div elements with class 'result'
function generateResults() {
    const resultsContainer = document.querySelector('.results');
    if (!resultsContainer) {
      return;
    }
    resultsContainer.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.classList.add('result');

        // Randomly assign taxonomy terms to each result
        const randomTaxonomy1 = taxonomy1[Math.floor(Math.random() * taxonomy1.length)];
        const randomTaxonomy2 = taxonomy2[Math.floor(Math.random() * taxonomy2.length)];

        div.setAttribute('data-taxonomy1', randomTaxonomy1);
        div.setAttribute('data-taxonomy2', randomTaxonomy2);

        div.innerHTML = `<strong>Result ${i + 1}</strong><br>Category: ${randomTaxonomy1}<br>Feature: ${randomTaxonomy2}`;
        resultsContainer.appendChild(div);
    }
}

// Function to display the current page of results (only filtered results)
function displayPage(page) {
    totalPages = Math.ceil(filteredResults.length / resultsPerPage); // Update totalPages based on filtered results

    // Ensure the page is within the valid range
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    currentPage = page; // Update the global currentPage

    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;

    console.log(`Displaying results ${start + 1} to ${end}`);

    // Hide all results first
    document.querySelectorAll('.result').forEach(result => result.style.display = 'none');

    // Show only the filtered results for the current page
    filteredResults.forEach((result, index) => {
        if (index >= start && index < end) {
            result.style.display = 'block';
        }
    });

    // Regenerate the pagination controls dynamically
    generatePaginationControls();
}

// Function to dynamically generate the pagination controls based on total pages
function generatePaginationControls() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = ''; // Clear previous pagination

    // Create Previous button
    const prevPageItem = document.createElement('li');
    prevPageItem.classList.add('page-item');
    if (currentPage === 1) prevPageItem.classList.add('disabled');
    prevPageItem.innerHTML = `<a class="page-link" href="#" id="prev-page">Previous</a>`;
    paginationContainer.appendChild(prevPageItem);

    // Create page number links dynamically based on totalPages
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) pageItem.classList.add('active');
        pageItem.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
        paginationContainer.appendChild(pageItem);
    }

    // Create Next button
    const nextPageItem = document.createElement('li');
    nextPageItem.classList.add('page-item');
    if (currentPage === totalPages) nextPageItem.classList.add('disabled');
    nextPageItem.innerHTML = `<a class="page-link" href="#" id="next-page">Next</a>`;
    paginationContainer.appendChild(nextPageItem);
}

if (document.querySelector('.pagination')) {
  document.querySelector('.pagination').addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.classList.contains('page-link') && e.target.hasAttribute('data-page')) {
          const page = parseInt(e.target.getAttribute('data-page'));
          if (!isNaN(page)) {
              displayPage(page);
          }
      } else if (e.target.id === 'prev-page') {
          displayPage(currentPage - 1);
      } else if (e.target.id === 'next-page') {
          displayPage(currentPage + 1);
      }
  });
}

function updateFilterTags() {
  const filterTagsContainer = document.querySelector('.filter-tags');
  filterTagsContainer.innerHTML = ''; // Clear current tags

  // Collect selected checkboxes
  const selectedCategories = Array.from(document.querySelectorAll('.form-check-input:checked'));

  // Add filter tags for each selected checkbox
  selectedCategories.forEach(checkbox => {
      const labelText = checkbox.nextElementSibling.innerText.trim();
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.classList.add('filter-tag');
      link.href = '#'; // Set to '#' for demo purposes; modify as needed
      link.innerText = labelText;

      // Add click event to remove filter on tag click
      link.addEventListener('click', (e) => {
          e.preventDefault();
          checkbox.checked = false; // Uncheck the checkbox
          applyFilter(); // Reapply the filters
      });

      listItem.appendChild(link);
      filterTagsContainer.appendChild(listItem);
  });
}

// Function to apply the filter and paginate results
function applyFilter() {
    console.log("Applying filter...");

    // Get selected taxonomy values
    const selectedTaxonomy1 = Array.from(document.querySelectorAll('#checkboxes1 .form-check-input:checked'))
                                   .map(cb => cb.nextElementSibling.innerText.trim().toLowerCase());
    const selectedTaxonomy2 = Array.from(document.querySelectorAll('#checkboxes2 .form-check-input:checked'))
                                   .map(cb => cb.nextElementSibling.innerText.trim().toLowerCase());

    console.log("Selected taxonomy 1:", selectedTaxonomy1);
    console.log("Selected taxonomy 2:", selectedTaxonomy2);

    // Clear previous filtered results
    filteredResults = [];

    // Get all results
    const results = document.querySelectorAll('.result');

    results.forEach(result => {
        const resultTaxonomy1 = result.getAttribute('data-taxonomy1').toLowerCase();
        const resultTaxonomy2 = result.getAttribute('data-taxonomy2').toLowerCase();

        // Check if the result matches selected filters
        const matchesTaxonomy1 = selectedTaxonomy1.length === 0 || selectedTaxonomy1.includes(resultTaxonomy1);
        const matchesTaxonomy2 = selectedTaxonomy2.length === 0 || selectedTaxonomy2.includes(resultTaxonomy2);

        if (matchesTaxonomy1 && matchesTaxonomy2) {
            filteredResults.push(result); // Add to the filtered results list
        }
    });

    console.log("Filtered results count:", filteredResults.length);

    // After filtering, reset pagination to the first page and display filtered results
    if (filteredResults.length > 0) {
        displayPage(1); // Reset to the first page of filtered results
    } else {
        console.log("No results found for the applied filters");
        // Optionally, you can show a message to the user indicating no results
    }
    updateFilterTags()
}

// Clear filters function
function clearFilters() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reset pagination to the full list of results
    filteredResults = Array.from(document.querySelectorAll('.result'));
    displayPage(1); // Reset to the first page of all results
    updateFilterTags()
}

// Generate results and apply the first page
generateResults();
filteredResults = Array.from(document.querySelectorAll('.result')); // Initialize filteredResults with all results
displayPage(1); // Initial display for the first page

// Attach event listeners
if (document.getElementById('apply')) {
  document.getElementById('apply').addEventListener('click', applyFilter);
}
if (document.querySelector('.clear-filters')) {
  document.querySelector('.clear-filters').addEventListener('click', clearFilters);
}
