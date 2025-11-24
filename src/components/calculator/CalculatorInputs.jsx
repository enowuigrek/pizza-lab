export default function CalculatorInputs({
  inputs,
  method,
  onInputChange,
  onStylePreset,
  onCalculate
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      {/* Basic Inputs */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Podstawowe</h2>

        {/* Number of pizzas */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Liczba pizz: {inputs.numberOfPizzas}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={inputs.numberOfPizzas}
            onChange={(e) => onInputChange('numberOfPizzas', parseInt(e.target.value))}
            className="w-full accent-red-600"
          />
        </div>

        {/* Ball weight with style presets */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Waga kulki: {inputs.ballWeight}g
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => onStylePreset('neapolitan')}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
            >
              Neapolitanska (250g)
            </button>
            <button
              onClick={() => onStylePreset('romana')}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
            >
              Romana (200g)
            </button>
            <button
              onClick={() => onStylePreset('new_york')}
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
            >
              New York (280g)
            </button>
          </div>
          <input
            type="range"
            min="150"
            max="400"
            step="10"
            value={inputs.ballWeight}
            onChange={(e) => onInputChange('ballWeight', parseInt(e.target.value))}
            className="w-full accent-red-600"
          />
        </div>

        {/* Hydration */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Hydratacja: {inputs.hydration}%
            <span className="text-sm text-gray-500 ml-2">
              {inputs.hydration < 62 && '(Niska - chrupiaca)'}
              {inputs.hydration >= 62 && inputs.hydration < 68 && '(Srednia - neapolitanska)'}
              {inputs.hydration >= 68 && '(Wysoka - NY style)'}
            </span>
          </label>
          <input
            type="range"
            min="55"
            max="75"
            value={inputs.hydration}
            onChange={(e) => onInputChange('hydration', parseInt(e.target.value))}
            className="w-full accent-red-600"
          />
        </div>
      </section>

      {/* Preferment settings (only for poolish/biga) */}
      {(method === 'poolish' || method === 'biga') && (
        <section className="mb-6 bg-amber-50 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
            {method === 'poolish' ? 'Poolish' : 'Biga'}
          </h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              % maki w {method}: {inputs.prefermentPercentage}%
            </label>
            <input
              type="range"
              min="20"
              max="50"
              step="10"
              value={inputs.prefermentPercentage}
              onChange={(e) => onInputChange('prefermentPercentage', parseInt(e.target.value))}
              className="w-full accent-red-600"
            />
            <p className="text-sm text-gray-600 mt-1">
              20% = subtelny smak, 50% = intensywny smak zakwasu
            </p>
          </div>
        </section>
      )}

      {/* Fermentation settings */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Fermentacja</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Typ drozdzy</label>
          <select
            value={inputs.yeastType}
            onChange={(e) => onInputChange('yeastType', e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="fresh">Swieze (kostka)</option>
            <option value="active_dry">Suche aktywne</option>
            <option value="instant">Instant</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Czas fermentacji</label>
          <select
            value={inputs.fermentationTime}
            onChange={(e) => onInputChange('fermentationTime', e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="short">Krotka (8-18h)</option>
            <option value="medium">Srednia (18-36h)</option>
            <option value="long">Dluga (36-72h)</option>
            <option value="very_long">Bardzo dluga (72h+)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Temperatura</label>
          <select
            value={inputs.temperature}
            onChange={(e) => onInputChange('temperature', e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="room">Pokojowa (~20-22C)</option>
            <option value="fridge">Lodowka (~4-6C)</option>
            <option value="mixed">Mieszana (pokojowa + lodowka)</option>
          </select>
        </div>
      </section>

      <button
        onClick={onCalculate}
        className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
      >
        OBLICZ PRZEPIS
      </button>
    </div>
  );
}
