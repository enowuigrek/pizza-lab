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
        <p className="text-stone-700 mb-4">
          W pizzeriach, przeglądając menu, spotykamy zarówno autorskie kompozycje lokalu, jak i nazwy uznawane za klasyczne, które z założenia powinny podpowiadać, czego się spodziewać. W praktyce bywa różnie — zamawiasz pizzę znaną z nazwy, a na stolik trafia wersja, która odbiega od tego, co uznaje się za tradycyjny skład. To normalne, bo wiele klasyków ma lokalne interpretacje, a część z nich w Polsce przyjęła się w uproszczonej formie.
        </p>
        <p className="text-stone-700">
          Dlatego poniżej przedstawiam te pizze w ich tradycyjnych wersjach, z zaznaczeniem, jak najczęściej serwuje się je w naszych pizzeriach. Dzięki temu łatwiej zrozumiesz, skąd biorą się różnice między nazwą w menu a tym, co faktycznie pojawia się na talerzu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map(pizza => (
          <Card
            key={pizza.id}
            link={`/przewodnik/${pizza.slug}`}
            title={pizza.name}
            image={pizza.image_url}
            showDetailsButton={true}
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
