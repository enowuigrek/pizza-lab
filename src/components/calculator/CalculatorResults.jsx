export default function CalculatorResults({ result, inputs }) {
  const yeastTypeLabels = {
    fresh: 'świeże',
    active_dry: 'suche aktywne',
    instant: 'instant'
  };

  return (
    <div className="info-section info-section--positive p-6 border-2 border-green-200">
      <h2 className="text-2xl font-semibold mb-4">Twój przepis</h2>

      {result.method === 'poolish' && (
        <>
          <div className="mb-6 bg-white p-4 border border-stone-200">
            <h3 className="font-semibold text-lg mb-2">Poolish (dzień wcześniej)</h3>
            <p className="text-sm text-stone-600 mb-2">{result.poolish.timing}</p>
            <ul className="space-y-1">
              <li>Mąka: <strong>{result.poolish.flour}g</strong></li>
              <li>Woda: <strong>{result.poolish.water}g</strong></li>
              <li>Drożdże ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.poolish.yeast}g</strong></li>
            </ul>
          </div>

          <div className="mb-6 bg-white p-4 border border-stone-200">
            <h3 className="font-semibold text-lg mb-2">Główne ciasto (następnego dnia)</h3>
            <ul className="space-y-1">
              <li>Mąka: <strong>{result.main.flour}g</strong></li>
              <li>Woda: <strong>{result.main.water}g</strong></li>
              <li>Sól: <strong>{result.main.salt}g</strong></li>
              {result.main.yeast > 0 && (
                <li>Drożdże ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.main.yeast}g</strong> (opcjonalne)</li>
              )}
              <li>Poolish: <strong>{result.main.poolish}</strong> ({result.poolish.flour + result.poolish.water}g)</li>
            </ul>
          </div>
        </>
      )}

      {result.method === 'biga' && (
        <>
          <div className="mb-6 bg-white p-4 border border-stone-200">
            <h3 className="font-semibold text-lg mb-2">Biga (dzień wcześniej)</h3>
            <p className="text-sm text-stone-600 mb-2">{result.biga.timing}</p>
            <ul className="space-y-1">
              <li>Mąka: <strong>{result.biga.flour}g</strong></li>
              <li>Woda: <strong>{result.biga.water}g</strong></li>
              <li>Drożdże ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.biga.yeast}g</strong></li>
            </ul>
          </div>

          <div className="mb-6 bg-white p-4 border border-stone-200">
            <h3 className="font-semibold text-lg mb-2">Główne ciasto (następnego dnia)</h3>
            <ul className="space-y-1">
              <li>Mąka: <strong>{result.main.flour}g</strong></li>
              <li>Woda: <strong>{result.main.water}g</strong></li>
              <li>Sól: <strong>{result.main.salt}g</strong></li>
              {result.main.yeast > 0 && (
                <li>Drożdże ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.main.yeast}g</strong> (opcjonalne)</li>
              )}
              <li>Biga: <strong>{result.main.biga}</strong> ({result.biga.flour + result.biga.water}g)</li>
            </ul>
          </div>
        </>
      )}

      {result.method === 'direct' && (
        <div className="mb-6 bg-white p-4 border border-stone-200">
          <h3 className="font-semibold text-lg mb-2">Ciasto</h3>
          <ul className="space-y-1">
            <li>Mąka: <strong>{result.dough.flour}g</strong></li>
            <li>Woda: <strong>{result.dough.water}g</strong></li>
            <li>Sól: <strong>{result.dough.salt}g</strong></li>
            <li>Drożdże ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.dough.yeast}g</strong></li>
          </ul>
        </div>
      )}

      <div className="bg-stone-100 p-4 border border-stone-200">
        <h3 className="font-semibold mb-2">Podsumowanie</h3>
        <ul className="space-y-1 text-sm">
          <li>Całkowita mąka: <strong>{result.total.flour}g</strong></li>
          <li>Całkowita woda: <strong>{result.total.water}g</strong></li>
          <li>Hydratacja: <strong>{result.total.hydration}%</strong></li>
          <li>Liczba kul: <strong>{result.total.balls} po {result.total.ballWeight}g</strong></li>
        </ul>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <button className="flex-1 min-w-[100px] bg-white border border-stone-300 py-2 font-medium hover:bg-stone-50 transition">
          Zapisz
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 min-w-[100px] bg-white border border-stone-300 py-2 font-medium hover:bg-stone-50 transition"
        >
          Drukuj
        </button>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Mój przepis na pizzę',
                text: `Przepis na ${result.total.balls} pizz po ${result.total.ballWeight}g (${result.total.hydration}% hydratacji)`,
                url: window.location.href
              });
            }
          }}
          className="flex-1 min-w-[100px] bg-white border border-stone-300 py-2 font-medium hover:bg-stone-50 transition"
        >
          Udostępnij
        </button>
      </div>
    </div>
  );
}
