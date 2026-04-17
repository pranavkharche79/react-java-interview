import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function HashMapInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="HashMap Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/hashmap" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to HashMap
            </Link>
          </div>

          <PageHeader
            title="HashMap Interview Questions"
            description="Master Java HashMap with theoretical concepts and hands-on coding problems"
            icon="map"
            gradient="amber"
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
              <AccordionItem title="1. How does HashMap work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    HashMap uses an array of buckets. Each bucket contains a linked list (or tree in Java 8+) of entries.
                  </p>
                  <CodeBlock code={`// Internal structure
class HashMap<K,V> {
    Node<K,V>[] table;  // Array of buckets
    int size;           // Number of entries
    float loadFactor;   // Default 0.75
    int threshold;      // capacity * loadFactor
}

class Node<K,V> {
    final int hash;
    final K key;
    V value;
    Node<K,V> next;  // For collision handling
}

// How put() works:
// 1. Calculate hash: hash = key.hashCode() ^ (key.hashCode() >>> 16)
// 2. Find bucket index: index = hash & (capacity - 1)
// 3. If bucket empty: create new node
// 4. If key exists: update value
// 5. Else: add to linked list (or tree if > 8 nodes)
// 6. If size > threshold: resize (double capacity)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. What happens when two keys have the same hashCode?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    This is called a <strong>hash collision</strong>. HashMap handles it using chaining (linked list/tree in same bucket).
                  </p>
                  <CodeBlock code={`// Collision handling:
// 1. Both keys go to same bucket
// 2. They're stored in a linked list at that bucket
// 3. When retrieving, equals() is used to find correct key

// Java 8+ optimization (Treeification):
// - If bucket has > 8 entries: LinkedList → Red-Black Tree
// - If bucket drops to < 6 entries: Tree → LinkedList
// - Tree operations: O(log n) instead of O(n)

// Example:
class Person {
    @Override
    public int hashCode() {
        return 42;  // Bad! All keys in same bucket
    }
}
// All Person keys would collide, O(n) lookups!

// Good hashCode uses multiple fields:
@Override
public int hashCode() {
    return Objects.hash(name, age, id);
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Why is initial capacity a power of 2?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    It allows using bitwise AND instead of modulo for faster bucket index calculation.
                  </p>
                  <CodeBlock code={`// Index calculation:
// If capacity is power of 2:
index = hash & (capacity - 1);  // Fast bitwise AND

// Example: capacity = 16 (binary: 10000)
// capacity - 1 = 15 (binary: 01111)
// hash & 15 = last 4 bits of hash (0-15)

// If not power of 2:
index = hash % capacity;  // Slower modulo operation

// HashMap always rounds up to next power of 2
new HashMap<>(10);  // Actual capacity: 16
new HashMap<>(17);  // Actual capacity: 32

// Default capacity: 16
// Maximum capacity: 2^30`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. What is the difference between HashMap and Hashtable?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-emerald-600">HashMap</th>
                          <th className="text-center py-2 text-amber-600">Hashtable</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Synchronization</td>
                          <td className="text-center">Not synchronized</td>
                          <td className="text-center">Synchronized</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Null keys/values</td>
                          <td className="text-center text-emerald-600">Allows ✓</td>
                          <td className="text-center text-red-600">Throws NPE</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Performance</td>
                          <td className="text-center text-emerald-600">Faster ✓</td>
                          <td className="text-center">Slower</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Iterator</td>
                          <td className="text-center">Fail-fast</td>
                          <td className="text-center">Fail-safe (Enumerator)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Recommendation</td>
                          <td className="text-center text-emerald-600">Use this ✓</td>
                          <td className="text-center text-red-600">Legacy, avoid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="5. HashMap vs TreeMap vs LinkedHashMap">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2">HashMap</th>
                          <th className="text-center py-2">TreeMap</th>
                          <th className="text-center py-2">LinkedHashMap</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Order</td>
                          <td className="text-center">None</td>
                          <td className="text-center">Sorted (natural/comparator)</td>
                          <td className="text-center">Insertion order</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">get/put</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td className="text-center">O(log n)</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Null key</td>
                          <td className="text-center text-emerald-600">Yes</td>
                          <td className="text-center text-red-600">No</td>
                          <td className="text-center text-emerald-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="py-2">Use case</td>
                          <td className="text-center">General purpose</td>
                          <td className="text-center">Sorted data</td>
                          <td className="text-center">Cache (LRU)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="6. What is the contract between equals() and hashCode()?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li>If <code>a.equals(b)</code> is <code>true</code>, then <code>a.hashCode() == b.hashCode()</code></li>
                      <li>If hashCodes differ, objects are definitely not equal</li>
                      <li>Same hashCode does NOT mean equals (collisions allowed)</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// BAD: Violates contract
class BadKey {
    int id;
    
    @Override
    public boolean equals(Object o) {
        return this.id == ((BadKey)o).id;
    }
    
    // Missing hashCode()! Uses Object.hashCode()
    // Two equal objects may have different hashCodes
}

// CORRECT:
class GoodKey {
    int id;
    String name;
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GoodKey that = (GoodKey) o;
        return id == that.id && Objects.equals(name, that.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id, name);  // Uses same fields as equals
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. How to make HashMap thread-safe?">
                <div className="space-y-4">
                  <CodeBlock code={`// Method 1: Collections.synchronizedMap()
Map<K,V> syncMap = Collections.synchronizedMap(new HashMap<>());
// Must synchronize during iteration
synchronized(syncMap) {
    for (Map.Entry<K,V> e : syncMap.entrySet()) { }
}

// Method 2: ConcurrentHashMap (RECOMMENDED)
ConcurrentHashMap<K,V> concurrentMap = new ConcurrentHashMap<>();
// No external synchronization needed
// Uses fine-grained locking (segments/buckets)
// No ConcurrentModificationException during iteration

// ConcurrentHashMap restrictions:
// - Null keys and values NOT allowed
// - Iterators may not reflect latest changes

// Method 3: Hashtable (legacy, avoid)
Hashtable<K,V> table = new Hashtable<>();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. What is the load factor and when does HashMap resize?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Load Factor:</strong> 0.75 (default) - ratio of entries to capacity</li>
                      <li><strong>Threshold:</strong> capacity × loadFactor</li>
                      <li><strong>Resize trigger:</strong> When size &gt; threshold</li>
                      <li><strong>Resize action:</strong> Double capacity, rehash all entries</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Default: capacity=16, loadFactor=0.75
// Threshold = 16 * 0.75 = 12
// Resize when 13th element added

// Lower load factor:
// - Less collisions
// - More memory
// - Faster lookups

// Higher load factor:
// - More collisions
// - Less memory
// - Slower lookups

// Pre-size to avoid resizing:
int expectedSize = 1000;
// Capacity needed = expectedSize / loadFactor
Map<K,V> map = new HashMap<>(1334);  // 1000 / 0.75`} />
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
              <AccordionItem title="1. Two Sum" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #1</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        
        map.put(nums[i], i);
    }
    
    return new int[]{};
}

// Example: nums = [2,7,11,15], target = 9
// Output: [0, 1] (nums[0] + nums[1] = 9)
// Time: O(n), Space: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Group Anagrams">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #49</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String s : strs) {
        // Create sorted key
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        
        // Group by sorted key
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    
    return new ArrayList<>(map.values());
}

// Example: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. First Unique Character in String">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #387</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public int firstUniqChar(String s) {
    Map<Character, Integer> count = new HashMap<>();
    
    // Count occurrences
    for (char c : s.toCharArray()) {
        count.put(c, count.getOrDefault(c, 0) + 1);
    }
    
    // Find first with count 1
    for (int i = 0; i < s.length(); i++) {
        if (count.get(s.charAt(i)) == 1) {
            return i;
        }
    }
    
    return -1;
}

