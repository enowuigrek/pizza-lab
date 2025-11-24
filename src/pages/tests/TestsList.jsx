import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

const tests = [
  {
    id: 1,
    title: 'Caputo Pizzeria vs Nuvola - 24h fermentacja',
    slug: 'pizzeria-vs-nuvola-24h',
    date: '2024-11-20',
    status: 'planned',
    description: 'Porownanie dwoch najpopularniejszych mak Caputo w identycznych warunkach.',
    flours: ['Caputo Pizzeria', 'Caputo Nuvola'],
    fermentation: '24h',
  },
  {
    id: 2,
    title: 'Hydratacja 60% vs 65% vs 70%',
    slug: 'hydratacja-porownanie',
    date: '2024-11-15',
    status: 'planned',
    description: 'Jak rozne poziomy hydratacji wplywaja na teksture i smak pizzy?',
    flours: ['Caputo Pizzeria'],
    fermentation: '24h',
  },
  {
    id: 3,
    title: 'Poolish 30% vs 50% maki',
    slug: 'poolish-proporcje',
    date: '2024-11-10',
    status: 'planned',
    description: 'Czy wiecej poolish = lepszy smak? Testujemy rozne proporcje.',
    flours: ['Caputo Nuvola'],
    fermentation: '36h',
  },
];

export default function TestsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Testy i Eksperymenty</h1>
      <p className="text-gray-600 mb-8">
        Dokumentacja moich testow mak, fermentacji i technik. Wszystko zmierzone, sfotografowane, opisane.
      </p>

      {/* Info box */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="font-bold mb-2">O testach</h3>
        <p className="text-gray-600">
          Kazdy test prowadze w kontrolowanych warunkach:
          ta sama temperatura, te same proporcje, ten sam piec.
          Tylko jedna zmienna na test, zeby wyniki byly wiarygodne.
        </p>
      </div>

      {/* Tests list */}
      <div className="space-y-6">
        {tests.map(test => (
          <div
            key={test.id}
            className="bg-white p-6 rounded-lg shadow border-l-4 border-red-600"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <Badge variant={test.status === 'completed' ? 'success' : 'warning'}>
                  {test.status === 'completed' ? 'Zakonczony' : 'Planowany'}
                </Badge>
                <span className="text-sm text-gray-500 ml-3">{test.date}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{test.title}</h3>
            <p className="text-gray-600 mb-4">{test.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="font-semibold">Maki:</span>{' '}
                {test.flours.join(', ')}
              </div>
              <div>
                <span className="font-semibold">Fermentacja:</span>{' '}
                {test.fermentation}
              </div>
            </div>
            {test.status === 'completed' && (
              <Link
                to={`/tests/${test.slug}`}
                className="inline-block mt-4 text-red-600 font-semibold hover:underline"
              >
                Zobacz wyniki &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Coming soon */}
      <div className="mt-12 bg-amber-50 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Wiecej testow wkrotce!</h3>
        <p className="text-gray-600">
          Pracuje nad nowymi eksperymentami. Masz pomysl na test? Daj znac!
        </p>
      </div>
    </div>
  );
}
