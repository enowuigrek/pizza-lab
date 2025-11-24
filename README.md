# Pizza Lab

Polish pizza knowledge platform - testy mak, fermentacji i skladnikow. Przewodnik po prawdziwej pizzy.

## Features

- **Dough Calculator** - Calculate precise dough proportions with support for poolish, biga, and direct methods
- **Flour Database** - Comprehensive information about pizza flours (Caputo, 5 Stagioni, etc.)
- **Pizza Guide** - Authentic pizza definitions with common misconceptions explained
- **Techniques** - Learn about poolish, biga, fermentation, and more
- **Ingredients** - Guide to premium pizza ingredients
- **Articles** - Tutorials, tests, and pizza philosophy

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7
- **Content**: react-markdown with remark-gfm
- **Database**: Supabase (PostgreSQL) - ready for integration
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pizza-lab.git
cd pizza-lab

# Install dependencies
npm install

# Copy environment variables (optional - for Supabase/Cloudinary)
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Navigation
│   ├── common/        # Card, Badge, Button, ImageGallery
│   ├── calculator/    # Dough calculator components
│   └── sections/      # Hero, LatestContent
├── pages/
│   ├── Home.jsx
│   ├── Calculator.jsx
│   ├── flours/        # Flour list and detail pages
│   ├── pizzas/        # Pizza guide pages
│   ├── techniques/    # Technique pages
│   ├── ingredients/   # Ingredient pages
│   ├── articles/      # Article pages
│   └── tests/         # Test/experiment pages
├── data/
│   ├── flours.js      # Flour data
│   ├── pizzas.js      # Pizza definitions
│   ├── articles.js    # Article content
│   └── PROJECT_PLAN.md
├── utils/
│   ├── doughCalculations.js
│   ├── supabase.js
│   └── cloudinary.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

The `netlify.toml` file is already configured for SPA routing.

## Content

### Flours Documented
- Caputo Pizzeria (W260)
- Caputo Nuvola (W260)
- Caputo Cuoco (W320)
- Le 5 Stagioni Pizza Napoletana (W300)

### Pizza Guides
- Margherita
- Diavola
- Capricciosa
- Marinara
- Quattro Formaggi

### Techniques
- Poolish
- Biga
- Direct Dough
- Cold Fermentation
- Autolyse
- Balling

## Contributing

Contributions are welcome! Please read the project plan in `src/data/PROJECT_PLAN.md` for the roadmap.

## License

ISC
