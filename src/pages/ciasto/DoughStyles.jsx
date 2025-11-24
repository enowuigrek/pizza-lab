import { Link } from 'react-router-dom';

const styles = [
  {
    id: 'napoletana',
    name: 'Napoletana',
    origin: 'Neapol, Włochy',
    description: 'Klasyczna neapolitańska pizza z cienkim, miękkim ciastem i wysokim, puszystym brzegiem (cornicione). Pieczona w piecu opalanym drewnem w temperaturze 430-480°C przez 60-90 sekund.',
    characteristics: [
      'Hydratacja: 55-65%',
      'Fermentacja: 8-24h w temp. pokojowej lub do 72h w lodówce',
      'Grubość: bardzo cienkie środek, puszyste brzegi',
      'Mąka: tipo 00 (W 220-280)',
      'Temperatura pieczenia: 430-480°C'
    ],
    texture: 'Miękkie, elastyczne ciasto z charakterystycznymi ciemnymi plamkami (leopard spots) na spodzie i brzegach.'
  },
  {
    id: 'newyork',
    name: 'New York Style',
    origin: 'Nowy Jork, USA',
    description: 'Większa, cieńsza pizza z chrupiącym spodem i elastycznym brzegiem. Pieczona w temperaturze 260-290°C przez 12-18 minut. Często sprzedawana jako pojedyncze kawałki.',
    characteristics: [
      'Hydratacja: 60-65%',
      'Fermentacja: 24-72h zimna fermentacja',
      'Grubość: cienka, ale wytrzymała',
      'Mąka: mocna chlebowa lub tipo 00 (W 260-310)',
      'Temperatura pieczenia: 260-290°C'
    ],
    texture: 'Chrupiący spód, który można złożyć na pół. Elastyczne, ale nie kruche ciasto.'
  },
  {
    id: 'romana-tonda',
    name: 'Romana Tonda',
    origin: 'Rzym, Włochy',
    description: 'Rzymska pizza okrągła — cieńsza i bardziej chrupiąca niż napoletana. Pieczona w niższej temperaturze, przez dłuższy czas.',
    characteristics: [
      'Hydratacja: 65-70%',
      'Fermentacja: 48-72h zimna fermentacja',
      'Grubość: bardzo cienka, równomierna',
      'Mąka: tipo 0 lub 00 (W 260-300)',
      'Temperatura pieczenia: 300-350°C'
    ],
    texture: 'Bardzo cienka i chrupiąca. Minimalnie puszysty brzeg.'
  },
  {
    id: 'romana-teglia',
    name: 'Romana Teglia (al taglio)',
    origin: 'Rzym, Włochy',
    description: 'Pizza pieczona na dużej blasze i sprzedawana na wagę (al taglio = na kawałki). Wysoka hydratacja, lekkość i dużo powietrza w cieście.',
    characteristics: [
      'Hydratacja: 75-85%',
      'Fermentacja: 24-72h zimna fermentacja',
      'Grubość: średnia, puszysta',
      'Mąka: tipo 0 lub 00 (W 300-350)',
      'Temperatura pieczenia: 280-320°C'
    ],
    texture: 'Lekka, przewiewna, pełna dużych pęcherzy powietrza. Chrupiący spód.'
  },
  {
    id: 'pan',
    name: 'Pan Pizza',
    origin: 'USA',
    description: 'Gruba pizza pieczona w głębokim naczyniu (patelni). Charakteryzuje się chrupiącym, lekko smażonym spodem dzięki oliwie na dnie naczynia.',
    characteristics: [
      'Hydratacja: 55-60%',
      'Fermentacja: 12-24h',
      'Grubość: gruba, puszysta',
      'Mąka: chlebowa (W 260-300)',
      'Temperatura pieczenia: 220-250°C'
    ],
    texture: 'Grube, puszyste ciasto z chrupiącym, złocistym spodem.'
  },
  {
    id: 'detroit',
    name: 'Detroit Style',
    origin: 'Detroit, USA',
    description: 'Prostokątna pizza pieczona w głębokiej, prostokątnej blasze. Ser układany aż do brzegów, gdzie karmelizuje się tworząc chrupiącą krawędź (frico).',
    characteristics: [
      'Hydratacja: 70-75%',
      'Fermentacja: 24-48h zimna fermentacja',
      'Grubość: gruba, ale lekka',
      'Mąka: chlebowa (W 280-320)',
      'Temperatura pieczenia: 250-280°C'
    ],
    texture: 'Grube, ale lekkie i przewiewne ciasto. Chrupiące, karmelizowane brzegi.'
  }
];

export default function StyleCiasta() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <header className="mb-12">
        <nav className="text-sm text-stone-500 mb-4">
          <Link to="/ciasto" className="hover:text-red-700 transition">Ciasto</Link>
          <span className="mx-2">/</span>
          <span>Style ciasta</span>
        </nav>
        <h1 className="text-5xl mb-6">Style ciasta</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          Każdy styl pizzy ma swoją unikalną charakterystykę — od cienkiej i miękkiej napoletany,
          po grubą i chrupiącą detroit. Poznaj różnice w hydratacji, fermentacji i technikach pieczenia.
        </p>
      </header>

      {/* Styles list */}
      <div className="space-y-12">
        {styles.map((style) => (
          <article key={style.id} id={style.id} className="border-l-4 border-red-700 pl-8 py-2">
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <h2 className="text-3xl">{style.name}</h2>
              <span className="text-sm text-stone-500">{style.origin}</span>
            </div>

            <p className="text-stone-700 mb-6 leading-relaxed">
              {style.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                  Charakterystyka
                </h3>
                <ul className="space-y-2 text-sm">
                  {style.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-stone-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                  Tekstura
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {style.texture}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/kalkulator"
                className="text-sm px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition"
              >
                Oblicz proporcje
              </Link>
              <Link
                to="/maki"
                className="text-sm px-4 py-2 border border-stone-300 hover:border-red-700 hover:text-red-700 transition"
              >
                Zobacz mąki
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Autorskie style */}
      <section className="mt-16 border-t border-stone-200 pt-12">
        <h2 className="text-3xl mb-6">Twoje autorskie style</h2>
        <div className="bg-stone-50 border border-stone-200 p-8">
          <p className="text-stone-700 mb-6 leading-relaxed">
            Nie musisz trzymać się sztywnych definicji. Najlepsze pizze często powstają z eksperymentowania
            i łączenia elementów różnych stylów. Oto kilka przykładów:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Napoletana + NY Style</h3>
              <p className="text-sm text-stone-600">
                Delikatność napoletany z większym rozmiarem i chrupkością NY. Hydratacja 60-65%,
                temperatura 320-360°C.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Romana + Teglia</h3>
              <p className="text-sm text-stone-600">
                Cienka romana z wysoką hydratacją teglia. Bardzo chrupiąca, ale lekka i przewiewna.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pan + Detroit</h3>
              <p className="text-sm text-stone-600">
                Klasyczna pan pizza z brzegami detroit — ser do krawędzi, karmelizacja. Najlepsza
                z dwóch światów.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Twój eksperyment</h3>
              <p className="text-sm text-stone-600">
                Zmieniaj hydratację, czas fermentacji, temperaturę. Dokumentuj wyniki i znajdź
                swoją idealną pizzę.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <Link
          to="/kalkulator"
          className="inline-block bg-red-700 text-white px-8 py-4 hover:bg-red-800 transition"
        >
          Zacznij od kalkulatora
        </Link>
      </section>
    </div>
  );
}
