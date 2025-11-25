import { useParams, Link } from 'react-router-dom';
import { pizzas } from '../../data/pizzas';

export default function PizzaDetail() {
  const { slug } = useParams();
  const pizza = pizzas.find(p => p.slug === slug);

  if (!pizza) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Pizza nie znaleziona</h1>
        <Link to="/klasyczne-pizze" className="text-red-700 hover:underline">
          Wróć do klasycznych pizz
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8 text-stone-500">
        <Link to="/klasyczne-pizze" className="hover:text-red-700 transition">Klasyczne pizze</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{pizza.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-5xl mb-6">{pizza.name}</h1>
        <p className="text-lg text-stone-600 leading-relaxed">{pizza.description}</p>
      </header>

      {/* Image */}
      <div className="mb-10 aspect-video bg-stone-100 border border-stone-200 flex items-center justify-center overflow-hidden">
        {pizza.image_url ? (
          <img
            src={pizza.image_url}
            alt={pizza.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center"><div class="w-16 h-16 rounded-full bg-red-700 opacity-80"></div></div>';
            }}
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-700 opacity-80"></div>
          </div>
        )}
      </div>

      {/* Styl ciasta */}
      {pizza.styleName && (
        <section className="mb-8 info-section info-section--neutral">
          <h2 className="text-2xl mb-4">Styl ciasta</h2>
          <Link
            to={`/ciasto/style#${pizza.style}`}
            className="text-red-700 hover:underline font-semibold text-lg"
          >
            {pizza.styleName}
          </Link>
          <p className="text-stone-600 text-sm mt-2">Kliknij, aby poznać szczegóły tego stylu ciasta</p>
        </section>
      )}

      {/* Authentic Ingredients */}
      <section className="mb-8 info-section info-section--positive">
        <h2 className="text-2xl mb-4">Autentyczne składniki</h2>
        <ul className="space-y-2">
          {pizza.authentic.ingredients.map((ingredient, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-green-700 mt-2 mr-3 flex-shrink-0"></span>
              <span>
                {ingredient.name}
                {ingredient.required && (
                  <span className="text-stone-500 text-sm ml-2">(wymagany)</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* What to avoid */}
      {pizza.avoid && pizza.avoid.length > 0 && (
        <section className="mb-8 info-section info-section--negative">
          <h2 className="text-2xl mb-4">Częste uproszczenia</h2>
          <ul className="space-y-4">
            {pizza.avoid.map((item, idx) => (
              <li key={idx}>
                <p className="font-semibold mb-1">{item.item}</p>
                <p className="text-stone-600 text-sm">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Optional / Regional variants */}
      {pizza.optional && pizza.optional.length > 0 && (
        <section className="mb-8 info-section info-section--optional">
          <h2 className="text-2xl mb-4">Warianty i opcje</h2>
          <ul className="space-y-4">
            {pizza.optional.map((item, idx) => (
              <li key={idx}>
                <p className="font-semibold mb-1">{item.item}</p>
                <p className="text-stone-600 text-sm">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* History */}
      <section className="mb-8 info-section info-section--neutral">
        <h2 className="text-2xl mb-4">Historia</h2>
        <p className="text-stone-700 leading-relaxed">{pizza.history}</p>
      </section>

      {/* Tips */}
      {pizza.tips && pizza.tips.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl mb-4">Wskazówki</h2>
          <ul className="space-y-2">
            {pizza.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-stone-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}
