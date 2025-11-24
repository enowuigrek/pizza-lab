import { Link } from 'react-router-dom';

const starters = [
  {
    id: 'poolish',
    name: 'Poolish',
    description: 'Przedrozwój o 100% hydratacji - równe ilości mąki i wody. Pochodzi z Polski (stąd nazwa). Dodaje ciasto głębi smakowej i poprawia teksturę.',
    hydration: '100%',
    timing: '12-24h',
    character: 'Delikatny, lekko kwaskowy smak. Puszyste, otwarte ciasto.',
    recipe: {
      flour: '100g',
      water: '100g',
      yeast: '0.1-0.2g (szczypta)',
      process: [
        'Wymieszaj mąkę z wodą',
        'Dodaj drożdże i dokładnie wymieszaj',
        'Przykryj i zostaw 1h w temperaturze pokojowej',
        'Przenieś do lodówki na 12-24h',
        'Gotowy gdy powierzchnia jest pełna bąbelków i lekko opada'
      ]
    }
  },
  {
    id: 'biga',
    name: 'Biga',
    description: 'Sztywniejszy przedrozwój o 50% hydratacji - więcej mąki niż wody. Włoski klasyk. Daje bardziej intensywny, złożony smak i lepszą strukturę glutenu.',
    hydration: '50%',
    timing: '16-48h',
    character: 'Intensywny, złożony smak. Mocniejsza struktura ciasta.',
    recipe: {
      flour: '100g',
      water: '50g',
      yeast: '0.5-1g',
      process: [
        'Wymieszaj mąkę z wodą - będzie sucha masa',
        'Dodaj drożdże i wyrabiaj aż połączy się w kulę',
        'Przykryj i zostaw w temperaturze pokojowej 1h',
        'Przenieś do lodówki na 16-48h',
        'Gotowa gdy podwoi objętość i ma przyjemny, kwaskowy zapach'
      ]
    }
  }
];

export default function Dough() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-5xl mb-6">Ciasto</h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          Dobre ciasto to fundament każdej pizzy. Poznaj metody przygotowania, które nadają
          pizzy głębi smakowej i odpowiedniej tekstury.
        </p>
      </header>


      {/* What are starters */}
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Czym są zaczyny?</h2>
        <div className="prose max-w-none text-stone-700">
          <p className="mb-4">
            Zaczyn (przedrozwój, preferment) to mieszanka mąki, wody i niewielkiej ilości drożdży,
            która fermentuje przed przygotowaniem głównego ciasta. Fermentacja trwa zazwyczaj
            12-48 godzin w lodówce.
          </p>
          <p className="mb-4">
            <strong>Dlaczego warto używać zaczynu?</strong>
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Smak</strong> - fermentacja rozwija złożone aromaty</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Tekstura</strong> - lepsza struktura miąższu, więcej bąbelków</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Strawność</strong> - dłuższa fermentacja = łatwiejsze trawienie</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Świeżość</strong> - pizza dłużej zachowuje smak i teksturę</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Starters */}
      <section className="mb-12">
        <h2 className="text-3xl mb-8">Rodzaje zaczynów</h2>

        <div className="space-y-12">
          {starters.map((starter) => (
            <article key={starter.id} id={starter.id} className="border-l-4 border-red-700 pl-6">
              <h3 className="text-2xl mb-4">{starter.name}</h3>
              <p className="text-stone-600 mb-6">{starter.description}</p>

              {/* Quick specs */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-stone-100 px-4 py-2">
                  <span className="text-stone-500 text-sm">Hydratacja</span>
                  <p className="font-semibold">{starter.hydration}</p>
                </div>
                <div className="bg-stone-100 px-4 py-2">
                  <span className="text-stone-500 text-sm">Czas</span>
                  <p className="font-semibold">{starter.timing}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Charakter</h4>
                <p className="text-stone-600">{starter.character}</p>
              </div>

              {/* Recipe */}
              <div className="bg-stone-50 border border-stone-200 p-6">
                <h4 className="font-semibold mb-4">Podstawowy przepis</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm text-stone-500 uppercase tracking-wide mb-2">Składniki</h5>
                    <ul className="space-y-1 font-mono text-sm">
                      <li>Mąka: {starter.recipe.flour}</li>
                      <li>Woda: {starter.recipe.water}</li>
                      <li>Drożdże: {starter.recipe.yeast}</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm text-stone-500 uppercase tracking-wide mb-2">Proces</h5>
                    <ol className="space-y-1 text-sm">
                      {starter.recipe.process.map((step, idx) => (
                        <li key={idx} className="flex">
                          <span className="text-stone-400 mr-2">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Direct method */}
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Metoda bezpośrednia</h2>
        <div className="text-stone-700">
          <p className="mb-4">
            Można też przygotować ciasto bez zaczynu - wszystkie składniki miesza się naraz.
            To szybsza metoda, ale ciasto ma mniej złożony smak.
          </p>
          <p className="mb-4">
            Metoda bezpośrednia sprawdza się przy:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 mr-3 flex-shrink-0"></span>
              <span>Pierwszych próbach robienia pizzy</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 mr-3 flex-shrink-0"></span>
              <span>Braku czasu na planowanie z wyprzedzeniem</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 mr-3 flex-shrink-0"></span>
              <span>Krótszej fermentacji (8-12h)</span>
            </li>
          </ul>
          <p className="mt-4 text-stone-500">
            Nawet przy metodzie bezpośredniej, długa fermentacja w lodówce (24h+) znacząco
            poprawia smak ciasta.
          </p>
        </div>
      </section>

    </div>
  );
}
