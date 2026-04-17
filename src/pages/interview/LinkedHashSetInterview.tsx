import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedHashSetInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedHashSet Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/linkedhashset" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to LinkedHashSet
            </Link>
          </div>

          <PageHeader
            title="LinkedHashSet Interview Questions"
            description="Master Java LinkedHashSet with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="blue"
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
              <AccordionItem title="1. How does LinkedHashSet maintain insertion order?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    LinkedHashSet extends HashSet and is backed by a <strong>LinkedHashMap</strong>. It maintains a doubly-linked list running through all entries, preserving insertion order.
                  </p>
                  <CodeBlock code={`// Internal structure
public class LinkedHashSet<E> extends HashSet<E> {
    // Backed by LinkedHashMap
    // Each entry has: key, value, hash, next, before, after
    //                                    ↑ doubly-linked list
}

LinkedHashSet<String> set = new LinkedHashSet<>();
set.add("C");
set.add("A");
set.add("B");

// Iteration preserves insertion order
for (String s : set) {
    System.out.println(s);  // C, A, B (insertion order)
}

// Compare with HashSet
HashSet<String> hashSet = new HashSet<>(Arrays.asList("C", "A", "B"));
// Iteration order is unpredictable`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. LinkedHashSet vs HashSet vs TreeSet">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-orange-600">HashSet</th>
                          <th className="text-center py-2 text-blue-600">LinkedHashSet</th>
                          <th className="text-center py-2 text-emerald-600">TreeSet</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Ordering</td>
                          <td className="text-center">None</td>
                          <td className="text-center">Insertion</td>
                          <td className="text-center">Sorted</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Performance</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td className="text-center text-amber-600">O(log n)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Memory</td>
                          <td className="text-center text-emerald-600">Lowest</td>
                          <td className="text-center text-amber-600">Medium</td>
                          <td className="text-center text-amber-600">Higher</td>
                        </tr>
                        <tr>
                          <td className="py-2">Null</td>
                          <td className="text-center">✅</td>
                          <td className="text-center">✅</td>
                          <td className="text-center">❌</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// When to use each:

// HashSet - fastest, order doesn't matter
Set<Integer> seen = new HashSet<>();

// LinkedHashSet - need insertion order
Set<String> uniqueInOrder = new LinkedHashSet<>();
// e.g., removing duplicates while preserving order

// TreeSet - need sorted order or range operations
Set<Integer> sorted = new TreeSet<>();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. What is the performance overhead of LinkedHashSet?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    LinkedHashSet has slightly more overhead than HashSet due to maintaining the doubly-linked list:
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Time:</strong> Still O(1) for add, remove, contains - just slightly slower constant factor</li>
                      <li><strong>Space:</strong> Extra 2 pointers per entry (before, after)</li>
                      <li><strong>Iteration:</strong> Faster than HashSet (linear through linked list vs. sparse bucket traversal)</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Memory per element:
// HashSet: key + hash + next pointer
// LinkedHashSet: key + hash + next + before + after pointers

// Iteration performance:
Set<Integer> hashSet = new HashSet<>(1000);
// Iteration may visit empty buckets

Set<Integer> linkedSet = new LinkedHashSet<>(1000);
// Iteration is O(n) exactly, through linked list`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. How to remove duplicates while preserving order?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    LinkedHashSet is the perfect choice for removing duplicates while keeping the first occurrence order.
                  </p>
                  <CodeBlock code={`// Remove duplicates preserving order
List<Integer> withDups = Arrays.asList(3, 1, 2, 3, 1, 4, 2);

// Method 1: LinkedHashSet constructor
List<Integer> unique = new ArrayList<>(new LinkedHashSet<>(withDups));
System.out.println(unique);  // [3, 1, 2, 4]

// Method 2: Stream with LinkedHashSet
List<Integer> unique2 = withDups.stream()
    .collect(Collectors.toCollection(LinkedHashSet::new))
    .stream()
    .collect(Collectors.toList());

// Method 3: Stream distinct (uses LinkedHashSet internally)
List<Integer> unique3 = withDups.stream()
    .distinct()
    .collect(Collectors.toList());`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Can LinkedHashSet maintain access order like LinkedHashMap?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    <strong>No.</strong> LinkedHashSet only supports insertion order, unlike LinkedHashMap which can maintain access order.
                  </p>
                  <CodeBlock code={`// LinkedHashMap can use access order
Map<String, Integer> lruMap = new LinkedHashMap<>(16, 0.75f, true);
// Third parameter 'true' = access order

lruMap.put("a", 1);
lruMap.put("b", 2);
lruMap.put("c", 3);
lruMap.get("a");  // Access "a"
// Now order is: b, c, a (a moved to end)

// LinkedHashSet has no access-order option
// It always uses insertion order
Set<String> set = new LinkedHashSet<>();
set.add("a");
set.add("b");
set.contains("a");  // Doesn't change order
// Order remains: a, b`} />
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
              <AccordionItem title="1. First Unique Character in a String" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #387</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public int firstUniqChar(String s) {
    // LinkedHashSet to track unique chars in order
    Set<Character> unique = new LinkedHashSet<>();
    Set<Character> seen = new HashSet<>();
    
    for (char c : s.toCharArray()) {
        if (!seen.contains(c)) {
            unique.add(c);
            seen.add(c);
        } else {
            unique.remove(c);
        }
    }
    
    if (unique.isEmpty()) return -1;
    
    char first = unique.iterator().next();
    return s.indexOf(first);
}

// Example: "leetcode" → 0 (first unique is 'l')
// Example: "loveleetcode" → 2 (first unique is 'v')`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Remove Duplicate Letters">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #316</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Remove duplicates to get lexicographically smallest result.
                  </p>
                  <CodeBlock code={`public String removeDuplicateLetters(String s) {
    int[] lastIndex = new int[26];
    for (int i = 0; i < s.length(); i++) {
        lastIndex[s.charAt(i) - 'a'] = i;
    }
    
    Set<Character> seen = new LinkedHashSet<>();
    Deque<Character> stack = new ArrayDeque<>();
    
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if (seen.contains(c)) continue;
        
        // Pop larger chars that appear later
        while (!stack.isEmpty() && 
               stack.peek() > c && 
               lastIndex[stack.peek() - 'a'] > i) {
            seen.remove(stack.pop());
        }
        
        stack.push(c);
        seen.add(c);
    }
    
    StringBuilder sb = new StringBuilder();
    for (char c : stack) {
        sb.insert(0, c);
    }
    return sb.toString();
}

// Example: "bcabc" → "abc"
// Example: "cbacdcbc" → "acdb"`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Insert Delete GetRandom O(1)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #380</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`class RandomizedSet {
    private List<Integer> list;
    private Map<Integer, Integer> map;  // value -> index
    private Random rand;
    
    public RandomizedSet() {
        list = new ArrayList<>();
        map = new HashMap<>();
        rand = new Random();
    }
    
    public boolean insert(int val) {
        if (map.containsKey(val)) return false;
        
        map.put(val, list.size());
        list.add(val);
        return true;
    }
    
    public boolean remove(int val) {
        if (!map.containsKey(val)) return false;
        
        int index = map.get(val);
        int lastVal = list.get(list.size() - 1);
        
        // Move last element to removed position
        list.set(index, lastVal);
        map.put(lastVal, index);
        
        // Remove last element
        list.remove(list.size() - 1);
        map.remove(val);
        
        return true;
    }
    
    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. LRU Cache (LinkedHashSet concept)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #146</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    While LinkedHashSet doesn't support access order, LinkedHashMap does. Here's LRU using LinkedHashMap:
                  </p>
                  <CodeBlock code={`class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // access order
        this.capacity = capacity;
    }
    
    public int get(int key) {
        return super.getOrDefault(key, -1);
    }
    
    public void put(int key, int value) {
        super.put(key, value);
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}

// Manual implementation using LinkedHashSet-like structure
class LRUCacheManual {
    private Map<Integer, Integer> map;
    private Deque<Integer> order;  // Most recent at end
    private int capacity;
    
    public LRUCacheManual(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        order = new LinkedList<>();
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        
        // Move to end (most recent)
        order.remove(key);
        order.addLast(key);
        return map.get(key);
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            order.remove(key);
        } else if (map.size() >= capacity) {
            int oldest = order.removeFirst();
            map.remove(oldest);
        }
        
        map.put(key, value);
        order.addLast(key);
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Distinct Subsequences II (using ordered set concept)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #940</span>
                  </div>
                  <CodeBlock code={`public int distinctSubseqII(String s) {
    int MOD = 1_000_000_007;
    int n = s.length();
    
    // dp[i] = number of distinct subsequences ending at i
    long[] dp = new long[n];
    Arrays.fill(dp, 1);
    
    // Track last occurrence of each char
    Map<Character, Integer> lastOccur = new HashMap<>();
    
    for (int i = 0; i < n; i++) {
        char c = s.charAt(i);
        
        // Add all previous subsequences + this char
        for (int j = 0; j < i; j++) {
            dp[i] = (dp[i] + dp[j]) % MOD;
        }
        
        // Subtract duplicates (subsequences ending at last occurrence)
        if (lastOccur.containsKey(c)) {
            int lastIdx = lastOccur.get(c);
            for (int j = 0; j < lastIdx; j++) {
                dp[i] = (dp[i] - dp[j] + MOD) % MOD;
            }
            dp[i] = (dp[i] - 1 + MOD) % MOD;  // Subtract single char
        }
        
        lastOccur.put(c, i);
    }
    
    long result = 0;
    for (long d : dp) {
        result = (result + d) % MOD;
    }
    
    return (int) result;
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

