import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function QueueInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Queue Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/queue" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Queue
            </Link>
          </div>

          <PageHeader
            title="Queue Interview Questions"
            description="Master Java Queue with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="cyan"
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
              <AccordionItem title="1. What is a Queue and what is FIFO?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    A Queue is a linear data structure that follows <strong>FIFO (First In, First Out)</strong> - the first element added is the first one to be removed.
                  </p>
                  <CodeBlock code={`Queue<Integer> queue = new LinkedList<>();

queue.offer(1);  // [1]
queue.offer(2);  // [1, 2]
queue.offer(3);  // [1, 2, 3]

queue.poll();    // Returns 1, queue: [2, 3]
queue.peek();    // Returns 2, queue unchanged

// Real-world analogies:
// - Line at a ticket counter
// - Print job queue
// - Task scheduling`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Queue vs Deque vs PriorityQueue">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2">Queue</th>
                          <th className="text-center py-2">Deque</th>
                          <th className="text-center py-2">PriorityQueue</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Order</td>
                          <td className="text-center">FIFO</td>
                          <td className="text-center">Both ends</td>
                          <td className="text-center">Priority-based</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Insert/Remove</td>
                          <td className="text-center">One end each</td>
                          <td className="text-center">Both ends</td>
                          <td className="text-center">Based on priority</td>
                        </tr>
                        <tr>
                          <td className="py-2">Implementation</td>
                          <td className="text-center">LinkedList</td>
                          <td className="text-center">ArrayDeque</td>
                          <td className="text-center">Heap</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// Queue (FIFO)
Queue<Integer> queue = new LinkedList<>();

// Deque (Double-ended)
Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);
deque.addLast(2);

// PriorityQueue (Min-heap by default)
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(3);
pq.offer(1);
pq.offer(2);
pq.poll();  // Returns 1 (smallest)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. What are offer/poll vs add/remove differences?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Operation</th>
                          <th className="text-center py-2">Throws Exception</th>
                          <th className="text-center py-2">Returns Special Value</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Insert</td>
                          <td className="text-center">add(e)</td>
                          <td className="text-center text-emerald-600">offer(e) ✓</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Remove</td>
                          <td className="text-center">remove()</td>
                          <td className="text-center text-emerald-600">poll() ✓</td>
                        </tr>
                        <tr>
                          <td className="py-2">Examine</td>
                          <td className="text-center">element()</td>
                          <td className="text-center text-emerald-600">peek() ✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`Queue<Integer> queue = new LinkedList<>();

// On empty queue:
queue.remove();   // NoSuchElementException
queue.poll();     // Returns null (safe)

queue.element();  // NoSuchElementException  
queue.peek();     // Returns null (safe)

// Prefer poll() and peek() for safer code`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. How does PriorityQueue work internally?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    PriorityQueue is implemented as a <strong>binary min-heap</strong> (by default).
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Structure:</strong> Complete binary tree stored in array</li>
                      <li><strong>Parent:</strong> index (i-1)/2</li>
                      <li><strong>Left child:</strong> 2*i + 1</li>
                      <li><strong>Right child:</strong> 2*i + 2</li>
                      <li><strong>offer():</strong> O(log n) - add at end, bubble up</li>
                      <li><strong>poll():</strong> O(log n) - remove root, heapify down</li>
                      <li><strong>peek():</strong> O(1) - return root</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Min-heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();

// Max-heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

// Custom comparator
PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What is BlockingQueue and its implementations?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    BlockingQueue is a thread-safe queue that blocks on empty/full conditions.
                  </p>
                  <CodeBlock code={`// ArrayBlockingQueue - bounded, array-backed
BlockingQueue<Integer> abq = new ArrayBlockingQueue<>(10);

// LinkedBlockingQueue - optionally bounded
BlockingQueue<Integer> lbq = new LinkedBlockingQueue<>();

// PriorityBlockingQueue - unbounded priority queue
BlockingQueue<Integer> pbq = new PriorityBlockingQueue<>();

// Blocking operations
abq.put(1);    // Blocks if full
abq.take();   // Blocks if empty

// Non-blocking alternatives
abq.offer(1); // Returns false if full
abq.poll();   // Returns null if empty`} />
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
              <AccordionItem title="1. Implement Stack using Queues" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #225</span>
                  </div>
                  <CodeBlock code={`class MyStack {
    private Queue<Integer> queue;
    
    public MyStack() {
        queue = new LinkedList<>();
    }
    
    public void push(int x) {
        queue.offer(x);
        // Rotate queue to put new element at front
        for (int i = 0; i < queue.size() - 1; i++) {
            queue.offer(queue.poll());
        }
    }
    
    public int pop() {
        return queue.poll();
    }
    
    public int top() {
        return queue.peek();
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Sliding Window Maximum">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #239</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums.length == 0) return new int[0];
    
    int[] result = new int[nums.length - k + 1];
    Deque<Integer> deque = new ArrayDeque<>();  // Store indices
    
    for (int i = 0; i < nums.length; i++) {
        // Remove indices outside window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements (they can't be max)
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result once we have a full window
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}

// Example: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Top K Frequent Elements">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #347</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public int[] topKFrequent(int[] nums, int k) {
    // Count frequencies
    Map<Integer, Integer> count = new HashMap<>();
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    // Min-heap of size k (by frequency)
    PriorityQueue<Integer> heap = new PriorityQueue<>(
        (a, b) -> count.get(a) - count.get(b)
    );
    
    for (int num : count.keySet()) {
        heap.offer(num);
        if (heap.size() > k) {
            heap.poll();  // Remove least frequent
        }
    }
    
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = heap.poll();
    }
    return result;
}

// Example: nums = [1,1,1,2,2,3], k = 2
// Output: [1, 2]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Kth Largest Element in Stream">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #703</span>
                  </div>
                  <CodeBlock code={`class KthLargest {
    private PriorityQueue<Integer> minHeap;
    private int k;
    
    public KthLargest(int k, int[] nums) {
        this.k = k;
        minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            add(num);
        }
    }
    
    public int add(int val) {
        minHeap.offer(val);
        
        // Keep only k largest elements
        if (minHeap.size() > k) {
            minHeap.poll();
        }
        
        return minHeap.peek();  // Kth largest
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Binary Tree Level Order Traversal">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #102</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <CodeBlock code={`public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(level);
    }
    
    return result;
}

//     3
//    / \\
//   9  20
//     /  \\
//    15   7
// Output: [[3], [9,20], [15,7]]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Task Scheduler">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #621</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public int leastInterval(char[] tasks, int n) {
    int[] count = new int[26];
    for (char task : tasks) {
        count[task - 'A']++;
    }
    
    // Max-heap by frequency
    PriorityQueue<Integer> heap = new PriorityQueue<>(Collections.reverseOrder());
    for (int c : count) {
        if (c > 0) heap.offer(c);
    }
    
    int time = 0;
    
    while (!heap.isEmpty()) {
        List<Integer> temp = new ArrayList<>();
        
        // Process n+1 tasks (or idle)
        for (int i = 0; i <= n; i++) {
            if (!heap.isEmpty()) {
                int freq = heap.poll() - 1;
                if (freq > 0) temp.add(freq);
            }
            time++;
            
            // If no more tasks, break
            if (heap.isEmpty() && temp.isEmpty()) break;
        }
        
        // Add remaining tasks back
        for (int freq : temp) {
            heap.offer(freq);
        }
    }
    
    return time;
}

// Example: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8 (A -> B -> idle -> A -> B -> idle -> A -> B)`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

