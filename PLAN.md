# Twenty Four Site Plan

**Last Updated:** 2026-02-16

## Vision
Build a fast, modern football shopping site where users can discover jerseys, clubs, players, and accessories, then complete checkout smoothly via WhatsApp/Instagram DMs on desktop and mobile.

## Main Goals
- ✅ Make browsing simple with clear category pages and product detail pages
- ✅ Improve conversion with quick cart actions, wishlist support, and social checkout
- ✅ Keep performance high with optimized images, clean data structures, and responsive UI
- ✅ Enable multi-currency support (EUR, USD, PLN)
- ✅ Provide owner operations tools for managing orders
- 🔄 Source high-quality images for all products, clubs, and players

## Completed Features ✅

### Core Shopping Experience
- ✅ Homepage with hero carousel, categories, trending products, featured players
- ✅ Loop video showcase section for product highlights
- ✅ Navigation menu (Clubs, National Teams, Jerseys, World Cup 2026, Sale)
- ✅ Product listing pages with grid layout
- ✅ Product detail pages with gallery, size selector, jersey customizer
- ✅ Cart drawer and full cart page
- ✅ Wishlist functionality
- ✅ Team/club sorting (A-Z, Z-A) for jerseys
- ✅ Multi-currency selector (EUR, USD, PLN) in navbar

### Checkout & Orders
- ✅ Social checkout via WhatsApp and Instagram DMs
- ✅ Customer information capture (name, email, phone, address, location)
- ✅ Form validation for required fields
- ✅ New drop opt-in checkbox for marketing
- ✅ Order message generation with full details
- ✅ Customization (jersey name/number) preserved in orders
- ✅ No backend required - all orders via social DMs

### Owner Operations
- ✅ Owner operations dashboard at `/account`
- ✅ Message templates for order confirmation, payment, shipping, delivery
- ✅ Daily operations checklist
- ✅ Quick links to WhatsApp Web and Instagram DMs
- ✅ Tips for managing new-drop customers

### Data & Content
- ✅ 16 clubs (Barcelona, Real Madrid, Man United, Liverpool, etc.)
- ✅ 12 featured players (Messi, Ronaldo, Mbappe, Haaland, etc.)
- ✅ 24 products (jerseys, footwear, gear)
- ✅ National teams (Argentina, Brazil, USA, France, England)
- 🔄 **NEXT: Add real images** (currently using placeholder paths)

## Current Roadmap

### Phase 1: Image Sourcing 🔄 IN PROGRESS
- [ ] Source and add 16 club logos (see IMAGE_SOURCING_GUIDE.md)
- [ ] Source and add 12 player portraits
- [ ] Source and add 48+ product jersey images
- [ ] Add optional model/lifestyle photos
- [ ] Optimize all images for web delivery
- [ ] Test image loading on all pages

### Phase 2: Content Expansion
- [ ] Add more products (50+ total target)
- [ ] Expand club selection (20+ clubs)
- [ ] Add more national teams
- [ ] Create sale/promotion sections
- [ ] Add player stories/descriptions

### Phase 3: Enhanced Features
- [ ] Improve search functionality with filters
- [ ] Add product recommendations ("You might also like")
- [ ] Add customer reviews (collected manually from DMs)
- [ ] Add size guide modal with measurement tables
- [ ] Add product zoom/360° view

### Phase 4: Backend Integration (Future)
- [ ] Set up Supabase/PostgreSQL database
- [ ] Migrate products to database
- [ ] Store orders in database
- [ ] Automate WhatsApp notifications with Business API
- [ ] Add admin panel for product/order management
- [ ] Customer database with opt-in tracking

### Phase 5: Marketing & Growth
- [ ] Set up Instagram shop integration
- [ ] Create social media content templates
- [ ] Add email collection for newsletter
- [ ] Implement affiliate/referral program
- [ ] Add blog/news section for product drops

## Technical Stack

### Frontend
- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** Zustand (cart, wishlist)
- **Image Optimization:** Next.js Image component

