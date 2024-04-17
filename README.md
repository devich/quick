# Github Pages Template for Readme

This Jekyll theme simply converts your README.md to the GitHub Pages site with [Pico CSS](https://picocss.com/) styles applied.

## Quick Start
- Create `_config.yml` file in the root of your repository with the following contents:
```
remote_theme: devich/jekyll-template-for-readme
```
- Create `index.md` file in the root of your repository with the following contents:
<pre><code>---
layout: index
---
&#123;% include_relative README.md %&#125;
</code></pre>
- Enable GitHub Pages in the repository settings.
