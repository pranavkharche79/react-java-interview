import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function TreeMapInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="TreeMap Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/treemap" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to TreeMap
            </Link>
          </div>

          <PageHeader
            title="TreeMap Interview Questions"
            description="Master Java TreeMap with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="emerald"
          />

          {/* Theoretical Questions */}
          <section id="theoretical" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Theoretical Questions</h2>
            </div>
            
            <Accordion>
              <AccordionItem title="1. How does TreeMap work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeMap is implemented using a <strong>Red-Black Tree</strong> - a self-balancing binary search tree that guarantees O(log n) operations.
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Red-Black Tree Rules:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Every node is either red or black</li>
                      <li>Root is always black</li>
                      <li>No two adjacent red nodes (parent-child)</li>
                      <li>Every path from root to null has same number of black nodes</li>
                      <li>Tree height is always ≤ 2*log(n+1)</li>
                    </ul>
                  </div>
                  <CodeBlock code={`TreeMap<Integer, String> map = new TreeMap<>();
map.put(5, "Five");
map.put(2, "Two");
map.put(8, "Eight");
map.put(1, "One");

// Internal structure (simplified):
//       5 (Black)
//      / \\
//     2   8 (Red)
//    /
//   1 (Red)

// All operations: O(log n)
map.get(5);           // O(log n)
map.put(3, "Three");  // O(log n)
map.remove(2);        // O(log n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. TreeMap vs HashMap: When to use which?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-primary-600">HashMap</th>
                          <th className="text-center py-2 text-emerald-600">TreeMap</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Time Complexity</td>
                          <td className="text-center text-emerald-600">O(1) average</td>
                          <td className="text-center text-amber-600">O(log n)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Ordering</td>
                          <td className="text-center">None</td>
                          <td className="text-center text-emerald-600">Sorted by keys</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Null Keys</td>
                          <td className="text-center">✅ One</td>
                          <td className="text-center">❌ No</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Range Operations</td>
                          <td className="text-center">❌</td>
                          <td className="text-center text-emerald-600">✅</td>
                        </tr>
                        <tr>
                          <td className="py-2">NavigableMap</td>
                          <td className="text-center">❌</td>
                          <td className="text-center text-emerald-600">✅</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// Use HashMap when:
// - You need fastest lookups
// - Order doesn't matter
Map<String, Integer> hashMap = new HashMap<>();

// Use TreeMap when:
// - You need sorted keys
// - You need range queries
// - You need floor/ceiling operations
TreeMap<String, Integer> treeMap = new TreeMap<>();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. What are NavigableMap methods in TreeMap?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeMap implements NavigableMap interface, providing powerful navigation methods:
                  </p>
                  <CodeBlock code={`TreeMap<Integer, String> map = new TreeMap<>();
map.put(10, "Ten");
map.put(20, "Twenty");
map.put(30, "Thirty");
map.put(40, "Forty");

// Key-based navigation
map.firstKey();        // 10 (smallest key)
map.lastKey();         // 40 (largest key)
map.floorKey(25);      // 20 (largest key ≤ 25)
map.ceilingKey(25);    // 30 (smallest key ≥ 25)
map.lowerKey(30);      // 20 (largest key < 30)
map.higherKey(30);     // 40 (smallest key > 30)

// Entry-based navigation
map.firstEntry();      // 10=Ten
map.lastEntry();       // 40=Forty
map.pollFirstEntry();  // Removes and returns 10=Ten
map.pollLastEntry();   // Removes and returns 40=Forty

// Range views
map.headMap(30);       // {10=Ten, 20=Twenty}
map.tailMap(30);       // {30=Thirty, 40=Forty}
map.subMap(15, 35);    // {20=Twenty, 30=Thirty}

// Descending views
map.descendingMap();   // Reverse order view
map.descendingKeySet();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. How to use custom Comparator with TreeMap?">
                <div className="space-y-4">
                  <CodeBlock code={`// Natural ordering (Comparable)
TreeMap<String, Integer> natural = new TreeMap<>();
natural.put("banana", 2);
natural.put("apple", 1);
// Keys sorted: apple, banana

// Custom comparator - reverse order
TreeMap<String, Integer> reverse = new TreeMap<>(Collections.reverseOrder());
reverse.put("banana", 2);
reverse.put("apple", 1);
// Keys sorted: banana, apple

// Custom comparator - by length
TreeMap<String, Integer> byLength = new TreeMap<>(
    Comparator.comparingInt(String::length)
              .thenComparing(Comparator.naturalOrder())
);

// Comparator for custom objects
class Employee {
    String name;
    int salary;
}

TreeMap<Employee, String> bySalary = new TreeMap<>(
    Comparator.comparingInt(e -> e.salary)
);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Why doesn't TreeMap allow null keys?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeMap needs to compare keys for ordering. Comparing with null throws <code>NullPointerException</code>.
                  </p>
                  <CodeBlock code={`TreeMap<String, Integer> map = new TreeMap<>();
map.put("key", 1);
map.put(null, 2);  // NullPointerException!

// Null values are allowed
map.put("nullValue", null);  // OK

// Workaround with custom comparator (not recommended)
TreeMap<String, Integer> nullFriendly = new TreeMap<>(
    Comparator.nullsFirst(Comparator.naturalOrder())
);
nullFriendly.put(null, 0);   // Works, but avoid this!
nullFriendly.put("key", 1);

// Better: Use Optional or a sentinel value
Map<String, Integer> map2 = new TreeMap<>();
map2.put("NULL_KEY", 0);  // Use sentinel`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Coding Problems */}
          <section id="coding" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Coding Problems</h2>
            </div>
            
            <Accordion>
              <AccordionItem title="1. My Calendar II" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #731</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Implement a calendar that returns false if triple booking occurs.
                  </p>
                  <CodeBlock code={`class MyCalendarTwo {
    private TreeMap<Integer, Integer> timeline;
    
    public MyCalendarTwo() {
        timeline = new TreeMap<>();
    }
    
    public boolean book(int start, int end) {
        // Add +1 at start, -1 at end
        timeline.put(start, timeline.getOrDefault(start, 0) + 1);
        timeline.put(end, timeline.getOrDefault(end, 0) - 1);
        
        // Check if any point has 3+ overlapping events
        int ongoing = 0;
        for (int count : timeline.values()) {
            ongoing += count;
            if (ongoing >= 3) {
                // Revert the booking
                timeline.put(start, timeline.get(start) - 1);
                timeline.put(end, timeline.get(end) + 1);
                return false;
            }
        }
        
        return true;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Time Based Key-Value Store">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #981</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`class TimeMap {
    private Map<String, TreeMap<Integer, String>> map;
    
    public TimeMap() {
        map = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        map.computeIfAbsent(key, k -> new TreeMap<>())
           .put(timestamp, value);
    }
    
    public String get(String key, int timestamp) {
        if (!map.containsKey(key)) return "";
        
        TreeMap<Integer, String> timeMap = map.get(key);
        Integer floor = timeMap.floorKey(timestamp);
        
        return floor == null ? "" : timeMap.get(floor);
    }
}

// Example:
// set("foo", "bar", 1)
// get("foo", 1) → "bar"
// get("foo", 3) → "bar" (largest timestamp ≤ 3)
// set("foo", "bar2", 4)
// get("foo", 4) → "bar2"
// get("foo", 5) → "bar2"`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Count of Smaller Numbers After Self">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #315</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public List<Integer> countSmaller(int[] nums) {
    int n = nums.length;
    Integer[] result = new Integer[n];
    
    // TreeMap to count elements to the right
    TreeMap<Integer, Integer> sortedRight = new TreeMap<>();
    
    // Process from right to left
    for (int i = n - 1; i >= 0; i--) {
        int num = nums[i];
        
        // Count elements smaller than current
        int count = 0;
        for (int smaller : sortedRight.headMap(num).values()) {
            count += smaller;
        }
        result[i] = count;
        
        // Add current element
        sortedRight.put(num, sortedRight.getOrDefault(num, 0) + 1);
    }
    
    return Arrays.asList(result);
}

// More efficient: use augmented BST or BIT
// This TreeMap solution is O(n²) worst case`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Odd Even Jump">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #975</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public int oddEvenJumps(int[] arr) {
    int n = arr.length;
    
    // oddHigher[i] = can reach end starting with odd jump from i
    // evenHigher[i] = can reach end starting with even jump from i
    boolean[] oddHigher = new boolean[n];
    boolean[] evenHigher = new boolean[n];
    oddHigher[n-1] = evenHigher[n-1] = true;
    
    // TreeMap: value -> index (rightmost)
    TreeMap<Integer, Integer> map = new TreeMap<>();
    map.put(arr[n-1], n-1);
    
    for (int i = n - 2; i >= 0; i--) {
        // Odd jump: find smallest value >= arr[i]
        Integer oddKey = map.ceilingKey(arr[i]);
        if (oddKey != null) {
            oddHigher[i] = evenHigher[map.get(oddKey)];
        }
        
        // Even jump: find largest value <= arr[i]
        Integer evenKey = map.floorKey(arr[i]);
        if (evenKey != null) {
            evenHigher[i] = oddHigher[map.get(evenKey)];
        }
        
        map.put(arr[i], i);
    }
    
    int count = 0;
    for (boolean b : oddHigher) {
        if (b) count++;
    }
    return count;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Stock Price Fluctuation">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #2034</span>
                  </div>
                  <CodeBlock code={`class StockPrice {
    private TreeMap<Integer, Integer> timeline;  // timestamp -> price
    private TreeMap<Integer, Integer> prices;    // price -> count
    
    public StockPrice() {
        timeline = new TreeMap<>();
        prices = new TreeMap<>();
    }
    
    public void update(int timestamp, int price) {
        // Remove old price if updating
        if (timeline.containsKey(timestamp)) {
            int oldPrice = timeline.get(timestamp);
            prices.put(oldPrice, prices.get(oldPrice) - 1);
            if (prices.get(oldPrice) == 0) {
                prices.remove(oldPrice);
            }
        }
        
        // Add new price
        timeline.put(timestamp, price);
        prices.put(price, prices.getOrDefault(price, 0) + 1);
    }
    
    public int current() {
        return timeline.lastEntry().getValue();
    }
    
    public int maximum() {
        return prices.lastKey();
    }
    
    public int minimum() {
        return prices.firstKey();
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Range Module">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #715</span>
                  </div>
                  <CodeBlock code={`class RangeModule {
    private TreeMap<Integer, Integer> intervals;  // start -> end
    
    public RangeModule() {
        intervals = new TreeMap<>();
    }
    
    public void addRange(int left, int right) {
        // Find overlapping intervals
        Integer start = intervals.floorKey(left);
        Integer end = intervals.floorKey(right);
        
        if (start != null && intervals.get(start) >= left) {
            left = start;
        }
        if (end != null && intervals.get(end) > right) {
            right = intervals.get(end);
        }
        
        // Remove overlapping intervals
        intervals.subMap(left, right).clear();
        intervals.put(left, right);
    }
    
    public boolean queryRange(int left, int right) {
        Integer start = intervals.floorKey(left);
        return start != null && intervals.get(start) >= right;
    }
    
    public void removeRange(int left, int right) {
        Integer start = intervals.floorKey(left);
        Integer end = intervals.floorKey(right);
        
        // Handle right boundary
        if (end != null && intervals.get(end) > right) {
            intervals.put(right, intervals.get(end));
        }
        
        // Handle left boundary
        if (start != null && intervals.get(start) > left) {
            intervals.put(start, left);
        }
        
        // Remove intervals completely inside [left, right)
        intervals.subMap(left, right).clear();
    }
}`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

