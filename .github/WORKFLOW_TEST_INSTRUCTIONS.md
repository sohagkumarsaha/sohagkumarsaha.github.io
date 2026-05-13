# Workflow Setup - Next Steps

The workflow files have been configured. Now you need to:

## 1. Commit the Updated Workflow

```bash
cd c:\Users\ssaha42\Documents\GitHub\sohagkumarsaha.github.io
git add .github/workflows/deploy.yml
git add DEVELOPMENT.md
git add WORKFLOW_QUICK_REFERENCE.md
git add SETUP_COMPLETE.md
git commit -m "setup: configure staging and main branch deployment workflow"
git push origin main
```

## 2. Also Push to Staging (if different from main)

```bash
git checkout staging
git merge main
git push origin staging
```

## 3. Monitor the Workflow

- Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
- You should see a workflow run that includes:
  - Build main site
  - Build staging site  
  - Combine outputs
  - Deploy to GitHub Pages

## 4. Verify Deployment

- Main site: https://sohagkumarsaha.github.io
- Staging site: https://sohagkumarsaha.github.io/staging

## Why isn't staging showing?

The workflow hasn't had a chance to run yet because:
1. The updated workflow file needs to be pushed to GitHub
2. GitHub Actions then needs to execute it (takes 1-2 minutes)
3. Then GitHub Pages redeploys with the new combined output

## What happens next:

1. After you push, GitHub Actions will automatically run the workflow
2. It will build both main and staging branches
3. It will create a combined output with `/staging` as a subdirectory
4. GitHub Pages will deploy this combined output
5. Both sites will be live

## Important Notes

- The workflow is triggered by pushes to `main` OR `staging` branches
- Both branches are always built and deployed together
- The `--baseurl` is handled automatically by the workflow
- You don't need to modify `_config.yml` for baseurl

Once you push these changes, the workflow should run within seconds and complete within 1-2 minutes.
