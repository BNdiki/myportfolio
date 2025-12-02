# Matrix Portfolio - Brian N. Njenga

A Matrix-themed cybersecurity portfolio showcasing my work as a Cybersecurity Engineer and AI/ML Security Specialist.

## 🚀 Live Demo

[View Live Portfolio](https://yourusername.github.io/matrix-portfolio)

## ✨ Features

- **Matrix Rain Animation** - Classic falling code effect
- **Glitch Text Effects** - Cyberpunk-style typography
- **Interactive Project Cards** - Expandable project details with metrics
- **Terminal-Style UI** - Command-line aesthetic throughout
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Hover effects and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/matrix-portfolio.git
   cd matrix-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Update `next.config.js`**
   Replace `'matrix-portfolio'` with your repository name:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages (left sidebar)
   - Under "Build and deployment":
     - Source: GitHub Actions
   - The workflow will automatically deploy your site

4. **Access your site**
   Your portfolio will be available at: `https://yourusername.github.io/your-repo-name`

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

3. **Deploy the `out` folder** to your hosting service

## 📝 Customization

### Update Personal Information

Edit `/app/page.tsx`:

1. **Contact Information**
   ```typescript
   <ContactButton 
     icon={Mail} 
     label="your-email@example.com"
     href="mailto:your-email@example.com"
   />
   ```

2. **Projects**
   Modify the `projects` array with your own projects

3. **Skills**
   Update the `skillCategories` array with your skills

4. **Certifications**
   Edit the `certifications` array

### Change Color Scheme

Edit `/app/globals.css`:
```css
:root {
  --matrix-green: #0f0;  /* Change to your preferred color */
  --matrix-cyan: #0ff;
  --matrix-magenta: #f0f;
}
```

## 📁 Project Structure

```
matrix-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── CertificationCard.tsx
│   ├── ContactButton.tsx
│   ├── GlitchText.tsx
│   ├── MatrixRain.tsx
│   ├── ProjectCard.tsx
│   ├── SkillGrid.tsx
│   └── TerminalBox.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── README.md
```

## 🐛 Troubleshooting

### Build Fails
- Ensure Node.js version is 18 or higher
- Delete `node_modules` and `.next` folders, then run `npm install` again

### GitHub Pages Not Updating
- Check Actions tab for deployment status
- Ensure GitHub Pages is set to "GitHub Actions" source
- Verify `basePath` in `next.config.js` matches your repository name

### Styles Not Loading
- Clear browser cache
- Check browser console for errors
- Verify all components are imported correctly

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Brian N. Njenga**
- Email: bnjeynga2@gmail.com
- Location: Baltimore, MD
- Role: Cybersecurity Engineer | AI/ML Security Specialist

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: Remember to replace all placeholder URLs and personal information with your actual details before deploying.
