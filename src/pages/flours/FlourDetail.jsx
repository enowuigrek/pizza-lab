import { useParams, Link } from 'react-router-dom';
import { flours } from '../../data/flours';
import Badge from '../../components/common/Badge';

export default function FlourDetail() {
  const { slug } = useParams();
  const flour = flours.find(f => f.slug === slug);

  if (!flour) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Maka nie znaleziona</h1>
        <Link to="/flours" className="text-red-600 hover:underline">
          Wroc do listy mak
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/flours" className="text-red-600 hover:underline">Maki</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{flour.brand} {flour.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/3">
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            {flour.image_url ? (
              <img
                src={flour.image_url}
                alt={`${flour.brand} ${flour.name}`}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-6xl">🌾</span>';
                }}
              />
            ) : (
              <span className="text-6xl">🌾</span>
            )}
          </div>
        </div>
        <div className="md:w-2/3">
          <Badge variant="warning" className="mb-2">Typ {flour.type}</Badge>
          <h1 className="text-4xl font-bold mb-2">{flour.brand} {flour.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{flour.description}</p>

          {/* Quick specs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded text-center">
              <div className="text-2xl font-bold text-red-600">{flour.w_strength}</div>
              <div className="text-sm text-gray-600">Sila W</div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <div className="text-2xl font-bold text-red-600">{flour.protein_content}%</div>
              <div className="text-sm text-gray-600">Bialko</div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <div className="text-2xl font-bold text-red-600">{flour.fermentation_range}</div>
              <div className="text-sm text-gray-600">Fermentacja</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal for */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Idealna do:</h2>
        <div className="flex flex-wrap gap-2">
          {flour.ideal_for.map((use, idx) => (
            <Badge key={idx} variant="success" size="md">{use}</Badge>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="mb-8 bg-amber-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Notatki</h2>
        <p className="text-gray-700">{flour.notes}</p>
      </section>

      {/* Related links */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-bold mb-3">Zobacz tez:</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/calculator" className="text-red-600 hover:underline">
              Oblicz ciasto z ta maka
            </Link>
          </li>
          <li>
            <Link to="/techniques" className="text-red-600 hover:underline">
              Techniki fermentacji
            </Link>
          </li>
          <li>
            <Link to="/flours" className="text-red-600 hover:underline">
              Porownaj z innymi makami
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
