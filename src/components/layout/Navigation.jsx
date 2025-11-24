import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/calculator', label: 'Kalkulator', icon: '🧮' },
  { path: '/flours', label: 'Maki', icon: '🌾' },
  { path: '/pizzas', label: 'Przewodnik', icon: '📖' },
  { path: '/techniques', label: 'Techniki', icon: '🔧' },
  { path: '/ingredients', label: 'Skladniki', icon: '🍅' },
  { path: '/articles', label: 'Artykuly', icon: '📝' },
];

export default function Navigation({ mobile = false, onItemClick }) {
  const baseClasses = mobile
    ? 'block py-2 px-3 rounded hover:bg-red-700 transition'
    : 'px-3 py-2 rounded hover:bg-red-700 transition text-sm font-medium';

  const activeClasses = 'bg-red-800';

  return (
    <nav className={mobile ? 'space-y-1' : 'flex items-center space-x-1'}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ''}`
          }
        >
          <span className="mr-1">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
