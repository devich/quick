{% comment %} Get list of first level directories (wich have .md files) {% endcomment %}
{% assign dirs = "" %}
{% for site_page in site.pages %}
  {% if site_page.category %} {% assign first_dir = site_page.category %} {% else %} {% assign first_dir = site_page.dir | split: "/" | slice: 1 | first | url_decode %} {% endif %}
  {% if first_dir %} {% assign dirs = dirs | append: first_dir |  append: "|" %} {% endif %}
{% endfor %}
{% assign dirs_array = dirs | split: "|" | uniq  %}
{% comment %} Make list of the first level dirs and files for nav (indide li) {% endcomment %}
{% for dir in dirs_array %}
<li><details class="dropdown">    
  <summary>
    {{ dir }}
  </summary>
  <ul>
  {% for site_page in site.pages %}
    {% if site_page.category %} {% assign first_dir = site_page.category %} {% else %} {% assign first_dir = site_page.dir | split: "/" | slice: 1 | first | url_decode %} {% endif %}
    {% if first_dir == dir %}
      <li><a href="{{ site_page.url | downcase | remove: ".html" | relative_url }}">
      {% if site_page.title %} {{ site_page.title }} {%  else %} {{ site_page.name | remove: ".md" }} {% endif %}
      </a></li>
    {% endif %}
  {% endfor %}
  </ul>
</details></li>
{% endfor %}