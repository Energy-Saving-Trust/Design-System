---
title: Quotes
layout: content
section: components
---

# Quotes

Input documentation goes here.



## Plain quote

{% capture code_render %}
<figure class="blockquote-wrapper">
  <blockquote class="blockquote">
    <p>The savings are incredible. It’s a no-brainer - just do it!</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Graham<br>
    <span>Optional organisation</span>
  </figcaption>
</figure>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Quote variation 1

{% capture code_render %}
<figure class="blockquote-wrapper green">
  <blockquote class="blockquote">
    <p>The savings are incredible. It’s a no-brainer - just do it!</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Graham<br>
    <span>Optional organisation</span>
  </figcaption>
</figure>
{% endcapture %}

{% include component-example.html code_render=code_render %}

## Quote variation 2

{% capture code_render %}
<div class="blockquote-img yellow">
  <figure class="blockquote-wrapper">
    <blockquote class="blockquote">
      <p>Quote from our leaders here to set the scene and inspire whoever is reading this. </p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Mike Thornton, Chief Executive
    </figcaption>
  </figure>
  <div class="blockquote-bg-img" style="background-image: url('https://s3-alpha-sig.figma.com/img/4aef/6f8f/f40bc3e087e8d1c9520abc6c5ba13235?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oIX~90hdGzMCUzhiWoYtjBK7ciPHMf1NfktLlwS2VqSfXabVvM5OngLGJvEc4QxVHpzKD7MhWB1RwAX38yv77lUBN-WUp2iY5LwvmJMPvQrK34j9h9BX1XN-hVbhPFVN5IzXYLe~yTPFFAaOInqJfVlqhXw39CqRjxnj0XOMrMXROdkYCoG6YmC4h9l9OWMR~GpOf6lsQDbYreVo2uM2Vp~o2Gr~boYH9UG9ePRzU2nQbtSSOfVsP9EfVl~4VKym2KtqXWnbRl601neoNJAYxV6YLR9rXjCnDJ-Bn7jQvRo518~JlzvH9bNpZAC-Jh7hXE1apVEwr27IQc8JWelbfA__');"></div>
</div>
{% endcapture %}

{% include component-example.html code_render=code_render %}
