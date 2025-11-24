import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const doughSubItems = [
  { path: '/ciasto/style', label: 'Style ciasta' },
  { path: '/maki', label: 'Mąki' },
  { path: '/ciasto/zaczyny', label: 'Zaczyny' },
  { path: '/ciasto/fermentacja', label: 'Fermentacja' },
  { path: '/ciasto/techniki', label: 'Techniki' },
  { path: '/ciasto/hydratacja', label: 'Hydratacja' },
  { path: '/ciasto/drozdze', label: 'Drożdże' },
  { path: '/kalkulator', label: 'Kalkulator' },
];

const ingredientsSubItems = [
  { path: '/skladniki/sery', label: 'Sery' },
  { path: '/skladniki/pomidory', label: 'Pomidory' },
  { path: '/skladniki/miesa', label: 'Mięsa' },
  { path: '/skladniki/warzywa', label: 'Warzywa' },
  { path: '/skladniki/oliwy', label: 'Oliwy i przyprawy' },
  { path: '/skladniki/premium', label: 'Premium' },
];

export default function Navigation({ mobile = false, onItemClick }) {
  const [openMenu, setOpenMenu] = useState(null);

  if (mobile) {
    return (
      <nav className="space-y-1">
        {/* Ciasto with submenu */}
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === 'ciasto' ? null : 'ciasto')}
            className="w-full text-left py-2 px-3 hover:bg-stone-800 transition flex items-center justify-between"
          >
            <span>Ciasto</span>
            <svg
              className={`w-4 h-4 transition-transform ${openMenu === 'ciasto' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openMenu === 'ciasto' && (
            <div className="pl-6 space-y-1 py-2">
              <NavLink
                to="/ciasto"
                onClick={onItemClick}
                className="block py-1 px-3 text-sm text-stone-300 hover:text-white transition"
              >
                Przegląd
              </NavLink>
              {doughSubItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onItemClick}
                  className="block py-1 px-3 text-sm text-stone-300 hover:text-white transition"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Składniki with submenu */}
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === 'skladniki' ? null : 'skladniki')}
            className="w-full text-left py-2 px-3 hover:bg-stone-800 transition flex items-center justify-between"
          >
            <span>Składniki</span>
            <svg
              className={`w-4 h-4 transition-transform ${openMenu === 'skladniki' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openMenu === 'skladniki' && (
            <div className="pl-6 space-y-1 py-2">
              <NavLink
                to="/skladniki"
                onClick={onItemClick}
                className="block py-1 px-3 text-sm text-stone-300 hover:text-white transition"
              >
                Przegląd
              </NavLink>
              {ingredientsSubItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onItemClick}
                  className="block py-1 px-3 text-sm text-stone-300 hover:text-white transition"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Regular items */}
        <NavLink
          to="/klasyczne-pizze"
          onClick={onItemClick}
          className={({ isActive }) =>
            `block py-2 px-3 hover:bg-stone-800 transition ${isActive ? 'bg-stone-800' : ''}`
          }
        >
          Klasyczne Pizze
        </NavLink>
        <NavLink
          to="/moje-wariacje"
          onClick={onItemClick}
          className={({ isActive }) =>
            `block py-2 px-3 hover:bg-stone-800 transition ${isActive ? 'bg-stone-800' : ''}`
          }
        >
          Moje Wariacje
        </NavLink>
        <NavLink
          to="/artykuly"
          onClick={onItemClick}
          className={({ isActive }) =>
            `block py-2 px-3 hover:bg-stone-800 transition ${isActive ? 'bg-stone-800' : ''}`
          }
        >
          Artykuły
        </NavLink>
      </nav>
    );
  }

  // Desktop navigation
  return (
    <nav className="flex items-center space-x-1">
      {/* Ciasto with mega menu */}
      <div
        className="relative group"
        onMouseEnter={() => setOpenMenu('ciasto')}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <Link
          to="/ciasto"
          className="px-4 py-2 text-sm tracking-wide hover:text-red-400 transition flex items-center space-x-1"
        >
          <span>Ciasto</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        {/* Mega menu dropdown */}
        {openMenu === 'ciasto' && (
          <div className="absolute left-0 top-full mt-0 bg-stone-800 border border-stone-700 min-w-[240px] py-2 shadow-xl">
            <Link
              to="/ciasto"
              className="block px-4 py-2 text-sm hover:bg-stone-700 transition text-stone-300 hover:text-white"
            >
              Przegląd
            </Link>
            <div className="border-t border-stone-700 my-2"></div>
            {doughSubItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm hover:bg-stone-700 transition text-stone-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Składniki with mega menu */}
      <div
        className="relative group"
        onMouseEnter={() => setOpenMenu('skladniki')}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <Link
          to="/skladniki"
          className="px-4 py-2 text-sm tracking-wide hover:text-red-400 transition flex items-center space-x-1"
        >
          <span>Składniki</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        {/* Mega menu dropdown */}
        {openMenu === 'skladniki' && (
          <div className="absolute left-0 top-full mt-0 bg-stone-800 border border-stone-700 min-w-[240px] py-2 shadow-xl">
            <Link
              to="/skladniki"
              className="block px-4 py-2 text-sm hover:bg-stone-700 transition text-stone-300 hover:text-white"
            >
              Przegląd
            </Link>
            <div className="border-t border-stone-700 my-2"></div>
            {ingredientsSubItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm hover:bg-stone-700 transition text-stone-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Regular nav items */}
      <NavLink
        to="/klasyczne-pizze"
        className={({ isActive }) =>
          `px-4 py-2 text-sm tracking-wide hover:text-red-400 transition ${isActive ? 'text-red-400' : ''}`
        }
      >
        Klasyczne Pizze
      </NavLink>
      <NavLink
        to="/moje-wariacje"
        className={({ isActive }) =>
          `px-4 py-2 text-sm tracking-wide hover:text-red-400 transition ${isActive ? 'text-red-400' : ''}`
        }
      >
        Moje Wariacje
      </NavLink>
      <NavLink
        to="/artykuly"
        className={({ isActive }) =>
          `px-4 py-2 text-sm tracking-wide hover:text-red-400 transition ${isActive ? 'text-red-400' : ''}`
        }
      >
        Artykuły
      </NavLink>
    </nav>
  );
}
