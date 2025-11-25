import { Link } from 'react-router-dom';

export default function Card({
  title,
  description,
  image,
  imageAlt,
  link,
  badge,
  footer,
  className = '',
  showLeftBorder = false,
  showDetailsButton = false,
  children
}) {
  const CardWrapper = link ? Link : 'div';
  const wrapperProps = link ? { to: link } : {};

  const borderClass = showLeftBorder ? 'border-l-4 border-l-red-700' : '';

  return (
    <CardWrapper
      {...wrapperProps}
      className={`bg-white border border-stone-200 ${borderClass} hover:border-stone-300 transition overflow-hidden ${link ? 'block' : ''} ${className}`}
    >
      {image && (
        <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
              e.target.parentElement.innerHTML = '<span class="text-6xl">🍕</span>';
            }}
          />
          {badge && (
            <div className="absolute top-3 right-3">
              {badge}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
        {description && <p className="text-gray-600 text-sm">{description}</p>}
        {children}
        {showDetailsButton && link && (
          <div className="mt-4">
            <span className="inline-block text-sm px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition font-semibold">
              Zobacz szczegóły
            </span>
          </div>
        )}
      </div>
      {footer && (
        <div className="px-6 pb-4 pt-0">
          {footer}
        </div>
      )}
    </CardWrapper>
  );
}
