# GitHub Pages Deployment Guide

This guide will help you deploy your Jekyll Chirpy blog to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Your GitHub username is: **LCEngineerLab** (as configured in `_config.yml`)

## Step-by-Step Instructions

### 1. Create the GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner and select **"New repository"**
3. Repository name: **`LCEngineerLab.github.io`** (must match your GitHub username exactly)
4. Description: Optional (e.g., "My Engineering Blog")
5. Set visibility: **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (you already have these)
7. Click **"Create repository"**

### 2. Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Jekyll Chirpy blog setup"

# Add the remote repository (using SSH - already configured for LCEngineerLab account)
# If you need to set it up, use:
# git remote add origin git@github.com-LCEngineerLab:LCEngineerLab/LCEngineerLab.github.io.git
# Or if using HTTPS:
# git remote add origin https://github.com/LCEngineerLab/LCEngineerLab.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If your default branch is `master` instead of `main`, use:
```bash
git branch -M master
git push -u origin master
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/LCEngineerLab/LCEngineerLab.github.io`
2. Click on **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. The GitHub Actions workflow will automatically build and deploy your site

### 4. Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow run called "Build and Deploy"
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once it shows a green checkmark, your site is live!

### 5. Access Your Site

Your blog will be available at:
**https://LCEngineerLab.github.io**

It may take a few minutes after the first deployment for the site to be accessible.

## Updating Your Blog

Whenever you make changes:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Update blog post or description of changes"

# Push to GitHub
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Troubleshooting

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Check the "Actions" tab for any build errors
- Verify your repository name matches `USERNAME.github.io` exactly

### Build Failures
- Check the Actions tab for error messages
- Ensure `_config.yml` has correct `url` and `baseurl` settings
- Verify all required files are committed

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file in the root with your domain name
2. Configure DNS settings with your domain provider
3. Update the `url` in `_config.yml` to your custom domain

## Important Notes

- The `_site` folder is automatically ignored (it's generated during build)
- GitHub Actions builds your site automatically on every push
- Your site URL must match: `https://YOUR_USERNAME.github.io`
- Make sure your `_config.yml` has the correct `url` setting (already configured)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Chirpy Theme Documentation](https://github.com/cotes2020/jekyll-theme-chirpy)

