import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function HashSet() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' },
  ];

  const methods = [
    {
      title: 'add(E e)',
      description: 'Adds the specified element if not already present. Returns true if added.',
      code: `Set<String> set = new HashSet<>();
set.add("apple");    // Returns true
set.add("banana");   // Returns true
set.add("apple");    // Returns false (duplicate)
System.out.println(set); // [banana, apple] (order not guaranteed)`,
      complexity: 'O(1)',
    },
    {
      title: 'remove(Object o)',
      description: 'Removes the specified element from the set if present.',
      code: `Set<String> set = new HashSet<>(Arrays.asList("a", "b", "c"));
boolean removed = set.remove("b");  // Returns true
boolean notFound = set.remove("x"); // Returns false
System.out.println(set); // [a, c]`,
      complexity: 'O(1)',
    },
    {
      title: 'contains(Object o)',
      description: 'Checks if the set contains the specified element.',
      code: `Set<String> set = new HashSet<>(Arrays.asList("apple", "banana"));
boolean hasApple = set.contains("apple");   // true
boolean hasOrange = set.contains("orange"); // false
System.out.println("Has apple: " + hasApple);`,
      complexity: 'O(1)',
    },
    {
      title: 'size() & isEmpty()',
      description: 'Get set size and check if empty.',
      code: `Set<String> set = new HashSet<>();
System.out.println("Is empty: " + set.isEmpty()); // true
set.addAll(Arrays.asList("a", "b", "c"));
System.out.println("Size: " + set.size()); // 3
System.out.println("Is empty: " + set.isEmpty()); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'clear()',
      description: 'Removes all elements from the set.',
      code: `Set<String> set = new HashSet<>(Arrays.asList("a", "b", "c"));
System.out.println("Before: " + set.size()); // 3
set.clear();
System.out.println("After: " + set.size()); // 0`,
      complexity: 'O(n)',
    },
    {
      title: 'iterator()',
      description: 'Returns an iterator over the elements. Order is not guaranteed.',
      code: `Set<String> set = new HashSet<>(Arrays.asList("a", "b", "c"));
Iterator<String> it = set.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
// Or using for-each
for (String s : set) {
    System.out.println(s);
}`,
      complexity: 'O(n)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="HashSet" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java HashSet"
            description="Hash table based Set implementation with O(1) operations and no ordering guarantee"
            icon="set"
            gradient="blue"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/hashset" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              HashSet Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is HashSet?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  HashSet is a hash table-based implementation of the Set interface. It stores unique elements using hashing for fast access.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Hash table (HashMap)</li>
                  <li>• <strong>Ordering:</strong> No guaranteed order</li>
                  <li>• <strong>Null Elements:</strong> Allows one null</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                  <li>• <strong>Duplicates:</strong> Not allowed</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">contains()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">iteration</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* When to Use */}
            <div className="mt-6 card p-6 border-l-4 border-l-primary-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">When to Use HashSet?</h3>
              <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                <li>✅ When you need unique elements only</li>
                <li>✅ When order doesn't matter</li>
                <li>✅ When you need fast add/remove/contains operations</li>
                <li>✅ For removing duplicates from a collection</li>
                <li>❌ Don't use when you need sorted elements (use TreeSet)</li>
                <li>❌ Don't use when you need insertion order (use LinkedHashSet)</li>
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

// Empty HashSet
Set<String> set1 = new HashSet<>();

// HashSet with initial capacity
Set<Integer> set2 = new HashSet<>(20);

// HashSet with initial capacity and load factor
Set<String> set3 = new HashSet<>(20, 0.75f);

// Initialize with values (Java 9+)
Set<String> set4 = Set.of("apple", "banana", "orange");
// Note: Set.of() returns immutable set

// Mutable set with initial values
Set<String> set5 = new HashSet<>(Arrays.asList("red", "green", "blue"));

// Using addAll
Set<String> set6 = new HashSet<>();
set6.addAll(Arrays.asList("one", "two", "three"));`} />
              </AccordionItem>
              
              <AccordionItem title="From Other Collections">
                <CodeBlock code={`import java.util.*;

// From List (removes duplicates)
List<String> listWithDuplicates = Arrays.asList("a", "b", "a", "c", "b");
Set<String> set1 = new HashSet<>(listWithDuplicates);
System.out.println(set1); // [a, b, c]

// From another Set
Set<Integer> original = new HashSet<>(Arrays.asList(1, 2, 3));
Set<Integer> copy = new HashSet<>(original);

// From Array
String[] array = {"x", "y", "z"};
Set<String> set2 = new HashSet<>(Arrays.asList(array));`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              HashSet Methods
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
              <AccordionItem title="Remove Duplicates from List" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 1, 4, 5, 4, 3);
        System.out.println("Original: " + numbers);
        
        // Remove duplicates using HashSet
        Set<Integer> uniqueSet = new HashSet<>(numbers);
        List<Integer> uniqueList = new ArrayList<>(uniqueSet);
        
        System.out.println("Unique: " + uniqueList);
        // Note: Order may not be preserved
        
        // To preserve order, use LinkedHashSet
        Set<Integer> orderedSet = new LinkedHashSet<>(numbers);
        System.out.println("Unique (ordered): " + new ArrayList<>(orderedSet));
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Set Operations (Union, Intersection, Difference)">
                <CodeBlock code={`import java.util.*;

public class SetOperations {
    public static void main(String[] args) {
        Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        Set<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));
        
        // Union (all elements from both sets)
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union);
        // [1, 2, 3, 4, 5, 6, 7, 8]
        
        // Intersection (common elements)
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);
        // [4, 5]
        
        // Difference (elements in set1 but not in set2)
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference: " + difference);
        // [1, 2, 3]
        
        // Symmetric difference (elements in either but not both)
        Set<Integer> symDiff = new HashSet<>(set1);
        symDiff.addAll(set2);
        Set<Integer> temp = new HashSet<>(set1);
        temp.retainAll(set2);
        symDiff.removeAll(temp);
        System.out.println("Symmetric Difference: " + symDiff);
        // [1, 2, 3, 6, 7, 8]
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Check for Duplicates">
                <CodeBlock code={`import java.util.*;

public class CheckDuplicates {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 3, 2};
        
        // Method 1: Compare sizes
        Set<Integer> set = new HashSet<>();
        for (int num : numbers) {
            set.add(num);
        }
        boolean hasDuplicates = set.size() != numbers.length;
        System.out.println("Has duplicates: " + hasDuplicates); // true
        
        // Method 2: Check add() return value
        Set<Integer> seen = new HashSet<>();
        for (int num : numbers) {
            if (!seen.add(num)) {
                System.out.println("Duplicate found: " + num);
            }
        }
        
        // Method 3: Find all duplicates
        Set<Integer> unique = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();
        for (int num : numbers) {
            if (!unique.add(num)) {
                duplicates.add(num);
            }
        }
        System.out.println("Duplicates: " + duplicates); // [2, 3]
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

