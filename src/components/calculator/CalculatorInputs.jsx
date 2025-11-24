import { Link } from 'react-router-dom';

export default function CalculatorInputs({
  inputs,
  usePreferment,
  method,
  onUsePrefermentChange,
  onMethodChange,
  onInputChange,
  onStylePreset,
  onCalculate
}) {
  return (
    <div className="bg-white border border-stone-200 p-6 mb-6">
      {/* Preferment checkbox - first option */}
      <section className="mb-6 pb-6 border-b border-stone-200">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={usePreferment}
            onChange={(e) => onUsePrefermentChange(e.target.checked)}
            className="w-5 h-5 accent-red-700 mr-3"
          />
          <span className="font-medium text-lg">Użyj zaczynu (poolish/biga)</span>
        </label>
      </section>

      {/* Preferment settings (only when checkbox is checked) */}
      {usePreferment && (
        <section className="mb-6 bg-amber-50 border border-amber-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Zaczyn</h2>
            <Link
              to="/ciasto"
              className="text-sm text-red-700 hover:text-red-800 transition"
              target="_blank"
            >
              Co to są zaczyny? →
            </Link>
          </div>

          {/* Method selection */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Typ zaczynu</label>
            <div className="flex gap-2">
              <button
                onClick={() => onMethodChange('poolish')}
                className={`flex-1 px-4 py-2 border transition ${
                  method === 'poolish'
                    ? 'bg-red-700 text-white border-red-700'
                    : 'bg-white border-stone-300 hover:bg-stone-50'
                }`}
              >
                Poolish
              </button>
              <button
                onClick={() => onMethodChange('biga')}
                className={`flex-1 px-4 py-2 border transition ${
                  method === 'biga'
                    ? 'bg-red-700 text-white border-red-700'
                    : 'bg-white border-stone-300 hover:bg-stone-50'
                }`}
              >
                Biga
              </button>
            </div>
          </div>

          {/* Preferment percentage */}
          <div className="mb-4">
            <label className="block font-medium mb-2">
              % mąki w zaczynie: {inputs.prefermentPercentage}%
            </label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="range"
                min="20"
                max="100"
                step="5"
                value={inputs.prefermentPercentage}
                onChange={(e) => onInputChange('prefermentPercentage', parseInt(e.target.value))}
                className="flex-1 accent-red-700"
              />
              <input
                type="number"
                min="20"
                max="100"
                value={inputs.prefermentPercentage}
                onChange={(e) => onInputChange('prefermentPercentage', parseInt(e.target.value) || 50)}
                className="w-16 border border-stone-300 px-2 py-1 text-sm"
                placeholder="%"
              />
            </div>
            <p className="text-sm text-stone-600">
              20-30% = subtelny smak, 50% = standard, 70-100% = intensywny smak zakwasu
            </p>
          </div>
        </section>
      )}

      {/* Basic Inputs */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Podstawowe</h2>

        {/* Number of balls */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Liczba kulek: {inputs.numberOfPizzas}
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

        {/* Ball weight with manual input */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Waga kuli: {inputs.ballWeight}g
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => onInputChange('ballWeight', 200)}
              className="px-4 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              200g
            </button>
            <button
              onClick={() => onInputChange('ballWeight', 250)}
              className="px-4 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              250g
            </button>
            <button
              onClick={() => onInputChange('ballWeight', 280)}
              className="px-4 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              280g
            </button>
            <input
              type="number"
              min="150"
              max="400"
              value={inputs.ballWeight}
              onChange={(e) => onInputChange('ballWeight', parseInt(e.target.value) || 250)}
              className="w-20 border border-stone-300 px-2 py-1 text-sm"
              placeholder="g"
            />
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

        {/* Hydration with style presets */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Hydratacja: {inputs.hydration}%
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => onStylePreset('romana')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              Romana
            </button>
            <button
              onClick={() => onStylePreset('neapolitan')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              Neapolitańska
            </button>
            <button
              onClick={() => onStylePreset('new_york')}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-sm transition"
            >
              New York
            </button>
            <input
              type="number"
              min="55"
              max="80"
              value={inputs.hydration}
              onChange={(e) => onInputChange('hydration', parseInt(e.target.value) || 65)}
              className="w-16 border border-stone-300 px-2 py-1 text-sm"
              placeholder="%"
            />
          </div>
          <input
            type="range"
            min="55"
            max="80"
            value={inputs.hydration}
            onChange={(e) => onInputChange('hydration', parseInt(e.target.value))}
            className="w-full accent-red-700"
          />
        </div>
      </section>

      {/* Fermentation settings - 3 tiles */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Fermentacja</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Yeast type */}
          <div>
            <label className="block font-medium mb-2 text-sm">Typ drożdży</label>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="yeastType"
                  value="fresh"
                  checked={inputs.yeastType === 'fresh'}
                  onChange={(e) => onInputChange('yeastType', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Świeże (kostka)</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="yeastType"
                  value="active_dry"
                  checked={inputs.yeastType === 'active_dry'}
                  onChange={(e) => onInputChange('yeastType', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Suche aktywne</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="yeastType"
                  value="instant"
                  checked={inputs.yeastType === 'instant'}
                  onChange={(e) => onInputChange('yeastType', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Instant</span>
              </label>
            </div>
          </div>

          {/* Fermentation time */}
          <div>
            <label className="block font-medium mb-2 text-sm">Czas fermentacji</label>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="fermentationTime"
                  value="short"
                  checked={inputs.fermentationTime === 'short'}
                  onChange={(e) => onInputChange('fermentationTime', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Krótka (8-18h)</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="fermentationTime"
                  value="medium"
                  checked={inputs.fermentationTime === 'medium'}
                  onChange={(e) => onInputChange('fermentationTime', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Średnia (18-36h)</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="fermentationTime"
                  value="long"
                  checked={inputs.fermentationTime === 'long'}
                  onChange={(e) => onInputChange('fermentationTime', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Długa (36-72h)</span>
              </label>
            </div>
          </div>

          {/* Temperature */}
          <div>
            <label className="block font-medium mb-2 text-sm">Temperatura</label>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="temperature"
                  value="room"
                  checked={inputs.temperature === 'room'}
                  onChange={(e) => onInputChange('temperature', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Pokojowa (~20-22°C)</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="temperature"
                  value="fridge"
                  checked={inputs.temperature === 'fridge'}
                  onChange={(e) => onInputChange('temperature', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Lodówka (~4-6°C)</span>
              </label>
              <label className="flex items-center cursor-pointer p-2 border border-stone-300 bg-white hover:bg-stone-50 transition">
                <input
                  type="radio"
                  name="temperature"
                  value="mixed"
                  checked={inputs.temperature === 'mixed'}
                  onChange={(e) => onInputChange('temperature', e.target.value)}
                  className="accent-red-700 mr-2"
                />
                <span className="text-sm">Mieszana</span>
              </label>
            </div>
          </div>
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
