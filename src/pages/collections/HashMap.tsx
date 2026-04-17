import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function HashMap() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'basic-methods', label: 'Basic Methods' },
    { id: 'view-methods', label: 'View Methods' },
    { id: 'update-methods', label: 'Update Methods' },
    { id: 'compute-methods', label: 'Compute Methods' },
    { id: 'utility-methods', label: 'Utility Methods' },
    { id: 'examples', label: 'Examples' },
    { id: 'interview', label: 'Interview Questions' },
  ];

  const basicMethods = [
    {
      title: 'put(K key, V value)',
      description: 'Associates value with key. Returns previous value or null.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
Integer old = map.put("apple", 10); // Returns 5
System.out.println(old);  // 5
System.out.println(map);  // {apple=10, banana=3}`,
      complexity: 'O(1)',
    },
    {
      title: 'get(Object key)',
      description: 'Returns value for key, or null if not found.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
System.out.println(map.get("apple"));  // 5
System.out.println(map.get("orange")); // null`,
      complexity: 'O(1)',
    },
    {
      title: 'containsKey(Object key)',
      description: 'Returns true if map contains the specified key.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
System.out.println(map.containsKey("apple"));  // true
System.out.println(map.containsKey("banana")); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'getOrDefault(Object key, V defaultValue)',
      description: 'Returns value for key, or default if not found.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
int count = map.getOrDefault("banana", 0);
System.out.println(count); // 0
// Useful for counting
map.put("word", map.getOrDefault("word", 0) + 1);`,
      complexity: 'O(1)',
    },
    {
      title: 'remove(Object key)',
      description: 'Removes mapping for key. Returns previous value or null.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
Integer removed = map.remove("apple");
System.out.println(removed); // 5
System.out.println(map);     // {banana=3}`,
      complexity: 'O(1)',
    },
    {
      title: 'size()',
      description: 'Returns the number of key-value mappings in the map.',
      code: `Map<String, Integer> map = new HashMap<>();
System.out.println(map.size()); // 0
map.put("apple", 5);
map.put("banana", 3);
System.out.println(map.size()); // 2
map.remove("apple");
System.out.println(map.size()); // 1`,
      complexity: 'O(1)',
    },
    {
      title: 'isEmpty()',
      description: 'Returns true if the map contains no key-value mappings.',
      code: `Map<String, Integer> map = new HashMap<>();
System.out.println(map.isEmpty()); // true
map.put("apple", 5);
System.out.println(map.isEmpty()); // false
map.clear();
System.out.println(map.isEmpty()); // true`,
      complexity: 'O(1)',
    },
  ];

  const viewMethods = [
    {
      title: 'keySet()',
      description: 'Returns a Set view of all keys in the map.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
map.put("cherry", 7);

Set<String> keys = map.keySet();
System.out.println(keys); // [banana, apple, cherry]

// Iterate over keys
for (String key : map.keySet()) {
    System.out.println(key + " -> " + map.get(key));
}`,
      complexity: 'O(1)',
    },
    {
      title: 'values()',
      description: 'Returns a Collection view of all values in the map.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
map.put("cherry", 7);

Collection<Integer> vals = map.values();
System.out.println(vals); // [3, 5, 7]

// Sum all values
int total = 0;
for (int val : map.values()) {
    total += val;
}
System.out.println("Total: " + total); // 15`,
      complexity: 'O(1)',
    },
    {
      title: 'entrySet()',
      description: 'Returns a Set view of all key-value pairs (entries).',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);

Set<Map.Entry<String, Integer>> entries = map.entrySet();

// Most efficient way to iterate
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
// apple = 5
// banana = 3`,
      complexity: 'O(1)',
    },
  ];

  const updateMethods = [
    {
      title: 'putIfAbsent(K key, V value)',
      description: 'Puts value only if key is not already present. Returns existing value or null.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Key exists - no change
Integer result1 = map.putIfAbsent("apple", 10);
System.out.println(result1);      // 5 (existing value)
System.out.println(map.get("apple")); // 5 (unchanged)

// Key doesn't exist - adds it
Integer result2 = map.putIfAbsent("banana", 3);
System.out.println(result2);      // null (was absent)
System.out.println(map.get("banana")); // 3 (added)`,
      complexity: 'O(1)',
    },
    {
      title: 'replace(K key, V value)',
      description: 'Replaces value only if key is present. Returns previous value or null.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Key exists - replaces value
Integer old = map.replace("apple", 10);
System.out.println(old);              // 5
System.out.println(map.get("apple")); // 10

// Key doesn't exist - no change
Integer result = map.replace("banana", 3);
System.out.println(result); // null (key not found)
System.out.println(map.containsKey("banana")); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'replace(K key, V oldValue, V newValue)',
      description: 'Replaces value only if key maps to specified old value. Returns true if replaced.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Old value matches - replaces
boolean replaced1 = map.replace("apple", 5, 10);
System.out.println(replaced1);        // true
System.out.println(map.get("apple")); // 10

// Old value doesn't match - no change
boolean replaced2 = map.replace("apple", 5, 20);
System.out.println(replaced2);        // false
System.out.println(map.get("apple")); // 10 (unchanged)`,
      complexity: 'O(1)',
    },
  ];

  const computeMethods = [
    {
      title: 'computeIfAbsent(K key, Function)',
      description: 'Computes value using function only if key is absent. Great for lazy initialization.',
      code: `Map<String, List<String>> map = new HashMap<>();

// Key absent - computes and adds
map.computeIfAbsent("fruits", k -> new ArrayList<>()).add("apple");
map.computeIfAbsent("fruits", k -> new ArrayList<>()).add("banana");
System.out.println(map.get("fruits")); // [apple, banana]

// Useful for grouping
Map<Integer, List<String>> byLength = new HashMap<>();
String[] words = {"cat", "dog", "elephant", "ant"};
for (String word : words) {
    byLength.computeIfAbsent(word.length(), k -> new ArrayList<>()).add(word);
}
// {3=[cat, dog, ant], 8=[elephant]}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'computeIfPresent(K key, BiFunction)',
      description: 'Computes new value using function only if key is present.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Key present - computes new value
map.computeIfPresent("apple", (k, v) -> v * 2);
System.out.println(map.get("apple")); // 10

// Key absent - no effect
map.computeIfPresent("banana", (k, v) -> v * 2);
System.out.println(map.get("banana")); // null

// Return null to remove entry
map.computeIfPresent("apple", (k, v) -> null);
System.out.println(map.containsKey("apple")); // false`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'compute(K key, BiFunction)',
      description: 'Computes new value for key using function. Works whether key exists or not.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Key exists - old value passed to function
map.compute("apple", (k, v) -> (v == null) ? 1 : v + 1);
System.out.println(map.get("apple")); // 6

// Key absent - null passed as old value
map.compute("banana", (k, v) -> (v == null) ? 1 : v + 1);
System.out.println(map.get("banana")); // 1

// Counting occurrences
String text = "hello world";
Map<Character, Integer> freq = new HashMap<>();
for (char c : text.toCharArray()) {
    freq.compute(c, (k, v) -> (v == null) ? 1 : v + 1);
}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'merge(K key, V value, BiFunction)',
      description: 'Merges value with existing value using function. If key absent, uses provided value.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);

// Key exists - merges values
map.merge("apple", 3, Integer::sum);
System.out.println(map.get("apple")); // 8 (5 + 3)

// Key absent - uses provided value
map.merge("banana", 10, Integer::sum);
System.out.println(map.get("banana")); // 10

// Counting with merge
String[] words = {"apple", "banana", "apple", "cherry", "apple"};
Map<String, Integer> count = new HashMap<>();
for (String word : words) {
    count.merge(word, 1, Integer::sum);
}
// {apple=3, banana=1, cherry=1}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
  ];

  const utilityMethods = [
    {
      title: 'clear()',
      description: 'Removes all mappings from the map.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
System.out.println(map.size()); // 2

map.clear();
System.out.println(map.size());    // 0
System.out.println(map.isEmpty()); // true`,
      complexity: 'O(n)',
    },
    {
      title: 'containsValue(Object value)',
      description: 'Returns true if map contains the specified value.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
map.put("cherry", 5);

System.out.println(map.containsValue(5));  // true
System.out.println(map.containsValue(10)); // false

// Note: O(n) - must check all values`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'equals(Object o)',
      description: 'Compares map with another object for equality.',
      code: `Map<String, Integer> map1 = new HashMap<>();
map1.put("apple", 5);
map1.put("banana", 3);

Map<String, Integer> map2 = new HashMap<>();
map2.put("banana", 3);
map2.put("apple", 5);

Map<String, Integer> map3 = new HashMap<>();
map3.put("apple", 5);

System.out.println(map1.equals(map2)); // true (same entries)
System.out.println(map1.equals(map3)); // false (different)`,
      complexity: 'O(n)',
    },
    {
      title: 'clone()',
      description: 'Returns a shallow copy of the HashMap.',
      code: `HashMap<String, Integer> original = new HashMap<>();
original.put("apple", 5);
original.put("banana", 3);

// Clone creates shallow copy
HashMap<String, Integer> copy = (HashMap<String, Integer>) original.clone();
System.out.println(copy); // {apple=5, banana=3}

// Modifying copy doesn't affect original
copy.put("cherry", 7);
System.out.println(original.containsKey("cherry")); // false`,
      complexity: 'O(n)',
    },
    {
      title: 'forEach(BiConsumer)',
      description: 'Performs action for each entry in the map.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
map.put("cherry", 7);

// Print all entries
map.forEach((key, value) -> 
    System.out.println(key + " -> " + value));

// Modify all values (use replaceAll instead)
map.forEach((k, v) -> System.out.println(k.toUpperCase()));

// With method reference
map.forEach(System.out::println); // Doesn't work directly
// Use entrySet for method reference
map.entrySet().forEach(System.out::println);`,
      complexity: 'O(n)',
    },
    {
      title: 'hashCode()',
      description: 'Returns hash code value for the map.',
      code: `Map<String, Integer> map1 = new HashMap<>();
map1.put("apple", 5);
map1.put("banana", 3);

Map<String, Integer> map2 = new HashMap<>();
map2.put("banana", 3);
map2.put("apple", 5);

// Equal maps have same hashCode
System.out.println(map1.hashCode()); // Same
System.out.println(map2.hashCode()); // Same
System.out.println(map1.hashCode() == map2.hashCode()); // true`,
      complexity: 'O(n)',
    },
    {
      title: 'toString()',
      description: 'Returns string representation of the map.',
      code: `Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);

String str = map.toString();
System.out.println(str); // {banana=3, apple=5}

// Useful for debugging
System.out.println("Map contents: " + map);`,
      complexity: 'O(n)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="HashMap" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java HashMap"
            description="Hash table based Map implementation with O(1) operations"
            icon="map"
            gradient="blue"
          />

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is HashMap?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  HashMap is a hash table-based implementation of the Map interface. It stores key-value pairs with constant-time performance.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Hash table with buckets</li>
                  <li>• <strong>Ordering:</strong> No guaranteed order</li>
                  <li>• <strong>Null Keys:</strong> Allows one null key</li>
                  <li>• <strong>Null Values:</strong> Allows multiple null values</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">put() / get()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove() / containsKey()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">containsValue()</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">clear() / forEach()</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 card p-6 border-l-4 border-l-primary-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">When to Use HashMap?</h3>
              <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                <li>✅ When you need fast key-value lookups</li>
                <li>✅ When order doesn't matter</li>
                <li>✅ For caching, counting, grouping data</li>
                <li>✅ When keys have good hashCode() implementation</li>
                <li>❌ Don't use when you need sorted keys (use TreeMap)</li>
                <li>❌ Don't use when you need insertion order (use LinkedHashMap)</li>
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

// Empty HashMap
Map<String, Integer> map1 = new HashMap<>();

// With initial capacity
Map<String, Integer> map2 = new HashMap<>(100);

// With capacity and load factor
Map<String, Integer> map3 = new HashMap<>(100, 0.75f);

// Using Map.of() (Java 9+) - immutable
Map<String, Integer> map4 = Map.of(
    "apple", 5,
    "banana", 3,
    "orange", 8
);

// Mutable from Map.of()
Map<String, Integer> map5 = new HashMap<>(Map.of("a", 1, "b", 2));`} />
              </AccordionItem>
              
              <AccordionItem title="From Other Collections">
                <CodeBlock code={`import java.util.*;

// Copy from another Map
Map<String, Integer> original = new HashMap<>();
original.put("key1", 1);
original.put("key2", 2);
Map<String, Integer> copy = new HashMap<>(original);

// Using putAll
Map<String, Integer> map = new HashMap<>();
map.putAll(original);

// From entries (Java 9+)
Map<String, Integer> fromEntries = Map.ofEntries(
    Map.entry("apple", 5),
    Map.entry("banana", 3),
    Map.entry("cherry", 7)
);`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Basic Methods Section */}
          <section id="basic-methods" className="mb-12">
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

          {/* View Methods Section */}
          <section id="view-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              View Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {viewMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Update Methods Section */}
          <section id="update-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Update Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {updateMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Compute Methods Section */}
          <section id="compute-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Compute Methods (Java 8+)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {computeMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Utility Methods Section */}
          <section id="utility-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Utility Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {utilityMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
              Practical Examples
            </h2>
            
            <Accordion>
              <AccordionItem title="Word Frequency Counter" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class WordFrequency {
    public static Map<String, Integer> countWords(String text) {
        Map<String, Integer> frequency = new HashMap<>();
        String[] words = text.toLowerCase().split("\\\\s+");
        
        for (String word : words) {
            // Using merge (cleanest approach)
            frequency.merge(word, 1, Integer::sum);
        }
        
        return frequency;
    }
    
    public static void main(String[] args) {
        String text = "the quick brown fox jumps over the lazy dog the fox";
        Map<String, Integer> freq = countWords(text);
        
        System.out.println("Word frequencies:");
        freq.forEach((word, count) -> 
            System.out.println(word + ": " + count));
        
        // Find most frequent word
        String mostFrequent = Collections.max(
            freq.entrySet(), 
            Map.Entry.comparingByValue()
        ).getKey();
        System.out.println("Most frequent: " + mostFrequent);
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Group By Category">
                <CodeBlock code={`import java.util.*;

public class GroupByExample {
    public static void main(String[] args) {
        // Products: {name, category}
        String[][] products = {
            {"iPhone", "Electronics"},
            {"T-Shirt", "Clothing"},
            {"Laptop", "Electronics"},
            {"Jeans", "Clothing"},
            {"Headphones", "Electronics"}
        };
        
        // Group products by category using computeIfAbsent
        Map<String, List<String>> byCategory = new HashMap<>();
        
        for (String[] product : products) {
            String name = product[0];
            String category = product[1];
            
            byCategory.computeIfAbsent(category, k -> new ArrayList<>())
                      .add(name);
        }
        
        // Display grouped products
        byCategory.forEach((category, items) -> {
            System.out.println(category + ":");
            items.forEach(item -> System.out.println("  - " + item));
        });
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Two Sum Problem">
                <CodeBlock code={`import java.util.*;

public class TwoSum {
    public static int[] findTwoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            
            seen.put(nums[i], i);
        }
        
        return new int[]{-1, -1}; // Not found
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        
        int[] result = findTwoSum(nums, target);
        System.out.println("Indices: " + Arrays.toString(result)); // [0, 1]
        System.out.println("Values: " + nums[result[0]] + " + " + nums[result[1]]);
        // Values: 2 + 7
    }
}`} />
              </AccordionItem>

              <AccordionItem title="Caching with computeIfAbsent">
                <CodeBlock code={`import java.util.*;

public class FibonacciCache {
    private static Map<Integer, Long> cache = new HashMap<>();
    
    public static long fibonacci(int n) {
        if (n <= 1) return n;
        
        // computeIfAbsent only calculates if not in cache
        return cache.computeIfAbsent(n, key -> 
            fibonacci(key - 1) + fibonacci(key - 2));
    }
    
    public static void main(String[] args) {
        System.out.println("fib(10) = " + fibonacci(10));  // 55
        System.out.println("fib(20) = " + fibonacci(20));  // 6765
        System.out.println("fib(40) = " + fibonacci(40));  // 102334155
        
        System.out.println("Cache size: " + cache.size());
        System.out.println("Cache: " + cache);
    }
}`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Interview Questions Section */}
          <section id="interview" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
              Interview Questions
            </h2>
            
            <Link 
              to="/interview/hashmap" 
              className="block group"
            >
              <div className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        HashMap Interview Preparation
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400 text-sm mt-1">
                        Theoretical questions & coding problems with solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                    <span className="text-sm font-medium">Start Learning</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400">Theoretical Q&A</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">LeetCode Problems</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">FAANG Questions</span>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
