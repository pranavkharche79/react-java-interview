import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import Sidebar from '../components/layout/Sidebar';
import MethodCard from '../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';

export default function Arrays() {
  const sections = [
    { id: 'initialization', label: 'Initialization' },
    { id: 'core-methods', label: 'Core Methods' },
    { id: 'java8-methods', label: 'Java 8+ Methods' },
    { id: 'examples', label: 'Examples' },
    { id: 'interview', label: 'Interview Questions' },
  ];

  const coreMethods = [
    {
      title: 'Arrays.sort()',
      description: 'Sorts the specified array into ascending numerical order.',
      code: `int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));
// Output: [1, 2, 5, 8, 9]`,
      complexity: 'O(n log n)',
    },
    {
      title: 'Arrays.toString()',
      description: 'Returns a string representation of the array contents.',
      code: `int[] arr = {1, 2, 3, 4, 5};
String result = Arrays.toString(arr);
System.out.println(result);
// Output: [1, 2, 3, 4, 5]`,
      complexity: 'O(n)',
    },
    {
      title: 'Arrays.fill()',
      description: 'Assigns the specified value to each element of the array.',
      code: `int[] arr = new int[5];
Arrays.fill(arr, 10);
System.out.println(Arrays.toString(arr));
// Output: [10, 10, 10, 10, 10]`,
      complexity: 'O(n)',
    },
    {
      title: 'Arrays.copyOf()',
      description: 'Copies the specified array, truncating or padding with default values.',
      code: `int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, 5);
System.out.println(Arrays.toString(copy));
// Output: [1, 2, 3, 0, 0]`,
      complexity: 'O(n)',
    },
    {
      title: 'Arrays.copyOfRange()',
      description: 'Copies a range of elements from the specified array.',
      code: `int[] original = {1, 2, 3, 4, 5};
int[] range = Arrays.copyOfRange(original, 1, 4);
System.out.println(Arrays.toString(range));
// Output: [2, 3, 4]`,
      complexity: 'O(n)',
    },
    {
      title: 'Arrays.binarySearch()',
      description: 'Searches for a value in a sorted array using binary search.',
      code: `int[] arr = {1, 2, 3, 4, 5};
int index = Arrays.binarySearch(arr, 3);
System.out.println("Index of 3: " + index);
// Output: Index of 3: 2`,
      complexity: 'O(log n)',
    },
    {
      title: 'Arrays.equals()',
      description: 'Compares two arrays for equality.',
      code: `int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean equal = Arrays.equals(arr1, arr2);
System.out.println("Arrays equal: " + equal);
// Output: Arrays equal: true`,
      complexity: 'O(n)',
    },
    {
      title: 'Arrays.deepEquals()',
      description: 'Compares two nested arrays for equality.',
      code: `int[][] arr1 = {{1, 2}, {3, 4}};
int[][] arr2 = {{1, 2}, {3, 4}};
boolean equal = Arrays.deepEquals(arr1, arr2);
System.out.println("Deep equal: " + equal);
// Output: Deep equal: true`,
      complexity: 'O(n^2)',
    },
    {
      title: 'Arrays.deepToString()',
      description: 'Returns a string representation of a multidimensional array.',
      code: `int[][] arr = {{1, 2}, {3, 4}};
String result = Arrays.deepToString(arr);
System.out.println(result);
// Output: [[1, 2], [3, 4]]`,
      complexity: 'O(n^2)',
    },
  ];

  const java8Methods = [
    {
      title: 'Arrays.stream()',
      description: 'Converts array to a stream for functional operations.',
      code: `int[] arr = {1, 2, 3, 4, 5};
int sum = Arrays.stream(arr).sum();
System.out.println("Sum: " + sum);
// Output: Sum: 15`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'Arrays.parallelSort()',
      description: 'Sorts the array using parallel algorithm for better performance.',
      code: `int[] largeArray = {5, 2, 8, 1, 9, 3, 7, 4, 6};
Arrays.parallelSort(largeArray);
System.out.println(Arrays.toString(largeArray));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      complexity: 'O(n log n)',
      badge: 'success' as const,
    },
    {
      title: 'Arrays.setAll()',
      description: 'Sets elements using a generator function.',
      code: `int[] arr = new int[5];
Arrays.setAll(arr, i -> i * 2);
System.out.println(Arrays.toString(arr));
// Output: [0, 2, 4, 6, 8]`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'Arrays.parallelPrefix()',
      description: 'Performs cumulative operation on array elements in parallel.',
      code: `int[] arr = {1, 2, 3, 4, 5};
Arrays.parallelPrefix(arr, (x, y) -> x + y);
System.out.println(Arrays.toString(arr));
// Output: [1, 3, 6, 10, 15]`,
      complexity: 'O(n log n)',
      badge: 'success' as const,
    },
    {
      title: 'Arrays.parallelSetAll()',
      description: 'Sets elements using a generator function in parallel.',
      code: `int[] arr = new int[5];
Arrays.parallelSetAll(arr, i -> i * i);
System.out.println(Arrays.toString(arr));
// Output: [0, 1, 4, 9, 16]`,
      complexity: 'O(n log n)',
      badge: 'success' as const,
    },
    {
      title: 'Arrays.stream(range)',
      description: 'Creates a stream from the specified range of elements.',
      code: `int[] arr = {1, 2, 3, 4, 5};
int sum = Arrays.stream(arr, 2, 4).sum();
System.out.println("Sum of range: " + sum);
// Output: Sum of range: 7 (3+4)`,
      complexity: 'O(n log n)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Arrays" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java Arrays"
            description="Learn array initialization, manipulation, and common operations in Java"
            icon="array"
            gradient="blue"
          />

          {/* Initialization Section */}
          <section id="initialization" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Array Initialization
            </h2>
            
            <Accordion>
              <AccordionItem title="Declare and Initialize with Values" defaultOpen>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Initialize an array with predefined values:
                </p>
                <CodeBlock code={`// Integer array
int[] numbers = {1, 2, 3, 4, 5};

// String array
String[] fruits = {"apple", "banana", "orange"};

// Character array
char[] letters = {'a', 'b', 'c', 'd'};

// Boolean array
boolean[] flags = {true, false, true};`} />
              </AccordionItem>
              
              <AccordionItem title="Declare and Initialize with Size">
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Create an array with a specific size (default values):
                </p>
                <CodeBlock code={`// Integer array (default values: 0)
int[] numbers = new int[5];

// String array (default values: null)
String[] names = new String[10];

// Boolean array (default values: false)
boolean[] results = new boolean[3];

// Double array (default values: 0.0)
double[] prices = new double[4];`} />
              </AccordionItem>
              
              <AccordionItem title="Two-Dimensional Arrays">
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Initialize multi-dimensional arrays:
                </p>
                <CodeBlock code={`// 2D array with values
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// 2D array with size
int[][] grid = new int[3][4];

// Jagged array (different row lengths)
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[4];
jagged[2] = new int[3];`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Core Methods Section */}
          <section id="core-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Core Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {coreMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Java 8+ Methods Section */}
          <section id="java8-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Java 8+ Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {java8Methods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Practical Examples
            </h2>
            
            <Accordion>
              <AccordionItem title="Array Sum and Average" defaultOpen>
                <CodeBlock code={`public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Calculate sum
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        
        // Calculate average
        double average = (double) sum / numbers.length;
        
        System.out.println("Sum: " + sum);       // 150
        System.out.println("Average: " + average); // 30.0
        System.out.println("Length: " + numbers.length); // 5
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Find Maximum and Minimum">
                <CodeBlock code={`public class FindMinMax {
    public static void main(String[] args) {
        int[] numbers = {45, 12, 89, 23, 67, 34};
        
        int max = numbers[0];
        int min = numbers[0];
        
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        
        System.out.println("Maximum: " + max); // 89
        System.out.println("Minimum: " + min); // 12
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="Array Reversal">
                <CodeBlock code={`public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        System.out.println("Original: " + Arrays.toString(arr));
        
        // Reverse the array
        int start = 0;
        int end = arr.length - 1;
        
        while (start < end) {
            // Swap elements
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            
            start++;
            end--;
        }
        
        System.out.println("Reversed: " + Arrays.toString(arr));
        // Output: [5, 4, 3, 2, 1]
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
              to="/interview/arrays" 
              className="block group"
            >
              <div className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Arrays Interview Preparation
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