// Example: "leetcode" → 0 (first 'l')
// Example: "loveleetcode" → 2 (first 'v')`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Subarray Sum Equals K">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #560</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixSumCount = new HashMap<>();
    prefixSumCount.put(0, 1);  // Empty subarray
    
    int count = 0;
    int sum = 0;
    
    for (int num : nums) {
        sum += num;
        
        // If (sum - k) exists, subarray with sum k exists
        if (prefixSumCount.containsKey(sum - k)) {
            count += prefixSumCount.get(sum - k);
        }
        
        prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
    }
    
    return count;
}

// Example: nums = [1,1,1], k = 2
// Output: 2 (subarrays [1,1] at indices 0-1 and 1-2)
// Time: O(n), Space: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Longest Consecutive Sequence">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #128</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);
    
    int longest = 0;
    
    for (int num : set) {
        // Only start counting from sequence start
        if (!set.contains(num - 1)) {
            int currentNum = num;
            int streak = 1;
            
            while (set.contains(currentNum + 1)) {
                currentNum++;
                streak++;
            }
            
            longest = Math.max(longest, streak);
        }
    }
    
    return longest;
}

// Example: [100, 4, 200, 1, 3, 2]
// Output: 4 (sequence [1,2,3,4])
// Time: O(n), Space: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. LRU Cache">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #146</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <CodeBlock code={`class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // accessOrder = true
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

