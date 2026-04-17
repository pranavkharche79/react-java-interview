import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function ArrayListInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="ArrayList Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/arraylist" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to ArrayList
            </Link>
          </div>

          <PageHeader
            title="ArrayList Interview Questions"
            description="Master Java ArrayList with theoretical concepts and hands-on coding problems"
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
              <AccordionItem title="1. How does ArrayList work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    ArrayList uses a dynamic array internally that grows automatically when needed.
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Internal Mechanism:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                      <li><strong>Initial Capacity:</strong> 10 (default) or specified</li>
                      <li><strong>Growth:</strong> When full, creates new array with 1.5x capacity</li>
                      <li><strong>Data Structure:</strong> Object[] elementData</li>
                      <li><strong>Size Tracking:</strong> int size tracks actual elements</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Simplified internal structure
public class ArrayList<E> {
    private Object[] elementData;
    private int size;
    
    public ArrayList() {
        elementData = new Object[10];  // Default capacity
    }
    
    public boolean add(E e) {
        if (size == elementData.length) {
            grow();  // Increase capacity
        }
        elementData[size++] = e;
        return true;
    }
    
    private void grow() {
        int newCapacity = elementData.length + (elementData.length >> 1);  // 1.5x
        elementData = Arrays.copyOf(elementData, newCapacity);
    }
    
