# Sohag Kumar Saha - Personal Website Repository

[![GitHub](https://img.shields.io/badge/GitHub-sohagkumarsaha-blue?logo=github)](https://github.com/sohagkumarsaha/sohagkumarsaha.github.io)
[![Website](https://img.shields.io/badge/Website-sohag.net-green)](https://sohag.net)
[![Staging](https://img.shields.io/badge/Staging-sohag.net/staging-orange)](https://sohag.net/staging)

A professional Jekyll-based personal website and research portfolio showcasing academic background, research interests, publications, and professional experience.

---

## 🌐 Live Websites

| Site | URL | Branch | Purpose |
|------|-----|--------|---------|
| **Production** | https://sohag.net | `main` | Live website (public) |
| **Staging** | https://sohag.net/staging | `staging` | Preview & testing (before going live) |

---

## 📚 Documentation & Guides

This repository includes comprehensive documentation for setup, operations, maintenance, and development.

### Quick Start Guides

| Document | Purpose | For Whom |
|----------|---------|----------|
| **[GITHUB_DESKTOP_WORKFLOW.md](GITHUB_DESKTOP_WORKFLOW.md)** | Step-by-step guide for using GitHub Desktop (commit, push, merge) | Daily users / Content creators |
| **[README.md](README.md)** | Complete website documentation with O&M guide, setup, configuration, and troubleshooting | Everyone (main reference) |
| **[DEVELOPMENT.md](DEVELOPMENT.md)** | Advanced development details, local setup, and technical configuration | Developers |

### Workflow & Deployment Guides

| Document | Purpose |
|----------|---------|
| **[WORKFLOW_QUICK_REFERENCE.md](WORKFLOW_QUICK_REFERENCE.md)** | Quick command reference for common Git operations |
| **[FIX_DEPLOYED.md](FIX_DEPLOYED.md)** | Details of deployment fixes and how permissions were resolved |
| **[ACTION_SUMMARY.md](ACTION_SUMMARY.md)** | Summary of actions taken to fix deployment issues |
| **[READY_TO_DEPLOY.md](READY_TO_DEPLOY.md)** | Deployment readiness checklist |

### Setup & Troubleshooting

| Document | Purpose |
|----------|---------|
| **[SETUP_COMPLETE.md](SETUP_COMPLETE.md)** | Initial setup completion checklist |
| **[NEXT_STEPS.md](NEXT_STEPS.md)** | Next steps after initial setup |
| **[TROUBLESHOOT_STAGING.md](TROUBLESHOOT_STAGING.md)** | Troubleshooting guide for staging deployment issues |

---

## 🚀 Quick Start

### For Content Creators (Using GitHub Desktop)

1. **Switch to `staging` branch** in GitHub Desktop
2. **Make changes** to your content (posts, pages, bio)
3. **Commit** with descriptive message
4. **Push** to GitHub
5. **Wait 1-2 minutes** for GitHub Actions to deploy
6. **Test at** https://sohag.net/staging
7. **When satisfied**, merge to `main` and push
8. **Site goes live** at https://sohag.net

👉 **Full guide:** [GITHUB_DESKTOP_WORKFLOW.md](GITHUB_DESKTOP_WORKFLOW.md)

### For Developers (Local Setup)

```bash
# Clone repository
git clone https://github.com/sohagkumarsaha/sohagkumarsaha.github.io
cd sohagkumarsaha.github.io

# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Visit http://localhost:4000 in browser
```

👉 **Full guide:** [DEVELOPMENT.md](DEVELOPMENT.md)

---

## 📁 Repository Structure

```
sohagkumarsaha.github.io/
├── README.md                           # Main repository documentation
├── GITHUB_DESKTOP_WORKFLOW.md          # GitHub Desktop workflow guide
├── DEVELOPMENT.md                      # Development guide
├── WORKFLOW_QUICK_REFERENCE.md         # Command reference
│
├── _config.yml                         # Jekyll configuration
├── Gemfile                             # Ruby dependencies
├── CNAME                               # Custom domain (sohag.net)
│
├── _pages/                             # Static pages
│   ├── biography.md                    # Biography page
│   ├── cv.md                          # CV/Resume page
│   ├── publications.md                # Publications page
│   ├── teaching.md                    # Teaching page
│   ├── contact.md                     # Contact page
│   ├── research.md                    # Research interests
│   ├── gallery.md                     # Image gallery
│   └── blog.md                        # Blog index
│
├── _posts/                             # Blog posts
│   └── YYYY-MM-DD-post-title.md
│
├── _layouts/                           # Page templates
├── _includes/                          # Reusable components
├── assets/                             # CSS, JavaScript, images
│   ├── css/
│   ├── js/
│   └── images/
│
├── _bibliography/                      # BibTeX references
├── _data/                              # Data files (navigation, etc.)
│
├── .github/workflows/                  # GitHub Actions CI/CD
│   └── deploy.yml                      # Deployment automation
│
└── _site/                              # Generated site (ignore)
```

---

## 🛠️ Technology Stack

- **Jekyll 4.4** - Static site generator
- **Minimal Mistakes Theme** - Professional Jekyll theme
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated CI/CD deployment
- **Ruby 3.3** - Required for Jekyll
- **Custom CSS/JavaScript** - Theming and interactivity

---

## 📖 How to Use This Repository

### Creating a Blog Post

1. **Create file** in `_posts/` named: `YYYY-MM-DD-slug-title.md`
2. **Add front matter** (YAML between `---` lines)
3. **Write content** in Markdown
4. **Test locally** (optional): `bundle exec jekyll serve`
5. **Commit & push** to `staging`
6. **Test on staging site** at https://sohag.net/staging
7. **Merge to main** when ready
8. **Go live** at https://sohag.net

👉 See [README.md](README.md) for detailed blog post template

### Editing Static Pages

1. **Open file** in `_pages/` (e.g., `biography.md`, `cv.md`)
2. **Edit Markdown content**
3. **Save file**
4. **Follow same workflow** as blog posts (commit → test → merge → live)

### Adding Images

1. **Save image** to `assets/images/`
2. **Insert in content** with: `![Description](/assets/images/filename.jpg)`
3. **Commit and push**

---

## 🔄 Deployment Workflow

### Branch Strategy

| Branch | Deploys To | When to Push | Status |
|--------|-----------|-------------|--------|
| `staging` | https://sohag.net/staging | During development & testing | Preview |
| `main` | https://sohag.net | When verified & ready | Production |

### Complete Workflow

```
Make changes on staging
        ↓
Commit & push to GitHub (staging branch)
        ↓
GitHub Actions builds & deploys (1-2 min)
        ↓
Test at https://sohag.net/staging
        ↓
If everything looks good:
  Switch to main branch
  Merge staging into main
  Push to GitHub
        ↓
GitHub Actions builds & deploys (1-2 min)
        ↓
Live at https://sohag.net 🎉
```

---

## 🔧 Configuration

### Main Config File: `_config.yml`

Key settings:
- **Site title & description**
- **Author information**
- **Theme & appearance**
- **Navigation menu**
- **Publication settings**

Edit this file to change:
- Site title
- Author name/bio
- Social media links
- Blog settings
- Theme colors

---

## 🐛 Troubleshooting

### Site Not Updating
1. Check GitHub Actions status: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Look for green ✅ checkmark (successful deployment)
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Wait 2-3 minutes for GitHub Pages to update

### Local Server Issues
```bash
# Port 4000 already in use
bundle exec jekyll serve --port 4001

# Clear cache and rebuild
bundle clean --force
bundle install
bundle exec jekyll serve
```

### Deployment Failures
1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Click failed workflow run
3. Check error message in logs
4. Common issues:
   - YAML syntax error in post front matter
   - Missing image file
   - Broken links
   - Invalid Markdown

👉 See [TROUBLESHOOT_STAGING.md](TROUBLESHOOT_STAGING.md) for detailed troubleshooting

---

## 📝 Writing Guidelines

### Blog Post Template

```markdown
---
title: "Your Post Title"
date: 2026-05-20
categories:
  - research
  - power-systems
tags:
  - energy
  - optimization
---

# Your Post Title

Your content here...

## Section

More content...
```

### Best Practices

✅ **Do:**
- Use descriptive titles
- Add categories for organization
- Include images to break up text
- Link to references
- Use proper Markdown formatting
- Test on staging before going live

❌ **Don't:**
- Commit directly to `main` (always use staging first)
- Use special characters in filenames (except hyphens)
- Write posts without categories/tags
- Forget the YAML front matter

---

## 🔐 Important Notes

### Do Not Modify
- `_site/` folder (auto-generated)
- `.git/` folder (unless you know what you're doing)
- `Gemfile.lock` (dependency lock file)
- `.github/workflows/deploy.yml` (unless fixing deployment)

### Safe to Edit
- `_pages/*.md` - Static pages
- `_posts/*.md` - Blog posts
- `_config.yml` - Configuration
- `assets/css/theme-override.css` - Custom styling
- `_data/navigation.yml` - Navigation menu

---

## 📚 Learning Resources

### Official Documentation
- **Jekyll Docs:** https://jekyllrb.com/docs/
- **Minimal Mistakes Theme:** https://mmistakes.github.io/minimal-mistakes/
- **GitHub Pages:** https://pages.github.com/
- **Markdown Guide:** https://www.markdownguide.org/

### Tools
- **GitHub Desktop:** https://desktop.github.com/
- **Ruby Installation:** https://rubyinstaller.org/
- **Git Guide:** https://git-scm.com/book/en/v2
- **Markdown Editor:** https://stackedit.io/

---

## 🤝 Contributing

This is a personal website. If you have suggestions:

1. **Report issues:** https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/issues
2. **Suggest changes** by opening a pull request
3. **Contact:** [sohag@ieee.org](mailto:sohag@ieee.org)

---

## 📊 Repository Statistics

| Metric | Value |
|--------|-------|
| **Site Generator** | Jekyll 4.4 |
| **Theme** | Minimal Mistakes |
| **Hosting** | GitHub Pages |
| **Custom Domain** | sohag.net |
| **Deployment** | GitHub Actions |
| **Ruby Version** | 3.3 |

---

## 📞 Support & Help

### Quick Reference

- **Commands:** [WORKFLOW_QUICK_REFERENCE.md](WORKFLOW_QUICK_REFERENCE.md)
- **GitHub Desktop:** [GITHUB_DESKTOP_WORKFLOW.md](GITHUB_DESKTOP_WORKFLOW.md)
- **Setup Issues:** [SETUP_COMPLETE.md](SETUP_COMPLETE.md)
- **Deployment Errors:** [TROUBLESHOOT_STAGING.md](TROUBLESHOOT_STAGING.md)
- **Development:** [DEVELOPMENT.md](DEVELOPMENT.md)

### Getting Help

1. **Check documentation** - Most answers are in the guides above
2. **Read error messages** - They usually tell you exactly what's wrong
3. **Search GitHub issues** - Someone may have had the same problem
4. **Contact support** - Email sohag@ieee.org

---

## 📋 Deployment Status

✅ **All systems operational**

- Production site: https://sohag.net (live)
- Staging site: https://sohag.net/staging (preview)
- GitHub Actions: Automated deployment
- Custom domain: sohag.net (via CNAME)

---

## 📅 Last Updated

**May 13, 2026**

For latest updates:
- Check git log: `git log --oneline`
- View repository: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io
- Check GitHub Actions: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions

---

## 📄 License & Attribution

- **Jekyll:** https://jekyllrb.com/ (MIT)
- **Minimal Mistakes:** https://github.com/mmistakes/minimal-mistakes (MIT)
- **GitHub Pages:** https://pages.github.com/
- **This Repository:** Personal website

---

## 🎯 Next Steps

1. **Read:** [GITHUB_DESKTOP_WORKFLOW.md](GITHUB_DESKTOP_WORKFLOW.md) for daily workflow
2. **Write:** Create your first blog post
3. **Test:** Check on staging site
4. **Deploy:** Merge to main when ready
5. **Celebrate:** 🎉 Your site is live!

---

**Happy developing and writing! 🚀**

For detailed guidance, see [README.md](README.md) or [DEVELOPMENT.md](DEVELOPMENT.md)

