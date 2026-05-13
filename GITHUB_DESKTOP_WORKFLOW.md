# GitHub Desktop Workflow Guide

This guide explains how to develop on your Jekyll site using **GitHub Desktop** and deploy to both staging and production.

## Overview

Your site has two branches:
- **`staging`** → Deploys to https://sohag.net/staging (preview/testing)
- **`main`** → Deploys to https://sohag.net (production/live)

**Workflow**: Make changes on `staging` → Test on staging URL → Merge to `main` when ready

---

## Step 1: Switch to Staging Branch

1. Open **GitHub Desktop**
2. Click the **"Current Branch"** button (top of window)
3. Click on the **`staging`** branch in the list
4. Click **"Switch Branch"** button

✅ You're now on the staging branch and ready to make changes.

---

## Step 2: Edit Your Site Locally

1. Open your project folder in your favorite editor (VS Code, etc.)
2. Make changes to your content:
   - Edit blog posts in `_posts/` folder
   - Edit pages in `_pages/` folder
   - Edit CSS in `assets/css/`
   - Edit includes in `_includes/`
   - Edit config in `_config.yml`

Save all your changes in your editor.

---

## Step 3: Test Changes Locally (Optional but Recommended)

Before pushing, test your changes locally:

1. Open **PowerShell** or **Terminal** in your project folder
2. Run:
   ```bash
   bundle exec jekyll serve
   ```
3. Open browser to: **http://localhost:4000**
4. Preview your changes
5. Edit and refresh browser as needed
6. Press **Ctrl+C** to stop when done testing

This catches errors before pushing to GitHub.

---

## Step 4: Commit Changes in GitHub Desktop

### Step 4a: Check What Changed

1. Look at the **"Changes"** tab in GitHub Desktop (left side)
2. You'll see all modified files listed
3. Each file shows green (+) for additions, red (-) for deletions

### Step 4b: Stage Your Changes

1. Make sure all files you want to commit are **checked** (they usually are by default)
2. Uncheck any files you DON'T want to commit yet

### Step 4c: Write Commit Message

1. Bottom left of GitHub Desktop, find the **"Summary"** field
2. Write a short commit message, like:
   ```
   Add new blog post about power systems
   ```
   OR
   ```
   Update profile bio
   ```
   OR
   ```
   Fix styling on gallery page
   ```

3. (Optional) Add a longer description in the **"Description"** field for details

### Step 4d: Commit

1. Click the blue **"Commit to staging"** button
2. ✅ Your changes are now committed locally

---

## Step 5: Push to GitHub (Deploy to Staging)

1. In GitHub Desktop, click **"Push origin"** button (top right)
2. This sends your changes to GitHub
3. GitHub Actions automatically starts building

### Wait for Deployment (1-2 minutes):
- Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
- Look for the latest run
- Wait for green ✅ checkmark

### Test on Staging Site:
- Visit: **https://sohag.net/staging**
- Check that your changes appear correctly
- Test links, images, styling
- If you see issues, go back to Step 2 and fix them

---

## Step 6: Once Staging Looks Good - Promote to Main

When you've verified everything works on staging, it's time to go live!

### Step 6a: Switch to Main Branch

1. Click **"Current Branch"** button in GitHub Desktop
2. Select **`main`** branch
3. Click **"Switch Branch"**

✅ You're now on the main branch

### Step 6b: Merge Staging into Main

1. Click **"Current Branch"** menu (top)
2. Click **"Merge into current branch"** button
3. A dialog appears asking which branch to merge
4. Select **`staging`**
5. Click **"Merge staging into main"** button

✅ Changes merged! You now have staging changes on main locally

### Step 6c: Push to GitHub (Deploy to Production)

1. Click **"Push origin"** button (top right)
2. GitHub Actions automatically starts building

### Wait for Deployment (1-2 minutes):
- Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
- Look for the latest run
- Wait for green ✅ checkmark

### Test Live Site:
- Visit: **https://sohag.net**
- Verify your changes appear on the live site
- 🎉 You're live!

---

## Complete Workflow Example

### Scenario: You want to add a new blog post

