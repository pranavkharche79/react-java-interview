import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function Queue() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'priority-queue', label: 'PriorityQueue' },
    { id: 'examples', label: 'Examples' },
  ];

  const methods = [
    {
      title: 'offer(E e)',
      description: 'Adds element to the end of the queue. Returns true if successful.',
      code: `Queue<String> queue = new LinkedList<>();
queue.offer("first");
queue.offer("second");
queue.offer("third");
System.out.println(queue); // [first, second, third]`,
      complexity: 'O(1)',
    },
    {
      title: 'poll()',
      description: 'Removes and returns the head of the queue. Returns null if empty.',
      code: `Queue<String> queue = new LinkedList<>();
queue.offer("a");
queue.offer("b");
queue.offer("c");
String head = queue.poll(); // Returns "a"
System.out.println(head);   // a
System.out.println(queue);  // [b, c]`,
      complexity: 'O(1)',
    },
    {
      title: 'peek()',
      description: 'Returns the head without removing it. Returns null if empty.',
      code: `Queue<Integer> queue = new LinkedList<>();
queue.offer(10);
queue.offer(20);
int head = queue.peek(); // Returns 10
System.out.println(head);        // 10
System.out.println(queue.size()); // 2 (unchanged)`,
      complexity: 'O(1)',
    },
    {
      title: 'add(E e)',
      description: 'Adds element to queue. Throws exception if capacity restricted.',
      code: `Queue<String> queue = new LinkedList<>();
queue.add("item1");
queue.add("item2");
// Similar to offer() but throws IllegalStateException
// if queue is capacity-restricted and full`,
      complexity: 'O(1)',
    },
    {
      title: 'remove()',
      description: 'Removes head of queue. Throws exception if empty.',
      code: `Queue<String> queue = new LinkedList<>();
queue.add("a");
queue.add("b");
String head = queue.remove(); // Returns "a"
// Throws NoSuchElementException if queue is empty`,
      complexity: 'O(1)',
    },
    {
      title: 'element()',
      description: 'Returns head without removing. Throws exception if empty.',
      code: `Queue<String> queue = new LinkedList<>();
queue.add("first");
String head = queue.element(); // Returns "first"
// Throws NoSuchElementException if queue is empty
// Use peek() for null-safe alternative`,
      complexity: 'O(1)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Queue" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java Queue"
            description="FIFO (First-In-First-Out) data structure for ordered processing"
            icon="list"
            gradient="green"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/queue" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Queue Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is Queue?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Queue is a FIFO (First-In-First-Out) data structure. Elements are added at the end and removed from the front.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Principle:</strong> FIFO (First-In-First-Out)</li>
                  <li>• <strong>Interface:</strong> java.util.Queue</li>
                  <li>• <strong>Common Impls:</strong> LinkedList, ArrayDeque, PriorityQueue</li>
                  <li>• <strong>Thread-Safe:</strong> ConcurrentLinkedQueue, BlockingQueue</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Method Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2 text-dark-600 dark:text-dark-400">Operation</th>
                        <th className="text-center py-2 text-dark-600 dark:text-dark-400">Throws</th>
                        <th className="text-center py-2 text-dark-600 dark:text-dark-400">Returns null</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Insert</td>
                        <td className="text-center">add(e)</td>
                        <td className="text-center">offer(e)</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Remove</td>
                        <td className="text-center">remove()</td>
                        <td className="text-center">poll()</td>
                      </tr>
                      <tr>
                        <td className="py-2">Examine</td>
                        <td className="text-center">element()</td>
                        <td className="text-center">peek()</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              <AccordionItem title="LinkedList as Queue" defaultOpen>
                <CodeBlock code={`import java.util.*;

// LinkedList implements Queue interface
Queue<String> queue1 = new LinkedList<>();
queue1.offer("first");
queue1.offer("second");

// Can also use add()
Queue<Integer> queue2 = new LinkedList<>();
queue2.add(1);
queue2.add(2);
queue2.add(3);`} />
              </AccordionItem>
              
              <AccordionItem title="ArrayDeque as Queue (Recommended)">
                <CodeBlock code={`import java.util.*;

// ArrayDeque is faster than LinkedList for queue operations
Queue<String> queue1 = new ArrayDeque<>();
queue1.offer("a");
queue1.offer("b");

// With initial capacity
Queue<Integer> queue2 = new ArrayDeque<>(100);

// From collection
Queue<String> queue3 = new ArrayDeque<>(Arrays.asList("x", "y", "z"));`} />
              </AccordionItem>
              
              <AccordionItem title="PriorityQueue">
                <CodeBlock code={`import java.util.*;

// Min-heap by default (smallest first)
Queue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5);
minHeap.offer(1);
minHeap.offer(3);
System.out.println(minHeap.poll()); // 1 (smallest)

// Max-heap (largest first)
Queue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.offer(5);
maxHeap.offer(1);
maxHeap.offer(3);
System.out.println(maxHeap.poll()); // 5 (largest)

// Custom comparator
Queue<String> byLength = new PriorityQueue<>(
    Comparator.comparingInt(String::length)
);`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Queue Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* PriorityQueue Section */}
          <section id="priority-queue" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              PriorityQueue
            </h2>
            
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is PriorityQueue?</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4">
                PriorityQueue orders elements by their natural ordering or a custom Comparator. It's a min-heap by default.
              </p>
              <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                <li>• <strong>Structure:</strong> Binary heap</li>
                <li>• <strong>Ordering:</strong> Elements sorted by priority</li>
                <li>• <strong>poll():</strong> O(log n) - removes highest priority element</li>
                <li>• <strong>offer():</strong> O(log n) - adds element</li>
                <li>• <strong>peek():</strong> O(1) - views highest priority element</li>
              </ul>
            </div>

            <CodeBlock code={`import java.util.*;

public class PriorityQueueExample {
    public static void main(String[] args) {
        // Task with priority
        PriorityQueue<int[]> taskQueue = new PriorityQueue<>(
            (a, b) -> a[0] - b[0] // Sort by priority (lower = higher priority)
        );
        
        // {priority, taskId}
        taskQueue.offer(new int[]{3, 101}); // Low priority
        taskQueue.offer(new int[]{1, 102}); // High priority
        taskQueue.offer(new int[]{2, 103}); // Medium priority
        
        // Process tasks in priority order
        while (!taskQueue.isEmpty()) {
            int[] task = taskQueue.poll();
            System.out.println("Processing task " + task[1] + " (priority: " + task[0] + ")");
        }
        // Output:
        // Processing task 102 (priority: 1)
        // Processing task 103 (priority: 2)
        // Processing task 101 (priority: 3)
    }
}`} />
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Practical Examples
            </h2>
            
            <Accordion>
              <AccordionItem title="BFS (Breadth-First Search)" defaultOpen>
                <CodeBlock code={`import java.util.*;

public class BFSExample {
    public static void bfs(Map<Integer, List<Integer>> graph, int start) {
        Queue<Integer> queue = new ArrayDeque<>();
        Set<Integer> visited = new HashSet<>();
        
        queue.offer(start);
        visited.add(start);
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            
            for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
    }
    
    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2, 3));
        graph.put(2, Arrays.asList(4, 5));
        graph.put(3, Arrays.asList(6));
        
        System.out.print("BFS traversal: ");
        bfs(graph, 1); // Output: 1 2 3 4 5 6
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Task Scheduler">
                <CodeBlock code={`import java.util.*;

public class TaskScheduler {
    private Queue<String> taskQueue = new ArrayDeque<>();
    
    public void addTask(String task) {
        taskQueue.offer(task);
        System.out.println("Added: " + task);
    }
    
    public void processNext() {
        String task = taskQueue.poll();
        if (task != null) {
            System.out.println("Processing: " + task);
        } else {
            System.out.println("No tasks in queue");
        }
    }
    
    public void showPending() {
        System.out.println("Pending tasks: " + taskQueue);
    }
    
    public static void main(String[] args) {
        TaskScheduler scheduler = new TaskScheduler();
        
        scheduler.addTask("Send email");
        scheduler.addTask("Generate report");
        scheduler.addTask("Backup database");
        
        scheduler.showPending();
        
        scheduler.processNext(); // Processes "Send email"
        scheduler.processNext(); // Processes "Generate report"
        
        scheduler.showPending(); // [Backup database]
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Top K Elements (Using PriorityQueue)">
                <CodeBlock code={`import java.util.*;

public class TopKElements {
    // Find K largest elements
    public static int[] findKLargest(int[] nums, int k) {
        // Min-heap of size k
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll(); // Remove smallest
            }
        }
        
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll();
        }
        return result;
    }
    
    // Find K smallest elements
    public static int[] findKSmallest(int[] nums, int k) {
        // Max-heap of size k
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        for (int num : nums) {
            maxHeap.offer(num);
            if (maxHeap.size() > k) {
                maxHeap.poll(); // Remove largest
            }
        }
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll();
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[] nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
        
        System.out.println("3 largest: " + Arrays.toString(findKLargest(nums, 3)));
        // [9, 6, 5]
        
        System.out.println("3 smallest: " + Arrays.toString(findKSmallest(nums, 3)));
        // [1, 1, 2]
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

