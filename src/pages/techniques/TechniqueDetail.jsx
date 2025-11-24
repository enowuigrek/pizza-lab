import { useParams, Link } from 'react-router-dom';

const techniquesData = {
  poolish: {
    name: 'Poolish',
    description: 'Przedrozwoj (preferment) o 100% hydratacji - rowne ilosci maki i wody.',
    fullContent: `
# Co to jest Poolish?

Poolish to przedrozwoj (preferment) pochodzacy z Polski, stad nazwa. Jest to mieszanka maki i wody w proporcji 1:1 (100% hydratacji) z minimalna iloscia drozdzy.

## Dlaczego warto uzywac Poolish?

1. **Smak** - rozwija kompleksowe aromaty fermentacyjne
2. **Tekstura** - poprawia strukture miakiszu
3. **Swiezosc** - pizza dluzej pozostaje swieza
4. **Strawnosc** - lepsza dla zoladka

## Proporcje

- Maka: 100g
- Woda: 100g (tyle samo co maki)
- Drozdze swieze: 0.1-0.2g (naprawde malo!)

## Proces

1. Wymieszaj skladniki
2. Przykryj
3. 1h w temperaturze pokojowej
4. 12-24h w lodowce

## Kiedy poolish jest gotowy?

- Powierzchnia pelna babelkow
- Lekko opadnieta
- Przyjemny, lekko kwasny zapach
    `,
    difficulty: 'latwy',
    timing: '12-24h',
  },
  biga: {
    name: 'Biga',
    description: 'Sztywniejszy przedrozwoj o 50% hydratacji - wiecej maki niz wody.',
    fullContent: `
# Co to jest Biga?

Biga to wloski przedrozwoj o niskiej hydratacji (ok. 50%). Jest sztywniejsza niz poolish i daje inny profil smakowy.

## Roznice Biga vs Poolish

| Cecha | Biga | Poolish |
|-------|------|---------|
| Hydratacja | 50% | 100% |
| Konsystencja | Sztywna | Plynna |
| Smak | Intensywniejszy | Lagodniejszy |
| Czas | 16-48h | 12-24h |

## Proporcje

- Maka: 100g
- Woda: 50g
- Drozdze: 0.5-1g

## Kiedy uzywac Biga?

- Gdy chcesz intensywniejszy smak
- Do dluzszych fermentacji
- Do pizz typu romana
    `,
    difficulty: 'sredni',
    timing: '16-48h',
  },
  direct: {
    name: 'Direct Dough',
    description: 'Metoda bezposrednia - wszystkie skladniki naraz, bez przedrozwoju.',
    fullContent: `
# Direct Dough (Metoda bezposrednia)

Najprostsza metoda - mieszasz wszystkie skladniki naraz i fermentujesz.

## Zalety

- Szybsza (mniej krokow)
- Latwiejsza dla poczatkujacych
- Mniej planowania

## Wady

- Mniej zlozony smak
- Gorsza tekstura niz z prefermentem
- Krotsza swiezosc

## Kiedy uzywac?

- Gdy nie masz czasu na poolish
- Na pierwsze proby
- Przy krotkiej fermentacji (8-12h)

## Wskazowka

Nawet przy direct dough, dluga fermentacja w lodowce (24h+) znaczaco poprawia smak!
    `,
    difficulty: 'latwy',
    timing: '8-24h',
  },
};

export default function TechniqueDetail() {
  const { slug } = useParams();
  const technique = techniquesData[slug];

  if (!technique) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Technika nie znaleziona</h1>
        <Link to="/techniques" className="text-red-600 hover:underline">
          Wroc do listy technik
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/techniques" className="text-red-600 hover:underline">Techniki</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{technique.name}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">{technique.name}</h1>
      <p className="text-xl text-gray-600 mb-8">{technique.description}</p>

      <div className="flex gap-4 mb-8">
        <span className="bg-gray-100 px-3 py-1 rounded">
          Trudnosc: {technique.difficulty}
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded">
          Czas: {technique.timing}
        </span>
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        {technique.fullContent.split('\n').map((line, idx) => {
          if (line.startsWith('# ')) {
            return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{line.slice(2)}</h2>;
          }
          if (line.startsWith('## ')) {
            return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{line.slice(3)}</h3>;
          }
          if (line.startsWith('- ')) {
            return <li key={idx} className="ml-4">{line.slice(2)}</li>;
          }
          if (line.startsWith('|')) {
            return null; // Skip table formatting for now
          }
          if (line.trim()) {
            return <p key={idx} className="mb-4">{line}</p>;
          }
          return null;
        })}
      </div>

      {/* Related links */}
      <section className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h3 className="font-bold mb-3">Zobacz tez:</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/calculator" className="text-red-600 hover:underline">
              Kalkulator ciasta
            </Link>
          </li>
          <li>
            <Link to="/flours" className="text-red-600 hover:underline">
              Dobierz make
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
