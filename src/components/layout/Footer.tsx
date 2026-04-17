import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    core: [
      { path: '/arrays', label: 'Arrays' },
      { path: '/strings', label: 'Strings' },
    ],
    lists: [
      { path: '/collections/arraylist', label: 'ArrayList' },
      { path: '/collections/linkedlist', label: 'LinkedList' },
      { path: '/collections/stack', label: 'Stack' },
      { path: '/collections/queue', label: 'Queue' },
    ],
    sets: [
      { path: '/collections/hashset', label: 'HashSet' },
      { path: '/collections/treeset', label: 'TreeSet' },
      { path: '/collections/linkedhashset', label: 'LinkedHashSet' },
    ],
    maps: [
      { path: '/collections/hashmap', label: 'HashMap' },
      { path: '/collections/treemap', label: 'TreeMap' },
      { path: '/collections/linkedhashmap', label: 'LinkedHashMap' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-dark-900 dark:text-white">Javapedia</span>
            </Link>
            <p className="text-dark-500 dark:text-dark-400 text-sm max-w-xs">
              Your comprehensive guide to Java data structures. Learn arrays, strings, and collections with practical examples.
            </p>
          </div>

          {/* Core Topics */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4">Core</h4>
            <ul className="space-y-2">
              {footerLinks.core.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lists */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4">Lists</h4>
            <ul className="space-y-2">
              {footerLinks.lists.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sets */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4">Sets</h4>
            <ul className="space-y-2">
              {footerLinks.sets.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maps */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4">Maps</h4>
            <ul className="space-y-2">
              {footerLinks.maps.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500 dark:text-dark-400">
            © {new Date().getFullYear()} Javapedia. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-600 dark:hover:text-dark-300 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-dark-600 dark:hover:text-dark-300 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
