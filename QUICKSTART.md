# 🚀 Quick Start Guide

Get your Matrix portfolio running in 5 minutes!

## Step 1: Open in VS Code

```bash
cd matrix-portfolio-react
code .
```

## Step 2: Install Dependencies

Open the integrated terminal in VS Code (`Ctrl + `` or `View > Terminal`) and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Lucide Icons, etc.)

## Step 3: Run Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## Step 4: Customize Your Content

### 4.1 Update Contact Info
Open `app/page.tsx` and find the contact buttons section (around line 180):

```typescript
<ContactButton 
  icon={Mail} 
  label="bnjeynga2@gmail.com"  // ← Change this
  href="mailto:bnjeynga2@gmail.com"  // ← And this
/>
```

### 4.2 Update LinkedIn/GitHub Links
Change the URLs in the same section:

```typescript
<ContactButton 
  icon={Linkedin} 
  label="LinkedIn"
  href="https://linkedin.com/in/your-username"  // ← Your LinkedIn
/>
<ContactButton 
  icon={Github} 
  label="GitHub"
  href="https://github.com/your-username"  // ← Your GitHub
/>
```

### 4.3 Customize Projects
Scroll to the `projects` array (around line 10) and modify with your own projects.

### 4.4 Update Skills
Find the `skillCategories` array and add/remove your skills.

## Step 5: Deploy to GitHub Pages

### 5.1 Create GitHub Repository
1. Go to GitHub and create a new repository (e.g., `portfolio`)
2. **DO NOT** initialize with README (we already have files)

### 5.2 Update Repository Name
Open `next.config.js` and update line 4:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
//                                                     ^^^^^^^^^ Your repo name
```

### 5.3 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Matrix portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### 5.4 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait 2-3 minutes for deployment

### 5.5 Access Your Live Site
Your portfolio will be at:
```
https://YOUR-USERNAME.github.io/portfolio
```

## 🎨 Quick Customizations

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --matrix-green: #0f0;    /* Main green */
  --matrix-cyan: #0ff;     /* Accent cyan */
  --matrix-magenta: #f0f;  /* Highlight magenta */
}
```

### Adjust Matrix Rain Speed
Edit `components/MatrixRain.tsx`, line 63:
```typescript
const interval = setInterval(draw, 33);  // Lower = faster, Higher = slower
```

### Change Font
Edit `app/globals.css` and update the font-family or import from Google Fonts.

## 🆘 Common Issues

### Port 3000 Already in Use?
```bash
npm run dev -- -p 3001  # Run on port 3001 instead
```

### Build Errors?
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### GitHub Pages Not Updating?
1. Check the **Actions** tab in your GitHub repo
2. Look for green checkmark (success) or red X (failed)
3. Click on the workflow run to see details

## 📱 Test on Mobile

When running `npm run dev`, access from your phone:
1. Find your computer's IP address
   - Mac/Linux: `ifconfig | grep inet`
   - Windows: `ipconfig`
2. On your phone, visit: `http://YOUR-IP:3000`

## ✅ Checklist Before Going Live

- [ ] Updated email address
- [ ] Updated LinkedIn profile URL
- [ ] Updated GitHub profile URL
- [ ] Customized projects with your work
- [ ] Updated skills and certifications
- [ ] Changed repository name in `next.config.js`
- [ ] Tested on mobile and desktop
- [ ] Checked all links work
- [ ] Reviewed professional summary

## 🎯 Next Steps

1. Add a custom domain (optional)
2. Add analytics (Google Analytics, Plausible, etc.)
3. Add a blog section
4. Create case studies for major projects
5. Add resume download link

## 💡 Pro Tips

- Use `Ctrl + K + S` in VS Code to save all files
- Install "Tailwind CSS IntelliSense" extension for better autocomplete
- Use `Ctrl + `` to toggle terminal in VS Code
- Press `F12` in browser to open DevTools and test responsive design

---

**Need Help?** Check the main README.md for detailed documentation!
