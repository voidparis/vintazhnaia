import React from 'react';
import { Link } from 'react-router-dom';
import VintazhLogo from './VintazhLogo';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, className = '' }) => {
  return (
    <button
      className={`header-icon-button lg:hidden focus:outline-none ${className}`}
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <span
          className={`absolute block w-5 sm:w-6 h-[1px] bg-neutral-700 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform rotate-45 top-1/2' : 'top-0'
          }`}
        />
        <span
          className={`absolute block w-5 sm:w-6 h-[1px] bg-neutral-700 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
          }`}
        />
        <span
          className={`absolute block w-5 sm:w-6 h-[1px] bg-neutral-700 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform -rotate-45 top-1/2' : 'bottom-0'
          }`}
        />
      </div>
    </button>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close menu when clicking outside (using the overlay)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Changed from fixed to absolute and removed inset-0 to position below header
    <div
      className={`absolute top-[calc(100%_-_1px)] left-0 right-0 z-50 lg:hidden bg-white transform transition-transform duration-300 ease-in-out h-[calc(100vh_-_var(--header-height))] overflow-hidden border-t border-neutral-200 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ '--header-height': '116px' } as React.CSSProperties}
      onClick={handleOverlayClick}
    >
      <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
        {/* Language and Currency Selector - added to match 1stDibs */}
        <div className="p-4 border-b border-neutral-200 flex items-center">
          <div className="flex items-center">
            <span className="inline-flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              РУ
            </span>
            <span className="mx-2 text-neutral-300">|</span>
            <span className="inline-flex items-center">
              <span className="mr-1">₽</span>
              РУБ
            </span>
          </div>
        </div>

        {/* Removed the header with logo since the main header will remain visible */}
        <div className="overflow-y-auto flex-1 p-4">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full border border-neutral-300 rounded py-2 pl-3 pr-10 focus:outline-none focus:border-neutral-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="mb-6">
            {/* Add categories header with close button */}
            <div className="flex items-center justify-between mb-4 border-b border-neutral-200 pb-2">
              <h2 className="text-lg font-medium">КАТЕГОРИИ</h2>
              <button
                onClick={onClose}
                className="p-1 text-neutral-600 hover:text-neutral-900"
                aria-label="Закрыть меню"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-4">
              <li className="py-2 border-b border-neutral-200">
                <Link to="/catalog" onClick={onClose} className="block text-lg font-medium">НОВИНКИ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/furniture" onClick={onClose} className="block text-lg font-medium">МЕБЕЛЬ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/lighting" onClick={onClose} className="block text-lg font-medium">ОСВЕЩЕНИЕ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/decor" onClick={onClose} className="block text-lg font-medium">ДЕКОР И ПОДАРКИ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/art" onClick={onClose} className="block text-lg font-medium">ИСКУССТВО</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/jewelry" onClick={onClose} className="block text-lg font-medium">ЮВЕЛИРНЫЕ ИЗДЕЛИЯ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/watches" onClick={onClose} className="block text-lg font-medium">ЧАСЫ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/category/fashion" onClick={onClose} className="block text-lg font-medium">МОДА</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/about" onClick={onClose} className="block text-lg font-medium">МИР ВИНТАЖНАЯ</Link>
              </li>
              <li className="py-2 border-b border-neutral-200">
                <Link to="/sale" onClick={onClose} className="block text-lg font-medium text-red-600">РАСПРОДАЖА</Link>
              </li>
            </ul>
          </nav>

          {/* Account section heading */}
          <div className="mb-4 border-b border-neutral-200 pb-2">
            <h2 className="text-lg font-medium">АККАУНТ</h2>
          </div>

          <div className="flex space-x-4 mb-6">
            <Link to="/account" onClick={onClose} className="p-2 text-neutral-700 hover:text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </Link>
            <Link to="/favorites" onClick={onClose} className="p-2 text-neutral-700 hover:text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>
            <Link to="/cart" onClick={onClose} className="p-2 text-neutral-700 hover:text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </Link>
          </div>

          {/* Login and Register buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Link
              to="/login"
              onClick={onClose}
              className="btn-primary text-center py-3"
            >
              ВОЙТИ
            </Link>
            <Link
              to="/signup"
              onClick={onClose}
              className="btn-secondary text-center py-3"
            >
              РЕГИСТРАЦИЯ
            </Link>
          </div>
        </div>

        <div className="p-4 border-t border-neutral-200">
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Винтажная.ru. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
