import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function ArrayList() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' },
    { id: 'interview', label: 'Interview Questions' },
  ];

  const methods = [
    {
      title: 'add(E e)',
      description: 'Adds an element to the end of the list. O(1) amortized.',
      code: `List<String> list = new ArrayList<>();
list.add("apple");
list.add("banana");
list.add("orange");
System.out.println(list); // [apple, banana, orange]`,
      complexity: 'O(1)',
    },
    {
      title: 'add(int index, E element)',
      description: 'Adds an element at a specific index. O(n) - slower for middle insertions.',
      code: `List list = new ArrayList<>();
list.add("apple");
list.add("orange");
list.add(1, "banana"); // Insert at index 1
System.out.println(list); // [apple, banana, orange]`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'get(int index)',
      description: 'Retrieves element at the specified index. O(1) - very fast!',
      code: `List list = Arrays.asList("apple", "banana", "orange");
String element = list.get(1);
System.out.println(element); // banana

// ArrayList excels at random access
for (int i = 0; i < list.size(); i++) {
    System.out.println(i + ": " + list.get(i));
}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'set(int index, E element)',
      description: 'Updates element at the specified index. O(1) - very fast!',
      code: `List list = new ArrayList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
String oldValue = list.set(1, "grape");
System.out.println("Old value: " + oldValue); // banana
System.out.println(list); // [apple, grape, orange]`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'remove(int index)',
      description: 'Removes element at the specified index. O(n) - slower for middle elements.',
      code: `List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "orange"));
String removed = list.remove(1);
System.out.println("Removed: " + removed); // banana
System.out.println(list); // [apple, orange]`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'remove(Object o)',
      description: 'Removes the first occurrence of the specified element. O(n).',
      code: `List list = new ArrayList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
boolean removed = list.remove("banana");
System.out.println("Removed: " + removed); // true
System.out.println(list); // [apple, orange]`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'size() & isEmpty()',
      description: 'Get list size and check if empty. Both O(1).',
      code: `List list = new ArrayList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
System.out.println("Size: " + list.size()); // 3
System.out.println("Is empty: " + list.isEmpty()); // false

list.clear();
System.out.println("Size after clear: " + list.size()); // 0
System.out.println("Is empty after clear: " + list.isEmpty()); // true`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'contains() & indexOf()',
      description: 'Check if element exists and find its index. Both O(n).',
      code: `List list = Arrays.asList("apple", "banana", "orange");
boolean contains = list.contains("banana");
int index = list.indexOf("banana");
System.out.println("Contains banana: " + contains); // true
System.out.println("Index of banana: " + index); // 1

// ArrayList also supports containsAll() and indexOf()
System.out.println("Contains all (apple, orange): " + list.containsAll(Arrays.asList("apple", "orange"))); // true
System.out.println("Index of orange: " + list.indexOf("orange")); // 2`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="ArrayList" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java ArrayList"
            description="Dynamic array implementation with fast random access and efficient iteration"
            icon="list"
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is ArrayList?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  ArrayList is a resizable array implementation of the List interface. It provides dynamic arrays that can grow and shrink as needed.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Dynamic array</li>
                  <li>• <strong>Memory:</strong> Contiguous allocation</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                  <li>• <strong>Null Elements:</strong> Allows null values</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">get() / set()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add() (end)</span>
                    <span className="badge badge-success">O(1) amortized</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add(index)</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove(index)</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">contains()</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                </ul>
              </div>
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

// Empty ArrayList
List<String> list1 = new ArrayList<>();

// ArrayList with initial capacity (performance optimization)
List<Integer> list2 = new ArrayList<>(10);

// Using diamond operator (Java 7+)
ArrayList<String> list3 = new ArrayList<>();

// Direct initialization with values (Java 9+)
List<String> list4 = List.of("apple", "banana", "orange");

// From Arrays.asList()
List<String> list5 = new ArrayList<>(Arrays.asList("red", "green", "blue"));`} />
              </AccordionItem>
              
              <AccordionItem title="From Other Collections">
                <CodeBlock code={`import java.util.*;

// From Set
Set<String> set = new HashSet<>(Arrays.asList("one", "two", "three"));
List<String> list1 = new ArrayList<>(set);

// From another List
List<String> originalList = Arrays.asList("a", "b", "c");
List<String> list2 = new ArrayList<>(originalList);

// Using addAll()
List<String> list3 = new ArrayList<>();
list3.addAll(Arrays.asList("first", "second", "third"));`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              ArrayList Methods
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
              <AccordionItem title="Basic Operations" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class ArrayListBasicOperations {
    public static void main(String[] args) {
        // Create ArrayList
        List fruits = new ArrayList<>();
        
        // Add elements
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("orange");
        System.out.println("Initial list: " + fruits);
        
        // Insert at specific position
        fruits.add(1, "grape");
        System.out.println("After inserting grape: " + fruits);
        
        // Access elements (ArrayList's strength)
        System.out.println("Element at index 2: " + fruits.get(2));
        
        // Update element
        fruits.set(0, "kiwi");
        System.out.println("After updating first element: " + fruits);
        
        // Remove elements
        fruits.remove("banana"); // Remove by value
        fruits.remove(1);        // Remove by index
        System.out.println("After removals: " + fruits);
        
        // Check size and contents
        System.out.println("Size: " + fruits.size());
        System.out.println("Contains 'orange': " + fruits.contains("orange"));
        
        // Iterate through list
        System.out.println("Iterating through list:");
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println(i + ": " + fruits.get(i));
        }
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="ArrayList with Collections">
                <CodeBlock code={`import java.util.*;

public class ArrayListWithCollections {
    public static void main(String[] args) {
        List fruits = new ArrayList<>();
        fruits.addAll(Arrays.asList("banana", "apple", "orange", "grape", "cherry"));
        
        // Sort the list
        Collections.sort(fruits);
        System.out.println("Sorted: " + fruits);
        
        // Reverse the list
        Collections.reverse(fruits);
        System.out.println("Reversed: " + fruits);
        
        // Shuffle the list
        Collections.shuffle(fruits);
        System.out.println("Shuffled: " + fruits);
        
        // Find frequency
        fruits.addAll(Arrays.asList("apple", "apple", "banana"));
        int appleCount = Collections.frequency(fruits, "apple");
        System.out.println("Frequency of 'apple': " + appleCount);
        
        // Find min and max
        List numbers = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));
        Integer min = Collections.min(numbers);
        Integer max = Collections.max(numbers);
        System.out.println("Min: " + min + ", Max: " + max);
        
        // Binary search (list must be sorted)
        Collections.sort(numbers);
        int index = Collections.binarySearch(numbers, 5);
        System.out.println("Index of 5: " + index);
        
        // Create unmodifiable view
        List unmodifiable = Collections.unmodifiableList(fruits);
        System.out.println("Unmodifiable list: " + unmodifiable);
        // unmodifiable.add("new"); // This would throw UnsupportedOperationException
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
              to="/interview/arraylist" 
              className="block group"
            >
              <div className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        ArrayList Interview Preparation
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
