import { useParams, Link } from 'react-router-dom';
import { flours } from '../../data/flours';
import Badge from '../../components/common/Badge';

export default function FlourDetail() {
  const { slug } = useParams();
  const flour = flours.find(f => f.slug === slug);

  if (!flour) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl mb-4">Mąka nie znaleziona</h1>
        <Link to="/maki" className="text-red-700 hover:text-red-800 transition">
          Wróć do listy mąk
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link to="/maki" className="text-red-700 hover:text-red-800 transition">Mąki</Link>
        <span className="mx-2 text-stone-400">/</span>
        <span className="text-stone-600">{flour.brand} {flour.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="bg-stone-100 border border-stone-200 aspect-square flex items-center justify-center">
            {flour.image_url ? (
              <img
                src={flour.image_url}
                alt={`${flour.brand} ${flour.name}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-24 h-24 rounded-full bg-amber-100"></div>';
                }}
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-amber-100"></div>
            )}
          </div>
        </div>
        <div className="md:w-2/3">
          <Badge variant="neutral" className="mb-3">Tipo {flour.type}</Badge>
          <h1 className="text-4xl mb-4">{flour.brand} {flour.name}</h1>
          <p className="text-stone-600 text-lg mb-8">{flour.description}</p>

          {/* Quick specs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-stone-50 border border-stone-200 p-4 text-center">
              <div className="text-2xl font-semibold text-red-700">{flour.w_strength}</div>
              <div className="text-sm text-stone-600">Siła W</div>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 text-center">
              <div className="text-2xl font-semibold text-red-700">{flour.protein_content}%</div>
              <div className="text-sm text-stone-600">Białko</div>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 text-center">
              <div className="text-2xl font-semibold text-red-700">{flour.fermentation_range}</div>
              <div className="text-sm text-stone-600">Fermentacja</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal for */}
      <section className="mb-8 info-section info-section--positive">
        <h2 className="text-xl font-semibold mb-4">Idealna do</h2>
        <div className="flex flex-wrap gap-2">
          {flour.ideal_for.map((use, idx) => (
            <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 text-sm">
              {use}
            </span>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="mb-8 bg-stone-50 border border-stone-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Notatki</h2>
        <p className="text-stone-700">{flour.notes}</p>
      </section>

    </div>
  );
}
