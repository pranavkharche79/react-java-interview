import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SectionLink {
  id: string;
  label: string;
}

interface SidebarProps {
  title: string;
  sections: SectionLink[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      
      if (sectionElements.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileOpen(false);
    }
  };

  const isPageActive = (path: string) => location.pathname === path;

  const allTopics = [
    { path: '/arrays', label: 'Arrays', category: 'Core' },
    { path: '/strings', label: 'Strings', category: 'Core' },
    { path: '/collections/arraylist', label: 'ArrayList', category: 'Lists' },
    { path: '/collections/linkedlist', label: 'LinkedList', category: 'Lists' },
    { path: '/collections/stack', label: 'Stack', category: 'Lists' },
    { path: '/collections/queue', label: 'Queue', category: 'Lists' },
    { path: '/collections/hashset', label: 'HashSet', category: 'Sets' },
    { path: '/collections/treeset', label: 'TreeSet', category: 'Sets' },
    { path: '/collections/linkedhashset', label: 'LinkedHashSet', category: 'Sets' },
    { path: '/collections/hashmap', label: 'HashMap', category: 'Maps' },
    { path: '/collections/treemap', label: 'TreeMap', category: 'Maps' },
    { path: '/collections/linkedhashmap', label: 'LinkedHashMap', category: 'Maps' },
  ];

  // Group topics by category
  const categories = ['Core', 'Lists', 'Sets', 'Maps'];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
        aria-label="Toggle navigation"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isMobileOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky lg:top-20 
        ${isMobileOpen ? 'right-0' : '-right-full lg:right-auto'} 
        top-0 lg:block 
        w-72 lg:w-64 
        h-full lg:h-auto 
        z-40 lg:z-auto
        transition-all duration-300 ease-in-out
        shrink-0
      `}>
        <div className={`
          h-full lg:h-auto 
          bg-white dark:bg-dark-900 lg:bg-transparent 
          p-6 lg:p-0 
          overflow-y-auto
          space-y-6
        `}>
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between mb-4 pb-4 border-b border-dark-200 dark:border-dark-700">
            <h2 className="text-lg font-semibold text-dark-900 dark:text-white">Navigation</h2>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
            >
              <svg className="w-5 h-5 text-dark-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* On This Page */}
          <div className="bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl p-4">
            <h3 className="text-xs font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">
              On this page
            </h3>
            <nav className="space-y-1">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                    activeSection === section.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-700 hover:text-dark-900 dark:hover:text-white'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeSection === section.id ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                  }`}></span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* All Topics - Grouped by Category */}
          <div className="bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl p-4">
            <h3 className="text-xs font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">
              All Topics
            </h3>
            <nav className="space-y-4">
              {categories.map(category => (
                <div key={category}>
                  <p className="text-xs font-medium text-dark-400 dark:text-dark-500 mb-2 px-3">{category}</p>
                  <div className="space-y-1">
                    {allTopics.filter(t => t.category === category).map(page => (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isPageActive(page.path)
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                            : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-700 hover:text-dark-900 dark:hover:text-white'
                        }`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
