import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function TreeSetInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="TreeSet Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/treeset" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to TreeSet
            </Link>
          </div>

          <PageHeader
            title="TreeSet Interview Questions"
            description="Master Java TreeSet with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="green"
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
              <AccordionItem title="1. How does TreeSet work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeSet is backed by a <strong>TreeMap</strong>, which uses a <strong>Red-Black Tree</strong> - a self-balancing binary search tree.
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Red-Black Tree Properties:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Each node is either red or black</li>
                      <li>Root is always black</li>
                      <li>No two adjacent red nodes</li>
                      <li>Every path from root to null has same black nodes</li>
                      <li>Guarantees O(log n) for all operations</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// TreeSet operations are O(log n)
TreeSet<Integer> set = new TreeSet<>();

set.add(5);      // O(log n)
set.add(2);      // O(log n)
set.add(8);      // O(log n)

//       5 (Black)
//      / \\
//     2   8 (Red)
//   (Red)

set.contains(5);  // O(log n)
set.remove(2);    // O(log n)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. TreeSet vs HashSet - When to use which?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Use Case</th>
                          <th className="text-center py-2">Best Choice</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Fast add/remove/contains</td>
                          <td className="text-center text-orange-600">HashSet</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Sorted iteration</td>
                          <td className="text-center text-emerald-600">TreeSet</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Range operations (subSet, headSet)</td>
                          <td className="text-center text-emerald-600">TreeSet</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Find first/last element</td>
                          <td className="text-center text-emerald-600">TreeSet</td>
                        </tr>
                        <tr>
                          <td className="py-2">Allow null elements</td>
                          <td className="text-center text-orange-600">HashSet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// TreeSet exclusive methods
TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40, 50));

