import { useState } from 'react';
import { Link } from 'react-router-dom';
import { flours } from '../../data/flours';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

export default function FloursList() {
  const [tipoVsTypExpanded, setTipoVsTypExpanded] = useState(false);
  const [parametersExpanded, setParametersExpanded] = useState(false);
  const [selectedProducer, setSelectedProducer] = useState('all');

  // Get unique producers
  const producers = ['all', ...new Set(flours.map(flour => flour.brand))];

  // Filter flours by producer
  const filteredFlours = selectedProducer === 'all'
    ? flours
    : flours.filter(flour => flour.brand === selectedProducer);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl mb-4">Baza mąk</h1>
      <p className="text-stone-600 mb-12 max-w-2xl">
        Przeglądaj i porównuj mąki do pizzy. Parametry, zastosowanie, wskazówki.
      </p>

      {/* Collapsible: Tipo vs Typ */}
      <section className="mb-6">
        <button
          onClick={() => setTipoVsTypExpanded(!tipoVsTypExpanded)}
          className="w-full p-6 text-left flex items-center justify-between bg-stone-50 border border-stone-200 hover:bg-stone-100 transition focus:outline-none"
        >
          <h2 className="text-2xl">Włoskie „Tipo" vs Polskie „Typ" — skąd ten bałagan?</h2>
          <span className="text-2xl">{tipoVsTypExpanded ? '▴' : '▾'}</span>
        </button>

        {tipoVsTypExpanded && (
          <div className="bg-stone-50 px-6 py-6">
            <p className="text-stone-700 mb-6">
              To jest coś, co regularnie wprowadza ludzi w błąd. W Polsce patrzymy na mąkę 450, 550, 750…,
              a we Włoszech na Tipo 00, 0, 1, 2 — i większość myśli, że to ten sam system.
              A to kompletnie dwie różne rzeczy.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Włochy */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-stone-800">🇮🇹 Włochy – „Tipo" = stopień przemiału</h3>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tipo 00</h4>
                  <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside">
                    <li>bardzo drobno zmielona</li>
                    <li>praktycznie bez otrębów</li>
                    <li>najbardziej „gładka" mąka</li>
                    <li>opisuje teksturę, a nie „moc" mąki</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tipo 0, 1, 2</h4>
                  <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside">
                    <li>im wyższa liczba, tym więcej otrębów</li>
                    <li>tym ciemniejsza i mniej rafinowana mąka</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-600 p-3 text-sm text-stone-700">
                  <strong>Uwaga:</strong> Tipo NIE mówi nic o zawartości białka ani sile mąki (W).
                  Dlatego dwie mąki Tipo 00 mogą być zupełnie różne — jedna do ciasta na pizzę,
                  druga do ciast cukierniczych.
                </div>
              </div>

              {/* Polska */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-stone-800">🇵🇱 Polska – „Typ" = zawartość popiołu (minerałów)</h3>

                <div className="mb-4">
                  <p className="text-sm text-stone-600 mb-3">Np.:</p>
                  <ul className="text-sm text-stone-600 space-y-2">
                    <li><strong>Typ 450</strong> – mąka bardzo jasna (tortowa)</li>
                    <li><strong>Typ 550</strong> – jasna mąka chlebowa</li>
                    <li><strong>Typ 750, 850</strong> – mąki chlebowe ciemniejsze</li>
                  </ul>
                </div>

                <div className="bg-stone-100 p-3 text-sm text-stone-700 mb-4">
                  Tutaj numer określa ile minerałów zostaje po spaleniu próbki, a nie to,
                  jak drobno zmielone jest ziarno.
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-3 text-sm text-stone-700">
                  <strong>Czyli:</strong> polski typ 450 ≠ włoskie Tipo 00, chociaż wyglądają podobnie.
                  450-ka ma zwykle niższe białko i nie trzyma glutenu jak Caputo.
                </div>
              </div>
            </div>

            {/* Czy można robić pizzę na polskiej mące? */}
            <div className="mt-8 bg-stone-100 border border-stone-200 p-6">
              <h3 className="font-semibold text-lg mb-4">Czy na polskiej mące mogę zrobić pizzę?</h3>

              <p className="text-stone-700 mb-4">Najczęściej wybiera się:</p>
              <ul className="text-stone-700 space-y-2 mb-6 list-disc list-inside">
                <li><strong>typ 450</strong> – jeśli zależy Ci na wyglądzie jak z Tipo 00</li>
                <li><strong>typ 550</strong> – jeśli zależy Ci na większej elastyczności ciasta</li>
              </ul>

              <p className="text-stone-700 mb-3 font-semibold">Ale trzeba podkreślić kilka rzeczy:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Polskie mąki mają zazwyczaj mniej białka</h4>
                  <p className="text-sm text-stone-600">
                    Często 10–11%, podczas gdy dobre mąki pizzowe mają 12–13%.
                    <br />
                    → <strong>efekt:</strong> ciasto jest mniej sprężyste, szybciej się rwie.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Mają mniejszą moc (W)</h4>
                  <p className="text-sm text-stone-600">
                    W Polsce ten parametr prawie nigdy nie jest podawany, ale generalnie jest niższy niż w mąkach typowo pizzowych.
                    <br />
                    → <strong>efekt:</strong> gorzej znoszą długą fermentację, szczególnie 24–48h.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Zachowują się inaczej przy wyższej hydracji</h4>
                  <p className="text-sm text-stone-600">
                    Przy 65–70% polska mąka potrafi się rozjechać, bo gluten jest słabszy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Collapsible: Jak czytać parametry mąki */}
      <section className="mb-12">
        <button
          onClick={() => setParametersExpanded(!parametersExpanded)}
          className="w-full p-6 text-left flex items-center justify-between bg-stone-50 border border-stone-200 hover:bg-stone-100 transition focus:outline-none"
        >
          <h2 className="text-2xl">Jak czytać parametry mąki</h2>
          <span className="text-2xl">{parametersExpanded ? '▴' : '▾'}</span>
        </button>

        {parametersExpanded && (
          <div className="bg-stone-50 px-6 py-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-stone-800">Wartość W (siła mąki)</h3>
                <p className="text-stone-600 mb-4">
                  W oznacza siłę glutenu mierzoną w alweografie. Im wyższa wartość, tym mocniejszy gluten
                  i dłuższy możliwy czas fermentacji.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">W 180-220</span>
                    <span>Słaba mąka, krótka fermentacja (kilka godzin)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">W 260-280</span>
                    <span>Średnia siła, fermentacja 12-24h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">W 300-330</span>
                    <span>Mocna mąka, fermentacja 48-96h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">W 350+</span>
                    <span>Bardzo mocna, manitoba, ciasta drożdżowe</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-stone-800">Zawartość białka</h3>
                <p className="text-stone-600 mb-4">
                  Procent białka wpływa na elastyczność ciasta. Więcej białka = więcej glutenu.
                  Dla pizzy neapolitańskiej optymalne jest 11-13%.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">10-11%</span>
                    <span>Delikatne ciasto, krótka fermentacja</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">11.5-12.5%</span>
                    <span>Idealne dla pizzy neapolitańskiej</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">13%+</span>
                    <span>Mocniejsze ciasto, dłuższa fermentacja</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-stone-800">Typ mąki (00, 0, 1, 2)</h3>
                <p className="text-stone-600 mb-4">
                  Włoski system typów określa stopień przemiału. Typ 00 to najdrobniej zmielona mąka,
                  dająca gładkie, elastyczne ciasto.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">Tipo 00</span>
                    <span>Najdrobniejsza, najbardziej rafinowana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">Tipo 0</span>
                    <span>Standardowa, więcej otrębów</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-20 font-mono text-stone-800">Tipo 1/2</span>
                    <span>Pełniejsza, więcej błonnika</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-stone-800">Czas fermentacji</h3>
                <p className="text-stone-600 mb-4">
                  Dopasuj mąkę do planowanego czasu fermentacji. Słaba mąka przy długiej fermentacji
                  straci strukturę. Mocna przy krótkiej będzie gumowata.
                </p>
                <div className="bg-stone-100 p-4 text-sm text-stone-700">
                  <p className="font-medium mb-2">Zasada ogólna:</p>
                  <p>
                    Krótka fermentacja (do 24h) → niższe W<br />
                    Długa fermentacja (48h+) → wyższe W
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Producer filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {producers.map(producer => (
          <button
            key={producer}
            onClick={() => setSelectedProducer(producer)}
            className={`px-4 py-2 text-sm transition border ${
              selectedProducer === producer
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-stone-700 border-stone-300 hover:border-red-700'
            }`}
          >
            {producer === 'all' ? 'Wszystkie' : producer}
          </button>
        ))}
      </div>

      {/* Lista mąk */}
      <h2 className="text-2xl mb-6">Przegląd mąk</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlours.map(flour => (
          <Card
            key={flour.id}
            link={`/maki/${flour.slug}`}
            title={`${flour.brand} ${flour.name}`}
            image={flour.image_url}
            showLeftBorder={true}
            showDetailsButton={true}
            badge={
              <Badge variant="neutral">
                Tipo {flour.type}
              </Badge>
            }
          >
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-stone-100 px-2 py-1">
                  W {flour.w_strength}
                </span>
                <span className="text-xs bg-stone-100 px-2 py-1">
                  Białko {flour.protein_content}%
                </span>
                <span className="text-xs bg-stone-100 px-2 py-1">
                  {flour.fermentation_range}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-stone-100 border border-stone-200 p-8 text-center">
        <h3 className="text-xl mb-2">Potrzebujesz pomocy z wyborem?</h3>
        <p className="text-stone-600 mb-6">
          Użyj kalkulatora, żeby dobrać proporcje do swojego stylu pizzy i czasu fermentacji.
        </p>
        <Link
          to="/kalkulator"
          className="inline-block bg-red-700 text-white px-8 py-3 hover:bg-red-800 transition"
        >
          Otwórz kalkulator
        </Link>
      </div>
    </div>
  );
}
