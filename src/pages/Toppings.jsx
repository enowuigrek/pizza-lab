import { Link } from 'react-router-dom';

export default function Toppings() {
  const categories = [
    {
      name: 'Sery',
      description: 'Mozzarella, parmigiano, gorgonzola i inne sery do pizzy',
      icon: '🧀',
      link: '/skladniki?category=sery'
    },
    {
      name: 'Pomidory',
      description: 'San Marzano, pelati i inne sosy pomidorowe',
      icon: '🍅',
      link: '/skladniki?category=pomidory'
    },
    {
      name: 'Mięso',
      description: 'Salami, prosciutto, pepperoni i inne mięsa',
      icon: '🥓',
      link: '/skladniki?category=mieso'
    },
    {
      name: 'Warzywa',
      description: 'Karczoch, rukola, pieczarki i inne warzywa',
      icon: '🥬',
      link: '/skladniki?category=warzywa'
    },
    {
      name: 'Oleje i przyprawy',
      description: 'Oliwa z oliwek, oregano, bazylia',
      icon: '🫒',
      link: '/skladniki?category=oleje'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-5xl mb-6">Składniki</h1>
      <p className="text-lg text-stone-600 mb-12 max-w-3xl leading-relaxed">
        Przewodnik po składnikach do pizzy. Poznaj autentyczne włoskie produkty, ich charakterystykę
        i zastosowanie w różnych stylach pizzy.
      </p>

      {/* Info */}
      <div className="bg-stone-50 border border-stone-200 p-6 mb-12">
        <h2 className="text-xl mb-3 font-semibold">O składnikach</h2>
        <p className="text-stone-700 mb-4">
          Pizza to nie tylko ciasto — to harmonia składników. W tej sekcji znajdziesz
          informacje o autentycznych włoskich produktach oraz ich polskich odpowiednikach.
        </p>
        <p className="text-stone-700">
          Opisujemy różnice między składnikami używanymi we Włoszech a tymi dostępnymi
          w Polsce, bez oceniania — po prostu edukujemy.
        </p>
      </div>

      {/* Categories grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="bg-white border border-stone-200 p-6 hover:border-stone-300 transition"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-sm text-stone-600">{category.description}</p>
          </Link>
        ))}
      </div>

      {/* Guide sections */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 border-l-4 border-green-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Składniki autentyczne</h3>
          <p className="text-sm text-stone-700 mb-3">
            W tej sekcji opisujemy oryginalne składniki używane we Włoszech.
            Dowiesz się, czym charakteryzują się produkty z certyfikatami
            DOP, IGP i STG.
          </p>
          <Link
            to="/skladniki"
            className="text-sm text-green-800 font-semibold hover:underline"
          >
            Zobacz wszystkie składniki →
          </Link>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
          <h3 className="text-lg font-semibold mb-3">Polskie alternatywy</h3>
          <p className="text-sm text-stone-700 mb-3">
            Nie każdy ma dostęp do włoskich produktów. Pokazujemy, jak
            dobrać polskie zamienniki i na co zwrócić uwagę przy wyborze.
          </p>
          <Link
            to="/artykuly"
            className="text-sm text-amber-800 font-semibold hover:underline"
          >
            Przeczytaj artykuły →
          </Link>
        </div>
      </div>
    </div>
  );
}
