import { useState } from 'react';
import { calculateDough, pizzaStyles } from '../../utils/doughCalculations';
import CalculatorInputs from './CalculatorInputs';
import CalculatorResults from './CalculatorResults';

export default function DoughCalculator() {
  const [usePreferment, setUsePreferment] = useState(false);
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
    const recipe = calculateDough({
      ...inputs,
      method: usePreferment ? method : 'direct'
    });
    setResult(recipe);
  };

  const handleStylePreset = (style) => {
    setInputs({
      ...inputs,
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
        Oblicz dokładne proporcje dla swojej pizzy
      </p>

      {/* Input Form */}
      <CalculatorInputs
        inputs={inputs}
        usePreferment={usePreferment}
        method={method}
        onUsePrefermentChange={setUsePreferment}
        onMethodChange={setMethod}
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
