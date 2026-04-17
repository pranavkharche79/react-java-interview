import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({ onMenuToggle, isMobileMenuOpen }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCollectionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/java', label: 'Java' },
    { path: '/java-theory', label: 'Java Theory' },
    { path: '/annotations', label: 'Annotations' },
    { path: '/react', label: 'React' },
    { path: '/arrays', label: 'Arrays' },
    { path: '/strings', label: 'Strings' },
  ];

  const collectionsLinks = [
    { path: '/collections/arraylist', label: 'ArrayList', group: 'Lists' },
    { path: '/collections/linkedlist', label: 'LinkedList', group: 'Lists' },
    { path: '/collections/stack', label: 'Stack', group: 'Lists' },
    { path: '/collections/queue', label: 'Queue', group: 'Lists' },
    { path: '/collections/hashset', label: 'HashSet', group: 'Sets' },
    { path: '/collections/treeset', label: 'TreeSet', group: 'Sets' },
    { path: '/collections/linkedhashset', label: 'LinkedHashSet', group: 'Sets' },
    { path: '/collections/hashmap', label: 'HashMap', group: 'Maps' },
    { path: '/collections/treemap', label: 'TreeMap', group: 'Maps' },
    { path: '/collections/linkedhashmap', label: 'LinkedHashMap', group: 'Maps' },
  ];

  const groups = ['Lists', 'Sets', 'Maps'];

  const isActive = (path: string) => location.pathname === path;
  const isCollectionsActive = () => location.pathname.startsWith('/collections');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-sm' 
        : 'bg-white dark:bg-dark-900'
    } border-b border-dark-200 dark:border-dark-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
              Javapedia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Collections Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  isCollectionsActive()
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                }`}
              >
                Collections
                <svg className={`w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isCollectionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl shadow-lg py-2 animate-fade-in">
                  {groups.map((group, idx) => (
                    <div key={group}>
                      {idx > 0 && <div className="border-t border-dark-100 dark:border-dark-700 my-2"></div>}
                      <p className="px-4 py-1 text-xs font-semibold text-dark-400 uppercase tracking-wider">{group}</p>
                      {collectionsLinks.filter(l => l.group === group).map(link => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsCollectionsOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(link.path)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                              : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-dark-200 dark:border-dark-800 bg-white dark:bg-dark-900 animate-slide-up max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onMenuToggle}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {groups.map(group => (
              <div key={group}>
                <div className="pt-2 pb-1">
                  <p className="px-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">{group}</p>
                </div>
                
                {collectionsLinks.filter(l => l.group === group).map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onMenuToggle}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
