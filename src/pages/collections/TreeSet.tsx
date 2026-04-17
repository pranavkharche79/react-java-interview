import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function TreeSet() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'navigation', label: 'Navigation Methods' },
    { id: 'examples', label: 'Examples' },
  ];

  const basicMethods = [
    {
      title: 'add(E e)',
      description: 'Adds the element in sorted position. Returns true if added.',
      code: `TreeSet<Integer> set = new TreeSet<>();
set.add(5);
set.add(2);
set.add(8);
set.add(1);
System.out.println(set); // [1, 2, 5, 8] - sorted!`,
      complexity: 'O(log n)',
    },
    {
      title: 'remove(Object o)',
      description: 'Removes the specified element from the set.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7));
set.remove(3);
System.out.println(set); // [1, 5, 7]`,
      complexity: 'O(log n)',
    },
    {
      title: 'contains(Object o)',
      description: 'Checks if element exists using binary search.',
      code: `TreeSet<String> set = new TreeSet<>(Arrays.asList("apple", "banana", "cherry"));
System.out.println(set.contains("banana")); // true
System.out.println(set.contains("mango"));  // false`,
      complexity: 'O(log n)',
    },
    {
      title: 'first() & last()',
      description: 'Get the first (smallest) and last (largest) elements.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(5, 2, 8, 1, 9));
System.out.println("First: " + set.first()); // 1
System.out.println("Last: " + set.last());   // 9`,
      complexity: 'O(log n)',
    },
  ];

  const navigationMethods = [
    {
      title: 'lower(E e) & higher(E e)',
      description: 'Find elements strictly less than or greater than given value.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
System.out.println("Lower than 5: " + set.lower(5));   // 3
System.out.println("Higher than 5: " + set.higher(5)); // 7
System.out.println("Lower than 1: " + set.lower(1));   // null`,
      complexity: 'O(log n)',
      badge: 'success' as const,
    },
    {
      title: 'floor(E e) & ceiling(E e)',
      description: 'Find elements less/greater than or equal to given value.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
System.out.println("Floor of 5: " + set.floor(5));     // 5
System.out.println("Floor of 4: " + set.floor(4));     // 3
System.out.println("Ceiling of 5: " + set.ceiling(5)); // 5
System.out.println("Ceiling of 6: " + set.ceiling(6)); // 7`,
      complexity: 'O(log n)',
      badge: 'success' as const,
    },
    {
      title: 'headSet(E toElement)',
      description: 'Returns elements strictly less than toElement.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
SortedSet<Integer> head = set.headSet(5);
System.out.println(head); // [1, 3]

// Inclusive version
NavigableSet<Integer> headInc = set.headSet(5, true);
System.out.println(headInc); // [1, 3, 5]`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'tailSet(E fromElement)',
      description: 'Returns elements greater than or equal to fromElement.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
SortedSet<Integer> tail = set.tailSet(5);
System.out.println(tail); // [5, 7, 9]

// Exclusive version
NavigableSet<Integer> tailExc = set.tailSet(5, false);
System.out.println(tailExc); // [7, 9]`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'subSet(E from, E to)',
      description: 'Returns elements in the given range.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
// From inclusive, to exclusive by default
SortedSet<Integer> sub = set.subSet(3, 7);
System.out.println(sub); // [3, 5]

// Both bounds configurable
NavigableSet<Integer> subInc = set.subSet(3, true, 7, true);
System.out.println(subInc); // [3, 5, 7]`,
      complexity: 'O(log n)',
      badge: 'info' as const,
    },
    {
      title: 'descendingSet() & descendingIterator()',
      description: 'Get elements in reverse order.',
      code: `TreeSet<Integer> set = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));

// Descending view
NavigableSet<Integer> desc = set.descendingSet();
System.out.println(desc); // [9, 7, 5, 3, 1]

// Descending iterator
Iterator<Integer> it = set.descendingIterator();
while (it.hasNext()) {
    System.out.print(it.next() + " "); // 9 7 5 3 1
}`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="TreeSet" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java TreeSet"
            description="Red-black tree based Set implementation with sorted elements and range operations"
            icon="set"
            gradient="green"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/treeset" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              TreeSet Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is TreeSet?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  TreeSet is a NavigableSet implementation based on a red-black tree. Elements are stored in sorted order.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Red-black tree</li>
                  <li>• <strong>Ordering:</strong> Sorted (natural or custom)</li>
                  <li>• <strong>Null Elements:</strong> Not allowed</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                  <li>• <strong>Implements:</strong> NavigableSet, SortedSet</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">remove()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">contains()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">first() / last()</span>
                    <span className="badge badge-warning">O(log n)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* When to Use */}
            <div className="mt-6 card p-6 border-l-4 border-l-emerald-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">When to Use TreeSet?</h3>
              <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                <li>✅ When you need elements in sorted order</li>
                <li>✅ When you need range queries (headSet, tailSet, subSet)</li>
                <li>✅ When you need floor/ceiling/lower/higher operations</li>
                <li>✅ When you need first/last element access</li>
                <li>❌ Don't use for maximum performance (use HashSet)</li>
                <li>❌ Don't use with null elements</li>
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

// Empty TreeSet (natural ordering)
TreeSet<Integer> set1 = new TreeSet<>();

// TreeSet with initial collection
TreeSet<String> set2 = new TreeSet<>(Arrays.asList("cherry", "apple", "banana"));
System.out.println(set2); // [apple, banana, cherry] - sorted!

// TreeSet from another SortedSet
SortedSet<Integer> sorted = new TreeSet<>(Arrays.asList(3, 1, 2));
TreeSet<Integer> set3 = new TreeSet<>(sorted);`} />
              </AccordionItem>
              
              <AccordionItem title="Custom Comparator">
                <CodeBlock code={`import java.util.*;

// Reverse order
TreeSet<Integer> descending = new TreeSet<>(Collections.reverseOrder());
descending.addAll(Arrays.asList(5, 2, 8, 1));
System.out.println(descending); // [8, 5, 2, 1]

// Custom comparator - by string length
TreeSet<String> byLength = new TreeSet<>((a, b) -> {
    int lenCompare = Integer.compare(a.length(), b.length());
    return lenCompare != 0 ? lenCompare : a.compareTo(b);
});
byLength.addAll(Arrays.asList("apple", "pie", "banana", "a"));
System.out.println(byLength); // [a, pie, apple, banana]

// Case-insensitive sorting
TreeSet<String> caseInsensitive = new TreeSet<>(String.CASE_INSENSITIVE_ORDER);
caseInsensitive.addAll(Arrays.asList("Banana", "apple", "CHERRY"));
System.out.println(caseInsensitive); // [apple, Banana, CHERRY]`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
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

          {/* Navigation Methods Section */}
          <section id="navigation" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Navigation Methods (TreeSet Exclusive)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {navigationMethods.map((method, i) => (
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
              <AccordionItem title="Find Closest Values" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class FindClosestValues {
    public static void main(String[] args) {
        TreeSet<Integer> prices = new TreeSet<>(
            Arrays.asList(10, 25, 50, 75, 100, 150, 200)
        );
        
        int budget = 60;
        
        // Find closest price within budget
        Integer bestPrice = prices.floor(budget);
        System.out.println("Best price <= " + budget + ": " + bestPrice); // 50
        
        // Find next higher option
        Integer nextOption = prices.ceiling(budget);
        System.out.println("Cheapest >= " + budget + ": " + nextOption); // 75
        
        // Find all options within range
        int minBudget = 40, maxBudget = 120;
        SortedSet<Integer> options = prices.subSet(minBudget, true, maxBudget, true);
        System.out.println("Options in " + minBudget + "-" + maxBudget + ": " + options);
        // [50, 75, 100]
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Schedule/Time-Based Operations">
                <CodeBlock code={`import java.util.*;
import java.time.*;

public class EventScheduler {
    public static void main(String[] args) {
        TreeSet<LocalTime> schedule = new TreeSet<>();
        schedule.add(LocalTime.of(9, 0));
        schedule.add(LocalTime.of(10, 30));
        schedule.add(LocalTime.of(12, 0));
        schedule.add(LocalTime.of(14, 0));
        schedule.add(LocalTime.of(16, 30));
        
        LocalTime now = LocalTime.of(11, 0);
        
        // Find next event
        LocalTime nextEvent = schedule.ceiling(now);
        System.out.println("Next event at: " + nextEvent); // 12:00
        
        // Find previous event
        LocalTime prevEvent = schedule.floor(now);
        System.out.println("Previous event at: " + prevEvent); // 10:30
        
        // All remaining events today
        SortedSet<LocalTime> remaining = schedule.tailSet(now);
        System.out.println("Remaining events: " + remaining);
        
        // Events before lunch
        SortedSet<LocalTime> morning = schedule.headSet(LocalTime.NOON);
        System.out.println("Morning events: " + morning);
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Leaderboard / Ranking System">
                <CodeBlock code={`import java.util.*;

public class Leaderboard {
    public static void main(String[] args) {
        // TreeSet with custom comparator for scores
        TreeSet<int[]> leaderboard = new TreeSet<>((a, b) -> {
            // Compare by score (descending), then by player ID (ascending)
            int scoreCompare = Integer.compare(b[1], a[1]);
            return scoreCompare != 0 ? scoreCompare : Integer.compare(a[0], b[0]);
        });
        
        // Add players: {playerId, score}
        leaderboard.add(new int[]{1, 1000});
        leaderboard.add(new int[]{2, 1500});
        leaderboard.add(new int[]{3, 1200});
        leaderboard.add(new int[]{4, 1500});
        leaderboard.add(new int[]{5, 800});
        
        // Display leaderboard
        System.out.println("Leaderboard:");
        int rank = 1;
        for (int[] player : leaderboard) {
            System.out.println(rank++ + ". Player " + player[0] + ": " + player[1] + " points");
        }
        
        // Get top 3
        System.out.println("\\nTop 3:");
        Iterator<int[]> top3 = leaderboard.iterator();
        for (int i = 0; i < 3 && top3.hasNext(); i++) {
            int[] player = top3.next();
            System.out.println("Player " + player[0] + ": " + player[1]);
        }
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

