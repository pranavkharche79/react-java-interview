import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedHashSet() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' },
  ];

  const methods = [
    {
      title: 'add(E e)',
      description: 'Adds element maintaining insertion order. Returns true if added.',
      code: `LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("banana");   // First
set.add("apple");    // Second
set.add("cherry");   // Third
set.add("banana");   // Duplicate - ignored
System.out.println(set); // [banana, apple, cherry] - insertion order!`,
      complexity: 'O(1)',
    },
    {
      title: 'remove(Object o)',
      description: 'Removes element, maintains order of remaining elements.',
      code: `LinkedHashSet<String> set = new LinkedHashSet<>();
set.addAll(Arrays.asList("a", "b", "c", "d"));
set.remove("b");
System.out.println(set); // [a, c, d] - order preserved`,
      complexity: 'O(1)',
    },
    {
      title: 'contains(Object o)',
      description: 'Fast lookup like HashSet.',
      code: `LinkedHashSet<Integer> set = new LinkedHashSet<>(Arrays.asList(1, 2, 3));
System.out.println(set.contains(2)); // true
System.out.println(set.contains(5)); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'iterator()',
      description: 'Returns elements in insertion order.',
      code: `LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("first");
set.add("second");
set.add("third");

for (String s : set) {
    System.out.println(s);
}
// Output: first, second, third (guaranteed order)`,
      complexity: 'O(n)',
    },
    {
      title: 'addAll(Collection)',
      description: 'Adds all elements maintaining their order.',
      code: `LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("existing");
set.addAll(Arrays.asList("new1", "new2", "new3"));
System.out.println(set); // [existing, new1, new2, new3]`,
      complexity: 'O(n)',
    },
    {
      title: 'toArray()',
      description: 'Converts to array in insertion order.',
      code: `LinkedHashSet<Integer> set = new LinkedHashSet<>();
set.addAll(Arrays.asList(3, 1, 4, 1, 5));
Integer[] array = set.toArray(new Integer[0]);
System.out.println(Arrays.toString(array)); // [3, 1, 4, 5]`,
      complexity: 'O(n)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedHashSet" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java LinkedHashSet"
            description="Hash table + linked list implementation with insertion-order iteration"
            icon="set"
            gradient="purple"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/linkedhashset" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              LinkedHashSet Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is LinkedHashSet?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  LinkedHashSet combines hash table with a linked list to maintain insertion order while providing fast operations.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Hash table + doubly-linked list</li>
                  <li>• <strong>Ordering:</strong> Insertion order preserved</li>
                  <li>• <strong>Null Elements:</strong> Allows one null</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                  <li>• <strong>Memory:</strong> Slightly more than HashSet</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">contains()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">iteration</span>
                    <span className="badge badge-success">O(n) - faster than HashSet</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-6 card p-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Set Implementations Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-200 dark:border-dark-700">
                      <th className="text-left py-3 text-dark-600 dark:text-dark-400">Feature</th>
                      <th className="text-center py-3 text-primary-600 dark:text-primary-400">HashSet</th>
                      <th className="text-center py-3 text-purple-600 dark:text-purple-400">LinkedHashSet</th>
                      <th className="text-center py-3 text-emerald-600 dark:text-emerald-400">TreeSet</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-600 dark:text-dark-400">
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Ordering</td>
                      <td className="text-center">None</td>
                      <td className="text-center">Insertion order</td>
                      <td className="text-center">Sorted</td>
                    </tr>
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Add/Remove/Contains</td>
                      <td className="text-center">O(1)</td>
                      <td className="text-center">O(1)</td>
                      <td className="text-center">O(log n)</td>
                    </tr>
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Iteration speed</td>
                      <td className="text-center">Slower</td>
                      <td className="text-center">Faster</td>
                      <td className="text-center">Medium</td>
                    </tr>
                    <tr className="border-b border-dark-100 dark:border-dark-800">
                      <td className="py-2">Memory usage</td>
                      <td className="text-center">Low</td>
                      <td className="text-center">Medium</td>
                      <td className="text-center">High</td>
                    </tr>
                    <tr>
                      <td className="py-2">Null allowed</td>
                      <td className="text-center">Yes</td>
                      <td className="text-center">Yes</td>
                      <td className="text-center">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* When to Use */}
            <div className="mt-6 card p-6 border-l-4 border-l-purple-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">When to Use LinkedHashSet?</h3>
              <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                <li>✅ When you need unique elements with insertion order</li>
                <li>✅ When you need fast operations AND predictable iteration</li>
                <li>✅ For caching with order preservation</li>
                <li>✅ For removing duplicates while keeping first occurrence order</li>
                <li>❌ Don't use if memory is very constrained</li>
                <li>❌ Don't use if you need sorted order (use TreeSet)</li>
              </ul>
            </div>
          </section>

          {/* Initialization Section */}
          <section id="initialization" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Initialization
            </h2>
            
            <Accordion>
              <AccordionItem title="Basic Initialization" defaultOpen>
                <CodeBlock code={`import java.util.*;

// Empty LinkedHashSet
LinkedHashSet<String> set1 = new LinkedHashSet<>();

// With initial capacity
LinkedHashSet<Integer> set2 = new LinkedHashSet<>(20);

// With capacity and load factor
LinkedHashSet<String> set3 = new LinkedHashSet<>(20, 0.75f);

// From collection - maintains original order
List<String> list = Arrays.asList("c", "a", "b", "a", "c");
LinkedHashSet<String> set4 = new LinkedHashSet<>(list);
System.out.println(set4); // [c, a, b] - first occurrence order`} />
              </AccordionItem>
              
              <AccordionItem title="Converting Between Collections">
                <CodeBlock code={`import java.util.*;

// Remove duplicates from List, keep order
List<String> listWithDups = Arrays.asList("apple", "banana", "apple", "cherry", "banana");
List<String> uniqueList = new ArrayList<>(new LinkedHashSet<>(listWithDups));
System.out.println(uniqueList); // [apple, banana, cherry]

// From HashSet (order unpredictable)
Set<String> hashSet = new HashSet<>(Arrays.asList("c", "a", "b"));
LinkedHashSet<String> linkedSet = new LinkedHashSet<>(hashSet);
// Order depends on HashSet's internal ordering

// From TreeSet (keeps sorted order as insertion order)
TreeSet<String> treeSet = new TreeSet<>(Arrays.asList("cherry", "apple", "banana"));
LinkedHashSet<String> fromTree = new LinkedHashSet<>(treeSet);
System.out.println(fromTree); // [apple, banana, cherry] - sorted order becomes insertion order`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              LinkedHashSet Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Practical Examples
            </h2>
            
            <Accordion>
              <AccordionItem title="Remove Duplicates Preserving Order" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class RemoveDuplicatesOrdered {
    public static void main(String[] args) {
        // Original list with duplicates
        List<String> items = Arrays.asList(
            "apple", "banana", "apple", "cherry", 
            "banana", "date", "apple"
        );
        System.out.println("Original: " + items);
        
        // Remove duplicates, keep first occurrence order
        List<String> unique = new ArrayList<>(new LinkedHashSet<>(items));
        System.out.println("Unique: " + unique);
        // [apple, banana, cherry, date]
        
        // Compare with HashSet (order not guaranteed)
        List<String> hashUnique = new ArrayList<>(new HashSet<>(items));
        System.out.println("HashSet order: " + hashUnique);
        // Could be any order
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Recent Items / History Tracking">
                <CodeBlock code={`import java.util.*;

public class RecentItemsTracker {
    private LinkedHashSet<String> recentItems;
    private int maxSize;
    
    public RecentItemsTracker(int maxSize) {
        this.maxSize = maxSize;
        this.recentItems = new LinkedHashSet<>();
    }
    
    public void addItem(String item) {
        // Remove if exists (to update position)
        recentItems.remove(item);
        
        // Add at end (most recent)
        recentItems.add(item);
        
        // Remove oldest if over capacity
        if (recentItems.size() > maxSize) {
            Iterator<String> it = recentItems.iterator();
            it.next();
            it.remove();
        }
    }
    
    public List<String> getRecent() {
        // Return in reverse order (most recent first)
        List<String> list = new ArrayList<>(recentItems);
        Collections.reverse(list);
        return list;
    }
    
    public static void main(String[] args) {
        RecentItemsTracker tracker = new RecentItemsTracker(5);
        
        tracker.addItem("page1.html");
        tracker.addItem("page2.html");
        tracker.addItem("page3.html");
        tracker.addItem("page1.html"); // Re-access page1
        tracker.addItem("page4.html");
        tracker.addItem("page5.html");
        tracker.addItem("page6.html"); // This removes oldest
        
        System.out.println("Recent: " + tracker.getRecent());
        // [page6.html, page5.html, page4.html, page1.html, page3.html]
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Ordered Unique Categories">
                <CodeBlock code={`import java.util.*;

public class OrderedCategories {
    public static void main(String[] args) {
        // Products with categories (want unique categories in order seen)
        List<String[]> products = Arrays.asList(
            new String[]{"iPhone", "Electronics"},
            new String[]{"T-Shirt", "Clothing"},
            new String[]{"Laptop", "Electronics"},
            new String[]{"Jeans", "Clothing"},
            new String[]{"Book", "Books"},
            new String[]{"Tablet", "Electronics"},
            new String[]{"Novel", "Books"}
        );
        
        // Extract unique categories in order encountered
        LinkedHashSet<String> categories = new LinkedHashSet<>();
        for (String[] product : products) {
            categories.add(product[1]);
        }
        
        System.out.println("Categories menu:");
        int index = 1;
        for (String category : categories) {
            System.out.println(index++ + ". " + category);
        }
        // 1. Electronics
        // 2. Clothing
        // 3. Books
        
        // Convert to navigation array
        String[] navItems = categories.toArray(new String[0]);
        System.out.println("Nav array: " + Arrays.toString(navItems));
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