// Custom implementation with HashMap + Doubly Linked List
class LRUCacheCustom {
    class Node {
        int key, value;
        Node prev, next;
    }
    
    private Map<Integer, Node> cache = new HashMap<>();
    private Node head, tail;
    private int capacity;
    
    // Move node to head, remove from tail when full
    // O(1) for both get and put
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. Top K Frequent Elements">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #347</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public int[] topKFrequent(int[] nums, int k) {
    // Count frequencies
    Map<Integer, Integer> count = new HashMap<>();
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    // Min-heap of size k
    PriorityQueue<Integer> heap = new PriorityQueue<>(
        (a, b) -> count.get(a) - count.get(b)
    );
    
    for (int num : count.keySet()) {
        heap.offer(num);
        if (heap.size() > k) {
            heap.poll();
        }
    }
    
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = heap.poll();
    }
    return result;
}

// Example: nums = [1,1,1,2,2,3], k = 2
// Output: [1, 2]
// Time: O(n log k), Space: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. Find All Duplicates in Array">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #442</span>
                  </div>
                  <CodeBlock code={`// Using HashMap
public List<Integer> findDuplicates(int[] nums) {
    Map<Integer, Integer> count = new HashMap<>();
    List<Integer> result = new ArrayList<>();
    
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    for (Map.Entry<Integer, Integer> e : count.entrySet()) {
        if (e.getValue() == 2) {
            result.add(e.getKey());
        }
    }
    return result;
}

// O(1) space: Use array indices as markers
public List<Integer> findDuplicatesOptimal(int[] nums) {
    List<Integer> result = new ArrayList<>();
    
    for (int i = 0; i < nums.length; i++) {
        int index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.add(Math.abs(nums[i]));
        }
        nums[index] = -nums[index];
    }
    return result;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="9. Copy List with Random Pointer">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #138</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`class Node {
    int val;
    Node next, random;
}

public Node copyRandomList(Node head) {
    if (head == null) return null;
    
    Map<Node, Node> map = new HashMap<>();
    
    // First pass: create all nodes
    Node curr = head;
    while (curr != null) {
        map.put(curr, new Node(curr.val));
        curr = curr.next;
    }
    
    // Second pass: connect next and random pointers
    curr = head;
    while (curr != null) {
        map.get(curr).next = map.get(curr.next);
        map.get(curr).random = map.get(curr.random);
        curr = curr.next;
    }
    
    return map.get(head);
}

// Time: O(n), Space: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="10. Isomorphic Strings">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #205</span>
                  </div>
                  <CodeBlock code={`public boolean isIsomorphic(String s, String t) {
    if (s.length() != t.length()) return false;
    
    Map<Character, Character> sToT = new HashMap<>();
    Map<Character, Character> tToS = new HashMap<>();
    
    for (int i = 0; i < s.length(); i++) {
        char sc = s.charAt(i);
        char tc = t.charAt(i);
        
        // Check s -> t mapping
        if (sToT.containsKey(sc) && sToT.get(sc) != tc) {
            return false;
        }
        
        // Check t -> s mapping
        if (tToS.containsKey(tc) && tToS.get(tc) != sc) {
            return false;
        }
        
        sToT.put(sc, tc);
        tToS.put(tc, sc);
    }
    
    return true;
}

// Example: "egg" and "add" → true (e→a, g→d)
// Example: "foo" and "bar" → false`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

