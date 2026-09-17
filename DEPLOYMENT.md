# Deployment Guide for Sapparot Verde Website

Get your website live on the internet in 10 minutes.

## Before You Start

You need:
- [ ] All files from the project (you have them)
- [ ] A GitHub account (free at https://github.com)
- [ ] A Vercel account (free at https://vercel.com) OR Netlify account (free at https://netlify.com)

---

## Method 1: Vercel (Easiest & Fastest)

Vercel is made by the creators of Next.js and Vite. Best for React projects.

### Step 1: Upload to GitHub

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup
   - Fill in username, email, password
   - Verify your email

2. **Create a new repository**
   - Click "+" (top right) → "New repository"
   - Name: `sapparot-verde-website`
   - Description: "Sustainable pineapple leather e-commerce site"
   - Choose "Public" (free)
   - Click "Create repository"

3. **Upload your project files**
   - GitHub shows instructions. Pick "uploading an existing file"
   - Drag and drop all your files (package.json, vite.config.js, index.html, src/, public/)
   - Click "Commit changes"

### Step 2: Deploy to Vercel

1. **Go to https://vercel.com**
2. **Click "Sign up"** (choose "Continue with GitHub")
3. **Authorize Vercel** to access your GitHub
4. **Click "Import Project"**
5. **Paste your GitHub repo URL**: `https://github.com/your-username/sapparot-verde-website`
6. **Click "Import"**
7. Vercel auto-detects Vite. Click "Deploy"

**That's it!** Your site is live at: `https://sapparot-verde-website.vercel.app`

### To update your site:
Just push changes to GitHub. Vercel auto-redeploys.

```bash
git add .
git commit -m "Update product photos"
git push
```

---

## Method 2: Netlify (Also Easy)

Netlify is similar to Vercel and equally good.

### Step 1: Upload to GitHub
(Same as Method 1, Steps 1-3 above)

### Step 2: Deploy to Netlify

1. **Go to https://netlify.com**
2. **Click "Sign up"** → choose "GitHub"
3. **Authorize Netlify** to access GitHub
4. **Click "New site from Git"**
5. **Select your repository** from the list
6. **Click "Deploy site"**

**Your site is live!** Netlify gives you a random URL like: `https://quirky-pineapple-abc123.netlify.app`

### Custom Domain (Optional, Both Services)
Once deployed, both Vercel and Netlify let you add a custom domain:
- Buy a domain (Namecheap, GoDaddy, etc.)
- In Vercel/Netlify settings, add the domain
- Point your domain nameservers to Vercel/Netlify
- (Usually auto-configured in a few minutes)

---

## Method 3: Deploy Locally to GitHub Pages (Free, But Requires Git)

### Step 1: Install Git

Download from https://git-scm.com/

### Step 2: Initialize Git & Push to GitHub

```bash
# In your project folder:
git init
git add .
git commit -m "Initial commit: Sapparot Verde website"
git branch -M main

# Go to GitHub, create a repo, copy the HTTPS URL, then:
git remote add origin https://github.com/YOUR-USERNAME/sapparot-verde-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repo
2. Click "Settings" → "Pages"
3. Under "Build and deployment", choose:
   - Source: "Deploy from a branch"
   - Branch: "main" / "/ (root)"
4. Click "Save"

GitHub builds and deploys automatically. Your site appears at: `https://YOUR-USERNAME.github.io/sapparot-verde-website`

---

## Method 4: Traditional Hosting (Bluehost, SiteGround, etc.)

If you already have web hosting:

### Step 1: Build Your Site

```bash
npm run build
```

This creates a `dist/` folder with your compiled site.

### Step 2: Upload to Your Host

Using FTP or your hosting panel's file manager:
1. Connect to your server
2. Upload everything from `dist/` to your public_html folder
3. Done!

Your site is live at your domain.

---

## Checking Your Deployment

Once live, test:

1. **Open the URL** in your browser
2. **Check language toggle** — click EN/TH, content should switch
3. **Check mobile** — open on your phone, should be responsive
4. **Check images** — if you added product photos, they should show
5. **Check links** — scroll links, navigation should work
6. **Check scroll behavior** — nav should appear when scrolled

---

## Updating Your Site After Launch

### If you're using Vercel or Netlify (Method 1 or 2):

```bash
# Edit your files locally
# Update copy, add images, change colors, etc.

# Push to GitHub:
git add .
git commit -m "Update product descriptions and images"
git push origin main

# Vercel/Netlify auto-deploys in ~30 seconds
# Your site updates live!
```

### If you're using GitHub Pages or Traditional Hosting:

```bash
# Edit your files locally

# Rebuild:
npm run build

# Upload the `dist/` folder contents to your host
# (Same as initial upload)
```

---

## Environment-Specific Notes

### For Thai Market
- Test on Thai browsers (Firefox, Chrome Thai versions)
- Test Thai font rendering
- Consider adding Thai payment methods if you add checkout later

### For International Tourists
- Make sure EN copy is clear and compelling
- Test on multiple devices and browsers
- Consider adding Instagram link to showcase products

---

## Troubleshooting Deployment

### Site shows blank page?
- Check browser console for errors (F12 → Console tab)
- Make sure all imports are correct in App.jsx
- Run `npm run build` locally to find errors

### Images not loading?
- Images must be in `public/` folder
- URLs should be `/images/filename.png` (relative path)
- Not `./images/filename.png` or absolute paths

### Style looks wrong?
- Clear browser cache (Ctrl+Shift+R)
- Check that lucide-react icons load (they should auto-import)
- Check color hex codes are correct

### Thai text shows as ?????
- All modern browsers support Thai
- Check your file is saved as UTF-8
- index.html should have `<meta charset="UTF-8" />`

---

## Domain Names (Optional)

Once deployed, consider getting a custom domain:

### Recommended Registrars
- **Namecheap** — cheap, good customer service
- **Google Domains** — simple, integrated
- **GoDaddy** — expensive but reliable

### Domain Ideas for Sapparot Verde
- sapparotverde.com
- sapparotverde.th (Thai domain)
- pinapplelatherco.com
- sustainableleatherco.com

### Setup
Once you have a domain:
1. Get the nameservers from Vercel/Netlify
2. Go to your registrar's settings
3. Update nameservers to Vercel/Netlify's
4. Wait 24-48 hours for DNS to propagate
5. Your site is live at your domain!

---

## Next Steps

1. ✅ Deploy using Method 1 (Vercel) — easiest
2. 📸 Add your product images to `public/images/`
3. ✏️ Customize copy to match your voice exactly
4. 🌐 Get a custom domain (optional)
5. 📱 Test on mobile, tablet, desktop
6. 📊 Share the link with friends, customers, potential investors
7. 📈 Gather feedback and iterate

---

## Questions?

- **Vercel Help**: https://vercel.com/docs
- **Netlify Help**: https://docs.netlify.com
- **GitHub Help**: https://docs.github.com
- **Vite Help**: https://vitejs.dev/guide/

Good luck! Your website is about to be live. 🍍
