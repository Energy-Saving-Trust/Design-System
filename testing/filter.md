---
title: Filter
layout: content
section: testing
---

<div id="task-wrap">
  <div class="filter-wrapper">
    <div class="filter">
      <div class="filter-header">
        <div class="filter-header-title">
          <h2 class="h4">Filter</h2>
        </div>
        <button id="apply" type="button" class="btn btn-primary btn-sm">Apply filters</button>
      </div>
      <div class="filter-content">
        <div class="filter-selected">
          <button class="clear-filters link" href="">Clear all filters</button>
          <ul class="filter-tags">
          </ul>
        </div>
        <div class="filter-options">
          <div class="form-group">
            <fieldset class="fieldset">
              <legend class="fieldset-legend h6" data-bs-toggle="collapse" data-bs-target="#checkboxes1" aria-expanded="true" aria-controls="collapseExample">Category</legend>
              <div id="checkboxes1" class="checkboxes show">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1-1" id="cat1-1">
                  <label class="form-check-label" for="cat1-1">
                    Government/local authority
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1-2" id="cat1-2">
                  <label class="form-check-label" for="cat1-2">
                    Option 2
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1-3" id="cat1-3">
                  <label class="form-check-label" for="cat1-3">
                    Option 3
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="form-group">
            <fieldset class="fieldset">
              <legend class="fieldset-legend h6" data-bs-toggle="collapse" data-bs-target="#checkboxes2" aria-expanded="false" aria-controls="collapseExample">Feature</legend>
              <div id="checkboxes2" class="checkboxes show">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2-1" id="cat2-1" >
                  <label class="form-check-label" for="cat2-1">
                    Heat pumps
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2-2" id="cat2-2">
                  <label class="form-check-label" for="cat2-2">
                    Option B
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2-3" id="cat2-3">
                  <label class="form-check-label" for="cat2-3">
                    Option C
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div> 
    <div class="filter-results">
      <div class="results"></div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="javascript:void(0);" id="prev-page">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>
          <li class="page-item"><a class="page-link" href="#" data-page="2">2</a></li>
          <li class="page-item"><a class="page-link" href="#" data-page="3">3</a></li>
          <li class="page-item"><a class="page-link" href="#" data-page="4">4</a></li>
          <li class="page-item"><a class="page-link" href="#" id="next-page">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>

 <script>
  document.querySelector('#primary-nav').style.display = 'none';
  document.getElementById('test-nav').style.display = 'block';
  document.getElementById('test-back').href = '/testing/question.html';
 // document.getElementById('test-next').href = '/testing/question.html';
  document.getElementById('sidebar').style.display = 'none';
</script>
</div>