```
1. GitHub Desktop → Switch to "staging" branch

2. Create new file: _posts/2026-05-20-my-new-post.md
   - Write your blog post
   - Save the file

3. Test locally (optional):
   bundle exec jekyll serve
   → Visit http://localhost:4000 to preview
   → Ctrl+C when done

4. GitHub Desktop:
   - Summary: "Add blog post: My New Post"
   - Click "Commit to staging"
   - Click "Push origin"

5. Wait 1-2 minutes for GitHub Actions

6. Visit https://sohag.net/staging
   → Verify your post appears correctly

7. If looks good:
   GitHub Desktop → Current Branch → Switch to "main"

8. GitHub Desktop → Current Branch → Merge into current branch
   → Select "staging"
   → Merge

9. Click "Push origin"

10. Wait 1-2 minutes for GitHub Actions

11. Visit https://sohag.net
    → Your post is now live! 🎉
```

---

## Common Tasks in GitHub Desktop

### View Changes Before Committing
1. Click the **"Changes"** tab
2. Select a file in the list
3. Right side shows what changed (green = added, red = removed)

### Unstage a File (Don't commit it yet)
1. In the "Changes" tab, uncheck the file
2. It won't be included in the commit

### View Commit History
1. Click the **"History"** tab
2. See all past commits
3. Click a commit to see what changed

### Undo Last Commit (Before Pushing)
1. Click the **"History"** tab
2. Right-click the commit you want to undo
3. Click "Revert This Commit"
4. This creates a NEW commit that undoes the changes

### Sync/Pull Latest Changes
1. Click **"Fetch origin"** to check for remote changes
2. Click **"Pull origin"** to download them
3. Useful if you made changes on another device

---

## Troubleshooting

### "Push origin" button is greyed out
- You probably haven't made any commits yet
- Make changes → Commit → Then it will work

### GitHub Actions shows red ❌
1. Go to: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions
2. Click the failed run
3. Look at the error message in the logs
4. Common issues:
   - Syntax error in blog post (fix YAML front matter)
   - Broken image link
   - Invalid markdown

### Changes don't appear on staging site
1. Check GitHub Actions status (should be green ✅)
2. Hard refresh browser: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
3. Wait another 1-2 minutes for GitHub Pages to update

### Can't switch branches in GitHub Desktop
1. Make sure all changes are **committed** first
2. If you have uncommitted changes, commit them before switching

---

## Branch Names Reminder

| Branch | Use For | Deploys To |
|--------|---------|-----------|
| `staging` | Development & Testing | https://sohag.net/staging |
| `main` | Production/Live | https://sohag.net |

**Always develop on `staging` first!**

---

## Quick Reference

```
📝 Edit files
    ↓
🧪 Test locally (optional): bundle exec jekyll serve
    ↓
📤 GitHub Desktop:
   - Write commit message
   - Click "Commit to staging"
   - Click "Push origin"
    ↓
⏳ Wait 1-2 min for GitHub Actions
    ↓
🔍 Test at https://sohag.net/staging
    ↓
✅ If good:
   - Switch to "main" branch
   - Merge staging into main
   - Push origin
    ↓
⏳ Wait 1-2 min for GitHub Actions
    ↓
🎉 Live at https://sohag.net
```

---

## Tips & Best Practices

### ✅ Good Commit Messages
- "Add blog post about energy management"
- "Fix typo in bio"
- "Update CV with new skills"

### ❌ Bad Commit Messages
- "updated stuff"
- "fix"
- "asdf"

### ✅ Test Before Going Live
- Always check staging first
- Test on mobile if you changed styling
- Click all links to make sure they work

### ✅ Commit Often
- Make a commit after each small task
- Don't wait to commit until you have 10 changes
- Easier to undo if something breaks

### ❌ Don't
- Don't commit directly to `main` (always use staging first)
- Don't push large binary files (use git-lfs if needed)
- Don't commit before testing

---

## Need Help?

- **GitHub Desktop Help**: Help menu in GitHub Desktop
- **Jekyll Help**: https://jekyllrb.com/docs/
- **GitHub Actions Status**: https://github.com/sohagkumarsaha/sohagkumarsaha.github.io/actions

---

**Happy developing! 🚀**
