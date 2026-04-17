import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function ArraysInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Arrays Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/arrays" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Arrays
            </Link>
          </div>

          <PageHeader
            title="Arrays Interview Questions"
            description="Master Java Arrays with theoretical concepts and hands-on coding problems"
            icon="array"
            gradient="purple"
          />

          {/* Theoretical Questions Section */}
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
              <AccordionItem title="1. What is an Array in Java? Explain its characteristics." defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    An array is a <strong>fixed-size</strong>, <strong>contiguous memory</strong> data structure that stores elements of the <strong>same data type</strong>.
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Key Characteristics:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                      <li><strong>Fixed Size:</strong> Once created, the size cannot be changed</li>
                      <li><strong>Homogeneous:</strong> All elements must be of the same type</li>
                      <li><strong>Zero-indexed:</strong> First element is at index 0</li>
                      <li><strong>Direct Access:</strong> O(1) access time using index</li>
                      <li><strong>Contiguous Memory:</strong> Elements stored in adjacent memory locations</li>
                    </ul>
                  </div>
                  <CodeBlock code={`// Declaration and initialization
int[] numbers = new int[5];           // Creates array of size 5
int[] primes = {2, 3, 5, 7, 11};      // Direct initialization
String[] names = new String[]{"A", "B"};  // Explicit type

// Memory representation
// numbers: [0][0][0][0][0]
//           ^  ^  ^  ^  ^
//           0  1  2  3  4  (indices)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. What are the default values of array elements in Java?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2 text-dark-600 dark:text-dark-400">Data Type</th>
                          <th className="text-center py-2 text-primary-600 dark:text-primary-400">Default Value</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">byte, short, int, long</td>
                          <td className="text-center font-mono">0</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">float, double</td>
                          <td className="text-center font-mono">0.0</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">char</td>
                          <td className="text-center font-mono">'\u0000'</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">boolean</td>
                          <td className="text-center font-mono">false</td>
                        </tr>
                        <tr>
                          <td className="py-2">Object references</td>
                          <td className="text-center font-mono">null</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="3. What is the difference between length and length() in Java?">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-violet-700 dark:text-violet-400 mb-2">length (Property)</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Used for <strong>arrays</strong></li>
                        <li>It's a field, not a method</li>
                        <li>No parentheses needed</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">length() (Method)</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Used for <strong>Strings</strong></li>
                        <li>It's a method</li>
                        <li>Parentheses required</li>
                      </ul>
                    </div>
                  </div>
                  <CodeBlock code={`int[] arr = {1, 2, 3, 4, 5};
String str = "Hello";

System.out.println(arr.length);    // 5 - array property
System.out.println(str.length());  // 5 - String method`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Can we change the size of an array once created?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    <strong>No</strong>, arrays have a fixed size. However, you can create a new larger array and copy elements.
                  </p>
                  <CodeBlock code={`int[] original = {1, 2, 3};

// Method 1: Manual copy
int[] larger = new int[original.length * 2];
for (int i = 0; i < original.length; i++) {
    larger[i] = original[i];
}

// Method 2: System.arraycopy()
int[] copy1 = new int[10];
System.arraycopy(original, 0, copy1, 0, original.length);

// Method 3: Arrays.copyOf() - Recommended
int[] copy2 = Arrays.copyOf(original, 10);  // New size: 10

// For dynamic sizing, use ArrayList instead
List<Integer> dynamic = new ArrayList<>();`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. What is ArrayIndexOutOfBoundsException?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    This exception is thrown when you try to access an array element with an index that is negative or greater than or equal to the array's length.
                  </p>
                  <CodeBlock code={`int[] arr = {10, 20, 30};  // Valid indices: 0, 1, 2

// These will throw ArrayIndexOutOfBoundsException:
arr[-1];     // Negative index
arr[3];      // Index equals length
arr[100];    // Index greater than length

// Safe access patterns:
if (index >= 0 && index < arr.length) {
    System.out.println(arr[index]);
}

// Using try-catch
try {
    System.out.println(arr[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Invalid index!");
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Explain jagged arrays (multi-dimensional arrays with different row sizes).">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    A jagged array is a multi-dimensional array where each row can have a different number of columns.
                  </p>
                  <CodeBlock code={`// Regular 2D array (all rows same size)
int[][] regular = new int[3][4];

// Jagged array (different row sizes)
int[][] jagged = new int[3][];
jagged[0] = new int[2];  // First row: 2 elements
jagged[1] = new int[4];  // Second row: 4 elements  
jagged[2] = new int[3];  // Third row: 3 elements

// Initialize jagged array directly
int[][] triangle = {
    {1},
    {1, 1},
    {1, 2, 1},
    {1, 3, 3, 1}
};

// Iterate jagged array
for (int i = 0; i < jagged.length; i++) {
    for (int j = 0; j < jagged[i].length; j++) {
        System.out.print(jagged[i][j] + " ");
    }
    System.out.println();
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. What is the difference between shallow copy and deep copy of arrays?">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Shallow Copy</h4>
                      <p className="text-dark-600 dark:text-dark-400 text-sm">
                        Creates a new array but references point to same objects. Changes in objects affect both arrays.
                      </p>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Deep Copy</h4>
                      <p className="text-dark-600 dark:text-dark-400 text-sm">
                        Creates completely independent copy with new objects. Changes don't affect each other.
                      </p>
                    </div>
                  </div>
                  <CodeBlock code={`// Shallow Copy (for primitive arrays, it's effectively deep)
int[] original = {1, 2, 3};
int[] shallow = original.clone();
shallow[0] = 100;  // Doesn't affect original

// But for object arrays:
Person[] people = {new Person("Alice"), new Person("Bob")};
Person[] shallowCopy = people.clone();
shallowCopy[0].setName("Changed");  // AFFECTS original!

// Deep Copy for object arrays
Person[] deepCopy = new Person[people.length];
for (int i = 0; i < people.length; i++) {
    deepCopy[i] = new Person(people[i].getName());  // Create new objects
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. How do Arrays.sort() and Arrays.parallelSort() differ?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2 text-dark-600 dark:text-dark-400">Feature</th>
                          <th className="text-center py-2 text-primary-600 dark:text-primary-400">Arrays.sort()</th>
                          <th className="text-center py-2 text-emerald-600 dark:text-emerald-400">Arrays.parallelSort()</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Algorithm</td>
                          <td className="text-center">Dual-Pivot Quicksort</td>
                          <td className="text-center">Fork/Join Merge Sort</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Threading</td>
                          <td className="text-center">Single-threaded</td>
                          <td className="text-center">Multi-threaded</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Best for</td>
                          <td className="text-center">Small arrays</td>
                          <td className="text-center">Large arrays (8192+ elements)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Available Since</td>
                          <td className="text-center">Java 1.2</td>
                          <td className="text-center">Java 8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`int[] largeArray = new int[1000000];
// Fill with random values...

// Single-threaded sort
Arrays.sort(largeArray);

// Multi-threaded sort (faster for large arrays)
Arrays.parallelSort(largeArray);`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Coding Problems Section */}
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
              <AccordionItem title="1. Two Sum - Find indices of two numbers that add up to target" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #1</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Given an array of integers and a target, return indices of two numbers that add up to target.
                  </p>
                  <CodeBlock code={`// Brute Force - O(n²)
public int[] twoSumBrute(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    return new int[]{};
}

// Optimal - HashMap O(n) time, O(n) space
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}

// Example: nums = [2,7,11,15], target = 9
// Output: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Find the Maximum Subarray Sum (Kadane's Algorithm)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #53</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Find the contiguous subarray with the largest sum.
                  </p>
                  <CodeBlock code={`public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        // Either extend current subarray or start new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Example: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6 (subarray [4,-1,2,1])

// To also get the subarray indices:
public int[] maxSubArrayWithIndices(int[] nums) {
    int maxSum = nums[0], currentSum = nums[0];
    int start = 0, end = 0, tempStart = 0;
    
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    return new int[]{maxSum, start, end};
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Rotate Array by K positions">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #189</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Rotate array to the right by k steps.
                  </p>
                  <CodeBlock code={`// Method 1: Using extra array - O(n) time, O(n) space
public void rotateExtraSpace(int[] nums, int k) {
    int n = nums.length;
    k = k % n;  // Handle k > n
    int[] temp = new int[n];
    
    for (int i = 0; i < n; i++) {
        temp[(i + k) % n] = nums[i];
    }
    System.arraycopy(temp, 0, nums, 0, n);
}

// Method 2: Reverse technique - O(n) time, O(1) space ✓
public void rotate(int[] nums, int k) {
    int n = nums.length;
    k = k % n;
    
    reverse(nums, 0, n - 1);      // Reverse entire array
    reverse(nums, 0, k - 1);      // Reverse first k elements
    reverse(nums, k, n - 1);      // Reverse remaining elements
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example: nums = [1,2,3,4,5,6,7], k = 3
// After reverse all: [7,6,5,4,3,2,1]
// After reverse 0 to k-1: [5,6,7,4,3,2,1]
// After reverse k to end: [5,6,7,1,2,3,4] ✓`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. Find Missing Number in array 1 to N">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #268</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Apple</span>
                  </div>
                  <CodeBlock code={`// Method 1: Sum formula - O(n) time, O(1) space
public int missingNumber(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    
    for (int num : nums) {
        actualSum += num;
    }
    
    return expectedSum - actualSum;
}

// Method 2: XOR - O(n) time, O(1) space (avoids overflow)
public int missingNumberXOR(int[] nums) {
    int xor = nums.length;  // Start with n
    
    for (int i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];  // XOR with index and value
    }
    
    return xor;
}

// Example: nums = [3, 0, 1] (n=3, so range is 0-3)
// Expected: 0 + 1 + 2 + 3 = 6
// Actual: 3 + 0 + 1 = 4
// Missing: 6 - 4 = 2`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Move Zeroes to End">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #283</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`// Two-pointer approach - O(n) time, O(1) space
public void moveZeroes(int[] nums) {
    int insertPos = 0;  // Position to insert non-zero
    
    // Move all non-zero elements to front
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[insertPos++] = nums[i];
        }
    }
    
    // Fill remaining positions with zeros
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
}

// Alternative: Swap approach (maintains relative order)
public void moveZeroesSwap(int[] nums) {
    int left = 0;
    for (int right = 0; right < nums.length; right++) {
        if (nums[right] != 0) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }
}

// Example: [0,1,0,3,12] → [1,3,12,0,0]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Find Duplicate Number">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #287</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Array of n+1 integers where each integer is in range [1, n]. Find the duplicate without modifying array.
                  </p>
                  <CodeBlock code={`// Floyd's Cycle Detection - O(n) time, O(1) space
public int findDuplicate(int[] nums) {
    // Phase 1: Find intersection point
    int slow = nums[0];
    int fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Phase 2: Find entrance to cycle (duplicate)
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return fast;
}

// Example: nums = [1,3,4,2,2]
// Treating values as pointers: 0→1→3→2→4→2→4→...
// Cycle detected at 2, which is the duplicate`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. Merge Two Sorted Arrays">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #88</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                  </div>
                  <CodeBlock code={`// Merge in-place from end - O(m+n) time, O(1) space
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1;      // Last element of nums1
    int j = n - 1;      // Last element of nums2
    int k = m + n - 1;  // Last position in nums1
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    // Copy remaining elements from nums2
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

// Example:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. Product of Array Except Self">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #238</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Return array where each element is product of all elements except itself, without using division.
                  </p>
                  <CodeBlock code={`// Prefix and Suffix products - O(n) time, O(1) space
public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    
    // Calculate prefix products
    result[0] = 1;
    for (int i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Calculate suffix products and multiply
    int suffix = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
}

// Example: nums = [1, 2, 3, 4]
// Prefix:  [1, 1, 2, 6]
// Suffix:  [24, 12, 4, 1]
// Result:  [24, 12, 8, 6]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="9. Container With Most Water">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #11</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Goldman Sachs</span>
                  </div>
                  <CodeBlock code={`// Two-pointer approach - O(n) time, O(1) space
public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxWater = 0;
    
    while (left < right) {
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, width * h);
        
        // Move the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

// Example: height = [1,8,6,2,5,4,8,3,7]
// Best container: between indices 1 and 8
// Area = min(8,7) * (8-1) = 7 * 7 = 49`} />
                </div>
              </AccordionItem>

              <AccordionItem title="10. Trapping Rain Water">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #42</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Two-pointer approach - O(n) time, O(1) space
public int trap(int[] height) {
    if (height == null || height.length == 0) return 0;
    
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Example: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Water trapped = 6 units`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

