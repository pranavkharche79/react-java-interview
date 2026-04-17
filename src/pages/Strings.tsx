import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import Sidebar from '../components/layout/Sidebar';
import MethodCard from '../components/ui/MethodCard';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';

export default function Strings() {
  const sections = [
    { id: 'initialization', label: 'Initialization' },
    { id: 'common-methods', label: 'Common Methods' },
    { id: 'other-methods', label: 'Other Methods' },
    { id: 'examples', label: 'Examples' },
    { id: 'interview', label: 'Interview Questions' },
  ];

  const commonMethods = [
    {
      title: 'length()',
      description: 'Returns the length of the string.',
      code: `String str = "Hello World";
int len = str.length();
System.out.println("Length: " + len);
// Output: Length: 11`,
      complexity: 'O(1)',
    },
    {
      title: 'charAt()',
      description: 'Returns the character at the specified index.',
      code: `String str = "Hello";
char ch = str.charAt(1);
System.out.println("Character at index 1: " + ch);
// Output: Character at index 1: e`,
      complexity: 'O(1)',
    },
    {
      title: 'substring()',
      description: 'Returns a substring of the string.',
      code: `String str = "Hello World";
String sub1 = str.substring(6);      // "World"
String sub2 = str.substring(0, 5);   // "Hello"
System.out.println(sub1 + " " + sub2);`,
      complexity: 'O(n)',
    },
    {
      title: 'indexOf()',
      description: 'Returns the index of the first occurrence of a substring.',
      code: `String str = "Hello World";
int index = str.indexOf("World");
System.out.println("Index of 'World': " + index);
// Output: Index of 'World': 6`,
      complexity: 'O(n*m)',
    },
    {
      title: 'toUpperCase() & toLowerCase()',
      description: 'Converts string to uppercase or lowercase.',
      code: `String str = "Hello World";
String upper = str.toUpperCase();  // "HELLO WORLD"
String lower = str.toLowerCase();  // "hello world"
System.out.println(upper);
System.out.println(lower);`,
      complexity: 'O(n)',
    },
    {
      title: 'trim()',
      description: 'Removes leading and trailing whitespace.',
      code: `String str = "  Hello World  ";
String trimmed = str.trim();
System.out.println("'" + trimmed + "'");
// Output: 'Hello World'`,
      complexity: 'O(n)',
    },
    {
      title: 'replace()',
      description: 'Replaces all occurrences of a character or substring.',
      code: `String str = "Hello World";
String replaced = str.replace("World", "Java");
System.out.println(replaced);
// Output: Hello Java`,
      complexity: 'O(n)',
    },
    {
      title: 'split()',
      description: 'Splits the string into an array of substrings.',
      code: `String str = "apple,banana,orange";
String[] fruits = str.split(",");
for (String fruit : fruits) {
    System.out.println(fruit);
}
// Output: apple, banana, orange`,
      complexity: 'O(n)',
    },
    {
      title: 'startsWith() & endsWith()',
      description: 'Checks if the string starts or ends with a specified substring.',
      code: `String str = "Hello World";
boolean starts = str.startsWith("Hello");
boolean ends = str.endsWith("World");
System.out.println("Starts with 'Hello': " + starts);
System.out.println("Ends with 'World': " + ends);
// Output: Starts with 'Hello': true, Ends with 'World': true`,
      complexity: 'O(n)',
    },
    {
      title: 'contains()',
      description: 'Checks if the string contains a specified substring.',
      code: `String str = "Hello World";
boolean contains = str.contains("World");
System.out.println("Contains 'World': " + contains);
// Output: Contains 'World': true`,
      complexity: 'O(n)',
    },
  ];

  const otherMethods = [
    {
      title: 'isEmpty() & isBlank()',
      description: 'Check if string is empty or contains only whitespace.',
      code: `String str1 = "";
String str2 = "   ";
String str3 = "Hello";

System.out.println("isEmpty():");
System.out.println("'' is empty: " + str1.isEmpty());      // true
System.out.println("'   ' is empty: " + str2.isEmpty());   // false
System.out.println("'Hello' is empty: " + str3.isEmpty()); // false

System.out.println("\\nisBlank() (Java 11+):");
System.out.println("'' is blank: " + str1.isBlank());      // true
System.out.println("'   ' is blank: " + str2.isBlank());   // true
System.out.println("'Hello' is blank: " + str3.isBlank()); // false`,
      complexity: 'O(n)',
      badge: 'info' as const,
    },
    {
      title: 'String.join() (Java 8+)',
      description: 'Join multiple strings with a delimiter.',
      code: `String[] fruits = {"apple", "banana", "orange"};
String result1 = String.join(", ", fruits);
System.out.println("Join with comma: " + result1);
// Output: Join with comma: apple, banana, orange

String result2 = String.join(" | ", "Java", "Python", "C++");
System.out.println("Join with pipe: " + result2);
// Output: Join with pipe: Java | Python | C++`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'repeat() (Java 11+)',
      description: 'Repeat a string a specified number of times.',
      code: `String str = "Hello";
String repeated1 = str.repeat(3);
System.out.println("Repeat 3 times: '" + repeated1 + "'");
// Output: Repeat 3 times: 'HelloHelloHello'

String pattern = "-";
String line = pattern.repeat(20);
System.out.println("Line: " + line);
// Output: Line: --------------------`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'equals() & equalsIgnoreCase()',
      description: 'Checks if two strings are equal or not, ignoring case.',
      code: `String str1 = "Hello";
String str2 = "hello";
String str3 = "Hello";

System.out.println("equals():");
System.out.println("'Hello' equals 'hello': " + str1.equals(str2));    // false
System.out.println("'Hello' equals 'Hello': " + str1.equals(str3));    // true

System.out.println("\\nequalsIgnoreCase():");
System.out.println("'Hello' equalsIgnoreCase 'hello': " + 
                  str1.equalsIgnoreCase(str2));  // true
System.out.println("'Hello' equalsIgnoreCase 'HELLO': " + 
                  str1.equalsIgnoreCase("HELLO")); // true`,
      complexity: 'O(n)',
      badge: 'info' as const,
    },
    {
      title: 'toCharArray()',
      description: 'Converts the string to a character array.',
      code: `String str = "Hello";
char[] chars = str.toCharArray();

System.out.println("Original string: " + str);
System.out.println("Character array: " + java.util.Arrays.toString(chars));
// Output: Character array: [H, e, l, l, o]

// Modify individual characters
chars[0] = 'h';
String modified = new String(chars);
System.out.println("Modified string: " + modified);
// Output: Modified string: hello`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
    {
      title: 'valueOf()',
      description: 'Converts various types to a string.',
      code: `int num = 42;
double decimal = 3.14159;
boolean flag = true;

System.out.println("int to String: " + String.valueOf(num));
System.out.println("double to String: " + String.valueOf(decimal));
System.out.println("boolean to String: " + String.valueOf(flag));`,
      complexity: 'O(n)',
      badge: 'success' as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Strings" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Java Strings"
            description="Master string manipulation, formatting, and common operations in Java"
            icon="string"
            gradient="green"
          />

          {/* Initialization Section */}
          <section id="initialization" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              String Initialization
            </h2>
            
            <Accordion>
              <AccordionItem title="String Literals" defaultOpen>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Create strings using string literals (most common method):
                </p>
                <CodeBlock code={`// String literals (stored in string pool)
String name = "Hello World";
String message = "Welcome to Java";
String empty = "";

// Multi-line strings (Java 13+)
String multiLine = """
    This is a
    multi-line string
    in Java
    """;`} />
              </AccordionItem>
              
              <AccordionItem title="Using Constructor">
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  Create strings using the String constructor:
                </p>
                <CodeBlock code={`// Using constructor (creates new object)
String str1 = new String("Hello");
String str2 = new String(new char[]{'H', 'e', 'l', 'l', 'o'});

// From other data types
String fromInt = String.valueOf(123);
String fromDouble = String.valueOf(45.67);
String fromBoolean = String.valueOf(true);`} />
              </AccordionItem>
              
              <AccordionItem title="StringBuilder & StringBuffer">
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  For mutable string operations:
                </p>
                <CodeBlock code={`// StringBuilder (not thread-safe, faster)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();

// StringBuffer (thread-safe, slower)
StringBuffer sbf = new StringBuffer("Initial");
sbf.append(" Text");
String result2 = sbf.toString();`} />
              </AccordionItem>
            </Accordion>
          </section>

          {/* Common Methods Section */}
          <section id="common-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Common String Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {commonMethods.map((method, i) => (
                <MethodCard key={i} {...method} />
              ))}
            </div>
          </section>

          {/* Other Methods Section */}
          <section id="other-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Other Useful Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherMethods.map((method, i) => (
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
              <AccordionItem title="String Manipulation" defaultOpen>
                <CodeBlock code={`public class StringManipulation {
    public static void main(String[] args) {
        String text = "  Hello World!  ";
        
        // Basic operations
        System.out.println("Original: '" + text + "'");
        System.out.println("Length: " + text.length());
        System.out.println("Trimmed: '" + text.trim() + "'");
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());
        
        // Substring operations
        System.out.println("First word: " + text.trim().substring(0, 5));
        System.out.println("Last word: " + text.trim().substring(6));
        
        // Replace operations
        System.out.println("Replace: " + text.replace("World", "Java"));
    }
}`} />
              </AccordionItem>
              
              <AccordionItem title="StringBuilder Usage">
                <CodeBlock code={`public class StringBuilderExample {
    public static void main(String[] args) {
        // Efficient string concatenation
        StringBuilder sb = new StringBuilder();
        
        // Append various data types
        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        sb.append("!");
        sb.append("\\n");
        sb.append("Number: ");
        sb.append(42);
        
        String result = sb.toString();
        System.out.println(result);
        
        // Insert and delete operations
        sb.insert(5, " Beautiful");
        sb.delete(0, 6);
        
        System.out.println("Modified: " + sb.toString());
        
        // Reverse string
        sb.reverse();
        System.out.println("Reversed: " + sb.toString());
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
              to="/interview/strings" 
              className="block group"
            >
              <div className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        String Interview Preparation
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
