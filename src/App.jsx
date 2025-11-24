import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Dough from './pages/Dough';
import Toppings from './pages/Toppings';
import FloursList from './pages/flours/FloursList';
import FlourDetail from './pages/flours/FlourDetail';
import PizzaGuide from './pages/pizzas/PizzaGuide';
import PizzaDetail from './pages/pizzas/PizzaDetail';
import IngredientsList from './pages/ingredients/IngredientsList';
import IngredientDetail from './pages/ingredients/IngredientDetail';
import ArticlesList from './pages/articles/ArticlesList';
import ArticleDetail from './pages/articles/ArticleDetail';

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

          {/* Ciasto (Dough) */}
          <Route path="/ciasto" element={<Dough />} />

          {/* Mąki (Flours) - part of Ciasto */}
          <Route path="/maki" element={<FloursList />} />
          <Route path="/maki/:slug" element={<FlourDetail />} />

          {/* Toppingi */}
          <Route path="/toppingi" element={<Toppings />} />

          {/* Składniki (Ingredients) - part of Toppingi */}
          <Route path="/skladniki" element={<IngredientsList />} />
          <Route path="/skladniki/:slug" element={<IngredientDetail />} />

          {/* Przewodnik (Pizza Guide) */}
          <Route path="/przewodnik" element={<PizzaGuide />} />
          <Route path="/przewodnik/:slug" element={<PizzaDetail />} />

          {/* Artykuły (Articles) */}
          <Route path="/artykuly" element={<ArticlesList />} />
          <Route path="/artykuly/:slug" element={<ArticleDetail />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
