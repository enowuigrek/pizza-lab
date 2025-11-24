import { Link } from 'react-router-dom';

const variantStyles = {
  primary: 'bg-red-600 text-white hover:bg-red-700 border-red-600',
  secondary: 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300',
  outline: 'bg-transparent text-red-600 hover:bg-red-50 border-red-600',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 border-transparent',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  disabled = false,
  loading = false,
  className = '',
  ...props
}) {
  const baseStyles = `inline-flex items-center justify-center font-semibold rounded-lg border-2 transition ${variantStyles[variant]} ${sizeStyles[size]}`;
  const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${disabledStyles} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${disabledStyles} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
