---
title: Iconography
layout: documentation-page
section: guidelines
---


A set of icons and pictograms have been designed especially for Energy Saving Trust to compliment our core brand assets, and to help add personality and warmth to our communications. They are useful where there is lack of budget for photography as well as help supplement it.

Whether icons, pictograms or illustrations should be used depends on both the size of use and purpose.

<div class="d-flex mb-4 mt-5 align-bottom">
  <h2 id="icons" class="pt-2 mb-0">Functional icons</h2>
  <form class="subnav-search row d-flex flex-nowrap ms-auto">
    <div class="col-auto">
      <label for="search" class="col-form-label">Search for icons:</label>
    </div>
    <div class="col-auto">
    <input class="form-control search mb-0 js-icon-search" id="search" type="text">
    </div>
  </form>
</div>

<div class="icon-sample-grid">
  {% for icon in site.icons %}
    <a class="icon-sample" href="{{ icon.url }}.html" data-name="{{ icon.name }}" data-id="{{ icon.title | replace: " ", "-"}}" data-tags="{% for tag in icon.tags %}{{ tag }}{% unless forloop.last %},{% endunless %}{% endfor %}" data-categories="{% for category in icon.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}">
      {% if icon.source=="Red Stonex" %}
        <div class="icon-sample-preview rs">{{ icon.content }}</div>
      {% else %}
        <div class="icon-sample-preview">{{ icon.content }}</div>
      {% endif %}
      <div class="icon-sample-class">{{ icon.title | replace: " ", "-"}}</div>
    </a>
  {% endfor %}
  <div class="icon-sample-grid-empty js-icon-sample-grid-empty" style="display:none;">Nothing found, try searching again.</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<script>

$(document).ready(function() {

  var $searchInput    = $('.js-icon-search');
  var $tiles          = $('.icon-sample');
  var $noResults      = $('.js-icon-sample-grid-empty');
  var icons           = [];

  $tiles.each(function(index) {
    var $icon =  $(this);
    var key = $icon.attr('data-id');
    icons[key] = {
      name: $icon.attr('data-name'),
      tags: $icon.attr('data-tags'),
      categories: $icon.attr('data-categories')
    };
  });

  $searchInput.keyup(function() {
    var searchTerm = $searchInput.val();
    var searchResults = searchIcons(searchTerm);
    showSearchedIcons(searchResults);
  });

  function searchIcons(searchTerm) {
    searchTerm = searchTerm.toUpperCase();
    var searchResults = [];
    for (var key in icons) {
      var iconName = icons[key].name.toUpperCase();
      var iconTags = icons[key].tags.toUpperCase();
      var iconCategories = icons[key].categories.toUpperCase();
      if (iconName.indexOf(searchTerm) !== -1 ||
          iconTags.indexOf(searchTerm) !== -1 ||
          iconCategories.indexOf(searchTerm) !== -1) {
        searchResults.push(icons[key]);
      }
    }
    return searchResults;
  }

  function showSearchedIcons(searchResults) {
    $noResults.hide();
    $tiles.hide();
    if (searchResults.length == 0) {
      $noResults.show();
    } else {
      $.each(searchResults, function(key, tile) {
        $("a[data-id='" + tile.name + "']").show();
      });
    }
  }

});

</script>