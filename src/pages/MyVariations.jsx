import { Link } from 'react-router-dom';

export default function MojeWariacje() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-5xl mb-6">Moje Wariacje</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          Autorskie przepisy łączące klasykę z kreatywnością. Każda pizza z linkami do składników,
          technik ciasta i szczegółowymi wskazówkami.
        </p>
      </header>

      {/* Info */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
        <h2 className="font-semibold mb-2">Eksperymentuj z wiedzą</h2>
        <p className="text-sm text-stone-700 leading-relaxed">
          Te przepisy powstały z eksperymentowania z klasycznymi kombinacjami. Nie bój się
          modyfikować proporcji, zamieniać składników czy łączyć różnych stylów ciasta.
          Pizza to forma ekspresji — niech Twoja będzie wyjątkowa.
        </p>
      </div>

      {/* Coming soon */}
      <div className="bg-stone-50 border border-stone-200 p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-red-700 opacity-20 mx-auto mb-6"></div>
        <h2 className="text-2xl mb-4">Wkrótce...</h2>
        <p className="text-stone-600 mb-8 max-w-xl mx-auto">
          Właśnie testuję nowe kombinacje składników i technik. Wkrótce znajdziesz tutaj
          autorskie przepisy z pełną dokumentacją procesu tworzenia.
        </p>
        <p className="text-sm text-stone-500 mb-8">
          W międzyczasie zacznij od klasycznych przepisów i eksperymentuj na ich bazie.
        </p>
      </div>

      {/* Inspiration */}
      <section className="mt-16">
        <h2 className="text-2xl mb-6">Jak tworzyć własne wariacje?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 p-6">
            <h3 className="font-semibold mb-3">1. Zacznij od stylu ciasta</h3>
            <p className="text-sm text-stone-600 mb-4">
              Wybierz bazę — napoletana, NY style, romana? Każdy styl ma swoją charakterystykę
              i najlepiej współgra z innymi składnikami.
            </p>
            <Link
              to="/ciasto/style"
              className="text-sm text-red-700 font-semibold hover:underline"
            >
              Zobacz style ciasta →
            </Link>
          </div>

          <div className="bg-white border border-stone-200 p-6">
            <h3 className="font-semibold mb-3">2. Dobierz składniki</h3>
            <p className="text-sm text-stone-600 mb-4">
              Myśl o balansie — świeże vs. suszone, ostre vs. łagodne, kwaskowate vs. słodkie.
              Połącz różne tekstury i smaki.
            </p>
            <Link
              to="/skladniki"
              className="text-sm text-red-700 font-semibold hover:underline"
            >
              Przeglądaj składniki →
            </Link>
          </div>

          <div className="bg-white border border-stone-200 p-6">
            <h3 className="font-semibold mb-3">3. Użyj kalkulatora</h3>
            <p className="text-sm text-stone-600 mb-4">
              Oblicz precyzyjne proporcje dla wybranego stylu. Dobierz hydratację, ilość drożdży
              i czas fermentacji.
            </p>
            <Link
              to="/kalkulator"
              className="text-sm text-red-700 font-semibold hover:underline"
            >
              Otwórz kalkulator →
            </Link>
          </div>

          <div className="bg-white border border-stone-200 p-6">
            <h3 className="font-semibold mb-3">4. Dokumentuj proces</h3>
            <p className="text-sm text-stone-600 mb-4">
              Zapisuj proporcje, czasy, temperatury. Co zadziałało, co nie? Każdy test to krok
              w stronę Twojej idealnej pizzy.
            </p>
            <Link
              to="/artykuly"
              className="text-sm text-red-700 font-semibold hover:underline"
            >
              Czytaj artykuły →
            </Link>
          </div>
        </div>
      </section>

      {/* Example combinations */}
      <section className="mt-16 border-t border-stone-200 pt-12">
        <h2 className="text-2xl mb-6">Inspiracje do kombinacji</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">Biała pizza z gorgonzolą i gruszką</h3>
            <p className="text-sm text-stone-600 mb-3">
              Bez sosu pomidorowego. Mozzarella, gorgonzola dolce, plastry gruszki, orzechy włoskie, miód.
            </p>
            <span className="text-xs text-stone-500">Styl: Romana Tonda</span>
          </div>

          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">Mortadella i pistacje</h3>
            <p className="text-sm text-stone-600 mb-3">
              Sos pomidorowy, mozzarella, mortadella po wypieczeniu, stracciatella, pistacje, bazylia.
            </p>
            <span className="text-xs text-stone-500">Styl: Napoletana</span>
          </div>

          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">'Nduja i burrata</h3>
            <p className="text-sm text-stone-600 mb-3">
              Sos pomidorowy, mozzarella, 'nduja (kalabryjska pasta salami), burrata po wypieczeniu.
            </p>
            <span className="text-xs text-stone-500">Styl: NY Style</span>
          </div>

          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">Pieczarki i truflowy olej</h3>
            <p className="text-sm text-stone-600 mb-3">
              Bez sosu. Mozzarella, fontina, mix pieczarek, czosnek, tymianek, truflowy olej na koniec.
            </p>
            <span className="text-xs text-stone-500">Styl: Pan Pizza</span>
          </div>

          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">Radicchio i taleggio</h3>
            <p className="text-sm text-stone-600 mb-3">
              Bez sosu. Taleggio, radicchio, orzechy włoskie, balsamic glaze po wypieczeniu.
            </p>
            <span className="text-xs text-stone-500">Styl: Romana Teglia</span>
          </div>

          <div className="bg-stone-50 p-6">
            <h3 className="font-semibold mb-2">Prosciutto crudo i rukola</h3>
            <p className="text-sm text-stone-600 mb-3">
              Sos pomidorowy, mozzarella, prosciutto crudo i rukola po wypieczeniu, parmigiano, oliwa.
            </p>
            <span className="text-xs text-stone-500">Styl: Romana Tonda</span>
          </div>
        </div>

        <p className="text-sm text-stone-500 mt-8 text-center">
          To tylko inspiracje — mieszaj, zamieniaj, eksperymentuj. Twoja pizza, Twoje reguły.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <Link
          to="/klasyczne-pizze"
          className="inline-block bg-red-700 text-white px-8 py-4 hover:bg-red-800 transition"
        >
          Zobacz klasyczne pizze
        </Link>
      </section>
    </div>
  );
}
