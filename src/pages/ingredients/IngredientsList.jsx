import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

const ingredients = [
  {
    id: 1,
    name: 'Mozzarella Fior di Latte',
    category: 'sery',
    slug: 'mozzarella-fior-di-latte',
    description: 'Standardowa mozzarella z mleka krowiego. Podstawa wiekszosci pizz.',
    priceRange: 'srednia',
  },
  {
    id: 2,
    name: 'Mozzarella di Bufala',
    category: 'sery',
    slug: 'mozzarella-bufala',
    description: 'Premium mozzarella z mleka bawolow. Dodawana na koniec pieczenia.',
    priceRange: 'wysoka',
  },
  {
    id: 3,
    name: 'San Marzano DOP',
    category: 'pomidory',
    slug: 'san-marzano-dop',
    description: 'Certyfikowane pomidory z regionu Neapolu. Zloty standard.',
    priceRange: 'wysoka',
  },
  {
    id: 4,
    name: 'Rosso Gargano',
    category: 'pomidory',
    slug: 'rosso-gargano',
    description: 'Wloskie pomidory z Apulii. Dobra alternatywa dla San Marzano.',
    priceRange: 'srednia',
  },
  {
    id: 5,
    name: 'Salame Piccante',
    category: 'mieso',
    slug: 'salame-piccante',
    description: 'Wloskie pikantne salami. Klucz do autentycznej Diavola.',
    priceRange: 'srednia',
  },
  {
    id: 6,
    name: 'Prosciutto Cotto',
    category: 'mieso',
    slug: 'prosciutto-cotto',
    description: 'Gotowana szynka wloska. Do Capricciosa i innych pizz.',
    priceRange: 'srednia',
  },
  {
    id: 7,
    name: 'Karczoch (Carciofi)',
    category: 'warzywa',
    slug: 'karczoch',
    description: 'Kluczowy skladnik Capricciosa. Najlepiej z sloika w oleju.',
    priceRange: 'srednia',
  },
  {
    id: 8,
    name: 'Oliwa Extra Virgin',
    category: 'oleje',
    slug: 'oliwa-extra-virgin',
    description: 'Wysokiej jakosci oliwa. Finishing touch kazdej pizzy.',
    priceRange: 'wysoka',
  },
];

export default function IngredientsList() {
  const categoryColors = {
    sery: 'warning',
    pomidory: 'danger',
    mieso: 'primary',
    warzywa: 'success',
    oleje: 'info',
  };

  const priceIcons = {
    niska: '💰',
    srednia: '💰💰',
    wysoka: '💰💰💰',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Skladniki</h1>
      <p className="text-gray-600 mb-8">
        Przewodnik po skladnikach do pizzy. Jakie wybrac, gdzie kupic, jak uzywac.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
          Wszystkie
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
          Sery
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
          Pomidory
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
          Mieso
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
          Warzywa
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map(ingredient => (
          <Card
            key={ingredient.id}
            link={`/ingredients/${ingredient.slug}`}
            title={ingredient.name}
            badge={
              <Badge variant={categoryColors[ingredient.category]}>
                {ingredient.category}
              </Badge>
            }
          >
            <p className="text-sm text-gray-600 mt-2">{ingredient.description}</p>
            <div className="mt-3 text-sm">
              Cena: {priceIcons[ingredient.priceRange]}
            </div>
          </Card>
        ))}
      </div>

      {/* Tip */}
      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Gdzie kupowac?</h3>
        <p className="text-gray-600 mb-4">
          Najlepsze skladniki znajdziesz w specjalistycznych sklepach:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Jak u Mammy (online)</li>
          <li>Casa Italiana</li>
          <li>Wloskie delikatesy lokalne</li>
          <li>Carrefour - dzial międzynarodowy</li>
        </ul>
      </div>
    </div>
  );
}
