import { useParams, Link } from 'react-router-dom';

const ingredientsData = {
  'mozzarella-bufala': {
    name: 'Mozzarella di Bufala',
    category: 'sery',
    description: 'Premium mozzarella z mleka bawolow wodnych. Kremowa, delikatna, niesamowita.',
    image_url: '/images/ingredients/mozzarella-bufala.jpg',
    content: `
## Co to jest Mozzarella di Bufala?

Mozzarella di Bufala to ser z mleka bawolow wodnych, produkowany glownie w regionie Kampanii (okolice Neapolu). Jest znacznie drozsza i delikatniejsza niz zwykla mozzarella.

## Dlaczego jest specjalna?

- **Kremowa tekstura** - rozpuszcza sie w ustach
- **Bogaty smak** - mleko bawole ma wiecej tluszczu
- **Swiezosc** - najlepsza w ciagu 24-48h od produkcji

## Jak uzywac na pizzy?

**WAZNE: Nigdy nie dodawaj bufali przed pieczeniem!**

1. Odsacz z plynu
2. Pokroj lub porwij
3. Dodaj na pizze w ostatnich 30-60 sek pieczenia
4. Lub dodaj na goraca pizze po wyjeciu z pieca

## Gdzie kupic?

- Wloskie delikatesy
- Jak u Mammy (online)
- Carrefour (czasem)
- Bezposrednio z Wloch (vakuum)

## Przechowywanie

- W lodowce, w oryginalnym plynie
- Najlepiej zuzyc w 2-3 dni
- Wyjac 30 min przed uzyciem
    `,
    priceRange: 'wysoka',
    whereToBuy: ['Jak u Mammy', 'Casa Italiana', 'Carrefour'],
  },
  'salame-piccante': {
    name: 'Salame Piccante',
    category: 'mieso',
    description: 'Wloskie pikantne salami. Podstawa autentycznej pizzy Diavola.',
    image_url: '/images/ingredients/salame-piccante.jpg',
    content: `
## Co to jest Salame Piccante?

Salame piccante to wloskie pikantne salami przyprawione papryka chili. Jest INNE niz amerykanskie pepperoni!

## Roznice vs Pepperoni

| Cecha | Salame Piccante | Pepperoni |
|-------|----------------|-----------|
| Pochodzenie | Wlochy | USA |
| Mieso | Wieprzowina | Wiep. + wol. |
| Smak | Naturalny, ostry | Dymiony, slodkawy |
| Tekstura | Grubsza | Drobniejsza |

## Jak uzywac na pizzy?

- Dodaj PRZED pieczeniem
- Tluszcz sie wytopi i przesiaknie do ciasta
- Plastry powinny byc srednio grube

## Gdzie kupic?

- Wloskie delikatesy
- Jak u Mammy
- Spianata calabrese to dobra alternatywa
    `,
    priceRange: 'srednia',
    whereToBuy: ['Jak u Mammy', 'Wloskie delikatesy'],
  },
};

export default function IngredientDetail() {
  const { slug } = useParams();
  const ingredient = ingredientsData[slug];

  if (!ingredient) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Skladnik nie znaleziony</h1>
        <p className="text-gray-600 mb-4">Ten skladnik nie ma jeszcze pelnego opisu.</p>
        <Link to="/ingredients" className="text-red-600 hover:underline">
          Wroc do listy skladnikow
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/ingredients" className="text-red-600 hover:underline">Skladniki</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{ingredient.name}</span>
      </nav>

      {/* Header with image */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {ingredient.image_url && (
          <div className="md:w-1/3">
            <div className="bg-stone-100 border border-stone-200 aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={ingredient.image_url}
                alt={ingredient.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}
        <div className={ingredient.image_url ? 'md:w-2/3' : 'w-full'}>
          <h1 className="text-4xl font-bold mb-4">{ingredient.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{ingredient.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none mb-8">
        {ingredient.content.split('\n').map((line, idx) => {
          if (line.startsWith('## ')) {
            return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{line.slice(3)}</h2>;
          }
          if (line.startsWith('- ')) {
            return <li key={idx} className="ml-4">{line.slice(2)}</li>;
          }
          if (line.startsWith('**')) {
            return <p key={idx} className="font-bold mb-2">{line.replace(/\*\*/g, '')}</p>;
          }
          if (line.startsWith('|')) {
            return null;
          }
          if (line.trim()) {
            return <p key={idx} className="mb-4">{line}</p>;
          }
          return null;
        })}
      </div>

    </div>
  );
}
