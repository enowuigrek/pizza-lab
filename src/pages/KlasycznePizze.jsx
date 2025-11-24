import { Link } from 'react-router-dom';

const classicPizzas = [
  {
    slug: 'margherita',
    name: 'Margherita',
    tagline: 'Królowa prostoty',
    description: 'Najprostsza i najbardziej kultowa pizza. Sos pomidorowy, mozzarella, bazylia, oliwa. Punkt odniesienia dla każdego pizzaiolo.',
    ingredients: ['Sos pomidorowy San Marzano', 'Mozzarella fior di latte lub bufala', 'Świeża bazylia', 'Oliwa extra virgin'],
    style: 'Napoletana',
    icon: '🇮🇹'
  },
  {
    slug: 'marinara',
    name: 'Marinara',
    tagline: 'Esencja smaku',
    description: 'Najstarsza pizza — bez sera. Tylko sos pomidorowy, czosnek, oregano i oliwa. Prosta, ale pełna smaku.',
    ingredients: ['Sos pomidorowy San Marzano', 'Czosnek', 'Oregano', 'Oliwa extra virgin'],
    style: 'Napoletana',
    icon: '⚓'
  },
  {
    slug: 'diavola',
    name: 'Diavola',
    tagline: 'Pikantna klasyka',
    description: 'Margherita z dodatkiem pikantnego salami. W niektórych regionach znana jako "Piccante".',
    ingredients: ['Sos pomidorowy San Marzano', 'Mozzarella fior di latte', 'Salami piccante lub ventricina', 'Bazylia', 'Oliwa'],
    style: 'Napoletana / Romana',
    icon: '🌶️'
  },
  {
    slug: 'capricciosa',
    name: 'Capricciosa',
    tagline: 'Bogactwo smaków',
    description: 'Pizza z szynką, pieczarkami, karczochami i oliwkami. Klasyk włoskiej pizzerii.',
    ingredients: ['Sos pomidorowy', 'Mozzarella', 'Prosciutto cotto', 'Pieczarki', 'Karczochy', 'Oliwki', 'Bazylia'],
    style: 'Romana Tonda',
    icon: '🍄'
  },
  {
    slug: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    tagline: 'Cztery sery',
    description: 'Biała pizza z czterema serami — mozzarella, gorgonzola, fontina i parmigiano. Bez sosu pomidorowego.',
    ingredients: ['Mozzarella', 'Gorgonzola dolce', 'Fontina', 'Parmigiano Reggiano', 'Oliwa'],
    style: 'Romana / Napoletana',
    icon: '🧀'
  },
  {
    slug: 'prosciutto-funghi',
    name: 'Prosciutto e Funghi',
    tagline: 'Szynka i grzyby',
    description: 'Prosta kombinacja szynki gotowanej i pieczarek. Ulubiona pizza dzieci i dorosłych.',
    ingredients: ['Sos pomidorowy', 'Mozzarella', 'Prosciutto cotto', 'Pieczarki świeże', 'Bazylia'],
    style: 'Uniwersalna',
    icon: '🍕'
  }
];

export default function KlasycznePizze() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-5xl mb-6">Klasyczne Pizze</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          Autentyczne włoskie pizze — od prostej marinara po bogatą capricciosa.
          Każdy przepis z linkami do składników i technik przygotowania.
        </p>
      </header>

      {/* Info box */}
      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-12">
        <h2 className="font-semibold mb-2">O klasycznych pizzach</h2>
        <p className="text-sm text-stone-700 leading-relaxed">
          Te przepisy oparte są na tradycyjnych włoskich recepturach. Każda pizza linkuje
          do konkretnych składników i technik ciasta, żebyś mógł zgłębić szczegóły.
          Pamiętaj — pizza to nie tylko przepis, to technika i jakość składników.
        </p>
      </div>

      {/* Pizzas grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {classicPizzas.map((pizza) => (
          <article
            key={pizza.slug}
            className="bg-white border border-stone-200 hover:border-red-700 transition group"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{pizza.icon}</span>
                <div>
                  <h2 className="text-2xl group-hover:text-red-700 transition">{pizza.name}</h2>
                  <p className="text-sm text-stone-500">{pizza.tagline}</p>
                </div>
              </div>

              <p className="text-stone-700 mb-4 leading-relaxed">
                {pizza.description}
              </p>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
                  Składniki
                </h3>
                <ul className="space-y-1 text-sm">
                  {pizza.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1 h-1 rounded-full bg-red-700 mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-stone-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <span className="text-xs text-stone-500 uppercase tracking-wide">Styl ciasta</span>
                <p className="text-sm font-semibold">{pizza.style}</p>
              </div>

              <Link
                to={`/klasyczne-pizze/${pizza.slug}`}
                className="text-sm px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition inline-block"
              >
                Zobacz przepis
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Learning path */}
      <section className="mt-16 border-t border-stone-200 pt-12">
        <h2 className="text-2xl mb-6">Ścieżka nauki</h2>
        <div className="bg-stone-50 border border-stone-200 p-8">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">1.</span>
              <div>
                <h3 className="font-semibold">Zacznij od Margherity</h3>
                <p className="text-sm text-stone-600 mt-1">
                  Najprostsza składnikowo, ale najtrudniejsza do perfekcji. Nauczysz się balansu między ciastem,
                  sosem i serem.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">2.</span>
              <div>
                <h3 className="font-semibold">Eksperymentuj z Marinara</h3>
                <p className="text-sm text-stone-600 mt-1">
                  Bez sera — czysty smak sosu pomidorowego i czosnku. Doskonała do nauki kontroli wilgotności.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">3.</span>
              <div>
                <h3 className="font-semibold">Dodaj toppingi</h3>
                <p className="text-sm text-stone-600 mt-1">
                  Gdy opanujesz podstawy, przejdź do Diavola, Capricciosa czy Prosciutto e Funghi.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-mono text-red-700 mr-4 font-semibold">4.</span>
              <div>
                <h3 className="font-semibold">Twórz własne wariacje</h3>
                <p className="text-sm text-stone-600 mt-1">
                  Zrozumiesz zasady — teraz czas na kreatywność. Zobacz{' '}
                  <Link to="/moje-wariacje" className="text-red-700 hover:underline">
                    Moje Wariacje
                  </Link>.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

    </div>
  );
}
