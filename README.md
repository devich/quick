# GitHub Pages Theme for Readme

This Jekyll theme simply converts your README.md to the GitHub Pages site with [Pico CSS](https://picocss.com/) styles applied.


## Quick Start

**1.** Create `_config.yml` file in the root of your repository with the following contents:
```
remote_theme: devich/readme-landing-page
```

**2.** Create `index.md` file in the root of your repository with the following contents:
<pre><code>---
layout: index
---
&#123;% include_relative README.md %&#125;
</code></pre>

**3.** Enable GitHub Pages in the repository settings.


## Fine tuning
### Additional settings in _config.yml

You can set additional parameters for the site in the `_config.yml` file.

Copy the contents of the `_config.yml` file from the [theme repository](https://github.com/devich/readme-landing-page/blob/main/_config.yml) to your `_config.yml` file.

The following options are available:
- `lang:` sets the language of the site. E.g. `en-US`, `uk`, `pl`, `fr-CA` and so on. The default value is `en-US`.
- `bg_color:` sets the background color of your website. Can be `dark`, `light` or `auto`. The default value is `auto`.
- `theme_color:` sets the main accent color for buttons, links, etc. It can be `red`, `pink`, `fuchsia`, `purple`, `violet`, `indigo`, `blue`, `azure`, `cyan`, `jade`, `green`, `lime`, `yellow`, `amber`, `pumpkin`, `orange`, `sand`, `grey`, `zinc` or `slate`. See samples on the [Pico CSS website](https://picocss.com/docs/version-picker). The default value is `azure`.
- `title:` sets the title of the site. If not set, your repository name will be used.
- `remote_theme:` is the only **required parameter**; without it, your site will not work. The value should always be `devich/readme-landing-page`.


## Ignoring

If you need a block in the README.md that should not be shown on the GitHub Pages site, you can format this block in HTML and assign `class="ignore"` to this block.

<p class="ignore">
    This paragraph will not be displayed on the site
    because it has an <code>"ignore"</code> class:
</p>

```
<p class="ignore">
    This paragraph will not be displayed on the site
    because it has an <code>"ignore"</code> class:
</p>
```