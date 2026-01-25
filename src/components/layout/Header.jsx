import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from './Logo';

const Header = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleThemeToggle = (e) => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const right = window.innerWidth - x;
    const bottom = window.innerHeight - y;
    const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  // Red-themed background logic as requested
  // Using deep red (burgundy-ish) for the header background
  const bgClass = scrolled
    ? (isDark ? 'bg-[#8B0000]/90 border-b border-white/10' : 'bg-[#ffffff]/90 border-b border-gray-200') + ' backdrop-blur-md py-4 shadow-lg'
    : 'bg-transparent py-8';

  // Text colors ensure contrast
  const textClass = isDark ? 'text-white/90' : 'text-gray-900';
  const hoverClass = isDark ? 'hover:text-white' : 'hover:text-red-700';

  const navLinks = [
    { name: 'Home', path: '/', isExternal: false },
    { name: 'Events', path: '/events', isExternal: false },
    { name: 'About', path: '/about', isExternal: false },
    { name: 'Gallery', path: '/gallery', isExternal: false },
    { name: 'Contact', path: '/contact', isExternal: false },
    { name: 'Bus Routes', path: 'https://drive.google.com/file/d/1dxfnsXIVJ6Oqinj0QTel7pDP7BKIUNez/view?usp=drivesdk', isExternal: true }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer relative z-50">
            <Logo className="h-10 md:h-12 w-auto object-contain" isDark={isDark} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-16">
            {navLinks.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative text-[10px] font-display font-bold ${textClass} ${hoverClass} transition-all tracking-[0.5em] uppercase group`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isDark ? 'bg-white' : 'bg-red-600'}`}></span>
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[10px] font-display font-bold ${textClass} ${hoverClass} transition-all tracking-[0.5em] uppercase group ${isActive ? (isDark ? 'text-white' : 'text-red-600') : ''}`
                  }
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isDark ? 'bg-white' : 'bg-red-600'}`}></span>
                </NavLink>
              )
            ))}
          </nav>

          {/* Action Buttons & Toggle */}
          <div className="flex items-center gap-6 md:gap-12 relative z-50">

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className={`relative group h-7 w-24 rounded-full border ${isDark ? 'border-white/40 bg-black/40' : 'border-gray-300 bg-white/40'} backdrop-blur-md transition-all hover:border-white overflow-hidden`}
              aria-label="Toggle Theme"
            >
              <div
                className={`absolute top-0.5 bottom-0.5 w-6 h-6 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isDark ? 'left-0.5' : 'left-[calc(100%-1.625rem)]'}`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-red-600' : 'bg-gray-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-red-600' : 'bg-gray-600'}`}></span>
                </div>
              </div>
              <span
                className={`absolute top-1/2 -translate-y-1/2 right-2 text-[8px] font-bold uppercase font-display tracking-[0.15em] text-white transition-all duration-500 ${isDark ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              >
                Red Chip
              </span>
              <span
                className={`absolute top-1/2 -translate-y-1/2 left-2 text-[8px] font-bold uppercase font-display tracking-[0.15em] text-gray-900 transition-all duration-500 ${!isDark ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                White Chip
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-50 p-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center ${isDark ? 'bg-[#2a0a10]/95' : 'bg-white/95'} backdrop-blur-xl`}
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-display font-black uppercase tracking-[0.2em] transition-colors ${isDark ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-display font-black uppercase tracking-[0.2em] transition-colors ${isActive
                          ? (isDark ? 'text-white' : 'text-red-600')
                          : (isDark ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-900')
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Transition Styles */}
      <style>{`
                ::view-transition-old(root),
                ::view-transition-new(root) {
                    animation: none;
                    mix-blend-mode: normal;
                }
                ::view-transition-old(root) { z-index: 1; }
                ::view-transition-new(root) { z-index: 9999; pointer-events: none; }
            `}</style>
    </>
  );
};

export default Header;
