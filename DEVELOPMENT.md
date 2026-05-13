# Development Workflow

This document outlines the workflow for developing and deploying changes to your personal website.

## Overview

- **Main Branch** (`main`): Production site at https://sohagkumarsaha.github.io
- **Staging Branch** (`staging`): Preview site at https://sohagkumarsaha.github.io/staging
- **Development Flow**: Always work on `staging` → test changes → promote to `main`

## Getting Started

### Local Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/sohagkumarsaha/sohagkumarsaha.github.io.git
   cd sohagkumarsaha.github.io
   ```

2. **Switch to staging branch** (all development happens here):
   ```bash
   git checkout staging
   ```

3. **Install dependencies**:
   ```bash
   bundle install
   ```

4. **Serve locally** (preview while developing):
   ```bash
   bundle exec jekyll serve
   ```
   - Open http://localhost:4000 in your browser
   - Changes auto-refresh (usually within a few seconds)

## Development Workflow

### Step 1: Make Changes on Staging
```bash
git checkout staging
# Edit files (posts, pages, config, layouts, etc.)
```

### Step 2: Preview Locally
```bash
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Step 3: Test in GitHub Actions (Staging Deployment)
```bash
git add .
git commit -m "Description of changes"
git push origin staging
```
- GitHub Actions automatically builds and deploys to `/staging`
- View live preview: https://sohagkumarsaha.github.io/staging
- Verify all changes look correct on the staging site

### Step 4: Promote to Production (Main)
Once you've verified everything on staging:

```bash
# Option A: Merge staging into main (recommended)
git checkout main
git pull origin main
git merge staging
git push origin main

# Option B: Cherry-pick specific commits
# (Use if not all staging changes are ready for production)
git checkout main
git pull origin main
git cherry-pick <commit-hash>
git push origin main
```

- GitHub Actions automatically builds and deploys to main domain
- View live production: https://sohagkumarsaha.github.io
- Both main and staging deploy simultaneously

## Deployment Details

### Automatic Deployments

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **On every push** to `main` or `staging`:
   - Checks out both branches
   - Installs Ruby dependencies for each
   - Builds main site with `--baseurl ""`
   - Builds staging site with `--baseurl "/staging"`
   - Combines outputs into single deployment
   - Deploys to GitHub Pages

2. **Build Status**:
   - Check GitHub Actions tab for build logs
   - Failed builds won't be deployed

### File Structure During Build

```
_site/
├── index.html          (Main site home)
├── blog/
├── publications/
├── assets/
└── staging/            (Staging site in subdirectory)
    ├── index.html
    ├── blog/
    └── assets/
```

## Common Tasks

### Publishing a Blog Post

1. Create post in `_posts/` with naming: `YYYY-MM-DD-title.md`
2. Edit and preview locally: `bundle exec jekyll serve`
3. Push to staging: `git push origin staging`
4. Test on https://sohagkumarsaha.github.io/staging/blog/
5. Merge to main when ready: `git checkout main && git merge staging && git push origin main`

### Quick Local Preview Without Server

```bash
bundle exec jekyll build --baseurl "/staging" --destination _site_preview
# Open _site_preview/index.html in browser (local file preview)
```

### Reset Staging to Match Main (Discard All Staging Changes)

```bash
git checkout staging
git reset --hard main
git push -f origin staging
```

⚠️ **Warning**: This discards all staging-only changes. Use only if you're sure.

### View Build Logs

1. Go to https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Click the latest workflow run
3. Click "build" job to see detailed logs

## Tips

- **Local preview matches staging**: Use `bundle exec jekyll serve --baseurl "/staging"` to match exact staging behavior
- **Check Ruby version**: `ruby --version` should match workflow (3.3)
- **Clear cache**: If build behaves unexpectedly, run `bundle exec jekyll clean` then rebuild
- **Gemfile**: Don't modify unless adding new Jekyll plugins (requires `bundle update`)

## Troubleshooting

### Build fails locally but passes on GitHub (or vice versa)

1. Ensure Ruby version matches: `ruby --version` → should be 3.3+
2. Update gems: `bundle update`
3. Clean cache: `bundle exec jekyll clean`
4. Rebuild: `bundle exec jekyll build`

### Changes not appearing on staging site

1. Push to `staging` branch (not `main`)
2. Wait 1-2 minutes for GitHub Actions to complete
3. Check Actions tab for build errors
4. Hard refresh browser (Ctrl+Shift+R)

### Baseurl issues (links broken on staging)

- Staging uses `--baseurl "/staging"` automatically via workflow
- Main uses `--baseurl ""`
- Don't manually set baseurl in `_config.yml` (workflow overrides it)

## Resources

- [Jekyll Documentation](https://jekyllrb.com/)
- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
