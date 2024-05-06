

##### All pages dirs as categories
##### path — dir — first dir — page
{% for site_page in site.pages %}
    {% if site_page.dir != "/" %} {% assign first_dir = site_page.dir | split: "/" | slice: 1 %} {% else %} {% assign first_dir = null %} {% endif %}
{{ site_page.path }} - {{ site_page.dir }} - {{ first_dir }} - {{ site_page.name }}
{% endfor %}


##### All pages test list
##### path — title (from FM) — filename (w/o .md)
{% for site_page in site.pages %}
{{ site_page.path }} — {{ site_page.title }} — [{{ site_page.name | remove: ".md" }}]({{ site_page.url }})
{% endfor %}



### Test links
[Test Link](/about)


### Test Nav Dropdown — List only pages in folders (group by first folder)
<nav>
  <ul>
    <li><strong><a href="{{ "/" | absolute_url }}">{{ site.title }}</a></strong></li>
  </ul>
  {% include menu_links.md %}
</nav>



<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">Services</a></li>
    <li><a href="#">Products</a></li>
    <li>
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>

### Future Docs
FM vars:
`title`
`category`
`permalink`
`order`

page.dir:
`permalink`
The path between the source directory and the file of the post or page, e.g. /pages/. This can be overridden by permalink in the front matter.

`order` goes through submenus — categories which contain files with lowest sort numbers will be displayed first
