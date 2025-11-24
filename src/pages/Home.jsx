import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-red-700 mx-auto mb-8 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-100"></div>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Pizza Lab</h1>
          <p className="text-xl text-stone-400 mb-2">
            Testy mąk, fermentacji i składników
          </p>
          <p className="text-lg text-stone-500 mb-10">
            Przewodnik po autentycznej pizzy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/kalkulator"
              className="bg-red-700 text-white px-8 py-4 hover:bg-red-800 transition"
            >
              Kalkulator ciasta
            </Link>
            <Link
              to="/przewodnik"
              className="border border-stone-600 px-8 py-4 hover:border-white hover:text-white transition text-stone-400"
            >
              Przewodnik po pizzach
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Eksploruj wiedzę</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              to="/kalkulator"
              className="bg-white p-8 border border-stone-200 hover:border-red-700 transition text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto mb-4 group-hover:bg-red-50 transition"></div>
              <h3 className="font-semibold mb-2">Kalkulator</h3>
              <p className="text-stone-500 text-sm">Oblicz proporcje ciasta</p>
            </Link>

            <Link
              to="/ciasto"
              className="bg-white p-8 border border-stone-200 hover:border-red-700 transition text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto mb-4 group-hover:bg-red-50 transition"></div>
              <h3 className="font-semibold mb-2">Ciasto</h3>
              <p className="text-stone-500 text-sm">Zaczyny i fermentacja</p>
            </Link>

            <Link
              to="/maki"
              className="bg-white p-8 border border-stone-200 hover:border-red-700 transition text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto mb-4 group-hover:bg-red-50 transition"></div>
              <h3 className="font-semibold mb-2">Mąki</h3>
              <p className="text-stone-500 text-sm">Parametry i zastosowanie</p>
            </Link>

            <Link
              to="/przewodnik"
              className="bg-white p-8 border border-stone-200 hover:border-red-700 transition text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto mb-4 group-hover:bg-red-50 transition"></div>
              <h3 className="font-semibold mb-2">Przewodnik</h3>
              <p className="text-stone-500 text-sm">Autentyczne definicje pizz</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl mb-6">Komponujemy pizze</h2>
          <p className="text-lg text-stone-600 mb-12 max-w-3xl">
            Stworzenie idealnej pizzy to proces, który wymaga zrozumienia każdego elementu.
            Przejdź przez pełną ścieżkę — od wyboru stylu ciasta, przez dobór składników, po klasyczne recepty i autorskie wariacje.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/ciasto/style"
              className="group"
            >
              <div className="aspect-video bg-stone-100 border border-stone-200 mb-4 flex items-center justify-center group-hover:border-red-700 transition">
                <div className="w-16 h-16 rounded-full bg-red-700 opacity-20"></div>
              </div>
              <div className="text-sm text-stone-400 mb-1">Krok 1</div>
              <h3 className="text-xl mb-2 group-hover:text-red-700 transition">Wybierz styl ciasta</h3>
              <p className="text-stone-500">Napoletana, New York, Romana — każdy styl ma swoją historię i charakter.</p>
            </Link>

            <Link
              to="/kalkulator"
              className="group"
            >
              <div className="aspect-video bg-stone-100 border border-stone-200 mb-4 flex items-center justify-center group-hover:border-red-700 transition">
                <div className="w-16 h-16 rounded-full bg-amber-700 opacity-20"></div>
              </div>
              <div className="text-sm text-stone-400 mb-1">Krok 2</div>
              <h3 className="text-xl mb-2 group-hover:text-red-700 transition">Oblicz proporcje</h3>
              <p className="text-stone-500">Użyj kalkulatora, by precyzyjnie określić ilości mąki, wody, drożdży i soli.</p>
            </Link>

            <Link
              to="/skladniki"
              className="group"
            >
              <div className="aspect-video bg-stone-100 border border-stone-200 mb-4 flex items-center justify-center group-hover:border-red-700 transition">
                <div className="w-16 h-16 rounded-full bg-green-700 opacity-20"></div>
              </div>
              <div className="text-sm text-stone-400 mb-1">Krok 3</div>
              <h3 className="text-xl mb-2 group-hover:text-red-700 transition">Dobierz składniki</h3>
              <p className="text-stone-500">Sery, pomidory, mięsa — poznaj autentyczne składniki i ich zastosowanie.</p>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Link
              to="/klasyczne-pizze"
              className="bg-stone-100 border border-stone-200 p-8 hover:border-red-700 transition group"
            >
              <h3 className="text-2xl mb-3 group-hover:text-red-700 transition">Klasyczne pizze</h3>
              <p className="text-stone-600">
                Margherita, Marinara, Diavola — poznaj autentyczne włoskie recepty z linkowanymi składnikami i technikami.
              </p>
            </Link>

            <Link
              to="/moje-wariacje"
              className="bg-stone-100 border border-stone-200 p-8 hover:border-red-700 transition group"
            >
              <h3 className="text-2xl mb-3 group-hover:text-red-700 transition">Moje wariacje</h3>
              <p className="text-stone-600">
                Autorskie przepisy łączące klasykę z kreatywnością. Każdy z odnośnikami do technik i składników.
              </p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
