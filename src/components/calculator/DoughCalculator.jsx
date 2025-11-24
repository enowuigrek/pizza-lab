import { useState } from 'react';
import { calculateDough, pizzaStyles } from '../../utils/doughCalculations';
import CalculatorInputs from './CalculatorInputs';
import CalculatorResults from './CalculatorResults';

export default function DoughCalculator() {
  const [method, setMethod] = useState('poolish');
  const [inputs, setInputs] = useState({
    numberOfPizzas: 4,
    ballWeight: 250,
    hydration: 65,
    prefermentPercentage: 50,
    yeastType: 'fresh',
    fermentationTime: 'medium',
    temperature: 'fridge'
  });

  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const recipe = calculateDough({ ...inputs, method });
    setResult(recipe);
  };

  const handleStylePreset = (style) => {
    setInputs({
      ...inputs,
      ballWeight: pizzaStyles[style].weight,
      hydration: pizzaStyles[style].hydration
    });
  };

  const handleInputChange = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl mb-4">Kalkulator ciasta na pizzę</h1>
      <p className="text-stone-600 mb-8">
        Oblicz dokładne proporcje dla swojej pizzy z uwzględnieniem poolish, biga lub direct dough
      </p>

      {/* Method Tabs */}
      <div className="flex gap-2 mb-8 border-b border-stone-200 overflow-x-auto">
        <button
          onClick={() => setMethod('direct')}
          className={`px-6 py-3 font-medium whitespace-nowrap transition ${
            method === 'direct'
              ? 'border-b-2 border-red-700 text-red-700'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Direct (bez zaczynu)
        </button>
        <button
          onClick={() => setMethod('poolish')}
          className={`px-6 py-3 font-medium whitespace-nowrap transition ${
            method === 'poolish'
              ? 'border-b-2 border-red-700 text-red-700'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Poolish
        </button>
        <button
          onClick={() => setMethod('biga')}
          className={`px-6 py-3 font-medium whitespace-nowrap transition ${
            method === 'biga'
              ? 'border-b-2 border-red-700 text-red-700'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Biga
        </button>
      </div>

      {/* Input Form */}
      <CalculatorInputs
        inputs={inputs}
        method={method}
        onInputChange={handleInputChange}
        onStylePreset={handleStylePreset}
        onCalculate={handleCalculate}
      />

      {/* Results */}
      {result && (
        <CalculatorResults result={result} inputs={inputs} />
      )}

      {/* Educational Tips */}
      <div className="mt-8 bg-stone-50 border border-stone-200 p-6">
        <h3 className="font-semibold mb-4">Wskazówki</h3>
        <ul className="space-y-2 text-sm text-stone-600">
          <li><strong>Poolish:</strong> 50% mąki = najbardziej popularne, 30% = subtelniejszy smak fermentacji</li>
          <li><strong>Hydratacja:</strong> 60-65% = neapolitańska (łatwiejsza), 70%+ = NY style (trudniejsza, mokrzejsza)</li>
          <li><strong>Fermentacja:</strong> Dłużej = więcej smaku + lepsza strawność. Minimum 24h zalecane.</li>
          <li><strong>Drożdże:</strong> Mniej drożdży + więcej czasu = lepszy smak. Przy 72h+ można pominąć drożdże w głównym cieście.</li>
        </ul>
      </div>
    </div>
  );
}
