import { Link } from 'react-router-dom';
import FeatureCard from '../components/ui/FeatureCard';

export default function Home() {
  const features = [
    {
      icon: 'array' as const,
      title: 'Arrays',
      description: 'Learn array initialization, sorting, searching, and common operations with practical examples.',
      link: '/arrays',
      color: 'blue' as const,
    },
    {
      icon: 'string' as const,
      title: 'Strings',
      description: 'Master string manipulation, formatting, and essential methods for text processing.',
      link: '/strings',
      color: 'green' as const,
    },
    {
      icon: 'collection' as const,
      title: 'Collections',
      description: 'Understand Lists, Sets, and Maps with performance tips and real-world use cases.',
      link: '/collections/arraylist',
      color: 'amber' as const,
    },
  ];

  const highlights = [
    { label: 'Code Examples', value: '100+', icon: '💻' },
    { label: 'Java Methods', value: '150+', icon: '⚡' },
    { label: 'Topics', value: '12', icon: '📚' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Your Java Reference Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master Java with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
                Javapedia
              </span>
            </h1>
            
            <p className="text-xl text-dark-300 max-w-2xl mx-auto mb-10">
              Your comprehensive guide to Java arrays, strings, and collections. Learn with clean code examples and practical explanations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/java"
                className="btn bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 text-base shadow-lg shadow-orange-500/25"
              >
                ☕ Java Interview
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/arrays"
                className="btn btn-primary px-8 py-3 text-base shadow-lg shadow-primary-500/25"
              >
                Get Started
              </Link>
              <Link
                to="/collections/arraylist"
                className="btn btn-secondary px-8 py-3 text-base"
              >
                Browse Collections
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {highlights.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Explore Java Topics
            </h2>
            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Dive into comprehensive guides covering essential Java data structures and operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Java Collections Framework
            </h2>
            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Master the most commonly used data structures in Java.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'ArrayList', desc: 'Dynamic arrays with fast random access', path: '/collections/arraylist', category: 'Lists' },
              { name: 'LinkedList', desc: 'Doubly-linked list with efficient insertions', path: '/collections/linkedlist', category: 'Lists' },
              { name: 'Stack', desc: 'LIFO data structure for push/pop', path: '/collections/stack', category: 'Lists' },
              { name: 'Queue', desc: 'FIFO data structure for ordered processing', path: '/collections/queue', category: 'Lists' },
              { name: 'HashSet', desc: 'Fast O(1) operations, no ordering', path: '/collections/hashset', category: 'Sets' },
              { name: 'TreeSet', desc: 'Sorted elements with range operations', path: '/collections/treeset', category: 'Sets' },
              { name: 'LinkedHashSet', desc: 'Maintains insertion order', path: '/collections/linkedhashset', category: 'Sets' },
              { name: 'HashMap', desc: 'Fast O(1) key-value storage', path: '/collections/hashmap', category: 'Maps' },
              { name: 'TreeMap', desc: 'Sorted keys with range queries', path: '/collections/treemap', category: 'Maps' },
              { name: 'LinkedHashMap', desc: 'Insertion order + LRU cache', path: '/collections/linkedhashmap', category: 'Maps' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="group p-5 bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  item.category === 'Lists' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                  item.category === 'Sets' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                  'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                }`}>
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mt-2 mb-1 group-hover:text-primary-500 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center text-primary-500 text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Jump into any topic and start mastering Java today.
          </p>
          <Link
            to="/arrays"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            Start with Arrays
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

