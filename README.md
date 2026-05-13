# Sohag Kumar Saha - Personal Website

A Jekyll-based personal website and research portfolio hosted on GitHub Pages.

**Live Sites:**
- 🌐 **Production**: https://sohag.net
- 🧪 **Staging (Preview)**: https://sohag.net/staging

---

## Table of Contents

1. [Website Overview](#website-overview)
2. [Site Structure](#site-structure)
3. [Main vs Staging Sites](#main-vs-staging-sites)
4. [Technology Stack](#technology-stack)
5. [Setup & Installation](#setup--installation)
6. [Running the Site Locally](#running-the-site-locally)
7. [Configuration](#configuration)
8. [Creating Content](#creating-content)
9. [Deployment Workflow](#deployment-workflow)
10. [Troubleshooting](#troubleshooting)
11. [Maintenance & Operations](#maintenance--operations)

---

## Website Overview

This is a personal website built with **Jekyll** and **Minimal Mistakes** theme. It serves as a professional portfolio showcasing:

- 👨‍🎓 Academic background and education
- 📚 Research interests and publications
- 📝 Blog posts on technical topics
- 🖼️ Project gallery
- 📧 Contact information

### Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast static site (no database needed)
- ✅ SEO optimized
- ✅ Dark mode support
- ✅ Publication bibliography (BibTeX support)
- ✅ Blog with categories and tags
- ✅ Automatic deployment via GitHub Actions

---

## Site Structure

```
sohagkumarsaha.github.io/
├── _config.yml                 # Main Jekyll configuration
├── _includes/                  # Reusable HTML components
│   ├── author-profile.html     # Author bio sidebar
│   ├── education.md            # Education section
│   ├── selected_publications.md # Featured publications
│   ├── footer.html             # Footer content
│   ├── masthead.html           # Navigation header
│   └── head/custom.html        # Custom HTML head tags
│
├── _layouts/                   # Page templates
│   ├── default.html            # Base layout
│   ├── blog.html               # Blog post layout
│   └── bibtemplate.html        # Bibliography layout
│
├── _pages/                     # Static pages
│   ├── cv.md                   # CV/Resume page
│   ├── publications.md         # Publications page
│   ├── teaching.md             # Teaching page
│   ├── contact.md              # Contact page
│   ├── gallery.md              # Image gallery
│   ├── tag-archive.md          # Tag archive
│   ├── category-archive.md     # Category archive
│   └── sitemap.md              # XML sitemap
│
├── _posts/                     # Blog posts (date-named files)
│   ├── 2026-05-01-post-title.md
│   ├── 2026-05-02-another-post.md
│   └── ...
│
├── _bibliography/              # BibTeX references
│   └── references.bib          # Bibliography entries
│
├── _data/                      # Data files
│   └── navigation.yml          # Navigation menu structure
│
├── assets/                     # Static assets
│   ├── css/
│   │   ├── theme-override.css  # Custom theme styling
│   │   └── ...
│   ├── js/
│   │   ├── theme-switcher.js   # Dark mode toggle
│   │   ├── copy-code.js        # Code block copy button
│   │   ├── follow-button.js    # Social media follow
│   │   └── ...
│   └── images/
│       ├── profile.jpg         # Profile picture
│       └── ...
│
├── .github/workflows/          # GitHub Actions CI/CD
│   └── deploy.yml              # Deployment workflow
│
├── _site/                      # Generated site (do not edit)
├── Gemfile                     # Ruby dependencies
├── CNAME                       # Custom domain configuration
│
└── docs/                       # Documentation
    ├── GITHUB_DESKTOP_WORKFLOW.md
    ├── DEVELOPMENT.md
    └── ...
```

---

## Main vs Staging Sites

### What's the Difference?

| Aspect | Main (`main` branch) | Staging (`staging` branch) |
|--------|---------------------|---------------------------|
| **URL** | https://sohag.net | https://sohag.net/staging |
| **Purpose** | Production/Live website | Testing & Preview |
| **Git Branch** | `main` | `staging` |
| **Build URL** | Root (/) | Subdirectory (/staging) |
| **Who sees it** | Public/Everyone | Only you (before release) |
| **Update frequency** | Only when changes verified | Whenever you push changes |

### Workflow

```
You make changes on "staging" branch
           ↓
Push to GitHub (staging)
           ↓
GitHub Actions builds & deploys
           ↓
Test at https://sohag.net/staging
           ↓
If everything looks good:
  Merge "staging" into "main"
           ↓
Push to GitHub (main)
           ↓
GitHub Actions builds & deploys
           ↓
Live at https://sohag.net 🎉
```

### Why Two Sites?

1. **Safety**: Test changes before going live
2. **Confidence**: Verify styling, links, content on staging
3. **Quick Preview**: See deployed version (not just local)
4. **Easy Rollback**: Keep main stable, experiment on staging

---

## Technology Stack

### Core Technologies

- **Jekyll 4.4** - Static site generator
- **Minimal Mistakes Theme** - Professional Jekyll theme
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated CI/CD deployment
- **Ruby 3.3** - Required for Jekyll

### Key Dependencies

```ruby
jekyll (~> 4.4)                 # Static site generator
minimal-mistakes-jekyll         # Theme
jekyll-include-cache            # Performance optimization
jekyll-scholar                  # Bibliography support
jekyll-paginate                 # Pagination
jekyll-sitemap                  # XML sitemap generation
jekyll-gist                     # Embed GitHub gists
jekyll-feed                     # RSS feed generation
```

### Front-End Technologies

- **HTML5** - Page structure
- **CSS3** - Styling and animations
- **JavaScript** - Interactivity (theme switcher, copy buttons)
- **Responsive Design** - Mobile-friendly layouts

---

## Setup & Installation

### Prerequisites

Before you can run this site locally, install:

1. **Git** - Version control
   - Download: https://git-scm.com/download/win

2. **Ruby 3.3+** - Programming language
   - Download: https://rubyinstaller.org/
   - Choose Ruby 3.3 with DevKit

3. **GitHub Desktop** (Optional but recommended)
   - Download: https://desktop.github.com/

### Initial Setup

#### Option 1: Using GitHub Desktop (Recommended)

1. Open **GitHub Desktop**
2. Click **"File"** → **"Clone repository"**
3. Select **"URL"** tab
4. Enter: `https://github.com/sohagkumarsaha/sohagkumarsaha.github.io`
5. Click **"Clone"**
6. Choose location (e.g., Documents/GitHub)
7. Done! Repository is now on your computer

#### Option 2: Using Command Line

```bash
cd Documents/GitHub
git clone https://github.com/sohagkumarsaha/sohagkumarsaha.github.io
cd sohagkumarsaha.github.io
```

### Install Dependencies

After cloning, install Ruby gems:

```bash
cd sohagkumarsaha.github.io
bundle install
```

This reads `Gemfile` and installs all required packages.

---

## Running the Site Locally

### Start Local Development Server

```bash
bundle exec jekyll serve
```

**Output will show:**
```
Server running...
  Local:      http://localhost:4000
  Press CTRL-C to stop
```

### View Your Site

1. Open browser to: **http://localhost:4000**
2. See your site running locally
3. Any file changes auto-reload in browser (just refresh)
4. Stop server: Press **Ctrl+C** in terminal

### What This Does

- Builds the static site from source files
- Watches for file changes
- Automatically rebuilds on changes
- Serves site at localhost for testing
- No internet connection needed

### Troubleshooting Local Run

**"Command not found: bundle"**
```bash
# Install bundler
gem install bundler
bundle install
```

**"Port 4000 already in use"**
```bash
# Use different port
bundle exec jekyll serve --port 4001
```

**"Gem not found"**
```bash
# Reinstall dependencies
bundle install --verbose
```

---

## Configuration

### Main Config File: `_config.yml`

This file controls site-wide settings. Key sections:

#### 1. Site Metadata
```yaml
title: "Sohag Kumar Saha"
email: "engr.sohag.pust@gmail.com"
description: "PhD Student in Power Systems and Energy Management"
url: "https://sohagkumarsaha.github.io"
baseurl: ""  # Empty for main, "/staging" for staging
```

#### 2. Theme Configuration
```yaml
theme: minimal-mistakes-jekyll
remote_theme: mmistakes/minimal-mistakes-jekyll@4.26.2
```

#### 3. Author Information
```yaml
author:
  name: "Sohag Kumar Saha"
  avatar: "/assets/images/profile.jpg"
  bio: "PhD Student - Power Systems and Energy Management"
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/sohagkumarsaha"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://linkedin.com/in/sohagkumarsaha"
```

#### 4. Site Features
```yaml
defaults:
  - scope:
      path: "_pages"
    values:
      layout: single
      author_profile: true
  - scope:
      path: "_posts"
    values:
      layout: blog
      author_profile: true
```

### How to Modify Config

1. Open `_config.yml` in your editor
2. Change values (keep YAML formatting)
3. Save file
4. Restart local server (`Ctrl+C` then `bundle exec jekyll serve`)

### Important: Do Not Touch

- `_site/` folder - Automatically generated
- `.git/` folder - Version control (unless you know what you're doing)
- `Gemfile.lock` - Dependency lock file

---

## Creating Content

### 1. Creating Blog Posts

Blog posts are the primary content type. They appear on your blog index and in chronological order.

#### Where to Create

Create new markdown files in: `_posts/`

#### Naming Convention

**Important**: Files must be named: `YYYY-MM-DD-slug-title.md`

Examples:
- `2026-05-15-my-first-post.md`
- `2026-05-20-power-systems-optimization.md`
- `2026-06-01-renewable-energy-integration.md`

#### Blog Post Template

```markdown
---
title: "Your Post Title Here"
date: 2026-05-15
categories:
  - research
  - power-systems
tags:
  - energy
  - optimization
  - grid
---

# Your Post Title

This is the first paragraph. It appears in the excerpt and preview.

## Section 1

Your content here with **bold** and *italic* text.

### Subsection

More content...

## Code Examples

\`\`\`python
# Your code here
def hello():
    print("Hello World")
\`\`\`

## Inserting Images

![Alt text](/assets/images/my-image.jpg)

## Links

[Link text](https://example.com)
```

#### Front Matter Explained

```yaml
---
title: "Post Title"           # Title that appears at top
date: 2026-05-15              # Publication date (used for sorting)
categories:                   # Broad topics (shows in sidebar)
  - research
  - power-systems
tags:                         # Specific keywords (for filtering)
  - energy
  - optimization
  - grid
---
```

#### Best Practices for Posts

✅ **Do:**
- Use descriptive titles
- Add categories for organization
- Add tags for filtering
- Include images to break up text
- Link to references
- Use proper markdown formatting

❌ **Don't:**
- Use special characters in filename (except hyphens)
- Forget the date in filename
- Write posts without categories/tags
- Forget the front matter (---)

#### Example: Complete Blog Post

```markdown
---
title: "Smart Grid Integration: A Case Study"
date: 2026-05-20
categories:
  - research
  - power-systems
tags:
  - smart-grid
  - renewable-energy
  - optimization
---

# Smart Grid Integration: A Case Study

## Introduction

This post explores the integration of renewable energy sources into modern electrical grids.

## Background

Renewable energy sources are becoming increasingly important for sustainable power systems. However, their integration poses challenges...

## Methodology

We analyzed data from 50 substations over 12 months:

\`\`\`python
import pandas as pd
import numpy as np

# Load grid data
grid_data = pd.read_csv('grid_data.csv')
renewable_penetration = grid_data['renewable'] / grid_data['total']
\`\`\`

## Results

Our findings show a 23% increase in grid stability with smart control algorithms.

## Conclusion

Smart grid technologies are essential for high renewable energy penetration.

## References

[1] Smith, J. (2024). Grid Modernization Strategies.
[2] Jones, A. (2023). Renewable Integration Challenges.
```

### 2. Editing Static Pages

Static pages (like CV, Contact, Publications) are in `_pages/` folder.

#### Examples

- **CV**: `_pages/cv.md`
- **Publications**: `_pages/publications.md`
- **Teaching**: `_pages/teaching.md`
- **Contact**: `_pages/contact.md`

#### How to Edit

1. Open the file in your editor
2. Edit the markdown content
3. Save the file
4. Changes appear at next local build or deployment

### 3. Adding Images

#### Where to Store

Save images in: `assets/images/`

#### Insert in Content

```markdown
![Description of image](/assets/images/my-image.jpg)
```

#### Image Tips

- Use descriptive filenames: `power-system-diagram.jpg`
- Compress images to save space
- Use appropriate formats:
  - PNG: For diagrams, screenshots
  - JPG: For photos
  - SVG: For logos, diagrams

### 4. Adding Publications

Publications are managed via BibTeX in `_bibliography/references.bib`

#### Format

```bibtex
@article{saha2024smart,
  author = {Saha, Sohag Kumar and Others},
  title = {Smart Grid Integration Techniques},
  journal = {IEEE Journal of Power Systems},
  year = {2024},
  volume = {39},
  pages = {1234--1245},
  doi = {10.1109/example}
}
```

#### Display Publications

Reference in markdown:

```markdown
{% cite saha2024smart %}
```

### 5. Navigation Menu

Edit navigation in: `_data/navigation.yml`

```yaml
main:
  - title: "Home"
    url: /
  - title: "Blog"
    url: /blog
  - title: "CV"
    url: /cv
  - title: "Publications"
    url: /publications
  - title: "Contact"
    url: /contact
```

---

## Deployment Workflow

### Complete Workflow: Step-by-Step

#### Step 1: Make Changes Locally

```bash
# Ensure you're on staging branch
git checkout staging

# Start development server
bundle exec jekyll serve

# Edit files, test at http://localhost:4000
# Stop server when done (Ctrl+C)
```

#### Step 2: Commit & Push to Staging

Using GitHub Desktop:
1. Click **"Current Branch"** → Select **"staging"**
2. Make your changes
3. In GitHub Desktop Changes tab, write commit message
4. Click **"Commit to staging"**
5. Click **"Push origin"**

Or command line:
```bash
git add .
git commit -m "Add blog post about power systems"
git push origin staging
```

#### Step 3: Wait for Deployment

- Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
- Watch for workflow to complete (1-2 minutes)
- Look for green ✅ checkmark

#### Step 4: Test on Staging Site

Visit: **https://sohag.net/staging**
- Verify all content appears
- Test all links work
- Check on mobile device
- Verify images load correctly

#### Step 5: Go Live (If Everything Works)

Using GitHub Desktop:
1. Click **"Current Branch"** → Select **"main"**
2. Click **"Current Branch"** → **"Merge into current branch"**
3. Select **"staging"** to merge
4. Click **"Push origin"**

Or command line:
```bash
git checkout main
git merge staging
git push origin main
```

#### Step 6: Verify Production

Visit: **https://sohag.net**
- Verify changes appear on live site
- Test functionality
- 🎉 You're live!

### Deployment Timeline

```
You push to staging
        ↓
GitHub Actions starts (0 seconds)
        ↓
Build starts (5-10 seconds)
        ↓
Build completes (30-60 seconds)
        ↓
Deploy starts (60 seconds)
        ↓
Deploy completes (90 seconds total)
        ↓
Site updates live (1-2 minutes visible)
```

### Automated Workflow File

The deployment is handled by: `.github/workflows/deploy.yml`

This file:
- Triggers on push to `main` or `staging`
- Installs Ruby dependencies
- Builds Jekyll site
- Combines main + staging outputs
- Deploys to GitHub Pages

**Do not modify** unless you know what you're doing.

---

## Troubleshooting

### Local Server Issues

#### Port 4000 Already in Use
```bash
bundle exec jekyll serve --port 4001
# Then visit http://localhost:4001
```

#### Changes Not Showing Locally
- Save all files
- Refresh browser (Ctrl+R)
- Check browser console for errors (F12)
- Restart server (Ctrl+C, then `bundle exec jekyll serve`)

#### Ruby/Bundle Errors
```bash
# Clear cache and reinstall
bundle clean --force
bundle install
bundle update
bundle exec jekyll serve
```

### Deployment Issues

#### Workflow Shows Red ❌

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Click the failed workflow
3. Look at error message
4. Common issues:
   - **YAML syntax error**: Check front matter in posts (--- lines)
   - **Missing image**: Check image paths are correct
   - **Broken link**: Verify links are accessible
   - **Bundle error**: Ensure Gemfile is valid

#### Changes Don't Appear on Staging/Main Site

1. **Check workflow status**: Green ✅ checkmark?
2. **Hard refresh browser**: Ctrl+Shift+R
3. **Clear browser cache**: Ctrl+Shift+Delete
4. **Wait 2-3 minutes**: GitHub Pages needs time to update
5. **Check URL**: Staging is `/staging`, Main is root

#### 404 Error on Staging Site

- Ensure you pushed to `staging` branch, not `main`
- Check workflow succeeded (green ✅)
- Verify branch protection rules don't block staging

### Content Issues

#### Post Doesn't Appear

Check:
1. ✅ File is in `_posts/` folder
2. ✅ Filename starts with date: `YYYY-MM-DD-`
3. ✅ File ends with `.md` extension
4. ✅ Front matter is valid (between --- ---)
5. ✅ Date in front matter is correct

#### Images Not Loading

Check:
1. ✅ Image file exists in `assets/images/`
2. ✅ Path is correct: `/assets/images/filename.jpg`
3. ✅ Filename matches exactly (case-sensitive on Linux)
4. ✅ Image file is not corrupted

#### Styling Looks Wrong

1. Hard refresh browser: Ctrl+Shift+R
2. Clear CSS cache
3. Check `assets/css/theme-override.css` for conflicts
4. Restart local server and rebuild

---

## Maintenance & Operations

### Regular Maintenance Tasks

#### Weekly
- ✅ Monitor site for errors (check Actions tab)
- ✅ Test new posts on staging before publishing
- ✅ Check links in published content

#### Monthly
- ✅ Update Ruby gems: `bundle update`
- ✅ Review Analytics (if configured)
- ✅ Check for broken links

#### Quarterly
- ✅ Update Jekyll/theme
- ✅ Audit all pages for outdated info
- ✅ Backup important data (in git already)

### Version Control Best Practices

```bash
# Always pull latest before starting work
git pull origin staging

# Create work in small, logical commits
git commit -m "Add blog post about topic"

# Not:
git commit -m "updated stuff"
```

### Backing Up Your Content

Your content is automatically backed up in:
1. **Local Git Repository**: `.git/` folder
2. **GitHub**: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io
3. **Deployed Site**: Served by GitHub Pages

To backup locally:
```bash
# Clone a fresh copy
git clone https://github.com/sohagkumarsaha/sohagkumarsaha.github.io backup/
```

### Monitoring Deployments

#### Check Deployment Status

Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions

View:
- Latest workflow runs
- Build logs
- Deploy status
- Error messages

#### Enable Notifications

In GitHub:
1. Go to repository
2. Click **"Watch"** (bell icon)
3. Select **"All Activity"** or **"Releases only"**
4. Get notified of deployment failures

---

## Common Questions

### Q: Can I edit the theme?

**A:** Yes, but be careful. Safe edits:
- `assets/css/theme-override.css` - Add custom CSS
- `_includes/custom.html` - Add custom HTML
- `_layouts/` - Modify page layouts

Don't modify theme files directly (hard to maintain).

### Q: How do I add a new page?

**A:** Create file in `_pages/`

```markdown
---
title: "My New Page"
permalink: /my-page/
layout: single
---

# My New Page

Content here...
```

### Q: Can I use different domain?

**A:** Yes, edit `CNAME` file:

```
your-domain.com
```

Then configure domain DNS to point to GitHub Pages.

### Q: How do I make the site private?

**A:** GitHub repository settings:
1. Go to Settings → Visibility
2. Change from Public to Private

Then only people you share access with can see it.

### Q: Can I use plugins?

**A:** Limited on GitHub Pages. Use:
- Plugins from GitHub Pages whitelist
- Or build locally and upload HTML

See: https://pages.github.com/versions/

### Q: How do I add comments?

**A:** Site supports Giscus (GitHub Discussions):

Edit `_config.yml`:
```yaml
comments:
  provider: "giscus"
  giscus:
    repo_id: "your-repo-id"
    category_id: "your-category-id"
```

Setup at: https://giscus.app/

---

## Resources & Documentation

### Official Documentation
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Minimal Mistakes Theme**: https://mmistakes.github.io/minimal-mistakes/
- **GitHub Pages**: https://pages.github.com/
- **Markdown Guide**: https://www.markdownguide.org/

### Tools & Services
- **GitHub Desktop**: https://desktop.github.com/
- **Ruby Installation**: https://rubyinstaller.org/
- **Git Guide**: https://git-scm.com/book/en/v2
- **Markdown Editor**: https://stackedit.io/

### Additional Guides
- **GITHUB_DESKTOP_WORKFLOW.md** - How to use GitHub Desktop
- **DEVELOPMENT.md** - Advanced development guide
- **WORKFLOW_QUICK_REFERENCE.md** - Quick command reference

---

## Support & Help

### If Something Breaks

1. **Check GitHub Actions logs**: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. **Read error message carefully** - It tells you what's wrong
3. **Check Troubleshooting section** above
4. **Ask GitHub Copilot or Claude AI** - They can help debug

### Getting Help

- **Jekyll Issues**: https://github.com/jekyll/jekyll/issues
- **Theme Issues**: https://github.com/mmistakes/minimal-mistakes/issues
- **GitHub Pages**: https://github.com/github/pages-gem/issues

---

## Quick Reference

### File Types
| Extension | Use For | Location |
|-----------|---------|----------|
| `.md` | Blog posts, pages | `_posts/`, `_pages/` |
| `.yml` | Configuration | `_config.yml`, `_data/` |
| `.css` | Styling | `assets/css/` |
| `.js` | Interactivity | `assets/js/` |
| `.jpg/.png` | Images | `assets/images/` |

### Essential Directories
| Directory | Purpose |
|-----------|---------|
| `_posts/` | Blog posts |
| `_pages/` | Static pages |
| `assets/` | CSS, JS, images |
| `_layouts/` | Page templates |
| `_includes/` | Reusable components |

### Key Commands
```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Run local server
bundle update              # Update gems
git add .                  # Stage changes
git commit -m "msg"        # Create commit
git push origin staging    # Push to staging
git checkout main          # Switch to main
git merge staging          # Merge staging into main
```

---

## Version History

- **v1.0** (May 2026) - Initial setup with staging & main branches
- Deployment: GitHub Actions
- Theme: Minimal Mistakes 4.26.2
- Jekyll: 4.4

---

## License & Credits

- **Jekyll**: https://jekyllrb.com/
- **Minimal Mistakes Theme**: https://github.com/mmistakes/minimal-mistakes
- **GitHub Pages**: https://pages.github.com/

---

## Last Updated

**May 13, 2026**

For the latest updates, check:
- GitHub repository: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io
- Staging site: https://sohag.net/staging
- Live site: https://sohag.net

---

**Happy writing! 🚀**
