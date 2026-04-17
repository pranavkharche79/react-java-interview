import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import MethodCard from '../../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function Stack() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' },
  ];

  const methods = [
    {
      title: 'push(E item)',
      description: 'Pushes an item onto the top of the stack.',
      code: `Stack<String> stack = new Stack<>();
stack.push("first");
stack.push("second");
stack.push("third");
System.out.println(stack); // [first, second, third]
// "third" is at the top`,
      complexity: 'O(1)',
    },
    {
      title: 'pop()',
      description: 'Removes and returns the item at the top of the stack.',
      code: `Stack<String> stack = new Stack<>();
stack.push("a");
stack.push("b");
stack.push("c");
String top = stack.pop(); // Returns "c"
System.out.println(top);   // c
System.out.println(stack); // [a, b]`,
      complexity: 'O(1)',
    },
    {
      title: 'peek()',
      description: 'Returns the item at the top without removing it.',
      code: `Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
stack.push(30);
int top = stack.peek(); // Returns 30
System.out.println(top);        // 30
System.out.println(stack.size()); // 3 (unchanged)`,
      complexity: 'O(1)',
    },
    {
      title: 'empty()',
      description: 'Tests if the stack is empty.',
      code: `Stack<String> stack = new Stack<>();
System.out.println(stack.empty()); // true
stack.push("item");
System.out.println(stack.empty()); // false`,
      complexity: 'O(1)',
    },
    {
      title: 'search(Object o)',
      description: 'Returns 1-based position from top. Returns -1 if not found.',
      code: `Stack<String> stack = new Stack<>();
stack.push("a"); // Position 3 from top
stack.push("b"); // Position 2 from top
stack.push("c"); // Position 1 from top (top)
System.out.println(stack.search("c")); // 1
System.out.println(stack.search("a")); // 3
System.out.println(stack.search("x")); // -1`,
      complexity: 'O(n)',
      badge: 'warning' as const,
    },
    {
      title: 'size()',
      description: 'Returns the number of elements in the stack.',
      code: `Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.push(3);
System.out.println(stack.size()); // 3`,
      complexity: 'O(1)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Stack" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java Stack"
            description="LIFO (Last-In-First-Out) data structure for push/pop operations"
            icon="list"
            gradient="blue"
          />

          {/* Interview Questions Link */}
          <div className="mb-8">
            <Link 
              to="/interview/stack" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Stack Interview Questions
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
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">What is Stack?</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Stack is a LIFO (Last-In-First-Out) data structure. The last element added is the first one to be removed.
                </p>
                <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <li>• <strong>Principle:</strong> LIFO (Last-In-First-Out)</li>
                  <li>• <strong>Extends:</strong> Vector class</li>
                  <li>• <strong>Thread Safety:</strong> Synchronized (thread-safe)</li>
                  <li>• <strong>Null Elements:</strong> Allowed</li>
                  <li>• <strong>Recommended:</strong> Use Deque instead</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">push()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">pop()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dark-200 dark:border-dark-700">
                    <span className="text-dark-600 dark:text-dark-400">peek()</span>
                    <span className="badge badge-success">O(1)</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-dark-600 dark:text-dark-400">search()</span>
                    <span className="badge badge-warning">O(n)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modern Alternative */}
            <div className="mt-6 card p-6 border-l-4 border-l-amber-500">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">💡 Modern Alternative: Deque</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4">
                The Stack class is considered legacy. For new code, use <code className="text-primary-500">Deque</code> interface with <code className="text-primary-500">ArrayDeque</code>:
              </p>
              <CodeBlock code={`// Recommended approach
Deque<String> stack = new ArrayDeque<>();
stack.push("item");    // Add to top
stack.pop();           // Remove from top
stack.peek();          // View top`} />
            </div>
          </section>

          {/* Initialization Section */}
          <section id="initialization" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Initialization
            </h2>
            
            <Accordion>
              <AccordionItem title="Using Stack Class (Legacy)" defaultOpen>
                <CodeBlock code={`import java.util.Stack;

// Empty Stack
Stack<String> stack1 = new Stack<>();

// Add elements
Stack<Integer> stack2 = new Stack<>();
stack2.push(10);
stack2.push(20);
stack2.push(30);

// Stack from collection (via addAll)
Stack<String> stack3 = new Stack<>();
stack3.addAll(Arrays.asList("a", "b", "c"));
// Note: "c" will be at the top`} />
              </AccordionItem>
              
              <AccordionItem title="Using Deque (Recommended)">
                <CodeBlock code={`import java.util.*;

// ArrayDeque as Stack (faster, not synchronized)
Deque<String> stack1 = new ArrayDeque<>();
stack1.push("first");
stack1.push("second");

// LinkedList as Stack
Deque<Integer> stack2 = new LinkedList<>();
stack2.push(1);
stack2.push(2);

// With initial capacity
Deque<String> stack3 = new ArrayDeque<>(100);`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Methods Section */}
          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Stack Methods
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
              <AccordionItem title="Reverse a String" defaultOpen>
                <CodeBlock code={`public class ReverseString {
    public static String reverse(String str) {
        Deque<Character> stack = new ArrayDeque<>();
        
        // Push all characters
        for (char c : str.toCharArray()) {
            stack.push(c);
        }
        
        // Pop to build reversed string
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }
        
        return reversed.toString();
    }
    
    public static void main(String[] args) {
        System.out.println(reverse("Hello")); // olleH
        System.out.println(reverse("Java"));  // avaJ
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Balanced Parentheses Checker">
                <CodeBlock code={`public class BalancedParentheses {
    public static boolean isBalanced(String expr) {
        Deque<Character> stack = new ArrayDeque<>();
        
        for (char c : expr.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else if (c == ')' || c == ']' || c == '}') {
                if (stack.isEmpty()) return false;
                
                char top = stack.pop();
                if ((c == ')' && top != '(') ||
                    (c == ']' && top != '[') ||
                    (c == '}' && top != '{')) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        System.out.println(isBalanced("([{}])"));   // true
        System.out.println(isBalanced("([)]"));     // false
        System.out.println(isBalanced("{[()]}"));   // true
        System.out.println(isBalanced("((())"));    // false
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Undo/Redo Functionality">
                <CodeBlock code={`public class UndoRedoExample {
    private Deque<String> undoStack = new ArrayDeque<>();
    private Deque<String> redoStack = new ArrayDeque<>();
    private String currentState = "";
    
    public void doAction(String newState) {
        undoStack.push(currentState);
        currentState = newState;
        redoStack.clear(); // Clear redo after new action
        System.out.println("Current: " + currentState);
    }
    
    public void undo() {
        if (!undoStack.isEmpty()) {
            redoStack.push(currentState);
            currentState = undoStack.pop();
            System.out.println("Undo -> Current: " + currentState);
        } else {
            System.out.println("Nothing to undo");
        }
    }
    
    public void redo() {
        if (!redoStack.isEmpty()) {
            undoStack.push(currentState);
            currentState = redoStack.pop();
            System.out.println("Redo -> Current: " + currentState);
        } else {
            System.out.println("Nothing to redo");
        }
    }
    
    public static void main(String[] args) {
        UndoRedoExample editor = new UndoRedoExample();
        editor.doAction("Hello");
        editor.doAction("Hello World");
        editor.doAction("Hello World!");
        editor.undo();  // Hello World
        editor.undo();  // Hello
        editor.redo();  // Hello World
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

