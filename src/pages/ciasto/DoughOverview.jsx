import { Link } from 'react-router-dom';

const sections = [
  {
    path: '/ciasto/style',
    title: 'Style ciasta',
    description: 'Napoletana, New York Style, Romana Tonda, Romana Teglia, Pan Pizza, Detroit i autorskie style. Poznaj charakterystykę każdego stylu.'
  },
  {
    path: '/maki',
    title: 'Mąki',
    description: 'Typy mąk, siła mąki (W), zawartość białka, zastosowanie. Jak dobrać odpowiednią mąkę do stylu pizzy.'
  },
  {
    path: '/ciasto/zaczyny',
    title: 'Zaczyny',
    description: 'Poolish, biga i inne przedrozwoje. Jak zaczyny wpływają na smak, teksturę i strawność ciasta.'
  },
  {
    path: '/ciasto/fermentacja',
    title: 'Fermentacja',
    description: 'Temperatura, czas, zimna i ciepła fermentacja. Jak kontrolować proces dojrzewania ciasta.'
  },
  {
    path: '/ciasto/techniki',
    title: 'Techniki',
    description: 'Wyrabianie, formowanie, rozciąganie. Praktyczne wskazówki dotyczące pracy z ciastem.'
  },
  {
    path: '/ciasto/hydratacja',
    title: 'Hydratacja',
    description: 'Proporcje wody do mąki i ich wpływ na strukturę ciasta. Od 55% do 80% hydratacji.'
  },
  {
    path: '/ciasto/drozdze',
    title: 'Drożdże',
    description: 'Świeże, suszone, naturalne. Ile drożdży użyć i jak dostosować ilość do czasu fermentacji.'
  },
  {
    path: '/kalkulator',
    title: 'Kalkulator',
    description: 'Oblicz precyzyjne proporcje składników dla Twojej pizzy. Uwzględnia style, hydratację i fermentację.'
  },
];

export default function CiastoOverview() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-5xl mb-6">Ciasto</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          Ciasto to fundament każdej pizzy. Tutaj znajdziesz kompleksową wiedzę o stylach ciasta,
          mąkach, zaczynach, fermentacji i technikach. Od teorii po praktykę.
        </p>
      </header>

      {/* Sections grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="bg-white border border-stone-200 p-6 hover:border-red-700 transition group"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-red-700 transition">
              {section.title}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick start */}
      <section className="border-t border-stone-200 pt-12">
        <h2 className="text-2xl mb-6">Od czego zacząć?</h2>
        <div className="bg-stone-50 border border-stone-200 p-8">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">1.</span>
              <div>
                <Link to="/ciasto/style" className="font-semibold hover:text-red-700 transition">
                  Wybierz styl ciasta
                </Link>
                <p className="text-sm text-stone-600 mt-1">
                  Każdy styl ma swoją charakterystykę — od cienkiej napoletańskiej po grubszą pan pizza.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">2.</span>
              <div>
                <Link to="/maki" className="font-semibold hover:text-red-700 transition">
                  Dobierz odpowiednią mąkę
                </Link>
                <p className="text-sm text-stone-600 mt-1">
                  Różne style wymagają różnych mąk — poznaj siłę mąki i zawartość białka.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">3.</span>
              <div>
                <Link to="/kalkulator" className="font-semibold hover:text-red-700 transition">
                  Użyj kalkulatora
                </Link>
                <p className="text-sm text-stone-600 mt-1">
                  Oblicz precyzyjne proporcje składników dla wybranego stylu i ilości pizz.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">4.</span>
              <div>
                <Link to="/ciasto/techniki" className="font-semibold hover:text-red-700 transition">
                  Opanuj techniki
                </Link>
                <p className="text-sm text-stone-600 mt-1">
                  Wyrabianie, formowanie, rozciąganie — praktyczne wskazówki krok po kroku.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
