import { useParams, Link } from 'react-router-dom';

export default function TestDetail() {
  const { slug } = useParams();

  // Placeholder - tests are not implemented yet
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-6xl mb-4">🧪</div>
        <h1 className="text-3xl font-bold mb-4">Test w przygotowaniu</h1>
        <p className="text-gray-600 mb-8">
          Ten test ({slug}) jest jeszcze w trakcie realizacji lub dokumentacji.
          Wroc wkrotce po pelne wyniki!
        </p>
        <Link
          to="/tests"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          Wroc do listy testow
        </Link>
      </div>
    </div>
  );
}
