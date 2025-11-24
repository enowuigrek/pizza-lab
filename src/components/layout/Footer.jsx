import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-amber-100"></div>
              </div>
              <span className="text-lg font-semibold text-white">Pizza Lab</span>
            </div>
            <p className="text-sm">
              Testy mąk, fermentacji i składników.
              Przewodnik po autentycznej pizzy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kalkulator" className="hover:text-white transition">
                  Kalkulator ciasta
                </Link>
              </li>
              <li>
                <Link to="/ciasto" className="hover:text-white transition">
                  Ciasto i zaczyny
                </Link>
              </li>
              <li>
                <Link to="/maki" className="hover:text-white transition">
                  Baza mąk
                </Link>
              </li>
              <li>
                <Link to="/klasyczne-pizze" className="hover:text-white transition">
                  Klasyczne pizze
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Treść</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/artykuly" className="hover:text-white transition">
                  Artykuły
                </Link>
              </li>
              <li>
                <Link to="/skladniki" className="hover:text-white transition">
                  Składniki
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@pizzalab.pl" className="hover:text-white transition">
                  hello@pizzalab.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-sm text-center text-stone-500">
          <p>&copy; {new Date().getFullYear()} Pizza Lab</p>
        </div>
      </div>
    </footer>
  );
}
