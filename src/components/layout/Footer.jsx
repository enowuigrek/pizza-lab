import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🍕</span>
              <span className="text-xl font-bold text-white">Pizza Lab</span>
            </div>
            <p className="text-sm">
              Testy mak, fermentacji i skladnikow.
              Przewodnik po prawdziwej pizzy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/calculator" className="hover:text-white transition">
                  Kalkulator ciasta
                </Link>
              </li>
              <li>
                <Link to="/flours" className="hover:text-white transition">
                  Baza mak
                </Link>
              </li>
              <li>
                <Link to="/pizzas" className="hover:text-white transition">
                  Przewodnik po pizzach
                </Link>
              </li>
              <li>
                <Link to="/techniques" className="hover:text-white transition">
                  Techniki
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-bold text-white mb-4">Tresc</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/articles" className="hover:text-white transition">
                  Artykuly
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-white transition">
                  Skladniki
                </Link>
              </li>
              <li>
                <Link to="/tests" className="hover:text-white transition">
                  Testy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@pizzalab.pl" className="hover:text-white transition">
                  hello@pizzalab.pl
                </a>
              </li>
              <li>
                <a href="https://instagram.com/pizzalab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Pizza Lab. Wszystkie prawa zastrzezone.</p>
        </div>
      </div>
    </footer>
  );
}
