export default function RecipeCard({ recipe, onSelect, selected }) {
  if (!recipe) return null;

  return (
    <div
      onClick={() => onSelect?.(recipe)}
      className={`p-4 rounded-lg border-2 cursor-pointer transition ${
        selected
          ? 'border-red-600 bg-red-50'
          : 'border-gray-200 hover:border-gray-300 bg-white'
      }`}
    >
      <h4 className="font-bold mb-2">{recipe.name || 'Bez nazwy'}</h4>
      {recipe.config && (
        <div className="text-sm text-gray-600 space-y-1">
          <p>Metoda: {recipe.config.method}</p>
          <p>Pizze: {recipe.config.numberOfPizzas}</p>
          <p>Hydratacja: {recipe.config.hydration}%</p>
        </div>
      )}
      {recipe.notes && (
        <p className="text-sm text-gray-500 mt-2 italic">{recipe.notes}</p>
      )}
    </div>
  );
}
