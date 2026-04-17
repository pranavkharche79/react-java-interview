import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedHashMapInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedHashMap Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/linkedhashmap" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to LinkedHashMap
            </Link>
          </div>

          <PageHeader
            title="LinkedHashMap Interview Questions"
            description="Master Java LinkedHashMap with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="violet"
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
              <AccordionItem title="1. How does LinkedHashMap maintain order?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    LinkedHashMap extends HashMap and maintains a <strong>doubly-linked list</strong> through all entries, preserving either insertion order or access order.
                  </p>
                  <CodeBlock code={`// Internal structure (simplified)
class LinkedHashMap<K,V> extends HashMap<K,V> {
    // Entry adds before/after pointers
    static class Entry<K,V> extends HashMap.Node<K,V> {
        Entry<K,V> before;  // Previous entry
        Entry<K,V> after;   // Next entry
    }
    
    Entry<K,V> head;  // Oldest entry
    Entry<K,V> tail;  // Newest entry
    boolean accessOrder;  // false = insertion, true = access
}

// Insertion order (default)
Map<String, Integer> insertionOrder = new LinkedHashMap<>();
insertionOrder.put("C", 3);
insertionOrder.put("A", 1);
insertionOrder.put("B", 2);
// Iteration: C, A, B

// Access order
Map<String, Integer> accessOrder = new LinkedHashMap<>(16, 0.75f, true);
accessOrder.put("C", 3);
accessOrder.put("A", 1);
accessOrder.put("B", 2);
accessOrder.get("C");  // Access C - moves to end
// Iteration: A, B, C`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. How to implement LRU Cache using LinkedHashMap?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    LinkedHashMap with access order is perfect for LRU (Least Recently Used) cache implementation.
                  </p>
                  <CodeBlock code={`class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private int capacity;
    
    public LRUCache(int capacity) {
        // accessOrder = true for LRU behavior
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        // Remove oldest when size exceeds capacity
        return size() > capacity;
    }
}

// Usage
LRUCache<Integer, String> cache = new LRUCache<>(3);
cache.put(1, "one");    // {1=one}
cache.put(2, "two");    // {1=one, 2=two}
cache.put(3, "three");  // {1=one, 2=two, 3=three}
cache.get(1);           // {2=two, 3=three, 1=one} - 1 moved to end
cache.put(4, "four");   // {3=three, 1=one, 4=four} - 2 evicted`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. LinkedHashMap vs HashMap vs TreeMap">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-primary-600">HashMap</th>
                          <th className="text-center py-2 text-violet-600">LinkedHashMap</th>
                          <th className="text-center py-2 text-emerald-600">TreeMap</th>
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
                          <td className="py-2">Null Keys</td>
                          <td className="text-center">✅</td>
                          <td className="text-center">✅</td>
                          <td className="text-center">❌</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="4. What is removeEldestEntry() method?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    <code>removeEldestEntry()</code> is called after every <code>put</code> and <code>putAll</code>. Override it to auto-remove old entries.
                  </p>
                  <CodeBlock code={`// Default implementation - never removes
protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
    return false;
}

// Custom implementation for size limit
@Override
protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
    return size() > MAX_SIZE;
}

// Custom implementation with condition
@Override
protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
    // Remove if too old (based on timestamp value)
    return eldest.getValue().timestamp < System.currentTimeMillis() - TIMEOUT;
}

// Note: eldest is the first entry (head of linked list)
// In insertion order: oldest insertion
// In access order: least recently accessed`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Performance comparison: Insertion vs Access order">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Insertion Order (default):</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>No overhead on get() operations</li>
                      <li>put() maintains order at tail</li>
                      <li>Slightly faster than access order mode</li>
                    </ul>
                  </div>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Access Order (accessOrder=true):</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>get() moves entry to tail (small overhead)</li>
                      <li>put() for existing key moves to tail</li>
                      <li>Perfect for LRU cache implementation</li>
                      <li>Slightly slower due to reordering on access</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Insertion order - get doesn't change order
Map<String, Integer> map1 = new LinkedHashMap<>();
map1.put("a", 1);
map1.put("b", 2);
map1.get("a");  // Order: a, b (unchanged)

// Access order - get moves to end
Map<String, Integer> map2 = new LinkedHashMap<>(16, 0.75f, true);
map2.put("a", 1);
map2.put("b", 2);
map2.get("a");  // Order: b, a (a moved to end)`} />
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
              <AccordionItem title="1. LRU Cache" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #146</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Elegant solution using LinkedHashMap
class LRUCache extends LinkedHashMap<Integer, Integer> {
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

// Manual implementation for interview
class LRUCacheManual {
    private int capacity;
    private Map<Integer, Node> map;
    private Node head, tail;  // Doubly linked list
    
    class Node {
        int key, value;
        Node prev, next;
        Node(int k, int v) { key = k; value = v; }
    }
    
    public LRUCacheManual(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        insertAtEnd(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        Node node = new Node(key, value);
        map.put(key, node);
        insertAtEnd(node);
        
        if (map.size() > capacity) {
            Node lru = head.next;
            remove(lru);
            map.remove(lru.key);
        }
    }
    
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void insertAtEnd(Node node) {
        node.prev = tail.prev;
        node.next = tail;
        tail.prev.next = node;
        tail.prev = node;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. LFU Cache">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #460</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    LFU (Least Frequently Used) cache removes the least frequently accessed element.
                  </p>
                  <CodeBlock code={`class LFUCache {
    private int capacity, minFreq;
    private Map<Integer, Integer> values;     // key -> value
    private Map<Integer, Integer> counts;     // key -> frequency
    private Map<Integer, LinkedHashSet<Integer>> freqKeys;  // freq -> keys
    
    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        values = new HashMap<>();
        counts = new HashMap<>();
        freqKeys = new HashMap<>();
    }
    
    public int get(int key) {
        if (!values.containsKey(key)) return -1;
        
        // Update frequency
        int freq = counts.get(key);
        counts.put(key, freq + 1);
        freqKeys.get(freq).remove(key);
        
        // Update minFreq if needed
        if (freqKeys.get(freq).isEmpty()) {
            freqKeys.remove(freq);
            if (minFreq == freq) minFreq++;
        }
        
        // Add to new frequency group (LinkedHashSet maintains order)
        freqKeys.computeIfAbsent(freq + 1, k -> new LinkedHashSet<>()).add(key);
        
        return values.get(key);
    }
    
    public void put(int key, int value) {
        if (capacity <= 0) return;
        
        if (values.containsKey(key)) {
            values.put(key, value);
            get(key);  // Update frequency
            return;
        }
        
        // Evict LFU element
        if (values.size() >= capacity) {
            // Get first (least recent) key with min frequency
            int evictKey = freqKeys.get(minFreq).iterator().next();
            freqKeys.get(minFreq).remove(evictKey);
            if (freqKeys.get(minFreq).isEmpty()) {
                freqKeys.remove(minFreq);
            }
            values.remove(evictKey);
            counts.remove(evictKey);
        }
        
        // Add new key
        values.put(key, value);
        counts.put(key, 1);
        freqKeys.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
        minFreq = 1;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. First Unique Number">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #1429</span>
                  </div>
                  <CodeBlock code={`class FirstUnique {
    private Map<Integer, Integer> count;
    private Set<Integer> unique;  // LinkedHashSet maintains insertion order
    
    public FirstUnique(int[] nums) {
        count = new HashMap<>();
        unique = new LinkedHashSet<>();
        
        for (int num : nums) {
            add(num);
        }
    }
    
    public int showFirstUnique() {
        if (unique.isEmpty()) return -1;
        return unique.iterator().next();  // First element
    }
    
    public void add(int value) {
        count.put(value, count.getOrDefault(value, 0) + 1);
        
        if (count.get(value) == 1) {
            unique.add(value);
        } else {
            unique.remove(value);
        }
    }
}

// Example:
// FirstUnique fu = new FirstUnique([2,3,5])
// fu.showFirstUnique() → 2
// fu.add(5)  // [2,3,5,5]
// fu.showFirstUnique() → 2
// fu.add(2)  // [2,3,5,5,2]
// fu.showFirstUnique() → 3`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Design Authentication Manager">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #1797</span>
                  </div>
                  <CodeBlock code={`class AuthenticationManager {
    private int ttl;
    private Map<String, Integer> tokens;  // tokenId -> expiry time
    
    public AuthenticationManager(int timeToLive) {
        this.ttl = timeToLive;
        // LinkedHashMap to maintain insertion order for cleanup
        this.tokens = new LinkedHashMap<>();
    }
    
    public void generate(String tokenId, int currentTime) {
        tokens.put(tokenId, currentTime + ttl);
    }
    
    public void renew(String tokenId, int currentTime) {
        if (tokens.containsKey(tokenId) && tokens.get(tokenId) > currentTime) {
            tokens.put(tokenId, currentTime + ttl);
        }
    }
    
    public int countUnexpiredTokens(int currentTime) {
        // Clean up expired tokens
        tokens.entrySet().removeIf(e -> e.getValue() <= currentTime);
        return tokens.size();
    }
}

// Optimized with automatic cleanup
class AuthenticationManagerOptimized {
    private int ttl;
    private LinkedHashMap<String, Integer> tokens;
    
    public AuthenticationManagerOptimized(int timeToLive) {
        this.ttl = timeToLive;
        this.tokens = new LinkedHashMap<String, Integer>() {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, Integer> eldest) {
                // Could add time-based cleanup logic here
                return false;
            }
        };
    }
    // ... rest of implementation
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. All O(1) Data Structure">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #432</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">LinkedIn</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Design a data structure with O(1) inc, dec, getMaxKey, getMinKey operations.
                  </p>
                  <CodeBlock code={`class AllOne {
    private Map<String, Integer> counts;  // key -> count
    private Map<Integer, LinkedHashSet<String>> countKeys;  // count -> keys
    private int minCount, maxCount;
    
    public AllOne() {
        counts = new HashMap<>();
        countKeys = new HashMap<>();
        minCount = 0;
        maxCount = 0;
    }
    
    public void inc(String key) {
        int oldCount = counts.getOrDefault(key, 0);
        int newCount = oldCount + 1;
        counts.put(key, newCount);
        
        // Remove from old bucket
        if (oldCount > 0) {
            countKeys.get(oldCount).remove(key);
            if (countKeys.get(oldCount).isEmpty()) {
                countKeys.remove(oldCount);
                if (minCount == oldCount) minCount = newCount;
            }
        }
        
        // Add to new bucket
        countKeys.computeIfAbsent(newCount, k -> new LinkedHashSet<>()).add(key);
        
        if (oldCount == 0) minCount = 1;
        maxCount = Math.max(maxCount, newCount);
    }
    
    public void dec(String key) {
        int oldCount = counts.get(key);
        int newCount = oldCount - 1;
        
        countKeys.get(oldCount).remove(key);
        if (countKeys.get(oldCount).isEmpty()) {
            countKeys.remove(oldCount);
            if (maxCount == oldCount) {
                maxCount = newCount;
            }
        }
        
        if (newCount == 0) {
            counts.remove(key);
            if (minCount == oldCount) {
                minCount = countKeys.isEmpty() ? 0 : 
                    countKeys.keySet().stream().min(Integer::compare).orElse(0);
            }
        } else {
            counts.put(key, newCount);
            countKeys.computeIfAbsent(newCount, k -> new LinkedHashSet<>()).add(key);
            if (minCount == oldCount) minCount = newCount;
        }
    }
    
    public String getMaxKey() {
        if (maxCount == 0) return "";
        return countKeys.get(maxCount).iterator().next();
    }
    
    public String getMinKey() {
        if (minCount == 0) return "";
        return countKeys.get(minCount).iterator().next();
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

