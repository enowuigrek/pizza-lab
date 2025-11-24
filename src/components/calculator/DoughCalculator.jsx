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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Kalkulator Ciasta na Pizze</h1>
      <p className="text-gray-600 mb-8">
        Oblicz dokladne proporcje dla swojej pizzy z uwzglednieniem poolish, biga lub direct dough
      </p>

      {/* Method Tabs */}
      <div className="flex gap-2 mb-6 border-b overflow-x-auto">
        <button
          onClick={() => setMethod('direct')}
          className={`px-6 py-3 font-semibold whitespace-nowrap ${
            method === 'direct'
              ? 'border-b-2 border-red-600 text-red-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Direct (Bez zaczynu)
        </button>
        <button
          onClick={() => setMethod('poolish')}
          className={`px-6 py-3 font-semibold whitespace-nowrap ${
            method === 'poolish'
              ? 'border-b-2 border-red-600 text-red-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Poolish
        </button>
        <button
          onClick={() => setMethod('biga')}
          className={`px-6 py-3 font-semibold whitespace-nowrap ${
            method === 'biga'
              ? 'border-b-2 border-red-600 text-red-600'
              : 'text-gray-600 hover:text-gray-900'
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
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-bold mb-2">Wskazowki:</h3>
        <ul className="space-y-2 text-sm">
          <li><strong>Poolish:</strong> 50% maki = najbardziej popularne, 30% = subtelniejszy smak fermentacji</li>
          <li><strong>Hydratacja:</strong> 60-65% = neapolitanska (latwiejsza), 70%+ = NY style (trudniejsza, mokrzejsza)</li>
          <li><strong>Fermentacja:</strong> Dluzej = wiecej smaku + lepsza strawnosc. Minimum 24h zalecane!</li>
          <li><strong>Drozdze:</strong> Mniej drozdzy + wiecej czasu = lepszy smak. Przy 72h+ mozesz w ogole pominac drozdze w glownym ciescie.</li>
        </ul>
      </div>
    </div>
  );
}
