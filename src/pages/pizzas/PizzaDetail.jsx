import { useParams, Link } from 'react-router-dom';
import { pizzas } from '../../data/pizzas';

export default function PizzaDetail() {
  const { slug } = useParams();
  const pizza = pizzas.find(p => p.slug === slug);

  if (!pizza) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Pizza nie znaleziona</h1>
        <Link to="/pizzas" className="text-red-600 hover:underline">
          Wroc do przewodnika
        </Link>
      </div>
    );
  }

  const statusColors = {
    wrong: 'text-red-600 bg-red-50',
    partial: 'text-yellow-600 bg-yellow-50',
    regional: 'text-blue-600 bg-blue-50',
    acceptable: 'text-green-600 bg-green-50',
    different: 'text-purple-600 bg-purple-50',
  };

  const statusIcons = {
    wrong: '✗',
    partial: '⚠',
    regional: 'ℹ',
    acceptable: '~',
    different: '≠',
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/pizzas" className="text-red-600 hover:underline">Przewodnik</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{pizza.name}</span>
      </nav>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">{pizza.name}</h1>

      {pizza.image_url && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={pizza.image_url}
            alt={pizza.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.parentElement.innerHTML = '<div class="w-full h-64 bg-gray-200 flex items-center justify-center"><span class="text-6xl">🍕</span></div>';
            }}
          />
        </div>
      )}

      {/* Authentic Definition */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg border-2 border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
          <span className="text-3xl mr-2">✓</span>
          Autentyczna {pizza.name}
        </h2>
        <p className="mb-6 text-lg">{pizza.authentic.description}</p>

        <h3 className="font-bold text-lg mb-3">Skladniki:</h3>
        <ul className="space-y-2">
          {Object.entries(pizza.authentic.ingredients).map(([ingredient, details]) => (
            <li key={ingredient} className="flex items-start">
              <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
              <span className="flex-1">
                <span className="font-semibold">{ingredient}</span>
                {details.required && (
                  <span className="text-red-600 ml-2 text-sm">* wymagany</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Common Misconceptions */}
      <section className="mb-8 bg-red-50 p-6 rounded-lg border-2 border-red-200">
        <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center">
          <span className="text-3xl mr-2">✗</span>
          Czeste bledy w Polsce
        </h2>
        <p className="mb-4 text-gray-700">
          Niestety w Polsce {pizza.name} czesto robi sie z bledami. Sprawdz co NIE pasuje:
        </p>
        <ul className="space-y-4">
          {pizza.misconceptions.map((item, idx) => (
            <li key={idx} className={`flex items-start p-4 rounded ${statusColors[item.status] || 'bg-gray-50'}`}>
              <span className="mr-3 text-2xl flex-shrink-0">
                {statusIcons[item.status] || '?'}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-lg mb-1">{item.item}</p>
                <p className="text-gray-700">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* History */}
      <section className="mb-8 bg-amber-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Historia</h2>
        <p className="text-gray-800 leading-relaxed">{pizza.history}</p>
      </section>

      {/* Tips */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Wskazowki</h2>
        <p className="text-gray-800 leading-relaxed">{pizza.tips}</p>
      </section>

      {/* Related links */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-bold mb-3">Zobacz tez:</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/calculator" className="text-red-600 hover:underline">
              Oblicz ciasto na {pizza.name}
            </Link>
          </li>
          <li>
            <Link to="/ingredients" className="text-red-600 hover:underline">
              Skladniki premium
            </Link>
          </li>
          <li>
            <Link to="/techniques" className="text-red-600 hover:underline">
              Techniki pieczenia
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
