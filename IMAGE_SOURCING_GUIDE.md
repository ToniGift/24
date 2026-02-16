# Image Sourcing Guide for Twenty Four

## 📁 Folder Structure

Your project needs images in these locations:

```
public/
├── images/
│   ├── clubs/              # Club logos (16 clubs)
│   ├── players/            # Player portraits (12 players)
│   ├── products/           # Jersey product photos (24+ products)
│   └── models/             # NEW: Models wearing jerseys
```

---

## 🏆 CLUB LOGOS NEEDED (16 Total)

Save in: `public/images/clubs/`

### La Liga (3)
- `barcelona.png` - FC Barcelona logo
- `real-madrid.png` - Real Madrid logo
- `atletico.png` - Atletico Madrid logo

### Premier League (6)
- `man-utd.png` - Manchester United logo
- `liverpool.png` - Liverpool FC logo
- `man-city.png` - Manchester City logo
- `arsenal.png` - Arsenal logo
- `chelsea.png` - Chelsea logo
- `tottenham.png` - Tottenham logo

### Bundesliga (2)
- `bayern.png` - Bayern Munich logo
- `dortmund.png` - Borussia Dortmund logo

### Serie A (3)
- `juventus.png` - Juventus logo
- `ac-milan.png` - AC Milan logo
- `inter-milan.png` - Inter Milan logo

### Ligue 1 (1)
- `psg.png` - Paris Saint-Germain logo

### MLS (1)
- `inter-miami.png` - Inter Miami CF logo

**Recommended Size:** 512x512px, PNG with transparent background

---

## ⚽ PLAYER PORTRAITS NEEDED (12 Total)

Save in: `public/images/players/`

1. `messi.png` - Lionel Messi (Inter Miami)
2. `ronaldo.png` - Cristiano Ronaldo (Al Nassr)
3. `mbappe.png` - Kylian Mbappe (Real Madrid)
4. `haaland.png` - Erling Haaland (Manchester City)
5. `bellingham.png` - Jude Bellingham (Real Madrid)
6. `vinicius.png` - Vinicius Junior (Real Madrid)
7. `salah.png` - Mohamed Salah (Liverpool)
8. `saka.png` - Bukayo Saka (Arsenal)
9. `yamal.png` - Lamine Yamal (Barcelona)
10. `palmer.png` - Cole Palmer (Chelsea)
11. `lewandowski.png` - Robert Lewandowski (Barcelona)
12. `debruyne.png` - Kevin De Bruyne (Manchester City)

**Recommended Size:** 800x1000px (portrait), PNG with transparent or clean background

---

## 👕 PRODUCT JERSEY IMAGES NEEDED (48+ Total)

Save in: `public/images/products/`

### Format: `{club}-{type}-{number}.jpg`

Each product needs 2-3 images:
1. Jersey flat lay / front view
2. Jersey back view or detail shot
3. (Optional) Model wearing jersey

### Example for Barcelona Home:
- `barca-home-1.jpg` - Front of jersey
- `barca-home-2.jpg` - Back of jersey
- `barca-home-model.jpg` - Model wearing it (optional)

### All Products Needed:
- Barcelona (home, away, third)
- Real Madrid (home)
- Manchester United (home, third)
- Liverpool (home)
- Arsenal (away)
- Bayern Munich (home)
- PSG (home)
- Argentina (home)
- Brazil (home)
- USA (home)
- France (home)
- England (away)
- Chelsea (third)
- Inter Miami (home)
- Juventus (home)
- Manchester City (home)
- Borussia Dortmund (home)

**Recommended Size:** 1200x1500px, JPG format, high quality

---

## 🧑 MODEL PHOTOS (Optional but Recommended)

Save in: `public/images/models/`

Add lifestyle photos of people wearing jerseys:
- `model-casual-1.jpg` - Person wearing jersey casually
- `model-action-1.jpg` - Person in action pose
- `model-celebration-1.jpg` - Celebration pose
- etc.

**Recommended Size:** 1200x1600px, JPG format

---