### Current Architecture
- **File-based Data:** Products, clubs, players in `src/data/`
- **No Backend:** Orders via WhatsApp/Instagram DMs
- **State Persistence:** localStorage for cart, wishlist, currency
- **Deployment:** Ready for Vercel

### Key Files Structure
```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── checkout/          # Checkout flow
│   ├── shop/              # Product listings
│   ├── product/[slug]/    # Product details
│   └── account/           # Owner operations
├── components/
│   ├── home/              # Homepage sections
│   ├── layout/            # Navbar, Footer
│   ├── product/           # Product cards, grids
│   └── cart/              # Cart drawer
├── data/                  # Static data files
│   ├── products.ts        # 24 products
│   ├── clubs.ts           # 16 clubs
│   ├── players.ts         # 12 players
│   └── teams.ts           # National teams
├── lib/
│   ├── utils.ts           # Currency, formatting
│   └── social-checkout.ts # WhatsApp/Instagram helpers
└── types/
    └── index.ts           # TypeScript interfaces
```

## Configuration Required Before Launch

### 1. WhatsApp Business Number
**File:** `src/app/checkout/page.tsx` (line 31)
```typescript
const businessPhone = "48123456789"; // ← UPDATE THIS
```

### 2. Instagram Username
**File:** `src/app/checkout/page.tsx` (line 43)
```typescript
const instagramUsername = "24shop"; // ← UPDATE THIS
```

### 3. Currency Conversion Rates
**File:** `src/lib/utils.ts`
```typescript
const CURRENCY_RATES: Record<Currency, number> = {
  EUR: 1,
  USD: 1.09,  // ← Update as needed
  PLN: 4.32,  // ← Update as needed
};
```

### 4. Payment Details
**File:** `src/app/account/page.tsx`
- Update payment request template with your bank details
- Add your payment links (mobile payment, etc.)

### 5. Showcase Video
**Folder:** `public/`
- Add `showcase-video.mp4`
- Add `showcase-video.webm` (optional)
- Add `showcase-poster.jpg`

### 6. Product Images
**See:** `IMAGE_SOURCING_GUIDE.md` and `IMAGE_CHECKLIST.md`

## Development Workflow

### Local Development
```bash
npm run dev          # Start dev server (localhost:3001)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Git Workflow
```bash
git status           # Check changes
git add .            # Stage changes
git commit -m ""     # Commit with message
git push            # Push to GitHub (always ask first!)
```

## Performance Targets
- ✅ Lighthouse Score: 90+ on all pages
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ No blocking lint/type errors
- 🔄 Optimize images when added

## Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

## Documentation
- ✅ `README.md` - Project overview
- ✅ `PLAN.md` - This file (site plan)
- ✅ `IMPLEMENTATION_SUMMARY.md` - Technical implementation details
- ✅ `IMAGE_SOURCING_GUIDE.md` - How to source images legally
- ✅ `IMAGE_CHECKLIST.md` - Track image sourcing progress

## Next Steps (Priority Order)

1. **🔴 HIGH PRIORITY:**
   - [ ] Add product images (customers need to see products!)
   - [ ] Update WhatsApp business number
   - [ ] Update Instagram username
   - [ ] Test complete order flow on mobile

2. **🟡 MEDIUM PRIORITY:**
   - [ ] Add club logos for better branding
   - [ ] Add player portraits for featured sections
   - [ ] Add showcase video for homepage
   - [ ] Create more product listings (target: 50+)

3. **🟢 LOW PRIORITY:**
   - [ ] Add model/lifestyle photos
   - [ ] Implement advanced filters
   - [ ] Add customer reviews
   - [ ] Plan backend migration

## Support & Maintenance

### For Issues:
- Check browser console for errors
- Verify dev server is running
- Check image paths are correct
- Test on multiple devices

### For Questions:
- Read implementation docs
- Check this plan file
- Review code comments

---

**Project Status:** ✅ Production Ready (pending images)

**Last Deploy:** Not yet deployed (test locally first)
