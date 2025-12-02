# 📋 GitHub Deployment Checklist

Follow this checklist to deploy your Matrix portfolio to GitHub Pages.

## ✅ Pre-Deployment Tasks

### 1. Personal Information
- [ ] Updated email in `app/page.tsx` (line ~181)
- [ ] Updated LinkedIn URL (line ~185)
- [ ] Updated GitHub URL (line ~190)
- [ ] Updated location/phone if desired

### 2. Content Customization
- [ ] Projects array reflects YOUR actual projects
- [ ] Skills categories match YOUR expertise
- [ ] Certifications list is accurate and current
- [ ] Professional summary is personalized
- [ ] Education section is correct

### 3. Configuration Files
- [ ] Repository name in `next.config.js` matches your GitHub repo (line 4)
- [ ] Repository name format: lowercase, hyphens (e.g., `matrix-portfolio`)

### 4. Testing
- [ ] Run `npm run dev` successfully
- [ ] All pages load without errors (check browser console with F12)
- [ ] Hover effects work on all interactive elements
- [ ] Mobile responsive (test with browser DevTools)
- [ ] All external links open in new tabs

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Settings:
   - Repository name: `matrix-portfolio` (or your choice)
   - Description: "Cybersecurity portfolio with Matrix theme"
   - Public repository
   - **DO NOT** check "Add a README file"
   - **DO NOT** check "Add .gitignore"
   - **DO NOT** check "Choose a license"
4. Click **Create repository**

### Step 2: Initialize Git Locally

Open terminal in VS Code and run these commands **one by one**:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Matrix cybersecurity portfolio"

# Rename branch to main
git branch -M main

# Add remote repository (REPLACE with your URL)
git remote add origin https://github.com/YOUR-USERNAME/matrix-portfolio.git

# Push to GitHub
git push -u origin main
```

**Important**: Replace `YOUR-USERNAME` and `matrix-portfolio` with your actual GitHub username and repository name.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - (You should see "GitHub Actions" appear after selecting it)
5. Wait for the green checkmark

### Step 4: Monitor Deployment

1. Click the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see progress
4. Wait for all steps to complete (usually 2-3 minutes)
5. Green checkmark = Success! ✅
6. Red X = Error (click to see details)

### Step 5: Access Your Live Site

Your portfolio is now live at:
```
https://YOUR-USERNAME.github.io/matrix-portfolio
```

Replace `YOUR-USERNAME` with your GitHub username and `matrix-portfolio` with your repository name.

## 🔧 Post-Deployment Tasks

### 1. Test Live Site
- [ ] Visit your live URL
- [ ] Test all navigation
- [ ] Verify all links work
- [ ] Check mobile responsive design
- [ ] Test contact buttons
- [ ] Verify Matrix rain animation works

### 2. Update Repository
- [ ] Add repository description on GitHub
- [ ] Add repository tags: `portfolio`, `cybersecurity`, `nextjs`, `react`
- [ ] Update repository website URL to your live site
- [ ] Consider adding a custom domain (optional)

### 3. Share Your Portfolio
- [ ] Add link to LinkedIn profile
- [ ] Add link to GitHub profile README
- [ ] Update resume with portfolio URL
- [ ] Share with your network

## 🐛 Troubleshooting

### Build Failed in GitHub Actions?

**Check the error logs:**
1. Go to Actions tab
2. Click the failed workflow run
3. Click on the failed job
4. Read the error message

**Common fixes:**
```bash
# If dependencies issue
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Fix dependencies"
git push

# If TypeScript errors
npm run build  # Test locally first
# Fix any errors shown
git add .
git commit -m "Fix TypeScript errors"
git push
```

### Site Shows 404 Error?

**Possible causes:**
1. GitHub Pages not enabled correctly
   - Go to Settings → Pages
   - Ensure "GitHub Actions" is selected as source

2. Wrong basePath in `next.config.js`
   - Must match repository name exactly
   - Example: Repo name `my-portfolio` → basePath: `/my-portfolio`

3. Deployment still in progress
   - Check Actions tab for green checkmark
   - Wait 2-3 minutes after deployment completes

### Styles Not Loading?

**Solutions:**
1. Hard refresh browser: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check browser console (F12) for errors
4. Verify `globals.css` is imported in `app/layout.tsx`

### Matrix Rain Not Showing?

**Check:**
1. Browser console for JavaScript errors (F12)
2. Canvas element is rendering (check browser DevTools → Elements tab)
3. Z-index layering is correct
4. Canvas width/height are being set

## 🔄 Making Updates After Deployment

Whenever you want to update your live site:

```bash
# 1. Make your changes in VS Code
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Update: describe your changes"
git push

# 4. GitHub Actions automatically rebuilds and deploys
# 5. Check Actions tab to monitor progress
# 6. Visit your live site after green checkmark appears
```

## 📊 Optional Enhancements

### Add Custom Domain
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. In repo Settings → Pages → Custom domain
3. Enter your domain
4. Update DNS settings with your domain provider
5. Wait for DNS propagation (can take 24-48 hours)

### Add Analytics
```typescript
// Add to app/layout.tsx in <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Enable HTTPS (Automatic)
- GitHub Pages automatically provides SSL
- Just wait 15-30 minutes after first deployment
- Your site will be accessible via https://

## ✨ Success Indicators

Your deployment is successful when:
- ✅ GitHub Actions workflow shows green checkmark
- ✅ Live site URL loads without errors
- ✅ All pages and sections are visible
- ✅ Interactive elements work (hover effects, expandable cards)
- ✅ Matrix rain animation is running
- ✅ All links navigate correctly
- ✅ Mobile responsive design works
- ✅ No console errors in browser DevTools

## 🎉 You're Live!

Congratulations! Your cybersecurity portfolio is now live on the internet.

**Next steps:**
1. Share your portfolio URL on social media
2. Add it to your resume and LinkedIn
3. Continue updating with new projects
4. Monitor site analytics (if added)
5. Collect feedback and iterate

---

**Questions?** Check the main README.md or open an issue on GitHub.