## 📍 WHERE TO GET IMAGES LEGALLY

### ⚠️ IMPORTANT: Copyright Notice
**DO NOT** use copyrighted images without permission. Use only licensed/authorized images.

### ✅ Legal Sources:

#### 1. **Official Club Websites**
- Most clubs offer press kits and media resources
- Look for "Media" or "Press" sections
- Example: `fcbarcelona.com/en/club/media`

#### 2. **Official Brand Websites**
- Nike Football
- Adidas Football
- Puma Football
- Visit their press/media sections

#### 3. **Stock Photo Websites** (For Models/Lifestyle)
- **Unsplash** (unsplash.com) - Free, commercial use
- **Pexels** (pexels.com) - Free, commercial use
- **Pixabay** (pixabay.com) - Free, commercial use
- Search: "soccer jersey", "football shirt", "athlete wearing jersey"

#### 4. **Creative Commons Search**
- Google Images > Tools > Usage Rights > "Creative Commons licenses"
- Wikimedia Commons (commons.wikimedia.org)
- Flickr Creative Commons

#### 5. **Purchase Stock Images**
- **Adobe Stock**
- **Shutterstock**
- **Getty Images**
- Search for specific jerseys and players

#### 6. **Your Own Photos**
- If you have physical jerseys, photograph them professionally
- Use good lighting and clean background
- This is 100% copyright-safe

---

## 🎨 IMAGE REQUIREMENTS

### Club Logos:
- Format: PNG with transparency
- Size: 512x512px
- Background: Transparent
- Quality: High resolution (300dpi if possible)

### Player Portraits:
- Format: PNG or JPG
- Size: 800x1000px minimum
- Aspect Ratio: Portrait (4:5 or similar)
- Background: Clean or transparent

### Product Jerseys:
- Format: JPG
- Size: 1200x1500px minimum
- Aspect Ratio: 4:5 (vertical)
- Background: White or studio background
- Quality: High quality, clear details

### Model Photos:
- Format: JPG
- Size: 1200x1600px minimum
- Aspect Ratio: 3:4 or 4:5
- Style: Professional lifestyle photography

---

## 🚀 QUICK START CHECKLIST

### Step 1: Create Folders
```bash
mkdir -p public/images/clubs
mkdir -p public/images/players
mkdir -p public/images/products
mkdir -p public/images/models
```

### Step 2: Download Images
- [ ] Get all 16 club logos
- [ ] Get all 12 player portraits
- [ ] Get product jersey photos (at least 2 per product)
- [ ] Get 5-10 model lifestyle photos

### Step 3: Optimize Images
Use tools like:
- **TinyPNG** (tinypng.com) - Compress images
- **Squoosh** (squoosh.app) - Resize and optimize
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

### Step 4: Verify Images Load
- Check localhost:3001
- All images should display correctly
- No broken image icons

---

## 💡 PRO TIPS

1. **Use Consistent Naming**
   - Lowercase, kebab-case
   - Example: `real-madrid.png`, not `Real Madrid.png`

2. **Optimize File Sizes**
   - Keep logos under 100KB
   - Keep product photos under 500KB
   - Use JPG for photos, PNG for logos

3. **Maintain Aspect Ratios**
   - Don't distort images
   - Crop to fit the recommended dimensions

4. **Quality Matters**
   - Use high-resolution images
   - Avoid pixelated or blurry images
   - Sharp, clear photos sell better

5. **Consider Mobile**
   - Images should look good on mobile screens
   - Test on different devices

---

## 🆘 NEED HELP?

If you need help finding specific images:
1. Check official club social media accounts
2. Look for official merchandise websites
3. Contact club press offices for media kits
4. Consider hiring a photographer for custom shots
5. Use AI-generated placeholder images temporarily (but replace with real photos)

---

## ⚖️ LEGAL DISCLAIMER

This guide is for educational purposes. Always:
- Respect copyright laws
- Get proper licenses for commercial use
- Attribute images where required
- Read terms of use for each image source
- When in doubt, consult a legal professional

---

**Last Updated:** 2026-02-16
