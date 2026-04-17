import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function TreeMap() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'navigation', label: 'Navigation Methods' },
    { id: 'examples', label: 'Examples' },
  ];

  const basicMethods = [
    {
      title: 'put(K key, V value)',
      description: 'Associates value with key in sorted position.',
      code: `TreeMap<String, Integer> map = new TreeMap<>();
map.put("cherry", 5);
map.put("apple", 3);
map.put("banana", 7);
System.out.println(map); // {apple=3, banana=7, cherry=5} - sorted!`,
      complexity: 'O(log n)',
    },
    {
      title: 'get(Object key)',
      description: 'Returns value for key using binary search.',
      code: `TreeMap<String, Integer> map = new TreeMap<>();
map.put("apple", 5);
map.put("banana", 3);
System.out.println(map.get("apple"));  // 5
System.out.println(map.get("cherry")); // null`,
      complexity: 'O(log n)',
    },
    {
      title: 'firstKey() & lastKey()',
      description: 'Returns first (smallest) and last (largest) keys.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(3, "three");
map.put(1, "one");
map.put(5, "five");
System.out.println("First: " + map.firstKey()); // 1
System.out.println("Last: " + map.lastKey());   // 5`,
      complexity: 'O(log n)',
    },
    {
      title: 'firstEntry() & lastEntry()',
      description: 'Returns first and last key-value entries.',
      code: `TreeMap<String, Integer> map = new TreeMap<>();
map.put("c", 3);
map.put("a", 1);
map.put("b", 2);
System.out.println(map.firstEntry()); // a=1
System.out.println(map.lastEntry());  // c=3`,
      complexity: 'O(log n)',
    },
  ];

  const navigationMethods = [
    {
      title: 'lowerKey(K key) & higherKey(K key)',
      description: 'Find keys strictly less than or greater than given key.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(1, "a");
map.put(3, "c");
map.put(5, "e");
map.put(7, "g");

System.out.println(map.lowerKey(5));  // 3 (strictly less)
System.out.println(map.higherKey(5)); // 7 (strictly greater)
System.out.println(map.lowerKey(1));  // null`,
      complexity: 'O(log n)',
      badge: 'success' as const,
    },
    {
      title: 'floorKey(K key) & ceilingKey(K key)',
      description: 'Find keys less/greater than or equal to given key.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(1, "a");
map.put(3, "c");
map.put(5, "e");

System.out.println(map.floorKey(4));   // 3 (greatest ≤ 4)
System.out.println(map.floorKey(5));   // 5 (key exists)
System.out.println(map.ceilingKey(4)); // 5 (smallest ≥ 4)
System.out.println(map.ceilingKey(2)); // 3`,
      complexity: 'O(log n)',
      badge: 'success' as const,
    },
    {
      title: 'headMap(K toKey)',
      description: 'Returns entries with keys strictly less than toKey.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(1, "a"); map.put(2, "b"); map.put(3, "c"); 
map.put(4, "d"); map.put(5, "e");

SortedMap<Integer, String> head = map.headMap(3);
System.out.println(head); // {1=a, 2=b}

// Inclusive version
NavigableMap<Integer, String> headInc = map.headMap(3, true);
System.out.println(headInc); // {1=a, 2=b, 3=c}`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'tailMap(K fromKey)',
      description: 'Returns entries with keys greater than or equal to fromKey.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(1, "a"); map.put(2, "b"); map.put(3, "c"); 
map.put(4, "d"); map.put(5, "e");

SortedMap<Integer, String> tail = map.tailMap(3);
System.out.println(tail); // {3=c, 4=d, 5=e}

// Exclusive version
NavigableMap<Integer, String> tailExc = map.tailMap(3, false);
System.out.println(tailExc); // {4=d, 5=e}`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'subMap(K fromKey, K toKey)',
      description: 'Returns entries in the given key range.',
      code: `TreeMap<Integer, String> map = new TreeMap<>();
map.put(1, "a"); map.put(2, "b"); map.put(3, "c"); 
map.put(4, "d"); map.put(5, "e");

// From inclusive, to exclusive
SortedMap<Integer, String> sub = map.subMap(2, 4);
System.out.println(sub); // {2=b, 3=c}

// Both bounds configurable
NavigableMap<Integer, String> subBoth = map.subMap(2, true, 4, true);
System.out.println(subBoth); // {2=b, 3=c, 4=d}`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'descendingMap()',
      description: 'Returns reverse-order view of the map.',
      code: `TreeMap<String, Integer> map = new TreeMap<>();
map.put("a", 1); map.put("b", 2); map.put("c", 3);

NavigableMap<String, Integer> desc = map.descendingMap();
System.out.println(desc); // {c=3, b=2, a=1}

// Iterate in reverse
for (String key : map.descendingKeySet()) {
    System.out.println(key + ": " + map.get(key));
}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="TreeMap" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java TreeMap"
            description="Red-black tree based Map with sorted keys and range operations"
            icon="map"
            gradient="green"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/treemap" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              TreeMap Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is TreeMap?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  TreeMap is a NavigableMap implementation based on a red-black tree. Keys are stored in sorted order.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Red-black tree</li>
                  <li>• <strong>Ordering:</strong> Sorted by keys</li>
                  <li>• <strong>Null Keys:</strong> Not allowed</li>
                  <li>• <strong>Null Values:</strong> Allowed</li>
                  <li>• <strong>Implements:</strong> NavigableMap, SortedMap</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">put()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">get()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">firstKey() / lastKey()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 card p-6 border-l-4 border-l-emerald-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">When to Use TreeMap?</h3>
              <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                <li>✅ When you need keys in sorted order</li>
                <li>✅ When you need range queries (headMap, tailMap, subMap)</li>
                <li>✅ When you need floor/ceiling key operations</li>
                <li>✅ For implementing sorted dictionaries</li>
                <li>❌ Don't use for maximum performance (use HashMap)</li>
                <li>❌ Don't use with null keys</li>
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

// Empty TreeMap (natural ordering)
TreeMap<String, Integer> map1 = new TreeMap<>();

// With initial map
Map<String, Integer> source = Map.of("c", 3, "a", 1, "b", 2);
TreeMap<String, Integer> map2 = new TreeMap<>(source);
System.out.println(map2); // {a=1, b=2, c=3} - sorted!

// From another SortedMap
SortedMap<String, Integer> sorted = new TreeMap<>();
TreeMap<String, Integer> map3 = new TreeMap<>(sorted);`} />
              </AccordionItem>
              
              <AccordionItem title="Custom Comparator">
                <CodeBlock code={`import java.util.*;

// Reverse order
TreeMap<String, Integer> descending = new TreeMap<>(Collections.reverseOrder());
descending.put("apple", 1);
descending.put("cherry", 2);
descending.put("banana", 3);
System.out.println(descending); // {cherry=2, banana=3, apple=1}

// Case-insensitive keys
TreeMap<String, Integer> caseInsensitive = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);
caseInsensitive.put("Apple", 1);
caseInsensitive.put("BANANA", 2);
caseInsensitive.put("cherry", 3);
System.out.println(caseInsensitive); // {Apple=1, BANANA=2, cherry=3}

// Custom comparator - by value length of key
TreeMap<String, Integer> byLength = new TreeMap<>(
    Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder())
);`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Basic Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {basicMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Navigation Methods Section */}
          <section id="navigation" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Navigation Methods (TreeMap Exclusive)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {navigationMethods.map((method, i) => (
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
              <AccordionItem title="Grade Lookup System" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class GradeLookup {
    public static void main(String[] args) {
        // Score thresholds -> Grade
        TreeMap<Integer, String> gradeScale = new TreeMap<>();
        gradeScale.put(90, "A");
        gradeScale.put(80, "B");
        gradeScale.put(70, "C");
        gradeScale.put(60, "D");
        gradeScale.put(0, "F");
        
        // Find grade for a score
        int[] scores = {95, 85, 72, 65, 45};
        
        for (int score : scores) {
            // floorEntry finds the highest threshold ≤ score
            Map.Entry<Integer, String> entry = gradeScale.floorEntry(score);
            System.out.println("Score " + score + " -> Grade " + entry.getValue());
        }
        // Output:
        // Score 95 -> Grade A
        // Score 85 -> Grade B
        // Score 72 -> Grade C
        // Score 65 -> Grade D
        // Score 45 -> Grade F
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Event Calendar (Date Range Queries)">
                <CodeBlock code={`import java.util.*;
import java.time.*;

public class EventCalendar {
    private TreeMap<LocalDate, String> events = new TreeMap<>();
    
    public void addEvent(LocalDate date, String event) {
        events.put(date, event);
    }
    
    public Map<LocalDate, String> getEventsInRange(LocalDate start, LocalDate end) {
        return events.subMap(start, true, end, true);
    }
    
    public Map.Entry<LocalDate, String> getNextEvent(LocalDate from) {
        return events.ceilingEntry(from);
    }
    
    public static void main(String[] args) {
        EventCalendar calendar = new EventCalendar();
        
        calendar.addEvent(LocalDate.of(2024, 1, 15), "Meeting");
        calendar.addEvent(LocalDate.of(2024, 1, 20), "Conference");
        calendar.addEvent(LocalDate.of(2024, 2, 1), "Deadline");
        calendar.addEvent(LocalDate.of(2024, 2, 14), "Valentine's Day");
        
        // Events in January
        System.out.println("January events:");
        Map<LocalDate, String> january = calendar.getEventsInRange(
            LocalDate.of(2024, 1, 1),
            LocalDate.of(2024, 1, 31)
        );
        january.forEach((date, event) -> 
            System.out.println("  " + date + ": " + event));
        
        // Next event from today
        LocalDate today = LocalDate.of(2024, 1, 18);
        var next = calendar.getNextEvent(today);
        System.out.println("\\nNext event: " + next.getValue() + " on " + next.getKey());
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Price Tier System">
                <CodeBlock code={`import java.util.*;

public class PriceTier {
    public static void main(String[] args) {
        // Quantity threshold -> Discount percentage
        TreeMap<Integer, Double> discountTiers = new TreeMap<>();
        discountTiers.put(1, 0.0);     // 1-9: no discount
        discountTiers.put(10, 5.0);    // 10-49: 5% off
        discountTiers.put(50, 10.0);   // 50-99: 10% off
        discountTiers.put(100, 15.0);  // 100-499: 15% off
        discountTiers.put(500, 20.0);  // 500+: 20% off
        
        double basePrice = 10.0;
        int[] quantities = {5, 25, 75, 150, 1000};
        
        for (int qty : quantities) {
            double discount = discountTiers.floorEntry(qty).getValue();
            double unitPrice = basePrice * (1 - discount / 100);
            double total = unitPrice * qty;
            
            System.out.printf("Qty: %d, Discount: %.0f%%, Unit: $%.2f, Total: $%.2f%n",
                qty, discount, unitPrice, total);
        }
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

