# Quick Reference: Development Workflow

## The Typical Day

### Morning: Start Work
```bash
git checkout staging
bundle exec jekyll serve
```
Open http://localhost:4000 and start editing

### During Work: Push Preview
```bash
git add .
git commit -m "Your changes"
git push origin staging
```
See live preview at: https://sohagkumarsaha.github.io/staging

### End of Day: Go Live
```bash
git checkout main
git merge staging
git push origin main
```
Live at: https://sohagkumarsaha.github.io

---

## Key URLs

| Site | URL | When to Use |
|------|-----|------------|
| **Main** | https://sohagkumarsaha.github.io | Production, verified content |
| **Staging** | https://sohagkumarsaha.github.io/staging | Testing changes before publishing |
| **Local** | http://localhost:4000 | Development, instant feedback |
| **Actions** | https://github.com/sohagkumarsaha/.../actions | Check build status |

---

## Branches

| Branch | Purpose | Deploy To |
|--------|---------|-----------|
| `staging` | **Where you develop** | `/staging` subdirectory |
| `main` | **Production** | root domain |

---

## Commands Cheat Sheet

```bash
# Setup (one time)
git clone https://github.com/sohagkumarsaha/sohagkumarsaha.github.io.git
cd sohagkumarsaha.github.io
bundle install

# Development (daily)
git checkout staging
bundle exec jekyll serve           # Local preview at :4000

# Commit & Push
git add .
git commit -m "Your message"
git push origin staging            # Deploy to /staging

# Go Live
git checkout main
git merge staging
git push origin main               # Deploy to main domain

# Useful utilities
bundle exec jekyll clean           # Clear build cache
git log --oneline -10              # View recent commits
git diff staging main              # See what's different
```

---

## Workflow Decision Tree

```
Want to edit something?
├─ YES
│  ├─ Local preview needed?
│  │  ├─ YES → bundle exec jekyll serve
│  │  └─ NO  → just edit, commit, push
│  └─ Push to test on web?
│     ├─ YES (staging first) → git push origin staging
│     │                         (wait 1-2 min, check staging site)
│     └─ Ready for production → git checkout main && git merge staging && git push origin main
│
└─ NO: grab a coffee, you earned it ☕
```

---

## Common Scenarios

### "I want to write a blog post"
1. Create `_posts/YYYY-MM-DD-title.md`
2. Edit locally with `bundle exec jekyll serve`
3. `git push origin staging` to see on /staging
4. `git checkout main && git merge staging && git push origin main` when ready

### "I want to fix a typo on the main site"
1. `git checkout staging`
2. Fix the typo
3. `git push origin staging`
4. Check https://sohagkumarsaha.github.io/staging
5. `git checkout main && git merge staging && git push origin main`

### "I made a mistake on staging, revert it"
1. `git log --oneline` (find the bad commit hash)
2. `git revert <commit-hash>` OR `git reset --hard HEAD~1`
3. `git push origin staging`

### "Staging and main got out of sync, update staging to match main"
```bash
git checkout staging
git reset --hard main
git push -f origin staging
```

---

## Monitoring Deployments

1. **Push code**
2. **Check GitHub Actions** (takes 1-2 minutes): https://github.com/sohagkumarsaha/.../actions
3. **See green checkmark** → deployment successful
4. **See red X** → click to view error logs, fix it, push again

---

## Remember

- ✅ **Always develop on `staging`** – main is for production-ready code
- ✅ **Test on `https://sohagkumarsaha.github.io/staging`** – before going live
- ✅ **Use `git merge staging`** when promoting to main
- ✅ **Check Actions tab** if something looks broken
- ✅ **Hard refresh browser** (Ctrl+Shift+R) if changes don't appear

---

## Need help?

See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed explanations.
