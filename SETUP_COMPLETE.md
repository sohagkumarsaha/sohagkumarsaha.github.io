# ✅ Setup Complete: Development Workflow Configured

## What's Been Set Up

### 🌳 Branches
- **`main`** – Production site (https://sohagkumarsaha.github.io)
- **`staging`** – Preview/development site (https://sohagkumarsaha.github.io/staging)

### 🤖 GitHub Actions
The workflow in `.github/workflows/deploy.yml` automatically:
- Builds both `main` and `staging` branches on every push
- Deploys main site to root domain with `--baseurl ""`
- Deploys staging site to `/staging` with `--baseurl "/staging"`
- Combines outputs into a single deployment
- Takes ~1-2 minutes per workflow run

### 📄 Documentation
1. **[DEVELOPMENT.md](DEVELOPMENT.md)** – Complete guide with setup, workflow, troubleshooting
2. **[WORKFLOW_QUICK_REFERENCE.md](WORKFLOW_QUICK_REFERENCE.md)** – Cheat sheet for daily use

---

## Your Workflow (From Now On)

### 1️⃣ Always Develop on `staging`
```bash
git checkout staging
```

### 2️⃣ Edit & Preview Locally
```bash
bundle exec jekyll serve
# Open http://localhost:4000
```

### 3️⃣ Push to Test
```bash
git add .
git commit -m "Your changes"
git push origin staging
# Wait 1-2 minutes
# View: https://sohagkumarsaha.github.io/staging
```

### 4️⃣ Verify Everything Looks Good
- Check the staging site
- Verify links work
- Check layouts, images, content
- Test on mobile if needed

### 5️⃣ Promote to Production
```bash
git checkout main
git merge staging
git push origin main
# Wait 1-2 minutes
# View: https://sohagkumarsaha.github.io
```

---

## Key Points to Remember

✅ **Development Branch**: Always use `staging` for new work  
✅ **Testing**: Every push to `staging` deploys to `/staging` subdirectory  
✅ **Production**: Only push to `main` after verifying on staging  
✅ **Automatic**: GitHub Actions handles all building and deployment  
✅ **Baseurl**: Staging uses `/staging`, main uses root (no manual config needed)  
✅ **Monitoring**: Check GitHub Actions tab if something breaks  

---

## URLs You'll Use

```
Local Development:      http://localhost:4000
Staging Preview:        https://sohagkumarsaha.github.io/staging
Production:             https://sohagkumarsaha.github.io
Build Status:           https://github.com/sohagkumarsaha/.../actions
```

---

## Next Steps

1. **Make a test commit on staging**:
   ```bash
   git checkout staging
   echo "# Test edit at $(date)" >> index.md
   git add .
   git commit -m "Test: workflow configuration"
   git push origin staging
   ```

2. **Watch the workflow**:
   - Go to GitHub Actions tab
   - See build progress (1-2 minutes)
   - Check staging site when done

3. **Verify then merge to main**:
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```

4. **You're all set!** From now on, your workflow is:
   - Work on `staging`
   - Test on `/staging` subdirectory
   - Merge to `main` when verified
   - Production lives at root domain

---

## Questions?

- **Detailed guide**: See [DEVELOPMENT.md](DEVELOPMENT.md)
- **Quick commands**: See [WORKFLOW_QUICK_REFERENCE.md](WORKFLOW_QUICK_REFERENCE.md)
- **GitHub Actions docs**: https://docs.github.com/en/actions
- **Jekyll docs**: https://jekyllrb.com/

Enjoy your new development workflow! 🚀
