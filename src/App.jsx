import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import DoughOverview from './pages/ciasto/DoughOverview';
import DoughStyles from './pages/ciasto/DoughStyles';
import Dough from './pages/Dough';
import Toppings from './pages/Toppings';
import FloursList from './pages/flours/FloursList';
import FlourDetail from './pages/flours/FlourDetail';
import KlasycznePizze from './pages/KlasycznePizze';
import MyVariations from './pages/MyVariations';
import PizzaGuide from './pages/pizzas/PizzaGuide';
import PizzaDetail from './pages/pizzas/PizzaDetail';
import IngredientsList from './pages/ingredients/IngredientsList';
import IngredientDetail from './pages/ingredients/IngredientDetail';
import ArticlesList from './pages/articles/ArticlesList';
import ArticleDetail from './pages/articles/ArticleDetail';
import About from './pages/About';

// 404 Page
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="w-24 h-24 rounded-full bg-stone-100 mx-auto mb-8 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-red-700 opacity-50"></div>
      </div>
      <h1 className="text-4xl mb-4">Strona nie znaleziona</h1>
      <p className="text-stone-500 mb-8">
        Przepraszamy, ta strona nie istnieje.
      </p>
      <a
        href="/"
        className="inline-block bg-red-700 text-white px-6 py-3 hover:bg-red-800 transition"
      >
        Wróć na stronę główną
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Kalkulator */}
          <Route path="/kalkulator" element={<Calculator />} />

          {/* Ciasto */}
          <Route path="/ciasto" element={<DoughOverview />} />
          <Route path="/ciasto/style" element={<DoughStyles />} />
          <Route path="/ciasto/zaczyny" element={<Dough />} />
          <Route path="/ciasto/fermentacja" element={<Dough />} />
          <Route path="/ciasto/techniki" element={<Dough />} />
          <Route path="/ciasto/hydratacja" element={<Dough />} />
          <Route path="/ciasto/drozdze" element={<Dough />} />

          {/* Mąki (Flours) - part of Ciasto */}
          <Route path="/maki" element={<FloursList />} />
          <Route path="/maki/:slug" element={<FlourDetail />} />

          {/* Składniki */}
          <Route path="/skladniki" element={<Toppings />} />
          <Route path="/skladniki/:category" element={<IngredientsList />} />
          <Route path="/skladniki/:category/:slug" element={<IngredientDetail />} />

          {/* Klasyczne Pizze */}
          <Route path="/klasyczne-pizze" element={<KlasycznePizze />} />
          <Route path="/klasyczne-pizze/:slug" element={<PizzaDetail />} />

          {/* Moje Wariacje */}
          <Route path="/moje-wariacje" element={<MyVariations />} />

          {/* Legacy routes - redirects */}
          <Route path="/przewodnik" element={<KlasycznePizze />} />
          <Route path="/przewodnik/:slug" element={<PizzaDetail />} />
          <Route path="/toppingi" element={<Toppings />} />

          {/* Artykuły (Articles) */}
          <Route path="/artykuly" element={<ArticlesList />} />
          <Route path="/artykuly/:slug" element={<ArticleDetail />} />

          {/* O mnie (About) */}
          <Route path="/o-mnie" element={<About />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
