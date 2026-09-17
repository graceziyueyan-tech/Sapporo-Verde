# Quick Start Guide — Get Your Site Running in 5 Minutes

## What You Have

All the code you need to run a complete bilingual (EN/TH) website for Sapparot Verde.

## Before You Start

Install Node.js from https://nodejs.org (version 16+)

## Step 1: Install & Run (2 minutes)

```bash
# In your project folder:
npm install

# Start the development server:
npm run dev
```

Your site opens automatically at http://localhost:3000

## Step 2: Test It (1 minute)

- [ ] Click EN/TH buttons (top right) — language should switch
- [ ] Scroll down — nav background should appear
- [ ] Click nav links (Our Story, Products, Impact) — should scroll to sections
- [ ] Resize your browser — layout should adapt

## Step 3: Customize (2 minutes, optional for testing)

Edit text in `src/App.jsx`:

```javascript
// Find this section around line 21:
hero: {
  title: 'Transform Waste Into Worth',
  subtitle: "We turn Thailand's agricultural waste..."
}

// Change to your own text
```

For images: Put them in `public/images/` and update image URLs in the products array (line ~160).

## Step 4: Deploy (1 click)

When ready to go live:

**Option A: Vercel (Easiest)**
1. Push to GitHub (see DEPLOYMENT.md)
2. Go to vercel.com
3. Import your GitHub repo
4. Done! Your site is live

**Option B: Netlify**
1. Same as Vercel, but go to netlify.com instead

See DEPLOYMENT.md for detailed instructions.

---

## File Guide

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies (don't edit) |
| `vite.config.js` | Build configuration (don't edit) |
| `index.html` | HTML template (don't edit) |
| `src/main.jsx` | React entry point (don't edit) |
| `src/App.jsx` | **Main website code — edit this!** |
| `.gitignore` | Git ignore rules (don't edit) |
| `public/` | **Put images here** |
| `dist/` | (Auto-generated when you build) |

## Common Tasks

### Change Website Text
Edit `src/App.jsx`, find the `t = {` object (line 14), update English and Thai text.

### Add Product Images
1. Create folder: `public/images/`
2. Add your images there
3. Update image URLs in App.jsx around line 160:
   ```javascript
   image: 'url("/images/cardholder.png")'
   ```

### Change Colors
Edit hex colors in `src/App.jsx`:
- `#5A6E4A` = primary green
- `#D4A574` = accent gold
- `#2B2B2B` = dark text
- `#FAF9F7` = light background

### Deploy When Ready
```bash
npm run build
# Upload `dist/` folder to your host, or
# Push to GitHub and deploy with Vercel/Netlify
```

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- --port 3001
```

**Images not showing?**
- Check they're in `public/images/`
- Check filenames match URLs in code
- Reload page

**Thai text broken?**
- Check `index.html` has `<meta charset="UTF-8" />`
- Check you're viewing in modern browser

**Code errors?**
- Check browser console (F12)
- Make sure you didn't break any braces {}

## Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Test the site in your browser
3. ✅ (Optional) Customize text and images
4. ✅ Read DEPLOYMENT.md to go live
5. ✅ Deploy to Vercel in 2 minutes

## Help?

- **General questions**: See README.md
- **Deployment**: See DEPLOYMENT.md
- **Code structure**: See comments in src/App.jsx
- **Vite docs**: https://vitejs.dev
- **React docs**: https://react.dev

---

**You're good to go!** 🍍

Your site is production-ready. Deploy and test with real customers.
