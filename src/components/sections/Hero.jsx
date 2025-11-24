import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Pizza Lab
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-light">
          Testy mak, fermentacji i skladnikow
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Przewodnik po prawdziwej pizzy
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/calculator"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Kalkulator Ciasta
          </Link>
          <Link
            to="/flours"
            className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition"
          >
            Baza Mak
          </Link>
          <Link
            to="/pizzas"
            className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition"
          >
            Przewodnik Po Pizzach
          </Link>
        </div>
      </div>
    </div>
  );
}
