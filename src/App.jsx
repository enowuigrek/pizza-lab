import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import FloursList from './pages/flours/FloursList';
import FlourDetail from './pages/flours/FlourDetail';
import PizzaGuide from './pages/pizzas/PizzaGuide';
import PizzaDetail from './pages/pizzas/PizzaDetail';
import TechniquesList from './pages/techniques/TechniquesList';
import TechniqueDetail from './pages/techniques/TechniqueDetail';
import IngredientsList from './pages/ingredients/IngredientsList';
import IngredientDetail from './pages/ingredients/IngredientDetail';
import ArticlesList from './pages/articles/ArticlesList';
import ArticleDetail from './pages/articles/ArticleDetail';
import TestsList from './pages/tests/TestsList';
import TestDetail from './pages/tests/TestDetail';

// 404 Page
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-4">🍕</div>
      <h1 className="text-4xl font-bold mb-4">404 - Strona nie znaleziona</h1>
      <p className="text-gray-600 mb-8">
        Ups! Ta strona nie istnieje. Moze szukasz czegos innego?
      </p>
      <a
        href="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
      >
        Wroc na strone glowna
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Calculator */}
          <Route path="/calculator" element={<Calculator />} />

          {/* Flours */}
          <Route path="/flours" element={<FloursList />} />
          <Route path="/flours/:slug" element={<FlourDetail />} />

          {/* Pizzas */}
          <Route path="/pizzas" element={<PizzaGuide />} />
          <Route path="/pizzas/:slug" element={<PizzaDetail />} />

          {/* Techniques */}
          <Route path="/techniques" element={<TechniquesList />} />
          <Route path="/techniques/:slug" element={<TechniqueDetail />} />

          {/* Ingredients */}
          <Route path="/ingredients" element={<IngredientsList />} />
          <Route path="/ingredients/:slug" element={<IngredientDetail />} />

          {/* Articles */}
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />

          {/* Tests */}
          <Route path="/tests" element={<TestsList />} />
          <Route path="/tests/:slug" element={<TestDetail />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
