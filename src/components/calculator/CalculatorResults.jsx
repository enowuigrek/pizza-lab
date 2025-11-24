export default function CalculatorResults({ result, inputs }) {
  const yeastTypeLabels = {
    fresh: 'swieze',
    active_dry: 'suche aktywne',
    instant: 'instant'
  };

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md border-2 border-green-200">
      <h2 className="text-2xl font-bold mb-4">Twoj Przepis</h2>

      {result.method === 'poolish' && (
        <>
          <div className="mb-6 bg-white p-4 rounded">
            <h3 className="font-bold text-lg mb-2">POOLISH (dzien wczesniej):</h3>
            <p className="text-sm text-gray-600 mb-2">{result.poolish.timing}</p>
            <ul className="space-y-1">
              <li>Maka: <strong>{result.poolish.flour}g</strong></li>
              <li>Woda: <strong>{result.poolish.water}g</strong></li>
              <li>Drozdze ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.poolish.yeast}g</strong></li>
            </ul>
          </div>

          <div className="mb-6 bg-white p-4 rounded">
            <h3 className="font-bold text-lg mb-2">GLOWNE CIASTO (nastepnego dnia):</h3>
            <ul className="space-y-1">
              <li>Maka: <strong>{result.main.flour}g</strong></li>
              <li>Woda: <strong>{result.main.water}g</strong></li>
              <li>Sol: <strong>{result.main.salt}g</strong></li>
              {result.main.yeast > 0 && (
                <li>Drozdze ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.main.yeast}g</strong> (opcjonalne)</li>
              )}
              <li>Poolish: <strong>{result.main.poolish}</strong> ({result.poolish.flour + result.poolish.water}g)</li>
            </ul>
          </div>
        </>
      )}

      {result.method === 'biga' && (
        <>
          <div className="mb-6 bg-white p-4 rounded">
            <h3 className="font-bold text-lg mb-2">BIGA (dzien wczesniej):</h3>
            <p className="text-sm text-gray-600 mb-2">{result.biga.timing}</p>
            <ul className="space-y-1">
              <li>Maka: <strong>{result.biga.flour}g</strong></li>
              <li>Woda: <strong>{result.biga.water}g</strong></li>
              <li>Drozdze ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.biga.yeast}g</strong></li>
            </ul>
          </div>

          <div className="mb-6 bg-white p-4 rounded">
            <h3 className="font-bold text-lg mb-2">GLOWNE CIASTO (nastepnego dnia):</h3>
            <ul className="space-y-1">
              <li>Maka: <strong>{result.main.flour}g</strong></li>
              <li>Woda: <strong>{result.main.water}g</strong></li>
              <li>Sol: <strong>{result.main.salt}g</strong></li>
              {result.main.yeast > 0 && (
                <li>Drozdze ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.main.yeast}g</strong> (opcjonalne)</li>
              )}
              <li>Biga: <strong>{result.main.biga}</strong> ({result.biga.flour + result.biga.water}g)</li>
            </ul>
          </div>
        </>
      )}

      {result.method === 'direct' && (
        <div className="mb-6 bg-white p-4 rounded">
          <h3 className="font-bold text-lg mb-2">CIASTO:</h3>
          <ul className="space-y-1">
            <li>Maka: <strong>{result.dough.flour}g</strong></li>
            <li>Woda: <strong>{result.dough.water}g</strong></li>
            <li>Sol: <strong>{result.dough.salt}g</strong></li>
            <li>Drozdze ({yeastTypeLabels[inputs.yeastType]}): <strong>{result.dough.yeast}g</strong></li>
          </ul>
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">PODSUMOWANIE:</h3>
        <ul className="space-y-1 text-sm">
          <li>Calkowita maka: <strong>{result.total.flour}g</strong></li>
          <li>Calkowita woda: <strong>{result.total.water}g</strong></li>
          <li>Hydratacja: <strong>{result.total.hydration}%</strong></li>
          <li>Liczba kulek: <strong>{result.total.balls} po {result.total.ballWeight}g</strong></li>
        </ul>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <button className="flex-1 min-w-[100px] bg-white border-2 border-gray-300 py-2 rounded font-semibold hover:bg-gray-50">
          Zapisz
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 min-w-[100px] bg-white border-2 border-gray-300 py-2 rounded font-semibold hover:bg-gray-50"
        >
          Drukuj
        </button>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Moj przepis na pizze',
                text: `Przepis na ${result.total.balls} pizz po ${result.total.ballWeight}g (${result.total.hydration}% hydratacji)`,
                url: window.location.href
              });
            }
          }}
          className="flex-1 min-w-[100px] bg-white border-2 border-gray-300 py-2 rounded font-semibold hover:bg-gray-50"
        >
          Udostepnij
        </button>
      </div>
    </div>
  );
}
