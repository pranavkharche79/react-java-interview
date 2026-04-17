import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function LinkedListInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="LinkedList Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/collections/linkedlist" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to LinkedList
            </Link>
          </div>

          <PageHeader
            title="LinkedList Interview Questions"
            description="Master Java LinkedList with theoretical concepts and hands-on coding problems"
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
              <AccordionItem title="1. How does Java LinkedList work internally?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    Java's LinkedList is a <strong>doubly-linked list</strong> implementation that stores elements in nodes with pointers to both previous and next elements.
                  </p>
                  <CodeBlock code={`// Internal Node structure
private static class Node<E> {
    E item;
    Node<E> next;
    Node<E> prev;
    
    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}

// LinkedList maintains:
transient Node<E> first;  // Head pointer
transient Node<E> last;   // Tail pointer
transient int size;       // Number of elements

// Structure: null <-- [A] <--> [B] <--> [C] --> null
//                    first           last`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. What is the difference between Singly and Doubly Linked List?">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Singly Linked List</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Each node has only <code>next</code> pointer</li>
                        <li>Can only traverse forward</li>
                        <li>Less memory per node</li>
                        <li>Simpler implementation</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Doubly Linked List (Java)</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Each node has <code>prev</code> and <code>next</code></li>
                        <li>Can traverse both directions</li>
                        <li>More memory per node</li>
                        <li>Easier deletion, reverse traversal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="3. When should you use LinkedList over ArrayList?">
                <div className="space-y-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Use LinkedList when:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                      <li>Frequent insertions/deletions at <strong>beginning or middle</strong></li>
                      <li>You need <strong>Deque</strong> functionality (add/remove from both ends)</li>
                      <li>Memory is not a primary concern</li>
                      <li>You iterate sequentially (not random access)</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">⚠️ In practice:</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      ArrayList is almost always faster due to CPU cache locality. LinkedList is rarely the best choice in modern applications.
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="4. What interfaces does LinkedList implement?">
                <div className="space-y-4">
                  <CodeBlock code={`public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, Serializable

// List interface: get(), add(), remove(), etc.
// Deque interface: addFirst(), addLast(), removeFirst(), removeLast(),
//                  push(), pop(), peek(), poll()

// Can be used as:
List<String> list = new LinkedList<>();       // List
Deque<String> deque = new LinkedList<>();     // Double-ended queue
Queue<String> queue = new LinkedList<>();     // FIFO queue
// Stack behavior: push(), pop(), peek()`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What is the time complexity of LinkedList operations?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2">Operation</th>
                          <th className="text-center py-2">Time</th>
                          <th className="text-left py-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">addFirst() / addLast()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td>Direct pointer update</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">removeFirst() / removeLast()</td>
                          <td className="text-center text-emerald-600">O(1)</td>
                          <td>Direct pointer update</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">get(index)</td>
                          <td className="text-center text-red-600">O(n)</td>
                          <td>Must traverse to index</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">add(index, element)</td>
                          <td className="text-center text-amber-600">O(n)</td>
                          <td>O(n) to find + O(1) to insert</td>
                        </tr>
                        <tr>
                          <td className="py-2">contains()</td>
                          <td className="text-center text-red-600">O(n)</td>
                          <td>Linear search</td>
                        </tr>
                      </tbody>
                    </table>
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
              <AccordionItem title="1. Detect Cycle in Linked List (Floyd's Algorithm)" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #141</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`class ListNode {
    int val;
    ListNode next;
}

// Floyd's Tortoise and Hare
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) return false;
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;         // Move 1 step
        fast = fast.next.next;    // Move 2 steps
        
        if (slow == fast) {
            return true;  // Cycle detected!
        }
    }
    
    return false;  // No cycle (fast reached end)
}

