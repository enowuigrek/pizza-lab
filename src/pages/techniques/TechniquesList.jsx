import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

const techniques = [
  {
    id: 1,
    name: 'Poolish',
    slug: 'poolish',
    description: 'Przedrozwoj o 100% hydratacji. Dodaje smak, poprawia teksture, wydluza swiezosc.',
    difficulty: 'latwy',
    timing: '12-24h',
    image: null,
  },
  {
    id: 2,
    name: 'Biga',
    slug: 'biga',
    description: 'Sztywniejszy przedrozwoj (50% hydratacji). Intensywniejszy smak, lepsza struktura.',
    difficulty: 'sredni',
    timing: '16-48h',
    image: null,
  },
  {
    id: 3,
    name: 'Direct Dough',
    slug: 'direct',
    description: 'Metoda bez przedrozwoju. Szybsza, ale mniej zlozona w smaku.',
    difficulty: 'latwy',
    timing: '8-24h',
    image: null,
  },
  {
    id: 4,
    name: 'Fermentacja w lodowce',
    slug: 'cold-fermentation',
    description: 'Wolna fermentacja w niskiej temperaturze. Klucz do gleboiego smaku.',
    difficulty: 'latwy',
    timing: '24-72h',
    image: null,
  },
  {
    id: 5,
    name: 'Autoliza',
    slug: 'autolyse',
    description: 'Odpoczynek maki z woda przed dodaniem soli i drozdzy. Poprawia gluten.',
    difficulty: 'latwy',
    timing: '30min-2h',
    image: null,
  },
  {
    id: 6,
    name: 'Formowanie kulek',
    slug: 'balling',
    description: 'Technika dzielenia i formowania ciasta w idealne kulki.',
    difficulty: 'sredni',
    timing: '-',
    image: null,
  },
];

export default function TechniquesList() {
  const difficultyColors = {
    latwy: 'success',
    sredni: 'warning',
    trudny: 'danger',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Techniki</h1>
      <p className="text-gray-600 mb-8">
        Naucz sie technik ktore uczynia Twoja pizze lepsze. Od przedrozwojow po formowanie.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map(technique => (
          <Card
            key={technique.id}
            link={`/techniques/${technique.slug}`}
            title={technique.name}
            image={technique.image}
            badge={
              <Badge variant={difficultyColors[technique.difficulty]}>
                {technique.difficulty}
              </Badge>
            }
          >
            <p className="text-sm text-gray-600 mt-2">{technique.description}</p>
            <div className="mt-3 text-xs text-gray-500">
              Czas: {technique.timing}
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-amber-50 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Najwazniejsza technika?</h3>
        <p className="text-gray-600 mb-4">
          Poolish lub biga + dluga fermentacja w lodowce. To podstawa dobrej pizzy domowej.
        </p>
        <Link
          to="/articles/jak-zrobic-poolish"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          Naucz sie robic Poolish
        </Link>
      </div>
    </div>
  );
}
