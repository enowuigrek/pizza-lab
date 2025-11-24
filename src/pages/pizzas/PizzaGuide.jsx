import { Link } from 'react-router-dom';
import { pizzas } from '../../data/pizzas';
import Card from '../../components/common/Card';

export default function PizzaGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Przewodnik po Pizzach</h1>
      <p className="text-gray-600 mb-8">
        Autentyczne definicje pizz wloskich. Co NAPRAWDE powinno byc na kazdej pizzy,
        a co to bledy popularne w Polsce.
      </p>

      {/* Warning box */}
      <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8">
        <p className="font-semibold text-red-800">
          Uwaga: Wiele pizz w Polsce jest robiona nieprawidlowo.
          Ten przewodnik pokazuje autentyczne wloskie wersje.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map(pizza => (
          <Card
            key={pizza.id}
            link={`/pizzas/${pizza.slug}`}
            title={pizza.name}
            image={pizza.image_url}
          >
            <p className="text-sm text-gray-600 mt-2">
              {pizza.authentic.description.substring(0, 100)}...
            </p>
            <div className="mt-3">
              <span className="text-xs text-red-600 font-semibold">
                {pizza.misconceptions.length} czestyc bledy
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Educational note */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Dlaczego to wazne?</h3>
        <p className="text-gray-600">
          Znajomosc autentycznych przepisow pozwala docenic prawdziwy smak wloskiej kuchni.
          Wiele "tradycyjnych" pizz w Polsce to w rzeczywistosci lokalne adaptacje,
          ktore czasem znaczaco odbiegaja od oryginalu.
        </p>
      </div>
    </div>
  );
}
