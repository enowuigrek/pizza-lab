import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/kalkulator', label: 'Kalkulator' },
  { path: '/ciasto', label: 'Ciasto' },
  { path: '/maki', label: 'Mąki' },
  { path: '/przewodnik', label: 'Przewodnik' },
  { path: '/skladniki', label: 'Składniki' },
  { path: '/artykuly', label: 'Artykuły' },
];

export default function Navigation({ mobile = false, onItemClick }) {
  const baseClasses = mobile
    ? 'block py-2 px-3 hover:bg-stone-800 transition'
    : 'px-4 py-2 text-sm tracking-wide hover:text-red-400 transition';

  const activeClasses = mobile ? 'bg-stone-800' : 'text-red-400';

  return (
    <nav className={mobile ? 'space-y-1' : 'flex items-center'}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ''}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
