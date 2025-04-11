import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VintazhLogo from '../ui/VintazhLogo';
import MobileMenu, { HamburgerButton } from '../ui/HamburgerMenu';
import ExpandingSearchBar from '../ui/ExpandingSearchBar';

const Header: React.FC = () => {
  const [showMegaMenu, setShowMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  // Reference to measure header height for the mobile menu
  const headerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update header height when component mounts or window resizes
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
        // Update CSS variable at the document level
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Track scroll position to detect direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = currentScrollPos > scrollPosition;

      setIsScrollingDown(scrollingDown);
      setScrollPosition(currentScrollPos);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [scrollPosition]);

  // Apply body styles when mobile menu is open to prevent scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (category: string) => {
    setShowMegaMenu(category);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`border-b border-neutral-300 bg-white relative z-50 ${mobileMenuOpen ? 'header-menu-open' : ''}
      ${isScrollingDown && scrollPosition > 100 ? 'header-scrolled' : ''}`}
      data-scrolling-down={isScrollingDown}
    >
      <div className="px-4 py-2 bg-neutral-100 text-xs text-center">
        Бесплатная доставка для ювелирных изделий и часов. Исключения распространяются; см. конкретную страницу товара. <Link to="/shipping" className="underline">Купить Сейчас.</Link>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Mobile Layout Wrapper */}
        <div className="flex items-center justify-between w-full">
          {/* Left Side: Hamburger and Search */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu Button - Adjusted padding and alignment */}
            <div className="flex items-center justify-center">
              <HamburgerButton
                isOpen={mobileMenuOpen}
                onClick={toggleMobileMenu}
                className="flex items-center justify-center"
              />
            </div>

            {/* Search Bar - Visible on all screens */}
            <div className="flex items-center justify-center">
              <ExpandingSearchBar />
            </div>
          </div>

          {/* Center: Logo - Responsive sizing */}
          <div className="flex-1 flex justify-center mx-2">
            <Link to="/" className="block">
              <VintazhLogo
                className="h-auto py-2"
                size="small"
              />
            </Link>
          </div>

          {/* Right Side: User Icons - Standardized spacing */}
          <div className="flex items-center">
            {/* Account icon with consistent sizing and spacing */}
            <Link to="/account" className="header-icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </Link>

            {/* Favorites icon with consistent sizing and spacing */}
            <button className="header-icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>

            {/* Cart icon with consistent sizing and spacing */}
            <button className="header-icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Hidden on Mobile */}
      <nav
        className="hidden lg:flex container mx-auto px-4 py-3 justify-center"
        onMouseLeave={handleMouseLeave}
      >
        <ul className="flex space-x-8">
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('newArrivals')}
          >
            <Link to="/catalog">НОВЫЕ ПОСТУПЛЕНИЯ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('furniture')}
          >
            <Link to="/category/furniture">МЕБЕЛЬ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('lighting')}
          >
            <Link to="/category/decor">ДЕКОРАТИВНЫЕ ОБЪЕКТЫ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('art')}
          >
            <Link to="/category/art">ИСКУССТВО</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('jewelry')}
          >
            <Link to="/category/jewelry">ЮВЕЛИРНЫЕ ИЗДЕЛИЯ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('watches')}
          >
            <Link to="/category/watches">ЧАСЫ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('fashion')}
          >
            <Link to="/category/fashion">МОДА</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('world')}
          >
            <Link to="/about">МИР ВИНТАЖНАЯ</Link>
          </li>
          <li
            className="nav-link relative"
            onMouseEnter={() => handleMouseEnter('sale')}
          >
            <Link to="/sale" className="text-red-600">РАСПРОДАЖА</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      {/* Mega Menu (Desktop Only) */}
      {showMegaMenu && (
        <div className="absolute z-10 left-0 right-0 bg-white border-b border-neutral-300 py-6 shadow-md hidden lg:block">
          <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
            {/* The rest of the mega menu content remains unchanged */}
            {/* ... */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
