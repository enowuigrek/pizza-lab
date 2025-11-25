# Pizza Platform - Comprehensive Project Plan

## Vision
Stworzyc najbardziej kompleksowa polska platforme o pizzy, laczaca:
- Techniczne testy (maki, fermentacje, skladniki)
- Edukacje (prawdziwe definicje pizz vs bledy)
- Potezny kalkulator ciasta (z poolish/biga support)
- Mape pizzerii (Polska + swiat)
- Community (przepisy, recenzje)

---

## Phase 1: MVP (Current Sprint) ✅

### Core Infrastructure
- [x] Project setup (React + Vite + Tailwind)
- [x] File structure
- [x] Basic layout (Header, Footer, Navigation)
- [x] Routing setup
- [x] Responsive design system

### Key Features
- [x] Home page with Hero
- [x] Dough Calculator (Direct, Poolish, Biga)
- [x] Flours database (list + detail pages)
- [x] Pizza Guide (Margherita, Diavola, Capricciosa, Marinara, Quattro Formaggi)
- [x] Articles system (list + detail, markdown support)
- [x] Techniques section
- [x] Ingredients section
- [x] Tests section
- [ ] Image upload to Cloudinary
- [x] Mobile responsive

### Content Ready
- [x] 5 pizza guides written
- [x] 4 flours documented (Caputo Pizzeria, Nuvola, Cuoco, 5 Stagioni)
- [x] 12 article stubs with placeholders
- [x] Poolish tutorial with content
- [x] Multiple ingredient entries

---

## Phase 2: Content & Testing (Next 2-4 weeks)

### Flour Testing
- [ ] Test: Pizzeria vs Nuvola vs 5 Stagioni (same conditions)
- [ ] Test: Short vs Medium vs Long fermentation (same flour)
- [ ] Test: Different hydration levels (60% vs 65% vs 70%)
- [ ] Complete all flour data pages

### Pizza Guides
- [ ] Complete photos for all pizza guides
- [ ] Add variations for each pizza
- [ ] Add 5 more guides: Napoletana, Prosciutto e Funghi, Quattro Stagioni, Calzone, Focaccia

### Ingredients Database
- [ ] Tomatoes: San Marzano DOP, Rosso Gargano, Mutti comparison
- [ ] Cheese: Bufala, Fior di Latte, Julienne, differences
- [ ] Meats: Salame piccante vs Pepperoni detailed guide
- [ ] Oils: Different olive oils for pizza
- [ ] Fresh ingredients: Basil, arugula, etc

### Articles to Complete
1. [ ] Poolish step-by-step (photos needed)
2. [ ] Caputo Pizzeria overview (photos needed)
3. [ ] Salame piccante vs Pepperoni (content ready)
4. [ ] Mozzarella bufala usage (content ready)
5. [ ] Philosophy: Why calzone isn't popular
6. [ ] Philosophy: Neapolitan ceiling (diversity problem)
7. [ ] Experiment: Pizza Ramen (miso glaze)

---

## Phase 3: Advanced Features (1-2 months)

### Comparison Tools
- [ ] Flour comparison tool (side-by-side, 2-4 flours)
- [ ] Fermentation time comparison (visual timeline)
- [ ] Pizza Name Checker (input ingredients -> authenticity check)

### Enhanced Calculator
- [ ] Save recipes to account
- [ ] Share recipe links
- [ ] Print-friendly recipe cards
- [ ] Flour selector (link to flour database, auto-adjust hydration)
- [ ] Built-in fermentation timer

### Search & Discovery
- [ ] Full-text search
- [ ] Tag filtering
- [ ] Category filtering
- [ ] Related content suggestions
- [ ] "Popular this week"

### Engagement
- [ ] Newsletter signup
- [ ] Comments on articles (moderated)
- [ ] Social sharing buttons
- [ ] Reading progress indicator
- [ ] Estimated reading time

---

## Phase 4: Community Features (2-3 months)

### User Accounts
- [ ] Supabase Auth integration
- [ ] User profiles
- [ ] Saved recipes
- [ ] Saved articles/bookmarks
- [ ] User preferences

### Community Content
- [ ] Recipe submission form
- [ ] Recipe moderation queue
- [ ] User recipe pages
- [ ] Rating system (5 stars)
- [ ] Comments system
- [ ] User photos upload

### Social Features
- [ ] Follow other users
- [ ] Activity feed
- [ ] User badges/achievements
- [ ] Top contributors

---

