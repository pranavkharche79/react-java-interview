import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Sidebar from '../../components/layout/Sidebar';
import Accordion, { AccordionItem } from '../../components/ui/Accordion';
import CodeBlock from '../../components/ui/CodeBlock';

export default function StringsInterview() {
  const sections = [
    { id: 'theoretical', label: 'Theoretical Questions' },
    { id: 'coding', label: 'Coding Problems' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar title="Strings Interview" sections={sections} />
        
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Link to="/strings" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Strings
            </Link>
          </div>

          <PageHeader
            title="String Interview Questions"
            description="Master Java Strings with theoretical concepts and hands-on coding problems"
            icon="string"
            gradient="emerald"
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
              <AccordionItem title="1. Why are Strings immutable in Java?" defaultOpen>
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    Strings are immutable for several important reasons:
                  </p>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                      <li><strong>String Pool:</strong> Immutability enables string pooling for memory efficiency</li>
                      <li><strong>Security:</strong> Prevents modification of sensitive data like passwords, URLs</li>
                      <li><strong>Thread Safety:</strong> Immutable objects are inherently thread-safe</li>
                      <li><strong>Caching:</strong> hashCode() can be cached since value never changes</li>
                      <li><strong>Class Loading:</strong> Strings are used in class loading; mutability could cause security issues</li>
                    </ul>
                  </div>
                  <CodeBlock code={`String s1 = "Hello";
s1.concat(" World");  // Creates NEW string, s1 unchanged
System.out.println(s1);  // Still "Hello"

s1 = s1.concat(" World");  // Now s1 points to new String
System.out.println(s1);  // "Hello World"

// String pool demonstration
String a = "Java";
String b = "Java";
System.out.println(a == b);  // true - same object from pool`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. What is the String Pool (String Intern Pool)?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    The String Pool is a special memory area in the heap where Java stores unique string literals.
                  </p>
                  <CodeBlock code={`// String literals go to pool
String s1 = "Hello";       // Goes to String Pool
String s2 = "Hello";       // Reuses from Pool
System.out.println(s1 == s2);  // true (same reference)

// new String creates object in heap (not pool)
String s3 = new String("Hello");  // New object in heap
System.out.println(s1 == s3);  // false (different references)
System.out.println(s1.equals(s3));  // true (same content)

// intern() adds/retrieves from pool
String s4 = s3.intern();  // Returns pooled reference
System.out.println(s1 == s4);  // true

// Memory visualization:
// String Pool: ["Hello", "World", ...]
// Heap: String objects created with 'new'`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. What is the difference between == and equals() for Strings?">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">== (Reference Comparison)</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Compares memory addresses</li>
                        <li>Returns true if same object</li>
                        <li>Faster but unreliable for content</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">equals() (Content Comparison)</h4>
                      <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                        <li>Compares actual characters</li>
                        <li>Returns true if same content</li>
                        <li>Always use for String comparison</li>
                      </ul>
                    </div>
                  </div>
                  <CodeBlock code={`String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// == compares references
System.out.println(s1 == s2);   // true (same pool object)
System.out.println(s1 == s3);   // false (different objects)

// equals() compares content
System.out.println(s1.equals(s2));  // true
System.out.println(s1.equals(s3));  // true

// Best practice: Always use equals() for Strings
// Also consider equalsIgnoreCase() for case-insensitive
"hello".equalsIgnoreCase("HELLO");  // true`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. What is the difference between String, StringBuilder, and StringBuffer?">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-200 dark:border-dark-700">
                          <th className="text-left py-2 text-dark-600 dark:text-dark-400">Feature</th>
                          <th className="text-center py-2 text-red-600 dark:text-red-400">String</th>
                          <th className="text-center py-2 text-emerald-600 dark:text-emerald-400">StringBuilder</th>
                          <th className="text-center py-2 text-blue-600 dark:text-blue-400">StringBuffer</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-600 dark:text-dark-400">
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Mutability</td>
                          <td className="text-center">Immutable</td>
                          <td className="text-center">Mutable</td>
                          <td className="text-center">Mutable</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Thread Safe</td>
                          <td className="text-center">Yes (immutable)</td>
                          <td className="text-center text-red-600">No</td>
                          <td className="text-center text-emerald-600">Yes (synchronized)</td>
                        </tr>
                        <tr className="border-b border-dark-100 dark:border-dark-800">
                          <td className="py-2">Performance</td>
                          <td className="text-center">Slow for concat</td>
                          <td className="text-center text-emerald-600">Fastest</td>
                          <td className="text-center">Slower (sync overhead)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Use When</td>
                          <td className="text-center">Few modifications</td>
                          <td className="text-center">Single-threaded loops</td>
                          <td className="text-center">Multi-threaded</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CodeBlock code={`// String - creates multiple objects
String s = "";
for (int i = 0; i < 1000; i++) {
    s += i;  // Creates 1000 new String objects!
}

// StringBuilder - efficient, single object modified
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);  // Modifies same object
}
String result = sb.toString();

// StringBuffer - thread-safe version
StringBuffer sbf = new StringBuffer();
sbf.append("Thread").append(" Safe");

// When to use what:
// String: When value won't change, for string literals
// StringBuilder: Loop concatenation, single-threaded (DEFAULT CHOICE)
// StringBuffer: Multi-threaded environment`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. How does String's hashCode() work?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    String's hashCode() uses a polynomial hash function based on the string's characters.
                  </p>
                  <CodeBlock code={`// Hash code formula: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
// Where s[i] is the character at index i, n is string length

public int hashCode() {
    int h = hash;  // Cached hash
    if (h == 0 && value.length > 0) {
        char val[] = value;
        for (int i = 0; i < value.length; i++) {
            h = 31 * h + val[i];
        }
        hash = h;  // Cache for future calls
    }
    return h;
}

// Example: "AB".hashCode()
// = 'A' * 31 + 'B'
// = 65 * 31 + 66
// = 2015 + 66 = 2081

String s = "Hello";
System.out.println(s.hashCode());  // Same value every time (immutable)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. What is the purpose of intern() method?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    The <code>intern()</code> method returns a canonical representation of the string from the String Pool.
                  </p>
                  <CodeBlock code={`String s1 = new String("Hello");  // Creates in heap
String s2 = "Hello";               // From String Pool

System.out.println(s1 == s2);      // false

String s3 = s1.intern();           // Returns pooled version
System.out.println(s3 == s2);      // true

// Use case: Memory optimization for many duplicate strings
List<String> data = readMillionsOfRecords();  // Many duplicates
List<String> optimized = new ArrayList<>();
for (String s : data) {
    optimized.add(s.intern());  // Reuse pool strings
}

// Caution: intern() has overhead, use wisely
// Good for: Fixed set of values read from external sources
// Bad for: Unique strings (wastes memory in pool)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. How to convert String to char array and vice versa?">
                <div className="space-y-4">
                  <CodeBlock code={`// String to char array
String str = "Hello";
char[] chars = str.toCharArray();
// chars = ['H', 'e', 'l', 'l', 'o']

// char array to String
char[] arr = {'W', 'o', 'r', 'l', 'd'};

// Method 1: Constructor
String s1 = new String(arr);

// Method 2: valueOf()
String s2 = String.valueOf(arr);

// Method 3: Partial array
String s3 = new String(arr, 1, 3);  // "orl" (offset 1, count 3)

// Get single character
char c = str.charAt(2);  // 'l'

// Common use: Character manipulation
String reverse = new String(new StringBuilder(str).reverse());`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. What happens when you concatenate Strings with + operator?">
                <div className="space-y-4">
                  <p className="text-dark-600 dark:text-dark-400">
                    The compiler converts + concatenation to StringBuilder operations (since Java 5).
                  </p>
                  <CodeBlock code={`// Your code
String result = "Hello" + " " + "World";

// Compiler converts to (approximately):
String result = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .toString();

// But in a loop, each iteration creates new StringBuilder!
String s = "";
for (int i = 0; i < 100; i++) {
    s = s + i;  // Creates 100 StringBuilders!
}

// Efficient way
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 100; i++) {
    sb.append(i);  // Single StringBuilder
}
String result = sb.toString();

// Modern Java (9+) uses invokedynamic for better optimization
// But explicit StringBuilder is still best practice in loops`} />
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
              <AccordionItem title="1. Reverse a String" defaultOpen>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #344</span>
                  </div>
                  <CodeBlock code={`// Method 1: Two Pointers (In-place for char array)
public void reverseString(char[] s) {
    int left = 0, right = s.length - 1;
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

// Method 2: StringBuilder
public String reverse(String s) {
    return new StringBuilder(s).reverse().toString();
}

// Method 3: Recursive
public String reverseRecursive(String s) {
    if (s.length() <= 1) return s;
    return reverseRecursive(s.substring(1)) + s.charAt(0);
}

// Method 4: Using char array
public String reverseManual(String s) {
    char[] chars = s.toCharArray();
    for (int i = 0; i < chars.length / 2; i++) {
        char temp = chars[i];
        chars[i] = chars[chars.length - 1 - i];
        chars[chars.length - 1 - i] = temp;
    }
    return new String(chars);
}`} />
                </div>
              </AccordionItem>

              <AccordionItem title="2. Valid Palindrome">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #125</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">
                    Check if string is palindrome, considering only alphanumeric characters.
                  </p>
                  <CodeBlock code={`public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
            left++;
        }
        // Skip non-alphanumeric from right
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (Character.toLowerCase(s.charAt(left)) != 
            Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example: "A man, a plan, a canal: Panama" → true
// Example: "race a car" → false`} />
                </div>
              </AccordionItem>

              <AccordionItem title="3. Valid Anagram">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #242</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Method 1: Sorting - O(n log n)
public boolean isAnagramSort(String s, String t) {
    if (s.length() != t.length()) return false;
    char[] sArr = s.toCharArray();
    char[] tArr = t.toCharArray();
    Arrays.sort(sArr);
    Arrays.sort(tArr);
    return Arrays.equals(sArr, tArr);
}

// Method 2: Character Count Array - O(n) time, O(1) space
public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    
    int[] count = new int[26];  // For lowercase letters only
    
    for (int i = 0; i < s.length(); i++) {
        count[s.charAt(i) - 'a']++;
        count[t.charAt(i) - 'a']--;
    }
    
    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}

// Method 3: HashMap (for Unicode support)
public boolean isAnagramUnicode(String s, String t) {
    if (s.length() != t.length()) return false;
    
    Map<Character, Integer> map = new HashMap<>();
    for (char c : s.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    for (char c : t.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) - 1);
        if (map.get(c) < 0) return false;
    }
    return true;
}

// Example: "anagram", "nagaram" → true`} />
                </div>
              </AccordionItem>

              <AccordionItem title="4. First Unique Character in a String">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #387</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`// Method 1: Array count - O(n) time, O(1) space
public int firstUniqChar(String s) {
    int[] count = new int[26];
    
    // Count all characters
    for (char c : s.toCharArray()) {
        count[c - 'a']++;
    }
    
    // Find first with count 1
    for (int i = 0; i < s.length(); i++) {
        if (count[s.charAt(i) - 'a'] == 1) {
            return i;
        }
    }
    return -1;
}

// Method 2: LinkedHashMap (maintains order)
public int firstUniqCharMap(String s) {
    Map<Character, Integer> map = new LinkedHashMap<>();
    
    for (char c : s.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    
    for (int i = 0; i < s.length(); i++) {
        if (map.get(s.charAt(i)) == 1) {
            return i;
        }
    }
    return -1;
}

// Example: "leetcode" → 0 ('l')
// Example: "loveleetcode" → 2 ('v')`} />
                </div>
              </AccordionItem>

              <AccordionItem title="5. Longest Substring Without Repeating Characters">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #3</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`// Sliding Window with HashMap - O(n)
public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLen = 0;
    int left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        
        // If character seen and within current window
        if (map.containsKey(c) && map.get(c) >= left) {
            left = map.get(c) + 1;  // Move left past duplicate
        }
        
        map.put(c, right);  // Update last seen position
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// Alternative: Using Set
public int lengthOfLongestSubstringSet(String s) {
    Set<Character> set = new HashSet<>();
    int maxLen = 0, left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left++));
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// Example: "abcabcbb" → 3 ("abc")
// Example: "pwwkew" → 3 ("wke")`} />
                </div>
              </AccordionItem>

              <AccordionItem title="6. Longest Palindromic Substring">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #5</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Microsoft</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Expand Around Center - O(n²) time, O(1) space
public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    
    int start = 0, end = 0;
    
    for (int i = 0; i < s.length(); i++) {
        // Odd length palindrome (single center)
        int len1 = expandAroundCenter(s, i, i);
        // Even length palindrome (two center characters)
        int len2 = expandAroundCenter(s, i, i + 1);
        
        int len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() 
           && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Example: "babad" → "bab" or "aba"
// Example: "cbbd" → "bb"`} />
                </div>
              </AccordionItem>

              <AccordionItem title="7. String to Integer (atoi)">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #8</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                  </div>
                  <CodeBlock code={`public int myAtoi(String s) {
    if (s == null || s.length() == 0) return 0;
    
    int i = 0, n = s.length();
    
    // 1. Skip whitespace
    while (i < n && s.charAt(i) == ' ') {
        i++;
    }
    
    if (i == n) return 0;
    
    // 2. Check sign
    int sign = 1;
    if (s.charAt(i) == '+' || s.charAt(i) == '-') {
        sign = (s.charAt(i) == '-') ? -1 : 1;
        i++;
    }
    
    // 3. Convert digits
    long result = 0;
    while (i < n && Character.isDigit(s.charAt(i))) {
        result = result * 10 + (s.charAt(i) - '0');
        
        // 4. Handle overflow
        if (sign * result < Integer.MIN_VALUE) {
            return Integer.MIN_VALUE;
        }
        if (sign * result > Integer.MAX_VALUE) {
            return Integer.MAX_VALUE;
        }
        i++;
    }
    
    return (int) (sign * result);
}

// Example: "42" → 42
// Example: "   -42" → -42
// Example: "4193 with words" → 4193
// Example: "-91283472332" → -2147483648 (clamped)`} />
                </div>
              </AccordionItem>

              <AccordionItem title="8. Group Anagrams">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Medium</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #49</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Amazon</span>
                  </div>
                  <CodeBlock code={`// Method 1: Sorted String as Key - O(n * k log k)
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    
    return new ArrayList<>(map.values());
}

// Method 2: Character Count as Key - O(n * k)
public List<List<String>> groupAnagramsCount(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    
    for (String s : strs) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        
        // Create key from counts: "1#0#0#...#2#0"
        StringBuilder sb = new StringBuilder();
        for (int c : count) {
            sb.append(c).append('#');
        }
        String key = sb.toString();
        
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    
    return new ArrayList<>(map.values());
}

// Example: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]`} />
                </div>
              </AccordionItem>

              <AccordionItem title="9. Minimum Window Substring">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Hard</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #76</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Facebook</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`public String minWindow(String s, String t) {
    if (s.length() < t.length()) return "";
    
    // Count characters needed
    Map<Character, Integer> need = new HashMap<>();
    for (char c : t.toCharArray()) {
        need.put(c, need.getOrDefault(c, 0) + 1);
    }
    
    Map<Character, Integer> window = new HashMap<>();
    int left = 0, right = 0;
    int valid = 0;  // Characters with required count
    int start = 0, minLen = Integer.MAX_VALUE;
    
    while (right < s.length()) {
        char c = s.charAt(right);
        right++;
        
        // Update window
        if (need.containsKey(c)) {
            window.put(c, window.getOrDefault(c, 0) + 1);
            if (window.get(c).equals(need.get(c))) {
                valid++;
            }
        }
        
        // Shrink window when all chars found
        while (valid == need.size()) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            
            char d = s.charAt(left);
            left++;
            
            if (need.containsKey(d)) {
                if (window.get(d).equals(need.get(d))) {
                    valid--;
                }
                window.put(d, window.get(d) - 1);
            }
        }
    }
    
    return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}

// Example: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"`} />
                </div>
              </AccordionItem>

              <AccordionItem title="10. Longest Common Prefix">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Easy</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">LeetCode #14</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Google</span>
                  </div>
                  <CodeBlock code={`// Horizontal scanning
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    
    String prefix = strs[0];
    
    for (int i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    
    return prefix;
}

// Vertical scanning (more efficient for short common prefix)
public String longestCommonPrefixVertical(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    
    for (int i = 0; i < strs[0].length(); i++) {
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j++) {
            if (i >= strs[j].length() || strs[j].charAt(i) != c) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
}

// Example: ["flower","flow","flight"] → "fl"
// Example: ["dog","racecar","car"] → ""`} />
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