set.first();           // 10
set.last();            // 50
set.floor(25);         // 20 (largest ≤ 25)
set.ceiling(25);       // 30 (smallest ≥ 25)
set.lower(30);         // 20 (largest < 30)
set.higher(30);        // 40 (smallest > 30)
set.headSet(30);       // [10, 20]
set.tailSet(30);       // [30, 40, 50]
set.subSet(20, 40);    // [20, 30]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. How does TreeSet handle custom objects?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeSet requires elements to be <strong>Comparable</strong> or a <strong>Comparator</strong> to be provided.
                  </p>
                  <CodeBlock code={`// Method 1: Implement Comparable
class Employee implements Comparable<Employee> {
    String name;
    int salary;
    
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.salary, other.salary);
    }
}

TreeSet<Employee> byNaturalOrder = new TreeSet<>();

// Method 2: Provide Comparator
TreeSet<Employee> byName = new TreeSet<>(
    Comparator.comparing(e -> e.name)
);

TreeSet<Employee> bySalaryDesc = new TreeSet<>(
    Comparator.comparingInt((Employee e) -> e.salary).reversed()
);

// Method 3: Multiple criteria
TreeSet<Employee> complex = new TreeSet<>(
    Comparator.comparingInt((Employee e) -> e.salary)
              .thenComparing(e -> e.name)
);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. What happens if compareTo is inconsistent with equals?">
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      <strong>Warning:</strong> TreeSet uses compareTo (not equals) for element equality. If compareTo returns 0, elements are considered duplicates even if equals returns false.
                    </p>
                  </div>
                  <CodeBlock code={`class Person {
    String name;
    int age;
    
    // compareTo based on age only
    public int compareTo(Person other) {
        return Integer.compare(this.age, other.age);
    }
    
    // equals based on name and age
    public boolean equals(Object o) {
        Person p = (Person) o;
        return name.equals(p.name) && age == p.age;
    }
}

TreeSet<Person> set = new TreeSet<>();
set.add(new Person("John", 30));
set.add(new Person("Jane", 30));  // Not added! compareTo returns 0

// Best practice: Make compareTo consistent with equals
public int compareTo(Person other) {
    int result = Integer.compare(this.age, other.age);
    if (result == 0) {
        result = this.name.compareTo(other.name);
    }
    return result;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Why doesn't TreeSet allow null elements?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    TreeSet needs to compare elements for ordering. Comparing with null throws <code>NullPointerException</code>.
                  </p>
                  <CodeBlock code={`TreeSet<String> set = new TreeSet<>();
set.add("hello");
set.add(null);  // NullPointerException!

// Workaround: Custom comparator handling nulls
TreeSet<String> nullFriendly = new TreeSet<>(
    Comparator.nullsFirst(Comparator.naturalOrder())
);
nullFriendly.add(null);   // Works!
nullFriendly.add("hello");

System.out.println(nullFriendly);  // [null, hello]

// Note: This is rarely recommended. Avoid nulls if possible.`} />
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
              <AccordionItem title="1. Contains Duplicate III" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #220</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Check if there exist indices i, j such that |i - j| ≤ indexDiff and |nums[i] - nums[j]| ≤ valueDiff.
                  </p>
                  <CodeBlock code={`public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
    TreeSet<Long> set = new TreeSet<>();
    
    for (int i = 0; i < nums.length; i++) {
        long num = nums[i];
        
        // Find smallest number >= num - valueDiff
        Long ceiling = set.ceiling(num - valueDiff);
        
        // If it exists and <= num + valueDiff, found!
        if (ceiling != null && ceiling <= num + valueDiff) {
            return true;
        }
        
        set.add(num);
        
        // Maintain sliding window of size indexDiff
        if (i >= indexDiff) {
            set.remove((long) nums[i - indexDiff]);
        }
    }
    
    return false;
}

// Time: O(n log k) where k = indexDiff`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. My Calendar I">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #729</span>
                  </div>
                  <CodeBlock code={`class MyCalendar {
    private TreeMap<Integer, Integer> calendar;
    
    public MyCalendar() {
        calendar = new TreeMap<>();
    }
    
    public boolean book(int start, int end) {
        // Find the event that starts before or at 'start'
        Integer prev = calendar.floorKey(start);
        // Find the event that starts after 'start'
        Integer next = calendar.ceilingKey(start);
        
        // Check no overlap with previous event
        if (prev != null && calendar.get(prev) > start) {
            return false;
        }
        
        // Check no overlap with next event
        if (next != null && next < end) {
            return false;
        }
        
        calendar.put(start, end);
        return true;
    }
}

// Alternative using TreeSet of int arrays
class MyCalendar2 {
    TreeSet<int[]> events;
    
    public MyCalendar2() {
        events = new TreeSet<>((a, b) -> a[0] - b[0]);
    }
    
    public boolean book(int start, int end) {
        int[] event = {start, end};
        int[] floor = events.floor(event);
        int[] ceiling = events.ceiling(event);
        
        if (floor != null && floor[1] > start) return false;
        if (ceiling != null && ceiling[0] < end) return false;
        
        events.add(event);
        return true;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Count of Range Sum">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #327</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Count subarrays with sum in range [lower, upper].
                  </p>
                  <CodeBlock code={`public int countRangeSum(int[] nums, int lower, int upper) {
    int count = 0;
    long prefixSum = 0;
    
    // Store prefix sums
    TreeMap<Long, Integer> treemap = new TreeMap<>();
    treemap.put(0L, 1);  // Empty prefix
    
    for (int num : nums) {
        prefixSum += num;
        
        // Find prefix sums in range [prefixSum - upper, prefixSum - lower]
        // These give subarrays with sum in [lower, upper]
        Long from = prefixSum - upper;
        Long to = prefixSum - lower;
        
        // Sum up counts in range
        Map<Long, Integer> subMap = treemap.subMap(from, true, to, true);
        for (int c : subMap.values()) {
            count += c;
        }
        
        // Add current prefix sum
        treemap.put(prefixSum, treemap.getOrDefault(prefixSum, 0) + 1);
    }
    
    return count;
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Data Stream as Disjoint Intervals">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #352</span>
                  </div>
                  <CodeBlock code={`class SummaryRanges {
    private TreeMap<Integer, int[]> intervals;
    
    public SummaryRanges() {
        intervals = new TreeMap<>();
    }
    
    public void addNum(int val) {
        // Check if val already in an interval
        Integer floor = intervals.floorKey(val);
        if (floor != null && intervals.get(floor)[1] >= val) {
            return;  // Already covered
        }
        
        int start = val, end = val;
        
        // Check if can merge with previous interval
        if (floor != null && intervals.get(floor)[1] == val - 1) {
            start = floor;
            intervals.remove(floor);
        }
        
        // Check if can merge with next interval
        Integer ceiling = intervals.ceilingKey(val);
        if (ceiling != null && ceiling == val + 1) {
            end = intervals.get(ceiling)[1];
            intervals.remove(ceiling);
        }
        
        intervals.put(start, new int[]{start, end});
    }
    
    public int[][] getIntervals() {
        return intervals.values().toArray(new int[0][]);
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Kth Smallest Element in a Sorted Matrix">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #378</span>
                  </div>
                  <CodeBlock code={`// Using TreeSet with coordinate tracking
public int kthSmallest(int[][] matrix, int k) {
    int n = matrix.length;
    
    // Store [value, row, col] sorted by value
    TreeSet<int[]> set = new TreeSet<>((a, b) -> {
        if (a[0] != b[0]) return a[0] - b[0];
        if (a[1] != b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });
    
    // Add first column elements
    for (int i = 0; i < n; i++) {
        set.add(new int[]{matrix[i][0], i, 0});
    }
    
    // Pop k-1 smallest, add their right neighbors
    for (int i = 0; i < k - 1; i++) {
        int[] smallest = set.pollFirst();
        int row = smallest[1];
        int col = smallest[2];
        
        if (col + 1 < n) {
            set.add(new int[]{matrix[row][col + 1], row, col + 1});
        }
    }
    
    return set.first()[0];
}

// Time: O(k log n)`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

