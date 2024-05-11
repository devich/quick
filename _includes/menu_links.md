{% comment %} Get list of first level directories (wich have .md files) {% endcomment %}
{% assign dirs_array = "" | split: '|' %}
{% assign pages_array = "" | split: '|' %}
{% assign site_pages_sorted = site.pages | where_exp: "page","page.nav_ignore != true" | sort: "order", "last" %}
{% for site_page in site_pages_sorted %}
  {% if site_page.category %} 
  {% assign first_dir = site_page.category %} {% else %} {% assign first_dir = site_page.dir | split: "/" | slice: 1 | first | url_decode %} {% endif %}
  {% if first_dir %} {% assign dirs_array = dirs_array | push: first_dir %}
  {% else %} {% if site_page.name != "index.md" %} {% assign pages_array = pages_array | push: site_page %} {% endif %} {% endif %}
{% endfor %}

{% assign dirs_array = dirs_array | uniq  %}
{% assign pages_array = pages_array | sort: "order", "last" %}

{% comment %} Make top menu (links and categories) as <ul> list {% endcomment %}
<ul>

{% comment %} Make primary links (with no category) {% endcomment %}
{% for site_page in pages_array %}
<li><a class="secondary contrast" href="{{ site_page.url | downcase | remove: ".html" | relative_url }}"{% if site_page.path == page.path %} aria-current="page"{% endif %}>
  {{ site_page.name | capitalize | remove: ".md" }}</a></li>
{% endfor %}

{% comment %} Make list of the first level dirs and files for nav (indide li) {% endcomment %}
{% for dir in dirs_array %}
<li><details class="dropdown">    
  <summary role="button" class="contrast outline nav_summary">
    {{ dir | capitalize }}
  </summary>
  <ul>
  {% for site_page in site_pages_sorted  %}
    {% if site_page.category %} {% assign first_dir = site_page.category %} {% else %} {% assign first_dir = site_page.dir | split: "/" | slice: 1 | first | url_decode %} {% endif %}
    {% if first_dir == dir %}
      <li><a href="{{ site_page.url | downcase | remove: ".html" | relative_url }}">
      {% if site_page.title %} {{ site_page.title }} {%  else %} {{ site_page.name | capitalize | remove: ".md" }} {% endif %}
      </a></li>
    {% endif %}
  {% endfor %}
  </ul>
</details></li>
{% endfor %}
</ul>