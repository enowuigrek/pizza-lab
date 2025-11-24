import { Link } from 'react-router-dom';
import { flours } from '../../data/flours';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

export default function FloursList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl mb-4">Baza mąk</h1>
      <p className="text-stone-600 mb-12 max-w-2xl">
        Przeglądaj i porównuj mąki do pizzy. Parametry, zastosowanie, wskazówki.
      </p>

      {/* Intro o parametrach */}
      <section className="bg-stone-50 border border-stone-200 p-8 mb-12">
        <h2 className="text-2xl mb-6">Jak czytać parametry mąki</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-red-800">Wartość W (siła mąki)</h3>
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
            <h3 className="font-semibold text-lg mb-3 text-red-800">Zawartość białka</h3>
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
            <h3 className="font-semibold text-lg mb-3 text-red-800">Typ mąki (00, 0, 1, 2)</h3>
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
            <h3 className="font-semibold text-lg mb-3 text-red-800">Czas fermentacji</h3>
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
      </section>

      {/* Lista mąk */}
      <h2 className="text-2xl mb-6">Przegląd mąk</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flours.map(flour => (
          <Card
            key={flour.id}
            link={`/maki/${flour.slug}`}
            title={`${flour.brand} ${flour.name}`}
            image={flour.image_url}
            badge={
              <Badge variant="neutral">
                Tipo {flour.type}
              </Badge>
            }
          >
            <div className="mt-3 space-y-2">
              <p className="text-sm text-stone-600">{flour.description}</p>
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
