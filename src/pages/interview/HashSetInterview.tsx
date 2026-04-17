import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function HashSetInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="HashSet Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/hashset" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to HashSet
            </Link>
          </div>

          <PageHeader
            title="HashSet Interview Questions"
            description="Master Java HashSet with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="orange"
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
              <AccordionItem title="1. How does HashSet work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    HashSet is backed by a <strong>HashMap</strong> internally. Elements are stored as keys with a dummy constant object as values.
                  </p>
                  <CodeBlock code={`// Internal implementation (simplified)
public class HashSet<E> {
    private HashMap<E, Object> map;
    private static final Object PRESENT = new Object();  // Dummy value
    
    public HashSet() {
        map = new HashMap<>();
    }
    
    public boolean add(E e) {
        return map.put(e, PRESENT) == null;
    }
    
    public boolean contains(Object o) {
        return map.containsKey(o);
    }
    
    public boolean remove(Object o) {
        return map.remove(o) == PRESENT;
    }
}

// This explains:
// - O(1) average time for add/remove/contains
// - No duplicates (HashMap keys are unique)
// - No ordering guarantee`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Why must hashCode() and equals() be overridden together?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    HashSet uses both methods: <code>hashCode()</code> finds the bucket, <code>equals()</code> checks for duplicates within the bucket.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">⚠️ Contract:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>If <code>a.equals(b)</code>, then <code>a.hashCode() == b.hashCode()</code></li>
                      <li>Same hashCode does NOT mean objects are equal</li>
                      <li>Breaking this contract causes unpredictable behavior</li>
                    </ul>
                  </div>
                  <CodeBlock code={`class Person {
    String name;
    int age;
    
    // WRONG: Only overriding equals
    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Person)) return false;
        Person p = (Person) o;
        return name.equals(p.name) && age == p.age;
    }
    
    // Without hashCode override:
    Set<Person> set = new HashSet<>();
    set.add(new Person("John", 30));
    set.add(new Person("John", 30));
    System.out.println(set.size());  // 2 (duplicates!)
    
    // CORRECT: Override both
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    // Now set.size() returns 1`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. HashSet vs TreeSet vs LinkedHashSet">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-orange-600">HashSet</th>
                          <th className="text-center py-2 text-emerald-600">TreeSet</th>
                          <th className="text-center py-2 text-blue-600">LinkedHashSet</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Ordering</td>
                          <td className="text-center">None</td>
                          <td className="text-center">Sorted</td>
                          <td className="text-center">Insertion</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">add/remove/contains</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td className="text-center text-amber-600">O(log n)</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Null elements</td>
                          <td className="text-center">✅ One</td>
                          <td className="text-center">❌ No</td>
                          <td className="text-center">✅ One</td>
                        </tr>
                        <tr>
                          <td className="py-2">Backed by</td>
                          <td className="text-center">HashMap</td>
                          <td className="text-center">TreeMap</td>
                          <td className="text-center">LinkedHashMap</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// HashSet - fastest, no order
Set<Integer> hashSet = new HashSet<>(Arrays.asList(3, 1, 2));
System.out.println(hashSet);  // Random order

// TreeSet - sorted order
Set<Integer> treeSet = new TreeSet<>(Arrays.asList(3, 1, 2));
System.out.println(treeSet);  // [1, 2, 3]

// LinkedHashSet - insertion order
Set<Integer> linkedSet = new LinkedHashSet<>(Arrays.asList(3, 1, 2));
System.out.println(linkedSet);  // [3, 1, 2]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. How to make HashSet thread-safe?">
                <div className="space-y-4">
                  <CodeBlock code={`// Method 1: Collections.synchronizedSet
Set<String> syncSet = Collections.synchronizedSet(new HashSet<>());

// Must synchronize when iterating!
synchronized (syncSet) {
    for (String s : syncSet) {
        System.out.println(s);
    }
}

// Method 2: ConcurrentHashMap.newKeySet() - recommended
Set<String> concurrentSet = ConcurrentHashMap.newKeySet();

// Method 3: CopyOnWriteArraySet (read-heavy workloads)
Set<String> cowSet = new CopyOnWriteArraySet<>();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What is the initial capacity and load factor?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Initial capacity:</strong> 16 (default)</li>
                      <li><strong>Load factor:</strong> 0.75 (default)</li>
                      <li><strong>Threshold:</strong> capacity × loadFactor = 12</li>
                      <li>When size exceeds threshold, capacity doubles</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Default
Set<String> set1 = new HashSet<>();

// Custom capacity (good when you know the size)
Set<String> set2 = new HashSet<>(100);

// Custom capacity and load factor
Set<String> set3 = new HashSet<>(100, 0.5f);

// Best practice for known size:
int expectedSize = 1000;
int capacity = (int) (expectedSize / 0.75) + 1;
Set<String> set4 = new HashSet<>(capacity);`} />
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
              <AccordionItem title="1. Contains Duplicate" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #217</span>
                  </div>
                  <CodeBlock code={`public boolean containsDuplicate(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    
    for (int num : nums) {
        if (!seen.add(num)) {
            return true;  // add returns false if already exists
        }
    }
    
    return false;
}

// Alternative: Compare sizes
public boolean containsDuplicate2(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);
    return set.size() < nums.length;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Intersection of Two Arrays">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #349</span>
                  </div>
                  <CodeBlock code={`public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>();
    for (int num : nums1) set1.add(num);
    
    Set<Integer> result = new HashSet<>();
    for (int num : nums2) {
        if (set1.contains(num)) {
            result.add(num);
        }
    }
    
    return result.stream().mapToInt(Integer::intValue).toArray();
}

// Using retainAll
public int[] intersection2(int[] nums1, int[] nums2) {
    Set<Integer> set1 = Arrays.stream(nums1).boxed().collect(Collectors.toSet());
    Set<Integer> set2 = Arrays.stream(nums2).boxed().collect(Collectors.toSet());
    set1.retainAll(set2);
    return set1.stream().mapToInt(Integer::intValue).toArray();
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Happy Number">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #202</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    A happy number eventually reaches 1; otherwise it loops forever.
                  </p>
                  <CodeBlock code={`public boolean isHappy(int n) {
    Set<Integer> seen = new HashSet<>();
    
    while (n != 1 && !seen.contains(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }
    
    return n == 1;
}

private int sumOfSquares(int n) {
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}

// Example: 19 → 82 → 68 → 100 → 1 ✓`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Longest Consecutive Sequence">
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
        // Only start counting if num is start of sequence
        if (!set.contains(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;
            
            while (set.contains(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longest = Math.max(longest, currentStreak);
        }
    }
    
    return longest;
}

// Example: [100, 4, 200, 1, 3, 2]
// Output: 4 (sequence [1, 2, 3, 4])
// Time: O(n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Find All Duplicates in an Array">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #442</span>
                  </div>
                  <CodeBlock code={`public List<Integer> findDuplicates(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    List<Integer> duplicates = new ArrayList<>();
    
    for (int num : nums) {
        if (!seen.add(num)) {
            duplicates.add(num);
        }
    }
    
    return duplicates;
}

// O(1) space solution (modifying input)
public List<Integer> findDuplicates2(int[] nums) {
    List<Integer> result = new ArrayList<>();
    
    for (int i = 0; i < nums.length; i++) {
        int index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            result.add(index + 1);
        }
        
        nums[index] = -nums[index];
    }
    
    return result;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. First Missing Positive">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #41</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// HashSet solution - O(n) time, O(n) space
public int firstMissingPositive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        if (num > 0) set.add(num);
    }
    
    int missing = 1;
    while (set.contains(missing)) {
        missing++;
    }
    
    return missing;
}

// Optimal O(1) space - use array as hash set
public int firstMissingPositive2(int[] nums) {
    int n = nums.length;
    
    // Place each number at its correct index
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && 
               nums[nums[i] - 1] != nums[i]) {
            int temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // Find first missing
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) return i + 1;
    }
    
    return n + 1;
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

