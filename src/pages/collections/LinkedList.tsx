import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedList() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' },
    { id: 'interview', label: 'Interview Questions' },
  ];

  const listMethods = [
    {
      title: 'addFirst(E e)',
      description: 'Adds an element to the beginning of the list. O(1) - very fast!',
      code: `LinkedList<String> list = new LinkedList<>();
list.add("banana");
list.addFirst("apple"); // Add to beginning
System.out.println(list); // [apple, banana]`,
      complexity: 'O(1)',
    },
    {
      title: 'addLast(E e)',
      description: 'Adds an element to the end of the list. O(1) - same as add().',
      code: `LinkedList<String> list = new LinkedList<>();
list.add("apple");
list.addLast("banana"); // Add to end
System.out.println(list); // [apple, banana]`,
      complexity: 'O(1)',
    },
    {
      title: 'removeFirst()',
      description: 'Removes and returns the first element. O(1) - very fast!',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String first = list.removeFirst();
System.out.println("Removed: " + first); // apple
System.out.println(list); // [banana, orange]`,
      complexity: 'O(1)',
    },
    {
      title: 'removeLast()',
      description: 'Removes and returns the last element. O(1) - very fast!',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String last = list.removeLast();
System.out.println("Removed: " + last); // orange
System.out.println(list); // [apple, banana]`,
      complexity: 'O(1)',
    },
    {
      title: 'getFirst() & getLast()',
      description: 'Gets the first and last elements without removing them. Both O(1).',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String first = list.getFirst(); // apple
String last = list.getLast();   // orange
System.out.println("First: " + first + ", Last: " + last);`,
      complexity: 'O(1)',
    },
    {
      title: 'get(int index)',
      description: 'Retrieves element at the specified index. O(n) - slower than ArrayList.',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String element = list.get(1);
System.out.println(element); // banana

// Avoid frequent get() calls - use iterator instead
for (String item : linkedList) {
    System.out.println(item); // More efficient
}`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'remove(int index)',
      description: 'Removes element at the specified index. O(n) but efficient for first/last.',
      code: `LinkedList list = new LinkedList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
String removed = list.remove(1);
System.out.println("Removed: " + removed); // banana
System.out.println(list); // [apple, orange]`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'size() & isEmpty()',
      description: 'Get list size and check if empty. Both O(1).',
      code: `LinkedList list = new LinkedList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
System.out.println("Size: " + list.size()); // 3
System.out.println("Is empty: " + list.isEmpty()); // false`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'clear()',
      description: 'Removes all elements from the list. O(1).',
      code: `LinkedList list = new LinkedList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
list.clear();
System.out.println(list); // []`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'contains(Object o)',
      description: 'Checks if the list contains the specified element. O(n).',
      code: `LinkedList list = new LinkedList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
boolean contains = list.contains("banana");
System.out.println("Contains banana: " + contains); // true`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'indexOf(Object o)',
      description: 'Finds the index of the first occurrence of the specified element. O(n).',
      code: `LinkedList list = new LinkedList<>();
list.addAll(Arrays.asList("apple", "banana", "orange"));
int index = list.indexOf("banana");
System.out.println("Index of banana: " + index); // 1

// LinkedList also supports containsAll() and indexOf()
System.out.println("Contains all (apple, orange): " + list.containsAll(Arrays.asList("apple", "orange"))); // true
System.out.println("Index of orange: " + list.indexOf("orange")); // 2`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
  ];

  const queueMethods = [
    {
      title: 'offer(E e) & poll()',
      description: 'Queue operations - add to end, remove from front. Both O(1).',
      code: `Queue<String> queue = new LinkedList<>();
queue.offer("first");
queue.offer("second");
queue.offer("third");

String front = queue.poll(); // Remove first
System.out.println("Polled: " + front); // first
System.out.println("Queue: " + queue); // [second, third]`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'push(E e) & pop()',
      description: 'Stack operations - add to front, remove from front. Both O(1).',
      code: `Deque<String> stack = new LinkedList<>();
stack.push("bottom");
stack.push("middle");
stack.push("top");

String top = stack.pop(); // Remove from top
System.out.println("Popped: " + top); // top
System.out.println("Stack: " + stack); // [middle, bottom]`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'peek() & peekFirst() & peekLast()',
      description: 'Gets the first and last elements without removing them. Both O(1).',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String peek = list.peek(); // apple
String first = list.peekFirst(); // apple
String last = list.peekLast();   // orange
System.out.println("Peek: " + peek + ", First: " + first + ", Last: " + last);`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
    {
      title: 'poll() & pollFirst() & pollLast()',
      description: 'Removes and returns the first and last elements. Both O(1).',
      code: `LinkedList<String> list = new LinkedList<>(Arrays.asList("apple", "banana", "orange"));
String poll = list.poll(); // apple
String first = list.pollFirst(); // banana
String last = list.pollLast();   // orange
System.out.println("Poll: " + poll + ", First: " + first + ", Last: " + last);`,
      complexity: 'O(1)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedList" sections={sections} />

        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java LinkedList"
            description="Doubly-linked list with efficient insertion/deletion and Queue/Stack capabilities"
            icon="list"
            gradient="green"
          />

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is LinkedList?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  LinkedList is a doubly-linked list implementation that also implements Deque, Queue, and List interfaces.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Internal Structure:</strong> Doubly-linked list</li>
                  <li>• <strong>Memory:</strong> Non-contiguous allocation</li>
                  <li>• <strong>Thread Safety:</strong> Not thread-safe</li>
                  <li>• <strong>Interfaces:</strong> List, Deque, Queue</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">addFirst / addLast</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">removeFirst / removeLast</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">get(index)</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add/remove()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">add/remove(index)</span>
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

// Empty LinkedList
List<String> list1 = new LinkedList<>();

// LinkedList with initial collection
List<String> list2 = new LinkedList<>(Arrays.asList("first", "second", "third"));

// Using LinkedList as List
LinkedList<String> list3 = new LinkedList<>();

// From another list
List<String> originalList = Arrays.asList("a", "b", "c");
List<String> list4 = new LinkedList<>(originalList);

// Direct initialization with values (Java 9+)
List list5 = List.of("apple", "banana", "orange");
List list6 = new LinkedList<>(list5);`} />
              </AccordionItem>

              <AccordionItem title="As Queue and Stack">
                <CodeBlock code={`import java.util.*;

// As Queue (FIFO)
Queue queue = new LinkedList<>();
queue.offer("first");
queue.offer("second");

// As Deque/Stack (LIFO)
Deque stack = new LinkedList<>();
stack.push("bottom");
stack.push("top");

// As Deque (Double-ended queue)
Deque deque = new LinkedList<>();
deque.addFirst("front");
deque.addLast("back");

// Using specific LinkedList methods
LinkedList linkedList = new LinkedList<>();
linkedList.addFirst("first");
linkedList.addLast("last");`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              LinkedList Methods
            </h2>

            <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">List Methods</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {listMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>

            <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Queue & Stack Methods</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {queueMethods.map((method, i) => (
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
              <AccordionItem title="Basic LinkedList Operations" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class LinkedListBasicOperations {
    public static void main(String[] args) {
        // Create LinkedList
        LinkedList list = new LinkedList<>();
        
        // Add elements (LinkedList excels at this)
        list.add("apple");
        list.add("banana");
        list.add("orange");
        System.out.println("Initial list: " + list);
        
        // Add at beginning and end (LinkedList's strength)
        list.addFirst("grape");
        list.addLast("kiwi");
        System.out.println("After addFirst/addLast: " + list);
        
        // Get first and last elements
        System.out.println("First: " + list.getFirst());
        System.out.println("Last: " + list.getLast());
        
        // Remove from beginning and end
        String first = list.removeFirst();
        String last = list.removeLast();
        System.out.println("Removed first: " + first);
        System.out.println("Removed last: " + last);
        System.out.println("After removals: " + list);
        
        // Iterate efficiently (avoid get() in loops)
        System.out.println("Iterating efficiently:");
        for (String item : list) {
            System.out.println("  " + item);
        }
        
        // Use iterator for more control
        Iterator iterator = list.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            if (item.equals("banana")) {
                iterator.remove(); // Safe removal during iteration
            }
        }
        System.out.println("After removing 'banana': " + list);
    }
}`} />
              </AccordionItem>

              <AccordionItem title="LinkedList as Queue" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class LinkedListAsQueue {
    public static void main(String[] args) {
        // Using LinkedList as Queue (FIFO)
        Queue<String> queue = new LinkedList<>();
        
        // Add elements (enqueue)
        queue.offer("Task1");
        queue.offer("Task2");
        queue.offer("Task3");
        System.out.println("Queue: " + queue);
        
        // Process queue
        while (!queue.isEmpty()) {
            String task = queue.poll();
            System.out.println("Processing: " + task);
        }
    }
}`} />
              </AccordionItem>

              <AccordionItem title="LinkedList as Stack">
                <CodeBlock code={`import java.util.*;

public class LinkedListAsStack {
    public static void main(String[] args) {
        // Using LinkedList as Stack (LIFO)
        Deque<String> stack = new LinkedList<>();
        
        // Push elements (add to top)
        stack.push("Bottom");
        stack.push("Middle");
        stack.push("Top");
        System.out.println("Stack: " + stack);
        
        // Peek at top element
        System.out.println("Top element: " + stack.peek());
        
        // Pop elements (remove from top)
        while (!stack.isEmpty()) {
            String element = stack.pop();
            System.out.println("Popped: " + element);
        }
    }
}`} />
              </AccordionItem>

              <AccordionItem title="LinkedList as Deque">
                <CodeBlock code={`import java.util.*;

public class LinkedListAsDeque {
    public static void main(String[] args) {
        // Using LinkedList as Deque (Double-ended queue)
        Deque deque = new LinkedList<>();
        
        // Add to both ends
        deque.addFirst("Front1");
        deque.addLast("Back1");
        deque.addFirst("Front2");
        deque.addLast("Back2");
        System.out.println("Deque: " + deque);
        
        // Remove from both ends
        System.out.println("Remove first: " + deque.removeFirst());
        System.out.println("Remove last: " + deque.removeLast());
        System.out.println("After removals: " + deque);
        
        // Access both ends
        System.out.println("First element: " + deque.getFirst());
        System.out.println("Last element: " + deque.getLast());
        
        // Example: Sliding window maximum
        Deque window = new LinkedList<>();
        int[] array = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3; // window size
        
        System.out.println("\nSliding window maximum:");
        for (int i = 0; i < array.length; i++) {
            // Remove elements outside window
            while (!window.isEmpty() && (int)window.getFirst() <= i - k) {
                window.removeFirst();
            }
            
            // Remove smaller elements
            while (!window.isEmpty() && array[(int)window.getLast()] <= array[i]) {
                window.removeLast();
            }
            
            window.addLast(i);
            
            // Print maximum for current window
            if (i >= k - 1) {
                System.out.println("Max in window [" + (i-k+1) + "," + i + "]: " + array[(int)window.getFirst()]);
            }
        }
        
        // Example: Palindrome checker
        Deque palindromeCheck = new LinkedList<>();
        String word = "racecar";
        
        // Add characters to deque
        for (char c : word.toCharArray()) {
            palindromeCheck.addLast(c);
        }
        
        boolean isPalindrome = true;
        while (palindromeCheck.size() > 1) {
            char first = palindromeCheck.removeFirst();
            char last = palindromeCheck.removeLast();
            if (first != last) {
                isPalindrome = false;
                break;
            }
        }
        
        System.out.println("\nIs '" + word + "' a palindrome? " + isPalindrome);
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
              to="/interview/linkedlist" 
              className="block group"
            >
              <div className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        LinkedList Interview Preparation
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