## Phase 5: Pizza Map (3-4 months)

### Map Infrastructure
- [ ] Google Maps API integration
- [ ] Pizzeria database schema
- [ ] Location-based search
- [ ] Filter by pizza style

### Pizzeria Features
- [ ] Add pizzeria form
- [ ] Pizzeria detail pages
- [ ] Photos gallery
- [ ] Menu/prices
- [ ] Opening hours
- [ ] Contact info

### Reviews & Ratings
- [ ] User reviews
- [ ] Rating system
- [ ] Photo uploads
- [ ] Favorite pizzerias
- [ ] "Been here" check-ins

---

## Technical Roadmap

### Performance
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] CDN for static assets
- [ ] Caching strategy
- [ ] Performance monitoring

### SEO
- [ ] Meta tags for all pages
- [ ] Open Graph images
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Schema.org markup (Recipe, Article)
- [ ] Canonical URLs

### Analytics
- [ ] Google Analytics 4
- [ ] Custom events tracking
- [ ] User behavior analysis
- [ ] A/B testing setup

### Quality
- [ ] Error boundaries
- [ ] Loading states everywhere
- [ ] Empty states
- [x] 404 page
- [ ] Error page
- [ ] Form validation

### Accessibility
- [ ] WCAG AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Alt text for all images
- [ ] Proper heading hierarchy

---

## Database Schema (Supabase - Future)

```sql
-- Flours table
CREATE TABLE flours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  type TEXT,
  protein_content DECIMAL,
  w_strength INTEGER,
  description TEXT,
  ideal_for TEXT[],
  fermentation_range TEXT,
  notes TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Techniques table
CREATE TABLE techniques (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  instructions TEXT,
  timing TEXT,
  difficulty TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Pizzas table
CREATE TABLE pizzas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  authentic_description TEXT,
  authentic_ingredients JSONB,
  misconceptions JSONB,
  history TEXT,
  tips TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Articles table
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT,
  status TEXT,
  tags TEXT[],
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## Design System

### Colors
- **Primary**: Red (#DC2626) - Pizza, passion, Italian
- **Secondary**: Warm gray (#78716C)
- **Accent - Success**: Green (#16A34A) - Authentic, correct
- **Accent - Error**: Red (#DC2626) - Wrong, misconception
- **Accent - Warning**: Yellow (#EAB308) - Partial, regional
- **Accent - Info**: Blue (#2563EB) - Information, notes
- **Background**: Light gray (#F9FAFB)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable (16-18px), good line height (1.6-1.8)
- **Code/Numbers**: Monospace for recipes

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Badges**: Small pills for categories, tags, status
- **Buttons**: Clear CTAs, good contrast
- **Forms**: Large inputs, clear labels, helpful errors
- **Images**: Always with caption, alt text, proper aspect ratios

---

## Success Metrics

### Short-term (3 months)
- [ ] 20+ articles published
- [ ] 10+ flour/ingredient reviews
- [ ] Calculator used 100+ times
- [ ] 1000+ page views/month
- [ ] 5+ community recipe submissions

### Medium-term (6 months)
- [ ] 50+ articles published
- [ ] 5000+ page views/month
- [ ] 100+ newsletter subscribers
- [ ] First affiliate sales
- [ ] Featured in Polish food blog

### Long-term (12 months)
- [ ] 100+ articles
- [ ] 20,000+ page views/month
- [ ] 500+ newsletter subscribers
- [ ] Profitable via affiliates/ads
- [ ] Recognized authority on Polish pizza scene

---

## Content Principles

1. **Quality over quantity** - Better one great article than five mediocre
2. **Photos mandatory** - No article without photos
3. **Link extensively** - Everything connects to everything
4. **Simple Polish** - Accessible, not overly technical
5. **Practical focus** - Tips you can use today
6. **Honest about failures** - Show the learning process

---

## Changelog

### 2025-11-25
- Unified pizza data source (single source of truth in pizzas.js)
- Fixed data inconsistency between pizza cards and detail pages
- Made entire pizza cards clickable (improved UX)
- Added tagline and icon fields to all pizzas
- Added styleDescription field for detailed style information
- Updated routing structure (/klasyczne-pizze as main, /przewodnik as legacy)
- Updated documentation (style guide, project notes)

### 2024-11-24
- Initial project setup complete
- All core pages implemented
- Calculator with poolish/biga support working
- 5 pizza guides with misconceptions
- 4 flours documented
- 12 article stubs
- Responsive design
- Ready for deployment