// Time: O(n), Space: O(1)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Find Cycle Start Point">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #142</span>
                  </div>
                  <CodeBlock code={`public ListNode detectCycle(ListNode head) {
    if (head == null) return null;
    
    ListNode slow = head, fast = head;
    
    // Phase 1: Detect cycle
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Find cycle start
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // Cycle start node
        }
    }
    
    return null;  // No cycle
}

// Mathematical proof:
// Distance to cycle start = k
// Meeting point from cycle start = m
// slow traveled: k + m
// fast traveled: 2(k + m) = k + m + nC (n cycles)
// Therefore: k = nC - m (distance to cycle start)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Reverse a Linked List">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #206</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <CodeBlock code={`// Iterative - O(n) time, O(1) space
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    
    while (curr != null) {
        ListNode next = curr.next;  // Save next
        curr.next = prev;           // Reverse link
        prev = curr;                // Move prev
        curr = next;                // Move curr
    }
    
    return prev;  // New head
}

// Recursive - O(n) time, O(n) space (call stack)
public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// Original: 1 -> 2 -> 3 -> null
// Reversed: 3 -> 2 -> 1 -> null`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Find Middle Element of Linked List">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #876</span>
                  </div>
                  <CodeBlock code={`// Two-pointer technique
public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;         // Move 1 step
        fast = fast.next.next;    // Move 2 steps
    }
    
    return slow;  // Middle node
}

// For odd length: returns exact middle
// 1 -> 2 -> 3 -> 4 -> 5  =>  3

// For even length: returns second middle
// 1 -> 2 -> 3 -> 4  =>  3`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Remove Nth Node From End">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #19</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    ListNode fast = dummy;
    ListNode slow = dummy;
    
    // Move fast n+1 steps ahead
    for (int i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove nth node
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Example: 1->2->3->4->5, n=2
// Remove 4, Result: 1->2->3->5`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Merge Two Sorted Linked Lists">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #21</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = (l1 != null) ? l1 : l2;
    
    return dummy.next;
}

// Example:
// l1: 1->2->4
// l2: 1->3->4
// Result: 1->1->2->3->4->4`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. Check if LinkedList is Palindrome">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #234</span>
                  </div>
                  <CodeBlock code={`public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) return true;
    
    // Find middle
    ListNode slow = head, fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    ListNode secondHalf = reverse(slow.next);
    
    // Compare first and second half
    ListNode p1 = head, p2 = secondHalf;
    while (p2 != null) {
        if (p1.val != p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return true;
}

// Example: 1->2->2->1 => true
// Example: 1->2->3 => false`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. Find Intersection Point of Two Linked Lists">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #160</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">LinkedIn</span>
                  </div>
                  <CodeBlock code={`public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    
    ListNode a = headA;
    ListNode b = headB;
    
    // Traverse both lists, switching to other list at end
    // They will meet at intersection or both become null
    while (a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    
    return a;  // Intersection point or null
}

// Why it works:
// lenA + lenB = lenB + lenA
// Both pointers travel same total distance
// They meet at intersection or both reach null

// Time: O(m + n), Space: O(1)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="9. Add Two Numbers Represented as Linked Lists">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #2</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Numbers stored in reverse order
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    int carry = 0;
    
    while (l1 != null || l2 != null || carry > 0) {
        int sum = carry;
        
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    
    return dummy.next;
}

// Example:
// l1: 2->4->3 (represents 342)
// l2: 5->6->4 (represents 465)
// Result: 7->0->8 (represents 807)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="10. Reorder List">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #143</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Reorder L0→L1→L2→...→Ln to L0→Ln→L1→Ln-1→L2→Ln-2→...
                  </p>
                  <CodeBlock code={`public void reorderList(ListNode head) {
    if (head == null || head.next == null) return;
    
    // Step 1: Find middle
    ListNode slow = head, fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse second half
    ListNode second = reverse(slow.next);
    slow.next = null;  // Cut first half
    
    // Step 3: Merge alternately
    ListNode first = head;
    while (second != null) {
        ListNode tmp1 = first.next;
        ListNode tmp2 = second.next;
        
        first.next = second;
        second.next = tmp1;
        
        first = tmp1;
        second = tmp2;
    }
}

// Example: 1->2->3->4->5
// Result:  1->5->2->4->3`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

