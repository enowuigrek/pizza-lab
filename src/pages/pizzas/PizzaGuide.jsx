import { Link } from 'react-router-dom';
import { pizzas } from '../../data/pizzas';
import Card from '../../components/common/Card';

export default function PizzaGuide() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl mb-4">Przewodnik po pizzach</h1>
      <p className="text-stone-600 mb-12 max-w-2xl">
        Autentyczne definicje pizz włoskich. Oryginalne składniki, regionalne warianty
        i lokalne adaptacje.
      </p>

      {/* Intro box */}
      <div className="bg-stone-50 border border-stone-200 p-6 mb-12">
        <p className="text-stone-700">
          Każda pizza ma swoją historię i autentyczny przepis. W tym przewodniku znajdziesz
          oryginalne składniki oraz informacje o regionalnych wariantach i lokalnych adaptacjach
          spotykanych w Polsce.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map(pizza => (
          <Card
            key={pizza.id}
            link={`/przewodnik/${pizza.slug}`}
            title={pizza.name}
            image={pizza.image_url}
          >
            <p className="text-sm text-stone-600 mt-2">
              {pizza.description ? pizza.description.substring(0, 120) : ''}...
            </p>
          </Card>
        ))}
      </div>

      {/* Educational note */}
      <div className="mt-12 bg-stone-100 border border-stone-200 p-8">
        <h3 className="text-xl mb-4">O autentyczności</h3>
        <p className="text-stone-600 mb-4">
          Pizza to żywa tradycja, która ewoluuje. Autentyczny przepis to punkt wyjścia,
          nie dogmat. W Polsce powstały własne interpretacje klasycznych pizz - to naturalna
          część kulinarnej wymiany kulturowej.
        </p>
        <p className="text-stone-600">
          Ten przewodnik dokumentuje oryginalne wersje i pokazuje, jak różnią się od lokalnych
          adaptacji. Bez oceniania - po prostu informacja.
        </p>
      </div>
    </div>
  );
}
