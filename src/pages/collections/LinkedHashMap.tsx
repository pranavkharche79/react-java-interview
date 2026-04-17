import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedHashMap() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'lru-cache', label: 'LRU Cache' },
    { id: 'examples', label: 'Examples' },
  ];

  const methods = [
    {
      title: 'put(K key, V value)',
      description: 'Associates value with key, maintaining insertion order.',
      code: `LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("banana", 2);
map.put("apple", 1);
map.put("cherry", 3);
System.out.println(map); // {banana=2, apple=1, cherry=3}
// Order preserved!`,
      complexity: 'O(1)',
    },
    {
      title: 'get(Object key)',
      description: 'Returns value for key. In access-order mode, moves entry to end.',
      code: `LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("a", 1);
map.put("b", 2);
System.out.println(map.get("a")); // 1
// In insertion-order mode, order unchanged
// In access-order mode, "a" moves to end`,
      complexity: 'O(1)',
    },
    {
      title: 'remove(Object key)',
      description: 'Removes mapping for key, maintains order of remaining entries.',
      code: `LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
map.remove("b");
System.out.println(map); // {a=1, c=3}`,
      complexity: 'O(1)',
    },
    {
      title: 'keySet() / values() / entrySet()',
      description: 'Returns views in insertion (or access) order.',
      code: `LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("c", 3);
map.put("a", 1);
map.put("b", 2);

System.out.println(map.keySet());   // [c, a, b]
System.out.println(map.values());   // [3, 1, 2]
// Both maintain insertion order`,
      complexity: 'O(1)',
    },
    {
      title: 'containsKey(Object key)',
      description: 'Fast lookup like HashMap.',
      code: `LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
map.put("apple", 1);
System.out.println(map.containsKey("apple"));  // true
System.out.println(map.containsKey("banana")); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'removeEldestEntry(Map.Entry)',
      description: 'Override to implement automatic removal (e.g., LRU cache).',
      code: `// LRU Cache with max 3 entries
LinkedHashMap<String, Integer> lru = new LinkedHashMap<>(16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<String, Integer> eldest) {
        return size() > 3;
    }
};`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedHashMap" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java LinkedHashMap"
            description="Hash table + linked list implementation with predictable iteration order"
            icon="map"
            gradient="purple"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/linkedhashmap" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              LinkedHashMap Interview Questions
            </Link>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is LinkedHashMap?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  LinkedHashMap combines hash table with a doubly-linked list to maintain insertion order or access order.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Hash table + linked list</li>
                  <li>• <strong>Ordering:</strong> Insertion order (default) or access order</li>
                  <li>• <strong>Null Keys:</strong> Allows one null key</li>
                  <li>• <strong>Null Values:</strong> Allows multiple null values</li>
                  <li>• <strong>LRU Cache:</strong> Perfect for implementing caches</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">put()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">get()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">iteration</span>
                    <span className="badge badge-success">O(n) - faster than HashMap</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-6 card p-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Map Implementations Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-200 dark:border-dark-700">
                      <th className="text-left py-3 text-dark-600 dark:text-dark-400">Feature</th>
                      <th className="text-center py-3 text-primary-600 dark:text-primary-400">HashMap</th>
                      <th className="text-center py-3 text-purple-600 dark:text-purple-400">LinkedHashMap</th>
                      <th className="text-center py-3 text-emerald-600 dark:text-emerald-400">TreeMap</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-600 dark:text-dark-400">
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Ordering</td>
                      <td className="text-center">None</td>
                      <td className="text-center">Insertion/Access</td>
                      <td className="text-center">Sorted</td>
                    </tr>
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">put/get/remove</td>
                      <td className="text-center">O(1)</td>
                      <td className="text-center">O(1)</td>
                      <td className="text-center">O(log n)</td>
                    </tr>
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Null keys</td>
                      <td className="text-center">Yes (one)</td>
                      <td className="text-center">Yes (one)</td>
                      <td className="text-center">No</td>
                    </tr>
                    <tr>
                      <td className="py-2">LRU Cache</td>
                      <td className="text-center">No</td>
                      <td className="text-center">Yes</td>
                      <td className="text-center">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Initialization Section */}
          <section id="initialization" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Initialization
            </h2>
            
            <Accordion>
              <AccordionItem title="Insertion Order (Default)" defaultOpen>
                <CodeBlock code={`import java.util.*;

// Empty LinkedHashMap - maintains insertion order
LinkedHashMap<String, Integer> map1 = new LinkedHashMap<>();
map1.put("third", 3);
map1.put("first", 1);
map1.put("second", 2);
System.out.println(map1); // {third=3, first=1, second=2}

// With initial capacity
LinkedHashMap<String, Integer> map2 = new LinkedHashMap<>(100);

// With capacity and load factor
LinkedHashMap<String, Integer> map3 = new LinkedHashMap<>(100, 0.75f);`} />
              </AccordionItem>
              
              <AccordionItem title="Access Order Mode">
                <CodeBlock code={`import java.util.*;

// Access-order: last accessed entry moves to end
// Constructor: (capacity, loadFactor, accessOrder)
LinkedHashMap<String, Integer> map = new LinkedHashMap<>(16, 0.75f, true);

map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
System.out.println(map); // {a=1, b=2, c=3}

map.get("a"); // Access "a"
System.out.println(map); // {b=2, c=3, a=1} - "a" moved to end

map.get("b"); // Access "b"
System.out.println(map); // {c=3, a=1, b=2} - "b" moved to end`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              LinkedHashMap Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* LRU Cache Section */}
          <section id="lru-cache" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              LRU Cache Implementation
            </h2>
            
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is LRU Cache?</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4">
                LRU (Least Recently Used) Cache evicts the least recently accessed entry when the cache is full. LinkedHashMap makes this easy to implement.
              </p>
            </div>

            <CodeBlock code={`import java.util.*;

public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int maxSize;
    
    public LRUCache(int maxSize) {
        // true = access-order (required for LRU)
        super(maxSize, 0.75f, true);
        this.maxSize = maxSize;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        // Remove oldest entry when size exceeds max
        return size() > maxSize;
    }
    
    public static void main(String[] args) {
        LRUCache<String, Integer> cache = new LRUCache<>(3);
        
        cache.put("a", 1);
        cache.put("b", 2);
        cache.put("c", 3);
        System.out.println(cache); // {a=1, b=2, c=3}
        
        cache.get("a"); // Access "a" - moves to end
        System.out.println(cache); // {b=2, c=3, a=1}
        
        cache.put("d", 4); // Adds "d", evicts "b" (least recently used)
        System.out.println(cache); // {c=3, a=1, d=4}
        
        cache.put("e", 5); // Adds "e", evicts "c"
        System.out.println(cache); // {a=1, d=4, e=5}
    }
}`} />
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Practical Examples
            </h2>
            
            <Accordion>
              <AccordionItem title="Preserve JSON-like Order" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class JsonOrderExample {
    public static void main(String[] args) {
        // Preserve field order like JSON
        LinkedHashMap<String, Object> person = new LinkedHashMap<>();
        person.put("id", 1);
        person.put("firstName", "John");
        person.put("lastName", "Doe");
        person.put("email", "john@example.com");
        person.put("age", 30);
        
        // Always prints in this order
        System.out.println("Person data:");
        for (Map.Entry<String, Object> entry : person.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }
        
        // Convert to "JSON-like" string
        StringBuilder json = new StringBuilder("{\\n");
        person.forEach((k, v) -> 
            json.append("  \\"").append(k).append("\\": ")
                .append(v instanceof String ? "\\"" + v + "\\"" : v)
                .append(",\\n"));
        json.setLength(json.length() - 2); // Remove last comma
        json.append("\\n}");
        System.out.println(json);
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Recently Viewed Items">
                <CodeBlock code={`import java.util.*;

public class RecentlyViewed<T> {
    private final LinkedHashMap<T, Long> items;
    private final int maxItems;
    
    public RecentlyViewed(int maxItems) {
        this.maxItems = maxItems;
        this.items = new LinkedHashMap<>(maxItems, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<T, Long> eldest) {
                return size() > RecentlyViewed.this.maxItems;
            }
        };
    }
    
    public void view(T item) {
        items.put(item, System.currentTimeMillis());
    }
    
    public List<T> getRecent() {
        List<T> recent = new ArrayList<>(items.keySet());
        Collections.reverse(recent); // Most recent first
        return recent;
    }
    
    public static void main(String[] args) {
        RecentlyViewed<String> history = new RecentlyViewed<>(5);
        
        history.view("Product A");
        history.view("Product B");
        history.view("Product C");
        history.view("Product A"); // Re-view
        history.view("Product D");
        history.view("Product E");
        history.view("Product F"); // Evicts oldest
        
        System.out.println("Recently viewed: " + history.getRecent());
        // [Product F, Product E, Product D, Product A, Product C]
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Count with Insertion Order">
                <CodeBlock code={`import java.util.*;

public class OrderedCounter {
    public static void main(String[] args) {
        String text = "the quick brown fox jumps over the lazy dog";
        String[] words = text.split(" ");
        
        // Count words, preserve first-occurrence order
        LinkedHashMap<String, Integer> wordCount = new LinkedHashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Words in order of first appearance:");
        wordCount.forEach((word, count) -> 
            System.out.println("  " + word + ": " + count));
        
        // Output:
        // the: 2
        // quick: 1
        // brown: 1
        // fox: 1
        // jumps: 1
        // over: 1
        // lazy: 1
        // dog: 1
    }
}`} />
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

