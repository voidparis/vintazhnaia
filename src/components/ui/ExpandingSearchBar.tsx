import React, { useState, useRef, useEffect, useCallback } from 'react';

// Simple throttle function to limit how often the handler is called
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let inThrottle = false;

  return ((...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  }) as T;
};

const ExpandingSearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input whenever expanded state changes to true
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      // Small delay to ensure the animation has started
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isExpanded]);

  // Create a throttled mouse move handler
  const handleGlobalMouseMove = useCallback((event: MouseEvent) => {
    if (searchContainerRef.current) {
      const rect = searchContainerRef.current.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      // Update mouse over state
      setIsMouseOver(isInside);

      // If mouse is outside, not focused, and input is empty - collapse
      if (!isInside && !isFocused && inputValue === '') {
        setIsExpanded(false);
      }
    }
  }, [isFocused, inputValue]);

  // Throttle the handler
  const throttledMouseMoveHandler = useCallback(
    throttle(handleGlobalMouseMove, 50),
    [handleGlobalMouseMove]
  );

  // Handle scroll events to collapse the search when scrolling down
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // If scrolling down and search is expanded, collapse it (only if input is empty and not focused)
    if (scrollTop > lastScrollTop && isExpanded && inputValue === '' && !isFocused) {
      setIsExpanded(false);
    }

    // Update the last scroll position
    setLastScrollTop(scrollTop);
  }, [isExpanded, lastScrollTop, inputValue, isFocused]);

  // Throttle the scroll handler
  const throttledScrollHandler = useCallback(
    throttle(handleScroll, 100),
    [handleScroll]
  );

  // Global mouse move tracker
  useEffect(() => {
    // Add event listener to track mouse movements globally
    document.addEventListener('mousemove', throttledMouseMoveHandler);
    // Add scroll event listener
    window.addEventListener('scroll', throttledScrollHandler);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMoveHandler);
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [throttledMouseMoveHandler, throttledScrollHandler]);

  // Handle clicks outside to collapse the search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        inputValue === ''
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputValue]);

  const handleSearchIconClick = () => {
    setIsExpanded(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      // Handle search submission
      console.log('Searching for:', inputValue);
      // Navigate to search results page or perform search logic
      // For demo, just clear the input
      setInputValue('');
      setIsExpanded(false);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    // Only collapse if not focused and empty
    if (inputValue === '' && !isFocused) {
      setIsExpanded(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (inputValue === '' && !isMouseOver) {
      setIsExpanded(false);
    }
  };

  return (
    <div
      ref={searchContainerRef}
      className={`flex items-center justify-center relative transition-all duration-300 ease-in-out outline-none ${
        isExpanded ? 'w-64' : 'w-10'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: isExpanded ? '240px' : '40px', height: '40px' }}
    >
      <form onSubmit={handleSubmit} className="flex items-center w-full relative outline-none">
        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`
            py-2 px-3 pr-10
            transition-all duration-300 ease-in-out
            bg-transparent
            outline-none
            border-0
            ${isFocused ? 'border-b border-b-neutral-300' : 'border-none'}
            ${isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}
          `}
        />
        <button
          type="button"
          onClick={handleSearchIconClick}
          className="absolute flex items-center justify-center cursor-pointer outline-none border-none z-10"
          style={{
            right: isExpanded ? '5px' : '50%',
            transform: isExpanded ? 'none' : 'translateX(50%)',
            padding: '2px'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ExpandingSearchBar;
