import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import LatestContent from '../components/sections/LatestContent';
import { articleStubs } from '../data/articles';

export default function Home() {
  const featuredArticles = articleStubs.filter(a => a.status === 'ready').slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Zaczynamy!</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/calculator" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="font-bold text-lg mb-2">Kalkulator</h3>
              <p className="text-gray-600 text-sm">Oblicz proporcje ciasta</p>
            </Link>

            <Link to="/flours" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="font-bold text-lg mb-2">Maki</h3>
              <p className="text-gray-600 text-sm">Baza wiedzy o makach</p>
            </Link>

            <Link to="/pizzas" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-lg mb-2">Przewodnik</h3>
              <p className="text-gray-600 text-sm">Autentyczne definicje pizz</p>
            </Link>

            <Link to="/techniques" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-lg mb-2">Techniki</h3>
              <p className="text-gray-600 text-sm">Poolish, biga, fermentacja</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <LatestContent articles={featuredArticles} />

      {/* About Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">O Pizza Lab</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Pizza Lab to polska platforma wiedzy o pizzy. Testujemy maki, eksperymentujemy z fermentacja,
            porownujemy skladniki i uczymy jak robic prawdziwa pizze - nie jej polskie uproszczenia.
          </p>
          <p className="text-gray-600">
            Kazdy przepis, kazda technika, kazdy test - udokumentowany i wyjasninony.
            Bo dobra pizza to nauka, nie magia.
          </p>
        </div>
      </section>
    </div>
  );
}
