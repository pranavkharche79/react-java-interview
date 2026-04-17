import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function StackInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Stack Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/stack" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Stack
            </Link>
          </div>

          <PageHeader
            title="Stack Interview Questions"
            description="Master Java Stack with theoretical concepts and hands-on coding problems"
            icon="list"
            gradient="purple"
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
              <AccordionItem title="1. What is a Stack and what is LIFO?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    A Stack is a linear data structure that follows <strong>LIFO (Last In, First Out)</strong> principle - the last element added is the first one to be removed.
                  </p>
                  <CodeBlock code={`// Stack operations
Stack<Integer> stack = new Stack<>();

stack.push(1);  // [1]
stack.push(2);  // [1, 2]
stack.push(3);  // [1, 2, 3]

stack.pop();    // Returns 3, stack: [1, 2]
stack.peek();   // Returns 2, stack unchanged
stack.empty();  // false

// Real-world analogies:
// - Stack of plates
// - Browser back button history
// - Undo functionality in editors`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Stack vs Deque: Which should you use?">
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      <strong>Recommendation:</strong> Use <code>Deque</code> (ArrayDeque) instead of <code>Stack</code> class. Stack is a legacy class that extends Vector.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Feature</th>
                          <th className="text-center py-2 text-amber-600">Stack (Legacy)</th>
                          <th className="text-center py-2 text-emerald-600">ArrayDeque</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Synchronized</td>
                          <td className="text-center">Yes (slower)</td>
                          <td className="text-center">No (faster)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Extends</td>
                          <td className="text-center">Vector</td>
                          <td className="text-center">AbstractCollection</td>
                        </tr>
                        <tr>
                          <td className="py-2">Recommended</td>
                          <td className="text-center text-red-600">❌ No</td>
                          <td className="text-center text-emerald-600">✅ Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// Modern approach - use Deque
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
stack.push(2);
stack.pop();    // Returns 2
stack.peek();   // Returns 1`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. What are the time complexities of Stack operations?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Operation</th>
                          <th className="text-center py-2">Time Complexity</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">push()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">pop()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">peek()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">isEmpty()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                        </tr>
                        <tr>
                          <td className="py-2">search()</td>
                          <td className="text-center text-amber-600">O(n)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="4. How to implement a Stack using arrays?">
                <div className="space-y-4">
                  <CodeBlock code={`class ArrayStack<T> {
    private Object[] array;
    private int top = -1;
    private int capacity;
    
    public ArrayStack(int capacity) {
        this.capacity = capacity;
        array = new Object[capacity];
    }
    
    public void push(T item) {
        if (top == capacity - 1) {
            throw new StackOverflowError("Stack is full");
        }
        array[++top] = item;
    }
    
    @SuppressWarnings("unchecked")
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T item = (T) array[top];
        array[top--] = null;  // Help GC
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return (T) array[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
    
    public int size() {
        return top + 1;
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What are real-world applications of Stack?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2">
                      <li><strong>Function Call Stack:</strong> Manages function calls and returns</li>
                      <li><strong>Expression Evaluation:</strong> Infix to postfix conversion, calculator</li>
                      <li><strong>Undo/Redo:</strong> Text editors, photo editors</li>
                      <li><strong>Browser History:</strong> Back button navigation</li>
                      <li><strong>Syntax Parsing:</strong> Matching parentheses, HTML tags</li>
                      <li><strong>Backtracking:</strong> Maze solving, N-Queens problem</li>
                      <li><strong>Memory Management:</strong> Stack memory allocation</li>
                    </ul>
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
              <AccordionItem title="1. Valid Parentheses" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #20</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            
            char top = stack.pop();
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
        }
    }
    
    return stack.isEmpty();
}

// Example: "()[]{}" → true
// Example: "([)]" → false`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Min Stack">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #155</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Design a stack that supports push, pop, top, and retrieving the minimum element in O(1).
                  </p>
                  <CodeBlock code={`class MinStack {
    private Deque<Integer> stack;
    private Deque<Integer> minStack;
    
    public MinStack() {
        stack = new ArrayDeque<>();
        minStack = new ArrayDeque<>();
    }
    
    public void push(int val) {
        stack.push(val);
        // Push to minStack if empty or val <= current min
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        int popped = stack.pop();
        if (popped == minStack.peek()) {
            minStack.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Evaluate Reverse Polish Notation">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #150</span>
                  </div>
                  <CodeBlock code={`public int evalRPN(String[] tokens) {
    Deque<Integer> stack = new ArrayDeque<>();
    
    for (String token : tokens) {
        if (isOperator(token)) {
            int b = stack.pop();
            int a = stack.pop();
            stack.push(calculate(a, b, token));
        } else {
            stack.push(Integer.parseInt(token));
        }
    }
    
    return stack.pop();
}

private boolean isOperator(String s) {
    return s.equals("+") || s.equals("-") || 
           s.equals("*") || s.equals("/");
}

private int calculate(int a, int b, String op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return 0;
    }
}

// Example: ["2","1","+","3","*"] → 9
// ((2 + 1) * 3) = 9`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Daily Temperatures">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #739</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Find how many days until warmer temperature for each day.
                  </p>
                  <CodeBlock code={`public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();  // Store indices
    
    for (int i = 0; i < n; i++) {
        // Pop all smaller temperatures
        while (!stack.isEmpty() && 
               temperatures[i] > temperatures[stack.peek()]) {
            int prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}

// Example: [73,74,75,71,69,72,76,73]
// Output:  [1, 1, 4, 2, 1, 1, 0, 0]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Largest Rectangle in Histogram">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #84</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public int largestRectangleArea(int[] heights) {
    Deque<Integer> stack = new ArrayDeque<>();
    int maxArea = 0;
    int n = heights.length;
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!stack.isEmpty() && h < heights[stack.peek()]) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

// Example: [2,1,5,6,2,3]
// Output: 10 (5×2 rectangle)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Implement Queue using Stacks">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #232</span>
                  </div>
                  <CodeBlock code={`class MyQueue {
    private Deque<Integer> input;
    private Deque<Integer> output;
    
    public MyQueue() {
        input = new ArrayDeque<>();
        output = new ArrayDeque<>();
    }
    
    public void push(int x) {
        input.push(x);
    }
    
    public int pop() {
        peek();  // Ensure output has elements
        return output.pop();
    }
    
    public int peek() {
        if (output.isEmpty()) {
            while (!input.isEmpty()) {
                output.push(input.pop());
            }
        }
        return output.peek();
    }
    
    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
}

// Amortized O(1) for all operations`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

