import { Link } from 'react-router-dom';
import { flours } from '../../data/flours';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';

export default function FloursList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Baza Mak</h1>
      <p className="text-gray-600 mb-8">
        Przegladaj i porownuj maki do pizzy. Parametry, zastosowanie, wskazowki.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flours.map(flour => (
          <Card
            key={flour.id}
            link={`/flours/${flour.slug}`}
            title={`${flour.brand} ${flour.name}`}
            image={flour.image_url}
            badge={
              <Badge variant="warning">
                Typ {flour.type}
              </Badge>
            }
          >
            <div className="mt-3 space-y-2">
              <p className="text-sm text-gray-600">{flour.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  W: {flour.w_strength}
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Bialko: {flour.protein_content}%
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {flour.fermentation_range}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Potrzebujesz pomocy z wyborem?</h3>
        <p className="text-gray-600 mb-4">
          Uzyj naszego kalkulatora, zeby dobrac maki do swojego stylu pizzy i czasu fermentacji.
        </p>
        <Link
          to="/calculator"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          Otworz Kalkulator
        </Link>
      </div>
    </div>
  );
}
