export default function CalculatorInputs({
  inputs,
  method,
  onInputChange,
  onStylePreset,
  onCalculate
}) {
  return (
    <div className="bg-white border border-stone-200 p-6 mb-6">
      {/* Basic Inputs */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Podstawowe</h2>

        {/* Number of pizzas */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Liczba pizz: {inputs.numberOfPizzas}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={inputs.numberOfPizzas}
            onChange={(e) => onInputChange('numberOfPizzas', parseInt(e.target.value))}
            className="w-full accent-red-700"
          />
        </div>

        {/* Ball weight with style presets */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Waga kuli: {inputs.ballWeight}g
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => onStylePreset('neapolitan')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              Neapolitańska (250g)
            </button>
            <button
              onClick={() => onStylePreset('romana')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              Romana (200g)
            </button>
            <button
              onClick={() => onStylePreset('new_york')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
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
            className="w-full accent-red-700"
          />
        </div>

        {/* Hydration */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Hydratacja: {inputs.hydration}%
            <span className="text-sm text-stone-500 ml-2">
              {inputs.hydration < 62 && '(niska - chrupiąca)'}
              {inputs.hydration >= 62 && inputs.hydration < 68 && '(średnia - neapolitańska)'}
              {inputs.hydration >= 68 && '(wysoka - NY style)'}
            </span>
          </label>
          <input
            type="range"
            min="55"
            max="75"
            value={inputs.hydration}
            onChange={(e) => onInputChange('hydration', parseInt(e.target.value))}
            className="w-full accent-red-700"
          />
        </div>
      </section>

      {/* Preferment settings (only for poolish/biga) */}
      {(method === 'poolish' || method === 'biga') && (
        <section className="mb-6 bg-amber-50 border border-amber-200 p-4">
          <h2 className="text-xl font-semibold mb-4">
            {method === 'poolish' ? 'Poolish' : 'Biga'}
          </h2>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              % mąki w {method}: {inputs.prefermentPercentage}%
            </label>
            <input
              type="range"
              min="20"
              max="50"
              step="10"
              value={inputs.prefermentPercentage}
              onChange={(e) => onInputChange('prefermentPercentage', parseInt(e.target.value))}
              className="w-full accent-red-700"
            />
            <p className="text-sm text-stone-600 mt-1">
              20% = subtelny smak, 50% = intensywny smak zakwasu
            </p>
          </div>
        </section>
      )}

      {/* Fermentation settings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Fermentacja</h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">Typ drożdży</label>
          <select
            value={inputs.yeastType}
            onChange={(e) => onInputChange('yeastType', e.target.value)}
            className="w-full border border-stone-300 px-3 py-2"
          >
            <option value="fresh">Świeże (kostka)</option>
            <option value="active_dry">Suche aktywne</option>
            <option value="instant">Instant</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Czas fermentacji</label>
          <select
            value={inputs.fermentationTime}
            onChange={(e) => onInputChange('fermentationTime', e.target.value)}
            className="w-full border border-stone-300 px-3 py-2"
          >
            <option value="short">Krótka (8-18h)</option>
            <option value="medium">Średnia (18-36h)</option>
            <option value="long">Długa (36-72h)</option>
            <option value="very_long">Bardzo długa (72h+)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Temperatura</label>
          <select
            value={inputs.temperature}
            onChange={(e) => onInputChange('temperature', e.target.value)}
            className="w-full border border-stone-300 px-3 py-2"
          >
            <option value="room">Pokojowa (~20-22°C)</option>
            <option value="fridge">Lodówka (~4-6°C)</option>
            <option value="mixed">Mieszana (pokojowa + lodówka)</option>
          </select>
        </div>
      </section>

      <button
        onClick={onCalculate}
        className="w-full bg-red-700 text-white py-3 font-semibold hover:bg-red-800 transition"
      >
        Oblicz przepis
      </button>
    </div>
  );
}
