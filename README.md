# GitHub Pages Theme for Readme

This Jekyll theme simply converts your README.md to the GitHub Pages site with [Pico CSS](https://picocss.com/) styles applied.


## Quick Start

**1.** Create `_config.yml` file in the root of your repository with the following contents:
```yaml
remote_theme: devich/readme-landing-page
```

**2.** Create `index.md` file in the root of your repository with the following contents:

<div class="highlight"><pre class="highlight"><code><span class="nn">---</span>
<span class="na">layout</span><span class="pi">:</span> <span class="s">index</span>
<span class="nn">---</span>

<span class="nt">&#123;%</span> <span class="na">include_relative</span> <span class="s">README.md</span> <span class="nt">%&#125;</span>
</code></pre></div>

**3.** Enable GitHub Pages in the repository settings.


## Fine tuning
### Additional settings in _config.yml

You can set additional parameters for the site in the `_config.yml` file.

Copy the contents of the `_config.yml` file from the [theme repository](https://github.com/devich/readme-landing-page/blob/main/_config.yml) to your `_config.yml` file.

The following options are available:
- `lang:` sets the language of the site. E.g. `en-US`, `uk`, `pl`, `fr-CA` and so on. The default value is `en-US`.
- `bg_color:` sets the background color of your website. Can be `dark`, `light` or `auto`. The default value is `auto`.
- `theme_color:` sets the main accent color for buttons, links, etc. It can be <nobr><code class="highlighter-rouge" style="color:#c52f21">red</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#d92662">pink</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#c0208a">fuchsia</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#9136a3">purple</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#7540be">violet</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#524ed1">indigo</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#2060de">blue</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#0172ac">azure</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#047878">cyan</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#007a50">jade</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#398712">green</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#a5d601">lime</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#f2df0d">yellow</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#ffbf00">amber</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#ff9500">pumpkin</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#d24317">orange</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#ccc6b4">sand</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#ababab">grey</code>,</nobr> <nobr><code class="highlighter-rouge" style="color:#646b79">zinc</code> or <nobr><code class="highlighter-rouge" style="color:#525f7a">slate</code>.</nobr> See samples on the <a href="https://picocss.com/docs/version-picker" target="_blank">Pico CSS website</a>. The default value is <nobr><code class="highlighter-rouge" style="color:#0172ac">azure</code>.
- `title:` sets the title of the site. If not set, your repository name will be used.
- `remote_theme:` is the only **required parameter**; without it, your site will not work. The value should always be `devich/readme-landing-page`.


### Ignoring

If you need a block in the README.md that should not be shown on the GitHub Pages site, you can format this block in HTML and assign `class="ignore"` to this block.

<p class="ignore">
    This paragraph <a href="https://devich.github.io/readme-landing-page/">will not be displayed</a>
    on the site because it has an <code>"ignore"</code> class.
</p>

```html
<p class="ignore">
    This paragraph <a href="https://devich.github.io/readme-landing-page/">will not be
    displayed</a> on the site because it has an <code>"ignore"</code> class.
</p>
```