    public E get(int index) {
        return (E) elementData[index];  // O(1) access
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. What is the difference between ArrayList and LinkedList?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Operation</th>
                          <th className="text-center py-2 text-blue-600 dark:text-blue-400">ArrayList</th>
                          <th className="text-center py-2 text-emerald-600 dark:text-emerald-400">LinkedList</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">get(index)</td>
                          <td className="text-center text-emerald-600">O(1) ✓</td>
                          <td className="text-center text-red-600">O(n)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">add(end)</td>
                          <td className="text-center">O(1) amortized</td>
                          <td className="text-center text-emerald-600">O(1) ✓</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">add(beginning)</td>
                          <td className="text-center text-red-600">O(n)</td>
                          <td className="text-center text-emerald-600">O(1) ✓</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Memory</td>
                          <td className="text-center text-emerald-600">Less ✓</td>
                          <td className="text-center">More (node pointers)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Cache Performance</td>
                          <td className="text-center text-emerald-600">Better ✓</td>
                          <td className="text-center">Worse</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="3. How to synchronize ArrayList?">
                <div className="space-y-4">
                  <CodeBlock code={`// Method 1: Collections.synchronizedList()
List<String> syncList = Collections.synchronizedList(new ArrayList<>());

// IMPORTANT: Must synchronize during iteration
synchronized (syncList) {
    for (String item : syncList) {
        System.out.println(item);
    }
}

// Method 2: CopyOnWriteArrayList (thread-safe, no sync needed)
List<String> cowList = new CopyOnWriteArrayList<>();
// Safe to iterate without synchronization
// Good for: read-heavy, write-light scenarios

// Method 3: Vector (legacy, synchronized)
Vector<String> vector = new Vector<>();  // Avoid in new code`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. What is ConcurrentModificationException?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    Thrown when collection is modified during iteration (fail-fast behavior).
                  </p>
                  <CodeBlock code={`List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));

// WRONG: Causes ConcurrentModificationException
for (String item : list) {
    if (item.equals("b")) {
        list.remove(item);  // Exception!
    }
}

// CORRECT Solutions:

// 1. Use Iterator.remove()
Iterator<String> iter = list.iterator();
while (iter.hasNext()) {
    if (iter.next().equals("b")) {
        iter.remove();  // Safe!
    }
}

// 2. Use removeIf() (Java 8+)
list.removeIf(item -> item.equals("b"));

// 3. Iterate over copy
for (String item : new ArrayList<>(list)) {
    if (item.equals("b")) list.remove(item);
}

// 4. Use CopyOnWriteArrayList
List<String> cowList = new CopyOnWriteArrayList<>(list);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What is the initial capacity and growth factor?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Initial Capacity:</strong> 10 (default)</li>
                      <li><strong>Growth Factor:</strong> 1.5x (newCapacity = oldCapacity * 1.5)</li>
                      <li><strong>Growth Sequence:</strong> 10 → 15 → 22 → 33 → 49 → 73...</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Pre-size for performance
List<String> list = new ArrayList<>(10000);  // Avoid resizing

// Trim after adding all elements
((ArrayList<String>) list).trimToSize();

// Ensure capacity before bulk add
((ArrayList<String>) list).ensureCapacity(20000);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. ArrayList vs Vector - What's the difference?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-blue-600">ArrayList</th>
                          <th className="text-center py-2 text-amber-600">Vector</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Synchronization</td>
                          <td className="text-center">Not synchronized</td>
                          <td className="text-center">Synchronized</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Performance</td>
                          <td className="text-center text-emerald-600">Faster ✓</td>
                          <td className="text-center">Slower</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Growth</td>
                          <td className="text-center">50% (1.5x)</td>
                          <td className="text-center">100% (2x)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Recommendation</td>
                          <td className="text-center text-emerald-600">Use this ✓</td>
                          <td className="text-center text-red-600">Avoid (legacy)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="7. How to convert ArrayList to Array and vice versa?">
                <div className="space-y-4">
                  <CodeBlock code={`// ArrayList to Array
List<String> list = Arrays.asList("a", "b", "c");

// Method 1: toArray() with type (recommended)
String[] arr1 = list.toArray(new String[0]);

// Method 2: Stream (Java 8+)
String[] arr2 = list.stream().toArray(String[]::new);

// Array to ArrayList
String[] array = {"x", "y", "z"};

// Method 1: Arrays.asList() - returns FIXED-SIZE list
List<String> list1 = Arrays.asList(array);
// list1.add("w");  // UnsupportedOperationException!

// Method 2: new ArrayList - mutable
List<String> list2 = new ArrayList<>(Arrays.asList(array));
list2.add("w");  // Works!

// Method 3: Collections.addAll()
List<String> list3 = new ArrayList<>();
Collections.addAll(list3, array);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. What are fail-fast vs fail-safe iterators?">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Fail-Fast</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Throws exception on modification</li>
                        <li>Iterates over original collection</li>
                        <li>Examples: ArrayList, HashMap</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Fail-Safe</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>No exception on modification</li>
                        <li>Iterates over copy</li>
                        <li>Examples: CopyOnWriteArrayList</li>
                      </ul>
                    </div>
                  </div>
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
              <AccordionItem title="1. Remove Duplicates from ArrayList" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Method 1: LinkedHashSet (maintains order)
List<Integer> unique1 = new ArrayList<>(new LinkedHashSet<>(list));

// Method 2: Stream distinct() (Java 8+)
List<Integer> unique2 = list.stream()
                            .distinct()
                            .collect(Collectors.toList());

// Method 3: HashSet (order not guaranteed)
List<Integer> unique3 = new ArrayList<>(new HashSet<>(list));

// Method 4: Manual (preserves first occurrence)
List<Integer> unique4 = new ArrayList<>();
for (Integer num : list) {
    if (!unique4.contains(num)) {
        unique4.add(num);
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Find Intersection of Two ArrayLists">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #349</span>
                  </div>
                  <CodeBlock code={`// Method 1: retainAll()
List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
List<Integer> list2 = Arrays.asList(3, 4, 5, 6);
list1.retainAll(list2);  // list1 = [3, 4]

// Method 2: Stream filter
List<Integer> intersection = list1.stream()
    .filter(list2::contains)
    .collect(Collectors.toList());

// Method 3: HashSet (efficient for large lists)
Set<Integer> set1 = new HashSet<>(list1);
Set<Integer> set2 = new HashSet<>(list2);
set1.retainAll(set2);
List<Integer> result = new ArrayList<>(set1);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Sort ArrayList of Custom Objects">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                  </div>
                  <CodeBlock code={`class Person {
    String name;
    int age;
    // constructor, getters...
}

List<Person> people = new ArrayList<>();
people.add(new Person("Alice", 30));
people.add(new Person("Bob", 25));
people.add(new Person("Charlie", 35));

// Sort by age
people.sort(Comparator.comparingInt(Person::getAge));

// Sort by name
people.sort(Comparator.comparing(Person::getName));

// Multiple criteria: age, then name
people.sort(Comparator.comparingInt(Person::getAge)
                      .thenComparing(Person::getName));

// Reverse order
people.sort(Comparator.comparingInt(Person::getAge).reversed());

// Null-safe sorting
people.sort(Comparator.comparing(Person::getName, 
    Comparator.nullsLast(String::compareTo)));`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Find Kth Largest Element">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #215</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`// Method 1: Sort - O(n log n)
public int findKthLargest(List<Integer> list, int k) {
    Collections.sort(list, Collections.reverseOrder());
    return list.get(k - 1);
}

// Method 2: PriorityQueue - O(n log k)
public int findKthLargestHeap(List<Integer> list, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    for (int num : list) {
        minHeap.offer(num);
        if (minHeap.size() > k) {
            minHeap.poll();  // Remove smallest
        }
    }
    
    return minHeap.peek();
}

// Example: list = [3,2,1,5,6,4], k = 2
// Output: 5 (second largest)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Merge Two Sorted ArrayLists">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <CodeBlock code={`public List<Integer> mergeSorted(List<Integer> list1, List<Integer> list2) {
    List<Integer> result = new ArrayList<>();
    int i = 0, j = 0;
    
    while (i < list1.size() && j < list2.size()) {
        if (list1.get(i) <= list2.get(j)) {
            result.add(list1.get(i++));
        } else {
            result.add(list2.get(j++));
        }
    }
    
    // Add remaining elements
    while (i < list1.size()) result.add(list1.get(i++));
    while (j < list2.size()) result.add(list2.get(j++));
    
    return result;
}

// Example:
// list1 = [1, 3, 5], list2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Find All Pairs with Given Sum">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public List<int[]> findPairs(List<Integer> list, int target) {
    List<int[]> pairs = new ArrayList<>();
    Set<Integer> seen = new HashSet<>();
    Set<Integer> used = new HashSet<>();
    
    for (int num : list) {
        int complement = target - num;
        if (seen.contains(complement) && !used.contains(num)) {
            pairs.add(new int[]{Math.min(num, complement), 
                               Math.max(num, complement)});
            used.add(num);
            used.add(complement);
        }
        seen.add(num);
    }
    
    return pairs;
}

// Example: list = [1, 5, 7, -1, 5], target = 6
// Output: [[1, 5], [7, -1]]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. Rotate ArrayList">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                  </div>
                  <CodeBlock code={`// Method 1: Collections.rotate()
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
Collections.rotate(list, 2);  // [4, 5, 1, 2, 3]

// Method 2: Manual rotation
public void rotate(List<Integer> list, int k) {
    int n = list.size();
    k = k % n;
    
    reverse(list, 0, n - 1);
    reverse(list, 0, k - 1);
    reverse(list, k, n - 1);
}

private void reverse(List<Integer> list, int start, int end) {
    while (start < end) {
        int temp = list.get(start);
        list.set(start, list.get(end));
        list.set(end, temp);
        start++;
        end--;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. Find Missing Number in ArrayList (1 to N)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #268</span>
                  </div>
                  <CodeBlock code={`// Method 1: Sum formula
public int findMissing(List<Integer> list) {
    int n = list.size() + 1;  // Including missing number
    int expectedSum = n * (n + 1) / 2;
    int actualSum = list.stream().mapToInt(Integer::intValue).sum();
    return expectedSum - actualSum;
}

// Method 2: XOR
public int findMissingXOR(List<Integer> list) {
    int n = list.size() + 1;
    int xor = 0;
    
    for (int i = 1; i <= n; i++) xor ^= i;
    for (int num : list) xor ^= num;
    
    return xor;
}

// Example: list = [1, 2, 4, 5, 6] → Missing: 3`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

