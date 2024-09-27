---
title: Pagination
layout: documentation-page
section: patterns
---

The Pagination pattern lets users navigate through a long list of results.

## Desktop example

{% capture code_render %}
  {% include reusable-components/pagination.md %}
{% endcapture %}

{% include component-example.html code_render=code_render show_standalone_page="pagination" %}

<script>
//// Responsive pagination

// Adjust number of pages shown according to the width of the pagination element

document.addEventListener('DOMContentLoaded', function () {
  const paginationContainer = document.querySelector('.pagination');
  const paginationItems = document.querySelectorAll('.pagination .page-item:not(:first-child):not(:last-child)'); // Exclude prev and next
  const prevButton = document.querySelector('.pagination .page-item:first-child');
  const nextButton = document.querySelector('.pagination .page-item:last-child');
  const minWidthForFullPagination = 320; // Minimum width before pagination stops collapsing

  function createEllipsis() {
      const ellipsis = document.createElement('li');
      ellipsis.classList.add('page-item', 'ellipsis');
      ellipsis.innerHTML = '<span class="page-link">...</span>';
      return ellipsis;
  }

  function updatePagination() {
      const containerWidth = paginationContainer.offsetWidth;
      const totalPages = paginationItems.length;
      const pageItemWidth = 35; // Approximate width per page link
      const visiblePages = Math.floor((containerWidth - 200) / pageItemWidth); // Reserve space for prev/next buttons

      // Remove existing ellipses if any
      const existingEllipses = document.querySelectorAll('.pagination .ellipsis');
      existingEllipses.forEach(e => e.remove());

      // Reset all items to hidden
      paginationItems.forEach(item => {
          item.classList.remove('show');
      });

      prevButton.classList.add('show');
      nextButton.classList.add('show');

      // Check if the container is large enough to show all pages
      if (containerWidth > minWidthForFullPagination) {
          paginationItems.forEach(item => {
              item.classList.add('show');
          });
      } else {
          if (totalPages <= visiblePages) {
              // If the container is large enough, show all items
              paginationItems.forEach(item => {
                  item.classList.add('show');
              });
          } else {
              // Always show the first and last pages
              paginationItems[0].classList.add('show');
              paginationItems[totalPages - 1].classList.add('show');

              // Show the first few pages (e.g., 1, 2, 3)
              const startPagesToShow = Math.min(visiblePages - 2, 3); // Show up to 3 pages at the start
              for (let i = 1; i < startPagesToShow; i++) {
                  paginationItems[i].classList.add('show');
              }

              // Show the last few pages (e.g., 9, 10, 11)
              const endPagesToShow = totalPages - Math.min(visiblePages - 2, 2); // Show up to 2 pages at the end
              for (let i = endPagesToShow; i < totalPages - 1; i++) {
                  paginationItems[i].classList.add('show');
              }

              // Add a single ellipsis in between if needed
              if (startPagesToShow < endPagesToShow - 1) {
                  paginationContainer.insertBefore(createEllipsis(), paginationItems[endPagesToShow - 1]);
              }
          }
      }
  }

  // Initial call
  updatePagination();

  // Update pagination on window resize
  window.addEventListener('resize', updatePagination);
});
</script>