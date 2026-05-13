# Troubleshooting: Staging Site Not Showing

The workflow has been pushed to GitHub, but the staging site at `sohag.net/staging` is not appearing. Here's how to diagnose and fix it.

## Step 1: Check if GitHub Actions Workflow Ran

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Look for the latest workflow run (should say "added staged and main" or similar)
3. Check the status:
   - ✅ **Green checkmark** = Success (workflow ran fine)
   - ❌ **Red X** = Failed (there's a build error)
   - 🟡 **Yellow circle** = Still running (wait a few minutes)

## Step 2A: If Workflow is Still Running
- Just wait! GitHub Actions takes 1-2 minutes to complete
- Refresh the page after 2 minutes
- Then check the deployed site

## Step 2B: If Workflow Failed (Red X)
1. Click on the failed workflow run
2. Click on the "build" job
3. Scroll down to see what failed
4. Common errors:
   - **Gemfile.lock missing** → Run `bundle install` locally and commit Gemfile.lock
   - **Ruby version mismatch** → Ensure Gemfile specifies compatible Ruby version
   - **Missing Jekyll plugins** → Check if new plugins need to be in Gemfile
5. Fix the error and push again

## Step 3: Check GitHub Pages Configuration

Even if workflow succeeds, GitHub Pages settings matter:

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/settings/pages
2. Look for "Source" section:
   - Should say: **"Deploy from a branch"**
   - Branch should be: **`gh-pages`** (or whatever branch GitHub Actions deploys to)
   - Folder should be: **`/ (root)`**
3. If it's set differently:
   - GitHub Pages might be serving the wrong branch
   - Change it to match the above and save

## Step 4: Check if gh-pages Branch Exists

The workflow deploys to a `gh-pages` branch. Verify it exists:

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/branches
2. Look for `gh-pages` branch
3. If it's not there:
   - GitHub Actions should have created it automatically
   - Run the workflow manually: Actions tab → "Deploy Jekyll Site" → "Run workflow"

## Step 5: Verify the Combined Output Structure

If the workflow succeeded, check what's actually in gh-pages:

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/tree/gh-pages
2. You should see:
   ```
   gh-pages/
   ├── index.html         (main site)
   ├── assets/
   ├── blog/
   ├── staging/           ← This should exist!
   │   ├── index.html
   │   ├── assets/
   │   └── blog/
   └── ...
   ```
3. If `staging/` folder is NOT there:
   - The combine step in the workflow failed
   - Or the staging build failed
   - Check the workflow logs (Step 2B)

## Step 6: DNS/Domain Configuration

Since you use custom domain `sohag.net`:

1. Verify CNAME file points to GitHub:
   - Check: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/blob/main/CNAME
   - Should contain: `sohag.net`
   
2. Verify DNS is pointing to GitHub:
   - Should be an A record or CNAME pointing to GitHub Pages IP
   - GitHub expects: `sohagkumarsaha.github.io` CNAME
   - Or specific IPs (see GitHub Pages docs)

## Step 7: Browser Cache

Sometimes browsers cache old versions:

1. Hard refresh: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
2. Or: **Ctrl + F5**
3. Or: Clear browser cache completely

## Step 8: DNS Cache

DNS caches might be old:

1. Clear DNS cache:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Linux: `sudo systemctl restart systemd-resolved`

2. Try from different device or network to rule out local cache

## Step 9: Wait and Try Again

Sometimes GitHub Pages takes a few minutes to serve the new content:

1. Check the workflow completed successfully (green checkmark)
2. Wait 5-10 minutes
3. Try accessing `sohag.net/staging` again
4. Hard refresh if still not appearing

## Step 10: Manual Trigger

If nothing else works, manually trigger the workflow:

1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Click "Deploy Jekyll Site to GitHub Pages"
3. Click "Run workflow" button
4. Select branch: `staging`
5. Click green "Run workflow" button
6. Wait 1-2 minutes for it to complete
7. Check `sohag.net/staging`

## Common Issues Checklist

- [ ] Workflow completed with green checkmark?
- [ ] `gh-pages` branch exists and has content?
- [ ] `staging/` folder exists in `gh-pages`?
- [ ] GitHub Pages source is set to `gh-pages` branch?
- [ ] CNAME file exists and points to `sohag.net`?
- [ ] DNS is correctly configured?
- [ ] Browser cache cleared (Ctrl+Shift+R)?
- [ ] Waited at least 5 minutes since workflow completed?

## Still Not Working?

If you've checked all the above and it still doesn't work:

1. **Check workflow logs** for errors (Step 2B)
2. **Verify baseurl** – Staging uses `/staging`, which should work with subdirectory
3. **Test with GitHub Pages domain** – Try `sohagkumarsaha.github.io/staging` to rule out custom domain issues
4. **Check main site** – If main site also doesn't work, it's a broader GitHub Pages issue

## URLs to Check

- Workflow logs: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
- Pages settings: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/settings/pages
- Branches: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/branches
- gh-pages content: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/tree/gh-pages
- Main site: https://sohag.net
- Staging site: https://sohag.net/staging (or sohagkumarsaha.github.io/staging to test)
