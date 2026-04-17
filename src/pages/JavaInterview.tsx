import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';

export default function JavaInterview() {
  const [activeSection, setActiveSection] = useState('core-java');

  const sections = [
    { id: 'core-java', label: 'Core Java', icon: '☕', color: 'from-orange-500 to-red-600' },
    { id: 'collections', label: 'Collections', icon: '📦', color: 'from-pink-500 to-rose-600' },
    { id: 'java8', label: 'Java 8+', icon: '✨', color: 'from-violet-500 to-purple-600' },
    { id: 'multithreading', label: 'Multithreading', icon: '🔄', color: 'from-blue-500 to-indigo-600' },
    { id: 'jvm', label: 'JVM & Memory', icon: '🧠', color: 'from-red-500 to-pink-600' },
    { id: 'spring', label: 'Spring Boot', icon: '🍃', color: 'from-green-500 to-emerald-600' },
    { id: 'spring-aop', label: 'Spring AOP', icon: '🎯', color: 'from-lime-500 to-green-600' },
    { id: 'security', label: 'Security', icon: '🔐', color: 'from-yellow-500 to-amber-600' },
    { id: 'microservices', label: 'Microservices', icon: '🔗', color: 'from-purple-500 to-violet-600' },
    { id: 'database', label: 'Database & JPA', icon: '🗄️', color: 'from-cyan-500 to-teal-600' },
    { id: 'system-design', label: 'System Design', icon: '🏗️', color: 'from-amber-500 to-orange-600' },
    { id: 'devops', label: 'DevOps & Tools', icon: '⚙️', color: 'from-slate-500 to-gray-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Java Interview Questions"
        description="Comprehensive guide covering Core Java, Spring Boot, Microservices, and more"
        gradient="orange"
      />

      {/* Section Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 min-w-max pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Core Java Section */}
      {activeSection === 'core-java' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl">
              ☕
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Core Java</h2>
              <p className="text-dark-500 dark:text-dark-400">Foundation concepts asked in every interview</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. OOP Concepts (4 Pillars)" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Encapsulation</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Bundling data (fields) and methods together, hiding internal state using access modifiers.</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Abstraction</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Hiding complex implementation, showing only essential features via abstract classes/interfaces.</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Inheritance</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Child class inherits properties/methods from parent class. Promotes code reuse.</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Polymorphism</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Same method behaving differently. Compile-time (overloading) & Runtime (overriding).</p>
                  </div>
                </div>
                <CodeBlock code={`// ENCAPSULATION - private fields + public getters/setters
public class Employee {
    private String name;
    private double salary;
    
    public String getName() { return name; }
    public void setSalary(double salary) {
        if (salary > 0) this.salary = salary;  // Validation
    }
}

// ABSTRACTION - hide implementation
abstract class Animal {
    abstract void makeSound();  // What to do
}

class Dog extends Animal {
    void makeSound() { System.out.println("Bark"); }  // How to do
}

// INHERITANCE - code reuse
class Vehicle {
    void start() { System.out.println("Starting..."); }
}

class Car extends Vehicle {
    void drive() { System.out.println("Driving..."); }
}

// POLYMORPHISM
// Compile-time (Method Overloading)
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }  // Same name, different params
}

// Runtime (Method Overriding)
Animal animal = new Dog();  // Parent reference, child object
animal.makeSound();  // Outputs "Bark" - decided at runtime`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Interface vs Abstract Class">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2 text-blue-600">Interface</th>
                        <th className="text-center py-2 text-purple-600">Abstract Class</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Methods</td>
                        <td className="text-center">Abstract (default/static allowed)</td>
                        <td className="text-center">Abstract + Concrete</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Variables</td>
                        <td className="text-center">public static final only</td>
                        <td className="text-center">Any type</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Multiple Inheritance</td>
                        <td className="text-center text-emerald-600">✅ Yes</td>
                        <td className="text-center text-red-600">❌ No</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Constructor</td>
                        <td className="text-center">❌ No</td>
                        <td className="text-center">✅ Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2">When to use</td>
                        <td className="text-center">Contract/Capability</td>
                        <td className="text-center">Shared base code</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// INTERFACE - defines contract (what to do)
interface Flyable {
    void fly();  // implicitly public abstract
    
    // Java 8+ features
    default void land() {
        System.out.println("Landing...");
    }
    
    static void checkWeather() {
        System.out.println("Weather OK");
    }
}

interface Swimmable {
    void swim();
}

// Multiple interfaces - Yes!
class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flying"); }
    public void swim() { System.out.println("Duck swimming"); }
}

// ABSTRACT CLASS - partial implementation
abstract class Animal {
    protected String name;  // Can have state
    
    Animal(String name) {   // Can have constructor
        this.name = name;
    }
    
    abstract void makeSound();  // Must be implemented
    
    void sleep() {              // Concrete method
        System.out.println(name + " sleeping");
    }
}

class Cat extends Animal {
    Cat(String name) { super(name); }
    void makeSound() { System.out.println("Meow"); }
}

// WHEN TO USE:
// Interface: "Can do" relationship (Runnable, Comparable, Serializable)
// Abstract: "Is a" relationship with shared code (Animal -> Dog, Cat)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. static Keyword">
              <div className="space-y-4">
                <CodeBlock code={`// STATIC VARIABLE - shared across all instances
class Counter {
    static int count = 0;  // Class-level, one copy
    int instanceCount = 0;  // Instance-level, separate copy per object
    
    Counter() {
        count++;
        instanceCount++;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
System.out.println(Counter.count);    // 2 (shared)
System.out.println(c1.instanceCount); // 1 (separate)

// STATIC METHOD - called on class, not object
class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
    
    // Cannot use 'this' or access instance members
    // static void wrong() { this.someMethod(); } // ERROR!
}

MathUtils.add(5, 3);  // No object needed

// STATIC BLOCK - runs once when class loads
class Config {
    static Map<String, String> settings;
    
    static {
        settings = new HashMap<>();
        settings.put("url", "localhost");
        System.out.println("Config loaded!");
    }
}

// STATIC INNER CLASS - doesn't need outer instance
class Outer {
    static class StaticNested {
        void method() { }
    }
    
    class Inner {  // Non-static needs Outer instance
        void method() { }
    }
}

Outer.StaticNested nested = new Outer.StaticNested();  // OK
Outer.Inner inner = new Outer().new Inner();  // Needs Outer instance

// STATIC IMPORT
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

double area = PI * sqrt(radius);  // No Math. prefix`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Optional Class (Java 8+)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Optional</strong> is a container that may or may not contain a non-null value. It helps avoid NullPointerException and makes null-handling explicit.
                  </p>
                </div>
                <CodeBlock code={`// Creating Optional
Optional<String> empty = Optional.empty();
Optional<String> name = Optional.of("John");      // Throws if null
Optional<String> nullable = Optional.ofNullable(getName());  // Safe for null

// Checking value
if (name.isPresent()) {
    System.out.println(name.get());
}

// Better: ifPresent with lambda
name.ifPresent(n -> System.out.println(n));

// Default values
String result = nullable.orElse("Default");
String result2 = nullable.orElseGet(() -> expensiveOperation());
String result3 = nullable.orElseThrow(() -> new RuntimeException("Not found"));

// Transforming
Optional<Integer> length = name.map(String::length);
Optional<String> upper = name.map(String::toUpperCase);

// Filtering
Optional<String> longName = name.filter(n -> n.length() > 3);

// Chaining (flatMap for nested Optional)
Optional<String> city = user
    .flatMap(User::getAddress)
    .flatMap(Address::getCity);

// Best practices
// ✅ Return type for methods that may not return value
public Optional<User> findById(Long id) {
    return Optional.ofNullable(userMap.get(id));
}

// ❌ Don't use for fields, parameters, or collections
// ❌ Don't use Optional.get() without isPresent()
// ❌ Don't return null from method returning Optional`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. equals() vs hashCode() Contract">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">⚠️ The Contract:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>If <code>a.equals(b)</code> is true, then <code>a.hashCode() == b.hashCode()</code> MUST be true</li>
                    <li>If <code>hashCode()</code> is same, <code>equals()</code> may or may not be true (collisions allowed)</li>
                    <li>Breaking this contract breaks HashMap, HashSet, etc.</li>
                  </ul>
                </div>
                <CodeBlock code={`public class Employee {
    private int id;
    private String name;
    
    // MUST override both together!
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return id == employee.id && Objects.equals(name, employee.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}

// What happens if you only override equals()?
Employee e1 = new Employee(1, "John");
Employee e2 = new Employee(1, "John");

e1.equals(e2);  // true

Set<Employee> set = new HashSet<>();
set.add(e1);
set.contains(e2);  // FALSE! Different hashCode, different bucket

Map<Employee, String> map = new HashMap<>();
map.put(e1, "Developer");
map.get(e2);  // NULL! Can't find in different bucket`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Comparable vs Comparator">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2 text-blue-600">Comparable</th>
                        <th className="text-center py-2 text-emerald-600">Comparator</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Package</td>
                        <td className="text-center">java.lang</td>
                        <td className="text-center">java.util</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Method</td>
                        <td className="text-center">compareTo(T o)</td>
                        <td className="text-center">compare(T o1, T o2)</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Sorting Logic</td>
                        <td className="text-center">Inside class</td>
                        <td className="text-center">Separate class</td>
                      </tr>
                      <tr>
                        <td className="py-2">Use Case</td>
                        <td className="text-center">Natural ordering</td>
                        <td className="text-center">Multiple orderings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// Comparable - Natural ordering (single way)
public class Employee implements Comparable<Employee> {
    private int id;
    private String name;
    private int salary;
    
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.id, other.id);  // Sort by ID
    }
}

List<Employee> list = new ArrayList<>();
Collections.sort(list);  // Uses compareTo()

// Comparator - Multiple orderings (flexible)
Comparator<Employee> byName = (e1, e2) -> e1.getName().compareTo(e2.getName());
Comparator<Employee> bySalary = Comparator.comparingInt(Employee::getSalary);
Comparator<Employee> bySalaryDesc = bySalary.reversed();

// Chained comparators
Comparator<Employee> byDeptThenSalary = Comparator
    .comparing(Employee::getDepartment)
    .thenComparingInt(Employee::getSalary)
    .reversed();

list.sort(byName);
list.sort(bySalaryDesc);
Collections.sort(list, byDeptThenSalary);`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. HashMap Internal Working">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">How HashMap Works:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                    <li><strong>Hashing:</strong> <code>hashCode()</code> of key is computed</li>
                    <li><strong>Index:</strong> <code>index = hash & (n-1)</code> where n = array size (power of 2)</li>
                    <li><strong>Store:</strong> Entry stored at that bucket index</li>
                    <li><strong>Collision:</strong> If bucket occupied, use linked list (or tree if &gt; 8 entries)</li>
                    <li><strong>Retrieval:</strong> Same process + <code>equals()</code> to find exact key</li>
                  </ol>
                </div>
                <CodeBlock code={`// Internal structure (simplified)
class HashMap<K, V> {
    Node<K,V>[] table;  // Array of buckets (default size 16)
    float loadFactor = 0.75f;
    int threshold;  // capacity * loadFactor = 12
    
    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;  // For collision handling (linked list)
    }
    
    // TreeNode used when bucket size > 8 (Java 8+)
    // Converts linked list to Red-Black Tree for O(log n) search
}

// Key points:
// 1. Initial capacity: 16, Load factor: 0.75
// 2. Rehashing when size > threshold (doubles capacity)
// 3. Null key allowed (stored at index 0)
// 4. NOT thread-safe (use ConcurrentHashMap)

// Time Complexity:
// Average: O(1) for get/put
// Worst case: O(n) pre-Java 8, O(log n) Java 8+ (treeification)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. ArrayList vs LinkedList">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Operation</th>
                        <th className="text-center py-2 text-blue-600">ArrayList</th>
                        <th className="text-center py-2 text-emerald-600">LinkedList</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">get(index)</td>
                        <td className="text-center text-emerald-600">O(1) ✓</td>
                        <td className="text-center text-red-600">O(n)</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">add(end)</td>
                        <td className="text-center">O(1) amortized</td>
                        <td className="text-center text-emerald-600">O(1) ✓</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">add(0, element)</td>
                        <td className="text-center text-red-600">O(n)</td>
                        <td className="text-center text-emerald-600">O(1) ✓</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">remove(middle)</td>
                        <td className="text-center text-amber-600">O(n)</td>
                        <td className="text-center text-amber-600">O(n)*</td>
                      </tr>
                      <tr>
                        <td className="py-2">Memory</td>
                        <td className="text-center text-emerald-600">Less ✓</td>
                        <td className="text-center">More (node overhead)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// ArrayList - Dynamic array
List<String> arrayList = new ArrayList<>();
// Good for: Random access, iteration
// Internal: Object[] array, grows by 50%

// LinkedList - Doubly linked list
List<String> linkedList = new LinkedList<>();
// Good for: Frequent add/remove at ends, implementing Queue/Deque
// Internal: Node with prev/next pointers

// When to use ArrayList (90% of cases):
// - Most operations are reads
// - Random access needed
// - Memory efficiency matters

// When to use LinkedList:
// - Implementing Queue or Deque
// - Frequent insertions/deletions at beginning
// - Iterator-based removal during iteration`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. final vs finally vs finalize">
              <div className="space-y-4">
                <CodeBlock code={`// 1. final - Keyword for immutability
final int MAX = 100;           // Constant variable
final List<String> list = new ArrayList<>();  // Reference can't change
list.add("item");              // But object can be modified!

final class ImmutableClass {}  // Can't be extended
class Parent {
    final void method() {}     // Can't be overridden
}

// 2. finally - Exception handling block
try {
    // risky code
    return result;
} catch (Exception e) {
    // handle exception
} finally {
    // ALWAYS executes (cleanup)
    connection.close();
    // Even after return!
}

// 3. finalize() - Deprecated garbage collection hook
@Override
protected void finalize() throws Throwable {
    // Called before GC (unreliable, deprecated since Java 9)
    // Use try-with-resources or Cleaner instead
}

// Modern alternative to finalize:
try (FileInputStream fis = new FileInputStream("file.txt")) {
    // Auto-closed
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="6. Checked vs Unchecked Exceptions">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Checked Exceptions</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Checked at compile time</li>
                      <li>Must handle or declare</li>
                      <li>Extend Exception</li>
                      <li>e.g., IOException, SQLException</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Unchecked Exceptions</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Not checked at compile time</li>
                      <li>Optional to handle</li>
                      <li>Extend RuntimeException</li>
                      <li>e.g., NullPointerException, IllegalArgumentException</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// Checked - Must handle
public void readFile() throws IOException {  // Must declare
    FileReader fr = new FileReader("file.txt");
}

// Or handle with try-catch
public void readFileSafe() {
    try {
        FileReader fr = new FileReader("file.txt");
    } catch (IOException e) {
        log.error("File not found", e);
    }
}

// Unchecked - Optional to handle
public void process(String input) {
    if (input == null) {
        throw new IllegalArgumentException("Input cannot be null");
    }
    // NullPointerException if we didn't check
}

// Custom Exception
public class BusinessException extends RuntimeException {
    private final String errorCode;
    
    public BusinessException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="7. Creating Immutable Class">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Rules for Immutability:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Make class <code>final</code></li>
                    <li>Make all fields <code>private final</code></li>
                    <li>No setters</li>
                    <li>Initialize via constructor</li>
                    <li>Deep copy mutable objects in constructor and getters</li>
                  </ol>
                </div>
                <CodeBlock code={`public final class ImmutableEmployee {
    private final int id;
    private final String name;
    private final Date joiningDate;  // Mutable object!
    private final List<String> skills;  // Mutable collection!
    
    public ImmutableEmployee(int id, String name, Date joiningDate, List<String> skills) {
        this.id = id;
        this.name = name;
        // Deep copy mutable objects
        this.joiningDate = new Date(joiningDate.getTime());
        this.skills = new ArrayList<>(skills);
    }
    
    public int getId() { return id; }
    public String getName() { return name; }
    
    // Return copy, not original
    public Date getJoiningDate() {
        return new Date(joiningDate.getTime());
    }
    
    // Return unmodifiable view
    public List<String> getSkills() {
        return Collections.unmodifiableList(skills);
    }
}

// Java 14+ Record (immutable by default)
public record Employee(int id, String name) {}
// Auto-generates: constructor, getters, equals, hashCode, toString`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Collections Section */}
      {activeSection === 'collections' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl">
              📦
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Collections Framework</h2>
              <p className="text-dark-500 dark:text-dark-400">List, Set, Map hierarchy and implementations</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Collection Hierarchy" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// Collection Framework Hierarchy

                    Iterable
                       |
                   Collection
                  /    |    \\
               List   Set   Queue
               /|\\    /|\\     |
              / | \\  / | \\   Deque
             /  |  \\/  |  \\
ArrayList LinkedList HashSet TreeSet LinkedHashSet

                    Map (separate hierarchy)
                   / | \\
            HashMap TreeMap LinkedHashMap

// LIST - Ordered, allows duplicates, index-based
List<String> arrayList = new ArrayList<>();   // Fast random access O(1)
List<String> linkedList = new LinkedList<>(); // Fast insert/delete O(1)
List<String> vector = new Vector<>();         // Synchronized (legacy)

// SET - No duplicates
Set<String> hashSet = new HashSet<>();        // No order, O(1) operations
Set<String> treeSet = new TreeSet<>();        // Sorted, O(log n)
Set<String> linkedHashSet = new LinkedHashSet<>(); // Insertion order

// MAP - Key-Value pairs
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> treeMap = new TreeMap<>();      // Sorted by keys
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

// QUEUE - FIFO
Queue<String> queue = new LinkedList<>();
Queue<String> priorityQueue = new PriorityQueue<>(); // Heap-based
Deque<String> deque = new ArrayDeque<>();            // Double-ended`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. HashSet vs TreeSet vs LinkedHashSet">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2 text-orange-600">HashSet</th>
                        <th className="text-center py-2 text-green-600">TreeSet</th>
                        <th className="text-center py-2 text-blue-600">LinkedHashSet</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Ordering</td>
                        <td className="text-center">None</td>
                        <td className="text-center">Sorted</td>
                        <td className="text-center">Insertion</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Performance</td>
                        <td className="text-center text-emerald-600">O(1)</td>
                        <td className="text-center text-amber-600">O(log n)</td>
                        <td className="text-center text-emerald-600">O(1)</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Null</td>
                        <td className="text-center">✅ One</td>
                        <td className="text-center">❌ No</td>
                        <td className="text-center">✅ One</td>
                      </tr>
                      <tr>
                        <td className="py-2">Backed by</td>
                        <td className="text-center">HashMap</td>
                        <td className="text-center">TreeMap</td>
                        <td className="text-center">LinkedHashMap</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`Set<Integer> hashSet = new HashSet<>(Arrays.asList(3, 1, 2));
System.out.println(hashSet);  // [1, 2, 3] or any order

Set<Integer> treeSet = new TreeSet<>(Arrays.asList(3, 1, 2));
System.out.println(treeSet);  // [1, 2, 3] - always sorted

Set<Integer> linkedHashSet = new LinkedHashSet<>(Arrays.asList(3, 1, 2));
System.out.println(linkedHashSet);  // [3, 1, 2] - insertion order`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. ConcurrentHashMap">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Thread-Safe Map Options:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><code>Hashtable</code> - Legacy, synchronized entire map (slow)</li>
                    <li><code>Collections.synchronizedMap()</code> - Wrapper, still locks entire map</li>
                    <li><code>ConcurrentHashMap</code> - Segment-level locking (fast!)</li>
                  </ul>
                </div>
                <CodeBlock code={`// ConcurrentHashMap - thread-safe, high performance
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// Atomic operations
map.putIfAbsent("key", 1);
map.compute("key", (k, v) -> v == null ? 1 : v + 1);
map.computeIfAbsent("key", k -> expensiveComputation());
map.merge("key", 1, Integer::sum);

// Safe iteration - no ConcurrentModificationException
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    // Safe even if other threads modify map
}

// Key differences from HashMap:
// 1. No null keys or values allowed
// 2. Thread-safe without external synchronization
// 3. Iterators are weakly consistent

// Internal working (Java 8+):
// - Array of Nodes (similar to HashMap)
// - Synchronized only on individual buckets
// - Uses CAS operations for most updates
// - Tree bins when bucket size > 8`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Fail-Fast vs Fail-Safe Iterators">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Fail-Fast</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Throws ConcurrentModificationException</li>
                      <li>ArrayList, HashMap, HashSet</li>
                      <li>Uses modCount to detect changes</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Fail-Safe</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Works on clone, no exception</li>
                      <li>ConcurrentHashMap, CopyOnWriteArrayList</li>
                      <li>May not reflect latest changes</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// FAIL-FAST - ArrayList
List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
for (String s : list) {
    if (s.equals("b")) {
        list.remove(s);  // ConcurrentModificationException!
    }
}

// Solution 1: Use Iterator.remove()
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("b")) {
        it.remove();  // Safe!
    }
}

// Solution 2: Use removeIf (Java 8+)
list.removeIf(s -> s.equals("b"));

// FAIL-SAFE - CopyOnWriteArrayList
List<String> cowList = new CopyOnWriteArrayList<>(Arrays.asList("a", "b", "c"));
for (String s : cowList) {
    cowList.remove(s);  // No exception! (but may not remove all)
}

// ConcurrentHashMap - weakly consistent
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
for (String key : map.keySet()) {
    map.remove(key);  // Safe, no exception
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Java 8+ Features Section */}
      {activeSection === 'java8' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl">
              ✨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Java 8+ Features</h2>
              <p className="text-dark-500 dark:text-dark-400">Lambda, Streams, and Functional Programming</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Lambda Expressions" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// Lambda = Anonymous function
// Syntax: (parameters) -> expression or { statements }

// Before Java 8 (Anonymous class)
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// With Lambda
Runnable r2 = () -> System.out.println("Hello");

// Examples
// No parameters
Runnable task = () -> System.out.println("Task");

// One parameter (parentheses optional)
Consumer<String> print = s -> System.out.println(s);
Consumer<String> print2 = (s) -> System.out.println(s);

// Multiple parameters
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

// Multiple statements (need braces and return)
BiFunction<Integer, Integer, Integer> complex = (a, b) -> {
    int result = a + b;
    System.out.println("Sum: " + result);
    return result;
};

// With explicit types
BiFunction<String, String, String> concat = 
    (String a, String b) -> a + b;

// Method reference (shorthand for lambda)
list.forEach(System.out::println);  // Same as: s -> System.out.println(s)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Functional Interfaces">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Functional Interface</strong> = Interface with exactly one abstract method. Can be used as lambda target.
                  </p>
                </div>
                <CodeBlock code={`// Built-in Functional Interfaces (java.util.function)

// PREDICATE - takes T, returns boolean
Predicate<String> isEmpty = s -> s.isEmpty();
Predicate<Integer> isPositive = n -> n > 0;

list.stream().filter(isEmpty);  // Usage
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> combined = isPositive.and(isEven);  // Chaining

// FUNCTION - takes T, returns R
Function<String, Integer> length = s -> s.length();
Function<Integer, Integer> square = n -> n * n;

list.stream().map(length);  // Usage
Function<String, Integer> composed = length.andThen(square);  // Chain

// CONSUMER - takes T, returns void
Consumer<String> print = s -> System.out.println(s);
Consumer<String> log = s -> logger.info(s);

list.forEach(print);  // Usage
Consumer<String> both = print.andThen(log);  // Chain

// SUPPLIER - takes nothing, returns T
Supplier<Double> random = () -> Math.random();
Supplier<List<String>> listFactory = ArrayList::new;

Optional.orElseGet(listFactory);  // Usage

// BIFUNCTION - takes T and U, returns R
BiFunction<String, String, String> concat = (a, b) -> a + b;
BiFunction<Integer, Integer, Integer> add = Integer::sum;

// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    // Can have default/static methods
    default void log() { }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Stream API">
              <div className="space-y-4">
                <CodeBlock code={`// Stream = sequence of elements for functional-style operations
List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");

// FILTER - keep elements matching predicate
List<String> filtered = names.stream()
    .filter(n -> n.startsWith("J"))
    .collect(Collectors.toList());  // [John, Jane]

// MAP - transform each element
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());  // [4, 4, 3, 5]

// SORTED
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());  // [Alice, Bob, Jane, John]

// DISTINCT
List<Integer> unique = Arrays.asList(1, 2, 2, 3, 3)
    .stream()
    .distinct()
    .collect(Collectors.toList());  // [1, 2, 3]

// REDUCE - combine elements
int sum = Arrays.asList(1, 2, 3, 4).stream()
    .reduce(0, Integer::sum);  // 10

Optional<Integer> max = numbers.stream()
    .reduce(Integer::max);

// COLLECT - gather results
// To List
List<String> list = stream.collect(Collectors.toList());

// To Set
Set<String> set = stream.collect(Collectors.toSet());

// To Map
Map<String, Integer> map = names.stream()
    .collect(Collectors.toMap(
        n -> n,              // key
        String::length       // value
    ));

// Grouping
Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));

// Joining
String joined = names.stream()
    .collect(Collectors.joining(", "));  // "John, Jane, Bob, Alice"

// CHAINING
List<String> result = employees.stream()
    .filter(e -> e.getSalary() > 50000)
    .map(Employee::getName)
    .sorted()
    .limit(10)
    .collect(Collectors.toList());`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Method References">
              <div className="space-y-4">
                <CodeBlock code={`// Method Reference = shorthand for lambda calling single method
// Syntax: ClassName::methodName or object::methodName

// 1. Static method reference
// Lambda: (s) -> Integer.parseInt(s)
Function<String, Integer> parse = Integer::parseInt;

// 2. Instance method on parameter
// Lambda: (s) -> s.toUpperCase()
Function<String, String> upper = String::toUpperCase;

// 3. Instance method on specific object
// Lambda: (s) -> printer.print(s)
Printer printer = new Printer();
Consumer<String> print = printer::print;

// 4. Constructor reference
// Lambda: () -> new ArrayList<>()
Supplier<List<String>> listSupplier = ArrayList::new;

// Lambda: (s) -> new Person(s)
Function<String, Person> personFactory = Person::new;

// Examples in practice
List<String> names = Arrays.asList("john", "jane", "bob");

// Using lambda
names.stream().map(s -> s.toUpperCase()).forEach(s -> System.out.println(s));

// Using method references (cleaner)
names.stream().map(String::toUpperCase).forEach(System.out::println);

// Sorting with method reference
names.sort(String::compareToIgnoreCase);

// Converting to array
String[] array = names.stream().toArray(String[]::new);`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Multithreading Section */}
      {activeSection === 'multithreading' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
              🔄
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Multithreading</h2>
              <p className="text-dark-500 dark:text-dark-400">Deep dive into concurrency - heavily tested!</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Thread Lifecycle" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Thread States:</h4>
                  <div className="text-dark-600 dark:text-dark-400 text-sm">
                    NEW → RUNNABLE → RUNNING → (BLOCKED/WAITING/TIMED_WAITING) → TERMINATED
                  </div>
                </div>
                <CodeBlock code={`// Thread states
Thread.State state = thread.getState();

// NEW - Thread created but not started
Thread t = new Thread(() -> {});

// RUNNABLE - Ready to run or running
t.start();

// BLOCKED - Waiting for monitor lock
synchronized(lock) { /* blocked threads wait here */ }

// WAITING - Waiting indefinitely
object.wait();
thread.join();
LockSupport.park();

// TIMED_WAITING - Waiting with timeout
Thread.sleep(1000);
object.wait(1000);
thread.join(1000);

// TERMINATED - Completed execution

// Creating threads
// Method 1: Extend Thread
class MyThread extends Thread {
    public void run() { /* work */ }
}

// Method 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() { /* work */ }
}

Thread t1 = new Thread(new MyRunnable());
Thread t2 = new Thread(() -> System.out.println("Lambda"));`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. synchronized vs ReentrantLock">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2">synchronized</th>
                        <th className="text-center py-2">ReentrantLock</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Lock acquisition</td>
                        <td className="text-center">Implicit</td>
                        <td className="text-center">Explicit lock()/unlock()</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Try lock with timeout</td>
                        <td className="text-center">❌</td>
                        <td className="text-center">✅ tryLock(time)</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Interruptible</td>
                        <td className="text-center">❌</td>
                        <td className="text-center">✅ lockInterruptibly()</td>
                      </tr>
                      <tr>
                        <td className="py-2">Fairness</td>
                        <td className="text-center">❌</td>
                        <td className="text-center">✅ new ReentrantLock(true)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// synchronized - Simple, automatic release
public synchronized void method() {
    // entire method is synchronized
}

public void method2() {
    synchronized(this) {
        // synchronized block
    }
}

// ReentrantLock - More control
private final ReentrantLock lock = new ReentrantLock();

public void method() {
    lock.lock();  // Must explicitly lock
    try {
        // critical section
    } finally {
        lock.unlock();  // Must explicitly unlock in finally!
    }
}

// Try lock with timeout
if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try {
        // got the lock
    } finally {
        lock.unlock();
    }
} else {
    // couldn't get lock in time
}

// ReadWriteLock - Multiple readers, single writer
ReadWriteLock rwLock = new ReentrantReadWriteLock();
rwLock.readLock().lock();   // Multiple threads can read
rwLock.writeLock().lock();  // Only one thread can write`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. volatile Keyword">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">What volatile does:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Guarantees visibility - writes are immediately visible to other threads</li>
                    <li>Prevents instruction reordering</li>
                    <li>Does NOT guarantee atomicity!</li>
                  </ul>
                </div>
                <CodeBlock code={`// Without volatile - may never stop!
class Worker implements Runnable {
    private boolean running = true;  // May be cached in CPU register
    
    public void stop() { running = false; }
    
    public void run() {
        while (running) {  // May read stale cached value
            // work
        }
    }
}

// With volatile - guaranteed visibility
class Worker implements Runnable {
    private volatile boolean running = true;
    
    public void stop() { running = false; }  // Immediately visible
    
    public void run() {
        while (running) {  // Always reads from main memory
            // work
        }
    }
}

// volatile is NOT atomic!
private volatile int counter = 0;
counter++;  // NOT thread-safe! (read-modify-write)

// Use AtomicInteger for atomic operations
private AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();  // Thread-safe`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Deadlock & Prevention">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">4 Conditions for Deadlock:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Mutual Exclusion - Resource held exclusively</li>
                    <li>Hold and Wait - Holding one, waiting for another</li>
                    <li>No Preemption - Can't forcibly take resource</li>
                    <li>Circular Wait - A waits for B, B waits for A</li>
                  </ol>
                </div>
                <CodeBlock code={`// DEADLOCK example
Object lock1 = new Object();
Object lock2 = new Object();

// Thread 1
synchronized(lock1) {
    Thread.sleep(100);
    synchronized(lock2) { /* work */ }
}

// Thread 2
synchronized(lock2) {
    Thread.sleep(100);
    synchronized(lock1) { /* work */ }  // DEADLOCK!
}

// PREVENTION strategies:

// 1. Lock ordering - Always acquire locks in same order
synchronized(lock1) {
    synchronized(lock2) { /* work */ }
}

// 2. Lock timeout with tryLock
ReentrantLock lock1 = new ReentrantLock();
ReentrantLock lock2 = new ReentrantLock();

if (lock1.tryLock(1, TimeUnit.SECONDS)) {
    try {
        if (lock2.tryLock(1, TimeUnit.SECONDS)) {
            try {
                // work
            } finally { lock2.unlock(); }
        }
    } finally { lock1.unlock(); }
}

// 3. Use single lock for related resources
// 4. Avoid nested locks when possible`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. ExecutorService & Thread Pool">
              <div className="space-y-4">
                <CodeBlock code={`// Creating thread pools
ExecutorService executor = Executors.newFixedThreadPool(5);
ExecutorService cached = Executors.newCachedThreadPool();
ExecutorService single = Executors.newSingleThreadExecutor();
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(2);

// Submit tasks
executor.execute(() -> System.out.println("Runnable"));

Future<String> future = executor.submit(() -> {
    return "Result from Callable";
});

String result = future.get();  // Blocks until complete
String result2 = future.get(5, TimeUnit.SECONDS);  // With timeout

// Batch execution
List<Callable<String>> tasks = Arrays.asList(
    () -> "Task 1",
    () -> "Task 2"
);
List<Future<String>> futures = executor.invokeAll(tasks);

// Shutdown properly
executor.shutdown();  // No new tasks, finish existing
executor.shutdownNow();  // Interrupt running tasks
executor.awaitTermination(60, TimeUnit.SECONDS);

// Custom ThreadPoolExecutor
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    5,                      // corePoolSize
    10,                     // maxPoolSize
    60, TimeUnit.SECONDS,   // keepAliveTime
    new LinkedBlockingQueue<>(100),  // workQueue
    new ThreadPoolExecutor.CallerRunsPolicy()  // rejection policy
);`} />
              </div>
            </AccordionItem>

            <AccordionItem title="6. Callable vs Runnable">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2">Runnable</th>
                        <th className="text-center py-2">Callable</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Method</td>
                        <td className="text-center">run()</td>
                        <td className="text-center">call()</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Return value</td>
                        <td className="text-center">void</td>
                        <td className="text-center">V (generic)</td>
                      </tr>
                      <tr>
                        <td className="py-2">Throws exception</td>
                        <td className="text-center">❌</td>
                        <td className="text-center">✅ throws Exception</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// Runnable - no return, no exception
Runnable runnable = () -> {
    System.out.println("Running");
};

// Callable - returns value, can throw exception
Callable<Integer> callable = () -> {
    if (someCondition) {
        throw new Exception("Error");
    }
    return 42;
};

ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(callable);

try {
    Integer result = future.get();  // May throw ExecutionException
} catch (ExecutionException e) {
    Throwable cause = e.getCause();  // Original exception
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="7. wait() / notify() / notifyAll()">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Key Rules:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Must be called from synchronized block</li>
                    <li>wait() releases the lock, notify() doesn't</li>
                    <li>Always use while loop (spurious wakeups)</li>
                    <li>Prefer notifyAll() over notify()</li>
                  </ul>
                </div>
                <CodeBlock code={`// Producer-Consumer pattern
class SharedQueue {
    private Queue<Integer> queue = new LinkedList<>();
    private int capacity = 10;
    
    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == capacity) {
            wait();  // Queue full, wait for consumer
        }
        queue.add(item);
        notifyAll();  // Notify waiting consumers
    }
    
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();  // Queue empty, wait for producer
        }
        int item = queue.poll();
        notifyAll();  // Notify waiting producers
        return item;
    }
}

// Modern alternative: BlockingQueue
BlockingQueue<Integer> queue = new LinkedBlockingQueue<>(10);

// Producer
queue.put(item);  // Blocks if full

// Consumer  
int item = queue.take();  // Blocks if empty`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* JVM & Memory Section */}
      {activeSection === 'jvm' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-2xl">
              🧠
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">JVM & Memory Management</h2>
              <p className="text-dark-500 dark:text-dark-400">Understanding Java Virtual Machine internals</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. JVM Architecture" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// JVM Architecture Components

┌─────────────────────────────────────────────────────┐
│                    JVM                               │
│  ┌───────────────────────────────────────────────┐  │
│  │           Class Loader Subsystem              │  │
│  │   Loading → Linking → Initialization          │  │
│  └───────────────────────────────────────────────┘  │
│                         ↓                           │
│  ┌───────────────────────────────────────────────┐  │
│  │              Runtime Data Areas               │  │
│  │  ┌─────────┐ ┌─────────┐ ┌────────────────┐  │  │
│  │  │  Heap   │ │  Stack  │ │ Method Area    │  │  │
│  │  │(Objects)│ │(Frames) │ │(Class metadata)│  │  │
│  │  └─────────┘ └─────────┘ └────────────────┘  │  │
│  │  ┌───────────────────┐ ┌──────────────────┐  │  │
│  │  │ PC Register       │ │ Native Stack    │  │  │
│  │  └───────────────────┘ └──────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
│                         ↓                           │
│  ┌───────────────────────────────────────────────┐  │
│  │              Execution Engine                  │  │
│  │   Interpreter  |  JIT Compiler  |  GC         │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

// Class Loader types:
// 1. Bootstrap - loads rt.jar (core Java classes)
// 2. Extension - loads jre/lib/ext
// 3. Application - loads classpath classes`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Heap vs Stack">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Stack Memory</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Per thread (thread-safe)</li>
                      <li>Stores primitives, references</li>
                      <li>LIFO order, fast access</li>
                      <li>Fixed size (StackOverflowError)</li>
                      <li>Auto deallocated on method exit</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Heap Memory</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Shared across all threads</li>
                      <li>Stores objects, arrays</li>
                      <li>Dynamic allocation</li>
                      <li>GC managed (OutOfMemoryError)</li>
                      <li>Slower than stack</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`public void method() {
    int x = 10;              // Stack: primitive
    String name = "John";    // Stack: reference → Heap: String object
    Employee emp = new Employee();  // Stack: reference → Heap: object
    
    // When method ends:
    // - Stack frame popped (x, name, emp references gone)
    // - Heap objects eligible for GC if no other references
}

// Stack overflow
void recursive() {
    recursive();  // StackOverflowError - stack exhausted
}

// OutOfMemory
List<byte[]> list = new ArrayList<>();
while (true) {
    list.add(new byte[1024 * 1024]);  // OutOfMemoryError - heap exhausted
}

// JVM options
// -Xms512m  : Initial heap size
// -Xmx2g   : Maximum heap size
// -Xss1m   : Stack size per thread`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Heap Generations">
              <div className="space-y-4">
                <CodeBlock code={`// Heap Structure

┌─────────────────────────────────────────────────────┐
│                      HEAP                           │
│  ┌────────────────────────────────────────────────┐ │
│  │              Young Generation                  │ │
│  │  ┌───────────┐  ┌──────────┐ ┌──────────┐    │ │
│  │  │   Eden    │  │Survivor 0│ │Survivor 1│    │ │
│  │  │(new obj)  │  │  (S0)    │ │  (S1)    │    │ │
│  │  └───────────┘  └──────────┘ └──────────┘    │ │
│  └────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────┐ │
│  │              Old Generation                    │ │
│  │         (Long-lived objects)                   │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                   Metaspace                         │
│   (Class metadata, method info - Native memory)    │
└─────────────────────────────────────────────────────┘

// Object lifecycle:
// 1. Object created in Eden
// 2. Minor GC: Live objects move to S0
// 3. Next Minor GC: Live objects from Eden + S0 → S1
// 4. After threshold (default 15): Move to Old Gen
// 5. Major GC: Cleans Old Gen (slower, "stop the world")

// JVM options
// -Xmn256m        : Young generation size
// -XX:NewRatio=2  : Old/Young ratio (2:1)
// -XX:SurvivorRatio=8  : Eden/Survivor ratio
// -XX:MaxMetaspaceSize=256m`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Garbage Collection">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">GC Types:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Serial GC:</strong> Single thread, small heaps, -XX:+UseSerialGC</li>
                    <li><strong>Parallel GC:</strong> Multiple threads, throughput, -XX:+UseParallelGC</li>
                    <li><strong>G1 GC:</strong> Default Java 9+, balanced, -XX:+UseG1GC</li>
                    <li><strong>ZGC:</strong> Low latency (&lt;10ms), large heaps, -XX:+UseZGC</li>
                  </ul>
                </div>
                <CodeBlock code={`// When is object eligible for GC?
// 1. Nullifying reference
Object obj = new Object();
obj = null;  // Now eligible

// 2. Reassigning reference
Object obj = new Object();
obj = new Object();  // First object eligible

// 3. Object created inside method
void method() {
    Object obj = new Object();
}  // obj eligible after method returns

// 4. Island of isolation
class Node {
    Node next;
}
Node a = new Node();
Node b = new Node();
a.next = b;
b.next = a;
a = null;
b = null;  // Both eligible (circular reference but no external refs)

// Requesting GC (not guaranteed)
System.gc();
Runtime.getRuntime().gc();

// finalize() - deprecated, don't use
@Override
protected void finalize() {
    // Called before GC (unreliable)
}

// Modern approach: try-with-resources
try (FileInputStream fis = new FileInputStream("file.txt")) {
    // Use resource
}  // Auto-closed`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Memory Leaks">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Common Memory Leak Causes:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Unclosed resources (streams, connections)</li>
                    <li>Static collections growing indefinitely</li>
                    <li>Listeners not removed</li>
                    <li>Inner class holding outer class reference</li>
                    <li>ThreadLocal not removed</li>
                  </ul>
                </div>
                <CodeBlock code={`// 1. Static collection leak
class Cache {
    private static final Map<String, Object> cache = new HashMap<>();
    
    public void add(String key, Object value) {
        cache.put(key, value);  // Never removed = memory leak
    }
}
// Fix: Use WeakHashMap or bounded cache with eviction

// 2. Unclosed resources
void readFile() {
    InputStream is = new FileInputStream("file.txt");
    // If exception occurs, stream never closed!
}
// Fix: try-with-resources
try (InputStream is = new FileInputStream("file.txt")) {
    // Auto-closed
}

// 3. Listener not removed
button.addActionListener(listener);
// Never removed = listener and all it references can't be GC'd
// Fix: Remove listeners when done
button.removeActionListener(listener);

// 4. ThreadLocal leak
private static ThreadLocal<User> userContext = new ThreadLocal<>();
userContext.set(user);
// In thread pool, thread is reused but ThreadLocal remains!
// Fix: Always remove
try {
    userContext.set(user);
    // work
} finally {
    userContext.remove();
}

// Tools for detection:
// - jvisualvm, jconsole (JDK tools)
// - Eclipse MAT (Memory Analyzer)
// - YourKit, JProfiler`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring Boot Section */}
      {activeSection === 'spring' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
              🍃
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring Boot</h2>
              <p className="text-dark-500 dark:text-dark-400">Essential Spring concepts for backend interviews</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Spring Boot Auto-Configuration" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">How it works:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>@EnableAutoConfiguration scans classpath</li>
                    <li>Checks spring.factories for auto-config classes</li>
                    <li>@Conditional annotations determine what to configure</li>
                    <li>Your explicit config takes precedence</li>
                  </ul>
                </div>
                <CodeBlock code={`// @SpringBootApplication combines:
@SpringBootConfiguration  // Same as @Configuration
@EnableAutoConfiguration  // Enable auto-config
@ComponentScan           // Scan for components

// Common @Conditional annotations
@ConditionalOnClass(DataSource.class)      // If class exists
@ConditionalOnMissingBean(DataSource.class) // If bean not defined
@ConditionalOnProperty(name = "app.feature.enabled", havingValue = "true")

// Disable specific auto-config
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})

// Or in application.properties
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration

// View auto-config report
# application.properties
debug=true
# Shows: CONDITIONS EVALUATION REPORT`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. @Component vs @Service vs @Repository">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    All are specializations of @Component. Functionally same, but semantically different:
                  </p>
                </div>
                <CodeBlock code={`// @Component - Generic stereotype
@Component
public class EmailValidator { }

// @Service - Business logic layer
@Service
public class UserService {
    // Contains business logic
}

// @Repository - Data access layer
@Repository
public class UserRepository {
    // Special: Translates persistence exceptions to Spring's DataAccessException
}

// @Controller - Web layer (returns views)
@Controller
public class HomeController { }

// @RestController - REST API (@Controller + @ResponseBody)
@RestController
public class UserController { }

// Hierarchy:
// @Component
//   ├── @Service
//   ├── @Repository
//   └── @Controller
//         └── @RestController`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. @Autowired vs Constructor Injection">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Field Injection</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Hard to test</li>
                      <li>Hides dependencies</li>
                      <li>Can't use final fields</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Constructor Injection</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Easy to test</li>
                      <li>Dependencies explicit</li>
                      <li>Immutable (final fields)</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// ❌ Field Injection (avoid)
@Service
public class UserService {
    @Autowired
    private UserRepository repository;  // Hard to mock in tests
}

// ✅ Constructor Injection (recommended)
@Service
public class UserService {
    private final UserRepository repository;
    
    // @Autowired optional for single constructor (Spring 4.3+)
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}

// Even better with Lombok
@Service
@RequiredArgsConstructor  // Generates constructor for final fields
public class UserService {
    private final UserRepository repository;
    private final EmailService emailService;
}

// Easy to test
@Test
void testUserService() {
    UserRepository mockRepo = mock(UserRepository.class);
    UserService service = new UserService(mockRepo);
    // test...
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Bean Scopes">
              <div className="space-y-4">
                <CodeBlock code={`// 1. Singleton (default) - One instance per Spring container
@Service
@Scope("singleton")  // Optional, default
public class SingletonService { }

// 2. Prototype - New instance every time
@Service
@Scope("prototype")
public class PrototypeService { }

// 3. Request - One per HTTP request (web only)
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean { }

// 4. Session - One per HTTP session (web only)
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class SessionScopedBean { }

// 5. Application - One per ServletContext
@Component
@Scope(WebApplicationContext.SCOPE_APPLICATION)
public class ApplicationScopedBean { }

// Injecting prototype into singleton (use proxy!)
@Service
public class SingletonService {
    @Autowired
    private ObjectFactory<PrototypeService> prototypeFactory;
    
    public void doWork() {
        PrototypeService prototype = prototypeFactory.getObject();
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. @Transactional">
              <div className="space-y-4">
                <CodeBlock code={`@Service
public class UserService {
    
    // Basic usage - rolls back on RuntimeException
    @Transactional
    public void createUser(User user) {
        userRepository.save(user);
        emailService.sendWelcome(user);  // If fails, user save rolls back
    }
    
    // Rollback on specific exceptions
    @Transactional(rollbackFor = Exception.class)
    public void process() throws Exception { }
    
    // No rollback for specific exceptions
    @Transactional(noRollbackFor = EmailException.class)
    public void createWithEmail() { }
    
    // Read-only (optimization hint)
    @Transactional(readOnly = true)
    public User getUser(Long id) {
        return userRepository.findById(id);
    }
    
    // Propagation
    @Transactional(propagation = Propagation.REQUIRED)      // Default: join or create
    @Transactional(propagation = Propagation.REQUIRES_NEW) // Always new transaction
    @Transactional(propagation = Propagation.NESTED)       // Nested transaction
    
    // Isolation levels
    @Transactional(isolation = Isolation.READ_COMMITTED)
}

// GOTCHA: Self-invocation doesn't work!
@Service
public class OrderService {
    @Transactional
    public void processOrder() {
        // This bypasses proxy - @Transactional ignored!
        this.saveOrder();
    }
    
    @Transactional
    public void saveOrder() { }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="6. Spring Profiles">
              <div className="space-y-4">
                <CodeBlock code={`// application.properties (common)
spring.application.name=myapp

// application-dev.properties
spring.datasource.url=jdbc:h2:mem:devdb
logging.level.root=DEBUG

// application-prod.properties
spring.datasource.url=jdbc:mysql://prod-server/db
logging.level.root=WARN

// Activate profile
# Command line
java -jar app.jar --spring.profiles.active=prod

# application.properties
spring.profiles.active=dev

# Environment variable
SPRING_PROFILES_ACTIVE=prod

// Profile-specific beans
@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource devDataSource() { }
}

@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource prodDataSource() { }
}

// Profile in component
@Service
@Profile("!prod")  // Not in production
public class MockPaymentService implements PaymentService { }`} />
              </div>
            </AccordionItem>

            <AccordionItem title="7. Exception Handling (@ControllerAdvice)">
              <div className="space-y-4">
                <CodeBlock code={`// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
    }
    
    @ExceptionHandler(ValidationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(ValidationException ex) {
        return new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
    }
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneric(Exception ex) {
        log.error("Unexpected error", ex);
        return new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now()
        );
    }
}

// Error response DTO
@Data
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;
    private LocalDateTime timestamp;
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="8. REST Annotations">
              <div className="space-y-4">
                <CodeBlock code={`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // GET /api/users
    @GetMapping
    public List<User> getAllUsers() { }
    
    // GET /api/users/123
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) { }
    
    // GET /api/users?status=active&page=1
    @GetMapping
    public List<User> searchUsers(
        @RequestParam(required = false) String status,
        @RequestParam(defaultValue = "0") int page
    ) { }
    
    // POST /api/users (body: JSON)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@Valid @RequestBody CreateUserRequest request) { }
    
    // PUT /api/users/123
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody UpdateUserRequest request) { }
    
    // DELETE /api/users/123
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) { }
    
    // Custom response with headers
    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=file.pdf")
            .contentType(MediaType.APPLICATION_PDF)
            .body(fileBytes);
    }
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring AOP Section */}
      {activeSection === 'spring-aop' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring AOP</h2>
              <p className="text-dark-500 dark:text-dark-400">Aspect-Oriented Programming for cross-cutting concerns</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. What is AOP?" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>AOP (Aspect-Oriented Programming)</strong> separates cross-cutting concerns (logging, security, transactions) from business logic. Instead of scattering these concerns across all classes, you define them in one place (aspect).
                  </p>
                </div>
                <CodeBlock code={`// Without AOP - logging scattered everywhere
public class UserService {
    public void createUser(User user) {
        logger.info("Creating user: " + user);  // Logging
        // business logic
        logger.info("User created successfully");
    }
    
    public void deleteUser(Long id) {
        logger.info("Deleting user: " + id);  // Same pattern repeated
        // business logic
        logger.info("User deleted successfully");
    }
}

// With AOP - centralized logging
@Aspect
@Component
public class LoggingAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object logMethod(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.info("Entering: " + joinPoint.getSignature().getName());
        Object result = joinPoint.proceed();
        logger.info("Exiting: " + joinPoint.getSignature().getName());
        return result;
    }
}

// UserService is now clean
public class UserService {
    public void createUser(User user) {
        // Only business logic - no logging code!
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. AOP Terminology">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                    <li><strong>Aspect:</strong> Module containing cross-cutting logic (e.g., LoggingAspect)</li>
                    <li><strong>Join Point:</strong> Point in execution (method call, exception throw)</li>
                    <li><strong>Pointcut:</strong> Expression defining which join points to match</li>
                    <li><strong>Advice:</strong> Action taken at join point (before, after, around)</li>
                    <li><strong>Weaving:</strong> Linking aspects with target objects</li>
                  </ul>
                </div>
                <CodeBlock code={`@Aspect
@Component
public class SecurityAspect {
    
    // Pointcut expression - defines WHERE
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {}
    
    // Another pointcut
    @Pointcut("@annotation(com.example.Secured)")
    public void securedMethods() {}
    
    // Combined pointcuts
    @Pointcut("serviceMethods() && securedMethods()")
    public void securedServiceMethods() {}
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Advice Types">
              <div className="space-y-4">
                <CodeBlock code={`@Aspect
@Component
public class MyAspect {
    
    // BEFORE - runs before method execution
    @Before("execution(* com.example.service.*.*(..))")
    public void beforeAdvice(JoinPoint joinPoint) {
        System.out.println("Before: " + joinPoint.getSignature().getName());
    }
    
    // AFTER - runs after method (regardless of outcome)
    @After("execution(* com.example.service.*.*(..))")
    public void afterAdvice(JoinPoint joinPoint) {
        System.out.println("After: " + joinPoint.getSignature().getName());
    }
    
    // AFTER RETURNING - runs after successful return
    @AfterReturning(
        pointcut = "execution(* com.example.service.*.*(..))",
        returning = "result"
    )
    public void afterReturning(JoinPoint joinPoint, Object result) {
        System.out.println("Returned: " + result);
    }
    
    // AFTER THROWING - runs after exception
    @AfterThrowing(
        pointcut = "execution(* com.example.service.*.*(..))",
        throwing = "ex"
    )
    public void afterThrowing(JoinPoint joinPoint, Exception ex) {
        System.out.println("Exception: " + ex.getMessage());
    }
    
    // AROUND - most powerful, controls method execution
    @Around("execution(* com.example.service.*.*(..))")
    public Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        
        Object result = joinPoint.proceed();  // Execute method
        
        long duration = System.currentTimeMillis() - start;
        System.out.println("Method took: " + duration + "ms");
        
        return result;
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Pointcut Expressions">
              <div className="space-y-4">
                <CodeBlock code={`// EXECUTION - most common
@Pointcut("execution(public * com.example.service.*.*(..))")
// execution(modifiers? return-type declaring-type.method(params) throws?)

// Examples:
execution(* *.*(..))                    // Any method
execution(public * *(..))               // Any public method
execution(* set*(..))                   // Methods starting with "set"
execution(* com.example.MyClass.*(..)) // All methods in MyClass
execution(* com.example.service.*.*(..)) // All service methods
execution(* *(..) throws Exception)     // Methods declaring Exception

// WITHIN - match all methods in class/package
@Pointcut("within(com.example.service.*)")
@Pointcut("within(com.example.service..*)")  // Include subpackages

// @ANNOTATION - methods with specific annotation
@Pointcut("@annotation(com.example.Loggable)")
@Pointcut("@annotation(org.springframework.transaction.annotation.Transactional)")

// @WITHIN - classes with specific annotation
@Pointcut("@within(org.springframework.stereotype.Service)")

// BEAN - Spring bean name
@Pointcut("bean(*Service)")  // Beans ending with "Service"
@Pointcut("bean(userService)")

// ARGS - method arguments
@Pointcut("args(String, ..)")  // First arg is String
@Pointcut("args(com.example.User)")

// Combining pointcuts
@Pointcut("execution(* com.example.service.*.*(..)) && @annotation(Loggable)")
@Pointcut("within(com.example..*) && !within(com.example.config..*)")`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Common Use Cases">
              <div className="space-y-4">
                <CodeBlock code={`// 1. LOGGING
@Aspect
@Component
public class LoggingAspect {
    @Around("@annotation(Loggable)")
    public Object log(ProceedingJoinPoint jp) throws Throwable {
        log.info("Entering {} with args {}", jp.getSignature(), jp.getArgs());
        Object result = jp.proceed();
        log.info("Exiting {} with result {}", jp.getSignature(), result);
        return result;
    }
}

// 2. PERFORMANCE MONITORING
@Aspect
@Component
public class PerformanceAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object measureTime(ProceedingJoinPoint jp) throws Throwable {
        long start = System.nanoTime();
        Object result = jp.proceed();
        long duration = (System.nanoTime() - start) / 1_000_000;
        if (duration > 1000) {
            log.warn("Slow method: {} took {}ms", jp.getSignature(), duration);
        }
        return result;
    }
}

// 3. SECURITY CHECK
@Aspect
@Component
public class SecurityAspect {
    @Before("@annotation(secured)")
    public void checkSecurity(JoinPoint jp, Secured secured) {
        String requiredRole = secured.role();
        if (!currentUser.hasRole(requiredRole)) {
            throw new AccessDeniedException("Role required: " + requiredRole);
        }
    }
}

// 4. CACHING
@Aspect
@Component
public class CachingAspect {
    private Map<String, Object> cache = new ConcurrentHashMap<>();
    
    @Around("@annotation(Cacheable)")
    public Object cache(ProceedingJoinPoint jp) throws Throwable {
        String key = jp.getSignature().toString() + Arrays.toString(jp.getArgs());
        return cache.computeIfAbsent(key, k -> {
            try { return jp.proceed(); } 
            catch (Throwable t) { throw new RuntimeException(t); }
        });
    }
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Spring Security Section */}
      {activeSection === 'security' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-2xl">
              🔐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Spring Security</h2>
              <p className="text-dark-500 dark:text-dark-400">Authentication, Authorization, and JWT</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Authentication vs Authorization" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Authentication (AuthN)</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      <strong>"Who are you?"</strong><br/>
                      Verifying identity using credentials (username/password, token, biometrics).
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Authorization (AuthZ)</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      <strong>"What can you do?"</strong><br/>
                      Determining permissions based on roles/authorities after authentication.
                    </p>
                  </div>
                </div>
                <CodeBlock code={`// Authentication happens first
// User provides credentials → System verifies → User is authenticated

// Authorization happens second
// Authenticated user tries to access resource → System checks permissions

// Spring Security annotations
@PreAuthorize("isAuthenticated()")  // Must be authenticated
@PreAuthorize("hasRole('ADMIN')")   // Must have ADMIN role
@PreAuthorize("hasAuthority('READ_USERS')")  // Must have specific authority`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Spring Security Filter Chain">
              <div className="space-y-4">
                <CodeBlock code={`// Request → Filter Chain → Controller

// Key filters in order:
// 1. SecurityContextPersistenceFilter - Loads SecurityContext
// 2. UsernamePasswordAuthenticationFilter - Form login
// 3. BasicAuthenticationFilter - HTTP Basic auth
// 4. BearerTokenAuthenticationFilter - JWT/OAuth2
// 5. ExceptionTranslationFilter - Handles auth exceptions
// 6. FilterSecurityInterceptor - Final authorization check

// Security Configuration (Spring Security 6.x)
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // Disable for API
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())  // Enable Basic auth
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Role-Based Access Control">
              <div className="space-y-4">
                <CodeBlock code={`// Define roles and authorities
// ROLE = group of authorities (prefix with ROLE_)
// AUTHORITY = specific permission

@Entity
public class User {
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;
}

@Entity
public class Role {
    private String name;  // ROLE_ADMIN, ROLE_USER
    
    @ManyToMany
    private Set<Authority> authorities;  // READ_USER, WRITE_USER
}

// Method-level security
@EnableMethodSecurity
@Configuration
public class MethodSecurityConfig { }

@Service
public class UserService {
    
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) { }
    
    @PreAuthorize("hasAuthority('READ_USERS')")
    public List<User> getAllUsers() { }
    
    @PreAuthorize("#userId == authentication.principal.id or hasRole('ADMIN')")
    public User getUser(Long userId) { }
    
    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDocument(Long id) { }
}

// Controller-level
@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")  // All methods require ADMIN
public class AdminController { }`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. JWT Authentication">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>JWT (JSON Web Token)</strong> = Header.Payload.Signature<br/>
                    Stateless authentication - server doesn't store session, token contains all info.
                  </p>
                </div>
                <CodeBlock code={`// JWT Structure
// Header: {"alg": "HS256", "typ": "JWT"}
// Payload: {"sub": "user123", "roles": ["USER"], "exp": 1234567890}
// Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)

// JWT Service
@Service
public class JwtService {
    @Value("\${jwt.secret}")
    private String secret;
    
    public String generateToken(UserDetails user) {
        return Jwts.builder()
            .setSubject(user.getUsername())
            .claim("roles", user.getAuthorities())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }
    
    public String extractUsername(String token) {
        return Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
    
    public boolean isTokenValid(String token, UserDetails user) {
        String username = extractUsername(token);
        return username.equals(user.getUsername()) && !isTokenExpired(token);
    }
}

// JWT Filter
@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response, FilterChain chain) {
        
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            String username = jwtService.extractUsername(token);
            
            UserDetails user = userService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, user)) {
                UsernamePasswordAuthenticationToken auth = 
                    new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(request, response);
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Password Encoding">
              <div className="space-y-4">
                <CodeBlock code={`// NEVER store plain text passwords!

// BCrypt - recommended, includes salt automatically
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}

// Usage
String rawPassword = "myPassword123";
String encoded = passwordEncoder.encode(rawPassword);
// Result: $2a$10$N9qo8uLOickgx2ZMRZoMye...  (different each time due to salt)

boolean matches = passwordEncoder.matches(rawPassword, encoded);  // true

// In UserDetailsService
@Service
public class UserService implements UserDetailsService {
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User createUser(String username, String rawPassword) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(rawPassword));  // Encode!
        return userRepository.save(user);
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        
        return org.springframework.security.core.userdetails.User
            .withUsername(user.getUsername())
            .password(user.getPassword())  // Already encoded
            .roles(user.getRoles().toArray(new String[0]))
            .build();
    }
}

// Strength levels (10 is default)
new BCryptPasswordEncoder(12);  // Stronger but slower`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Microservices Section */}
      {activeSection === 'microservices' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-2xl">
              🔗
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Microservices</h2>
              <p className="text-dark-500 dark:text-dark-400">Architecture patterns and cloud-native concepts</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Monolith vs Microservices" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Monolith</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>✅ Simple development & deployment</li>
                      <li>✅ Easy debugging</li>
                      <li>✅ No network latency</li>
                      <li>❌ Single point of failure</li>
                      <li>❌ Hard to scale specific parts</li>
                      <li>❌ Tech stack locked</li>
                    </ul>
                  </div>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Microservices</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>✅ Independent scaling</li>
                      <li>✅ Technology flexibility</li>
                      <li>✅ Fault isolation</li>
                      <li>❌ Complex infrastructure</li>
                      <li>❌ Network latency</li>
                      <li>❌ Distributed transactions</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// Microservices architecture components:
// 1. API Gateway - Single entry point
// 2. Service Discovery - Find services dynamically
// 3. Config Server - Centralized configuration
// 4. Circuit Breaker - Fault tolerance
// 5. Load Balancer - Distribute traffic

// Typical Spring Cloud stack:
// - Spring Cloud Gateway (API Gateway)
// - Eureka (Service Discovery)
// - Spring Cloud Config (Config Server)
// - Resilience4j (Circuit Breaker)
// - Spring Cloud LoadBalancer`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. API Gateway">
              <div className="space-y-4">
                <CodeBlock code={`// Spring Cloud Gateway
@SpringBootApplication
public class GatewayApplication { }

// application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE  # Load balanced
          predicates:
            - Path=/api/users/**
          filters:
            - StripPrefix=1
            
        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/api/orders/**
          filters:
            - name: CircuitBreaker
              args:
                name: orderCircuitBreaker
                fallbackUri: forward:/fallback/orders

// Custom filter
@Component
public class AuthFilter implements GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        if (token == null) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
        return chain.filter(exchange);
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Service Discovery (Eureka)">
              <div className="space-y-4">
                <CodeBlock code={`// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication { }

// application.yml (Eureka Server)
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false

// Eureka Client (each microservice)
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { }

// application.yml (Client)
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true

// Calling other services using service name
@FeignClient(name = "ORDER-SERVICE")
public interface OrderClient {
    @GetMapping("/api/orders/user/{userId}")
    List<Order> getOrdersByUser(@PathVariable Long userId);
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Circuit Breaker (Resilience4j)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Circuit Breaker States:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    CLOSED (normal) → OPEN (failing) → HALF_OPEN (testing) → CLOSED
                  </p>
                </div>
                <CodeBlock code={`// application.yml
resilience4j:
  circuitbreaker:
    instances:
      orderService:
        slidingWindowSize: 10
        failureRateThreshold: 50
        waitDurationInOpenState: 10000
        permittedNumberOfCallsInHalfOpenState: 3

// Service with circuit breaker
@Service
public class OrderService {
    
    @CircuitBreaker(name = "orderService", fallbackMethod = "getOrdersFallback")
    @Retry(name = "orderService")
    @RateLimiter(name = "orderService")
    public List<Order> getOrders(Long userId) {
        return orderClient.getOrdersByUser(userId);
    }
    
    public List<Order> getOrdersFallback(Long userId, Exception e) {
        log.warn("Fallback for user {}: {}", userId, e.getMessage());
        return Collections.emptyList();  // Return cached/default data
    }
}

// Programmatic usage
@Autowired
private CircuitBreakerRegistry registry;

CircuitBreaker cb = registry.circuitBreaker("orderService");
String result = cb.executeSupplier(() -> externalCall());`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Docker Basics">
              <div className="space-y-4">
                <CodeBlock code={`# Dockerfile for Spring Boot
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# Multi-stage build (smaller image)
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

# Common commands
docker build -t myapp:1.0 .
docker run -p 8080:8080 myapp:1.0
docker run -d -p 8080:8080 --name myapp myapp:1.0  # Detached
docker logs myapp
docker stop myapp
docker rm myapp

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DATABASE_URL=jdbc:mysql://db:3306/mydb
    depends_on:
      - db
  db:
    image: mysql:8
    environment:
      - MYSQL_ROOT_PASSWORD=secret
      - MYSQL_DATABASE=mydb`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* Database & JPA Section */}
      {activeSection === 'database' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-2xl">
              🗄️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Database & JPA/Hibernate</h2>
              <p className="text-dark-500 dark:text-dark-400">ORM concepts and database fundamentals</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. JPA vs Hibernate" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                    <li><strong>JPA (Java Persistence API):</strong> Specification/interface - defines what ORM should do</li>
                    <li><strong>Hibernate:</strong> Implementation of JPA - actual library doing the work</li>
                    <li>Other implementations: EclipseLink, OpenJPA</li>
                  </ul>
                </div>
                <CodeBlock code={`// JPA annotations (specification)
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_name", nullable = false, length = 100)
    private String username;
}

// Spring Data JPA Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Derived query methods
    List<User> findByUsername(String username);
    List<User> findByEmailContaining(String email);
    
    // JPQL
    @Query("SELECT u FROM User u WHERE u.status = :status")
    List<User> findByStatus(@Param("status") String status);
    
    // Native SQL
    @Query(value = "SELECT * FROM users WHERE created_at > ?1", nativeQuery = true)
    List<User> findRecentUsers(LocalDateTime date);
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Entity Relationships">
              <div className="space-y-4">
                <CodeBlock code={`// One-to-One
@Entity
public class User {
    @Id
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private UserProfile profile;
}

// One-to-Many / Many-to-One
@Entity
public class Department {
    @Id
    private Long id;
    
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}

// Many-to-Many
@Entity
public class Student {
    @Id
    private Long id;
    
    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses;
}

@Entity
public class Course {
    @Id
    private Long id;
    
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. EAGER vs LAZY Fetch">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Behavior</th>
                        <th className="text-left py-2">Default For</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">EAGER</td>
                        <td>Loads immediately with parent</td>
                        <td>@OneToOne, @ManyToOne</td>
                      </tr>
                      <tr>
                        <td className="py-2">LAZY</td>
                        <td>Loads on first access</td>
                        <td>@OneToMany, @ManyToMany</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`@Entity
public class Order {
    @ManyToOne(fetch = FetchType.LAZY)  // Load customer only when accessed
    private Customer customer;
    
    @OneToMany(fetch = FetchType.LAZY)  // Default for collections
    private List<OrderItem> items;
}

// GOTCHA: LazyInitializationException
Order order = orderRepository.findById(1L);  // Transaction ends
order.getCustomer().getName();  // Exception! Session closed

// Solution 1: @Transactional on service method
@Transactional(readOnly = true)
public OrderDTO getOrder(Long id) {
    Order order = orderRepository.findById(id);
    order.getCustomer().getName();  // Works, session open
    return new OrderDTO(order);
}

// Solution 2: Fetch join in query
@Query("SELECT o FROM Order o JOIN FETCH o.customer WHERE o.id = :id")
Order findByIdWithCustomer(@Param("id") Long id);

// Solution 3: EntityGraph
@EntityGraph(attributePaths = {"customer", "items"})
Order findById(Long id);`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. N+1 Problem">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">The Problem:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    1 query to fetch N parents + N queries to fetch each parent's children = N+1 queries
                  </p>
                </div>
                <CodeBlock code={`// N+1 Problem example
List<Department> departments = departmentRepository.findAll();  // 1 query
for (Department dept : departments) {
    dept.getEmployees().size();  // N queries (one per department!)
}

// Solution 1: JOIN FETCH
@Query("SELECT d FROM Department d JOIN FETCH d.employees")
List<Department> findAllWithEmployees();

// Solution 2: @EntityGraph
@EntityGraph(attributePaths = {"employees"})
List<Department> findAll();

// Solution 3: @BatchSize (Hibernate)
@Entity
public class Department {
    @OneToMany(mappedBy = "department")
    @BatchSize(size = 25)  // Fetch 25 collections at a time
    private List<Employee> employees;
}

// Solution 4: DTO Projection (best for read-only)
@Query("SELECT new com.example.DeptDTO(d.name, COUNT(e)) " +
       "FROM Department d LEFT JOIN d.employees e GROUP BY d.name")
List<DeptDTO> getDepartmentStats();`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. SQL vs NoSQL">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">SQL (Relational)</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Structured schema, tables</li>
                      <li>ACID compliant</li>
                      <li>Complex queries (JOINs)</li>
                      <li>e.g., MySQL, PostgreSQL, Oracle</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">NoSQL</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Flexible schema</li>
                      <li>Horizontally scalable</li>
                      <li>Document, Key-Value, Graph</li>
                      <li>e.g., MongoDB, Redis, Cassandra</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// When to use SQL:
// - Complex relationships between data
// - Need ACID transactions
// - Structured, predictable data
// - Complex queries and reporting

// When to use NoSQL:
// - Rapidly changing schema
// - Large scale, need horizontal scaling
// - Semi-structured or unstructured data
// - High write throughput (e.g., logging)

// MongoDB example
db.users.insertOne({
    name: "John",
    email: "john@example.com",
    addresses: [{ city: "NYC" }]  // Embedded document
});

// Redis example (key-value)
SET user:123 "John"
GET user:123`} />
              </div>
            </AccordionItem>

            <AccordionItem title="6. Transactions (ACID)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                    <li><strong>Atomicity:</strong> All or nothing - transaction completes fully or rolls back</li>
                    <li><strong>Consistency:</strong> Database moves from one valid state to another</li>
                    <li><strong>Isolation:</strong> Concurrent transactions don't interfere</li>
                    <li><strong>Durability:</strong> Committed data survives system failure</li>
                  </ul>
                </div>
                <CodeBlock code={`-- Transaction example
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;  -- Both succeed or
ROLLBACK;  -- Both fail

// JPA Transaction
@Transactional
public void transferMoney(Long from, Long to, BigDecimal amount) {
    Account fromAcc = accountRepo.findById(from).get();
    Account toAcc = accountRepo.findById(to).get();
    
    fromAcc.setBalance(fromAcc.getBalance().subtract(amount));
    toAcc.setBalance(toAcc.getBalance().add(amount));
    
    // If exception here, both updates roll back
    accountRepo.save(fromAcc);
    accountRepo.save(toAcc);
}

// Isolation levels (least to most strict):
// READ_UNCOMMITTED - dirty reads possible
// READ_COMMITTED - no dirty reads (default PostgreSQL)
// REPEATABLE_READ - no non-repeatable reads (default MySQL)
// SERIALIZABLE - full isolation (slowest)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="7. SQL Joins">
              <div className="space-y-4">
                <CodeBlock code={`-- INNER JOIN - matching rows from both tables
SELECT e.name, d.name 
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN - all from left, matching from right
SELECT e.name, d.name 
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
-- Shows employees even if they have no department

-- RIGHT JOIN - all from right, matching from left
SELECT e.name, d.name 
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
-- Shows departments even if they have no employees

-- FULL OUTER JOIN - all from both tables
SELECT e.name, d.name 
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.id;

-- CROSS JOIN - cartesian product
SELECT * FROM employees CROSS JOIN departments;

-- Self JOIN
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;

-- JPA equivalent
// INNER JOIN
@Query("SELECT e FROM Employee e JOIN e.department d WHERE d.name = :name")

// LEFT JOIN FETCH (eager loading)
@Query("SELECT e FROM Employee e LEFT JOIN FETCH e.department")`} />
              </div>
            </AccordionItem>

            <AccordionItem title="8. Cascade Types">
              <div className="space-y-4">
                <CodeBlock code={`// Cascade = propagate operation from parent to child

@Entity
public class Department {
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

// CascadeType options:
// PERSIST - save parent → saves children
// MERGE - update parent → updates children
// REMOVE - delete parent → deletes children
// REFRESH - refresh parent → refreshes children
// DETACH - detach parent → detaches children
// ALL - all of the above

// Examples:
@OneToMany(cascade = CascadeType.PERSIST)  // Only propagate save
@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
@OneToMany(cascade = CascadeType.ALL)  // All operations cascade

// OrphanRemoval - delete children removed from collection
@OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
private List<Employee> employees;

department.getEmployees().remove(0);  // This employee gets deleted!

// Common patterns:
// Parent-child: CascadeType.ALL + orphanRemoval = true
// Reference: No cascade (don't delete referenced entities)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="9. Normalization">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Normalization</strong> = organizing database to reduce redundancy and dependency.
                  </p>
                </div>
                <CodeBlock code={`-- UNNORMALIZED (bad)
| order_id | customer_name | customer_address | product | quantity |
| 1        | John          | NYC             | Laptop  | 2        |
| 2        | John          | NYC             | Phone   | 1        |
-- Redundant: John's info repeated

-- 1NF (First Normal Form)
-- - Each cell contains single value
-- - Each row is unique

-- 2NF (Second Normal Form)  
-- - In 1NF
-- - No partial dependency (non-key depends on part of composite key)

-- 3NF (Third Normal Form)
-- - In 2NF
-- - No transitive dependency (non-key depends on another non-key)

-- NORMALIZED (good)

-- Customers table
| customer_id | name | address |
| 1           | John | NYC     |

-- Orders table
| order_id | customer_id | order_date |
| 1        | 1           | 2024-01-15 |

-- Order_Items table
| order_id | product_id | quantity |
| 1        | 101        | 2        |

-- Products table
| product_id | name   | price |
| 101        | Laptop | 999   |

// Trade-offs:
// More normalized = less redundancy, more joins
// Less normalized = faster reads, more redundancy (denormalization)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="10. Indexes">
              <div className="space-y-4">
                <CodeBlock code={`-- When to create indexes:
-- 1. Columns used in WHERE clauses
-- 2. Columns used in JOIN conditions
-- 3. Columns used in ORDER BY
-- 4. Columns with high cardinality (many unique values)

-- Create index
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_user_status_created ON users(status, created_at);

-- JPA annotation
@Entity
@Table(name = "users", indexes = {
    @Index(name = "idx_email", columnList = "email"),
    @Index(name = "idx_status_created", columnList = "status, created_at")
})
public class User { }

-- Index types:
-- B-Tree (default): Range queries, equality
-- Hash: Only equality (=)
-- GIN/GiST: Full-text search, JSON

-- When NOT to index:
-- 1. Small tables
-- 2. Columns with low cardinality (e.g., boolean)
-- 3. Frequently updated columns
-- 4. Tables with heavy INSERT/UPDATE`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* System Design Section */}
      {activeSection === 'system-design' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
              🏗️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">System Design</h2>
              <p className="text-dark-500 dark:text-dark-400">REST API design and scalability concepts</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. REST API Design Best Practices" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// URL structure
GET    /api/v1/users          # List all users
GET    /api/v1/users/123      # Get user by ID
POST   /api/v1/users          # Create user
PUT    /api/v1/users/123      # Update entire user
PATCH  /api/v1/users/123      # Partial update
DELETE /api/v1/users/123      # Delete user

// Nested resources
GET    /api/v1/users/123/orders           # User's orders
GET    /api/v1/users/123/orders/456       # Specific order
POST   /api/v1/users/123/orders           # Create order for user

// Query parameters for filtering/sorting
GET /api/v1/users?status=active&sort=created_at,desc&page=0&size=20

// Response codes
200 OK           - Success
201 Created      - Resource created
204 No Content   - Success, no body (DELETE)
400 Bad Request  - Validation error
401 Unauthorized - Not authenticated
403 Forbidden    - Not authorized
404 Not Found    - Resource not found
409 Conflict     - Duplicate/conflict
500 Server Error - Unexpected error`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Pagination & Filtering">
              <div className="space-y-4">
                <CodeBlock code={`@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    
    @GetMapping
    public Page<ProductDTO> getProducts(
        @RequestParam(required = false) String category,
        @RequestParam(required = false) BigDecimal minPrice,
        @RequestParam(required = false) BigDecimal maxPrice,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(defaultValue = "createdAt,desc") String sort
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(parseSort(sort)));
        
        Specification<Product> spec = Specification.where(null);
        if (category != null) {
            spec = spec.and((root, query, cb) -> 
                cb.equal(root.get("category"), category));
        }
        if (minPrice != null) {
            spec = spec.and((root, query, cb) -> 
                cb.greaterThanOrEqualTo(root.get("price"), minPrice));
        }
        
        return productRepository.findAll(spec, pageable)
            .map(ProductDTO::from);
    }
}

// Response format
{
    "content": [...],
    "page": 0,
    "size": 20,
    "totalElements": 156,
    "totalPages": 8,
    "last": false
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. API Versioning">
              <div className="space-y-4">
                <CodeBlock code={`// Method 1: URL Path (most common)
@RequestMapping("/api/v1/users")
public class UserControllerV1 { }

@RequestMapping("/api/v2/users")
public class UserControllerV2 { }

// Method 2: Request Header
@GetMapping(headers = "X-API-Version=1")
public UserV1 getUserV1() { }

@GetMapping(headers = "X-API-Version=2")
public UserV2 getUserV2() { }

// Method 3: Accept Header (Content Negotiation)
@GetMapping(produces = "application/vnd.company.v1+json")
public UserV1 getUserV1() { }

// Method 4: Query Parameter
@GetMapping(params = "version=1")
public UserV1 getUserV1(@RequestParam String version) { }

// Recommendation: URL path versioning
// - Clear and explicit
// - Easy to cache
// - Works with all clients`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. Scalability Concepts">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Scaling Strategies:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-2">
                    <li><strong>Vertical Scaling:</strong> More CPU/RAM on single machine</li>
                    <li><strong>Horizontal Scaling:</strong> More machines behind load balancer</li>
                    <li><strong>Database Scaling:</strong> Read replicas, sharding</li>
                    <li><strong>Caching:</strong> Redis, in-memory cache</li>
                    <li><strong>Async Processing:</strong> Message queues (Kafka, RabbitMQ)</li>
                  </ul>
                </div>
                <CodeBlock code={`// Caching with Spring
@Service
public class ProductService {
    
    @Cacheable(value = "products", key = "#id")
    public Product getProduct(Long id) {
        return productRepository.findById(id);
    }
    
    @CacheEvict(value = "products", key = "#product.id")
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }
    
    @CacheEvict(value = "products", allEntries = true)
    public void clearCache() { }
}

// Redis configuration
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10));
        return RedisCacheManager.builder(factory)
            .cacheDefaults(config)
            .build();
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Stateless Services">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Why Stateless?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Easy horizontal scaling - any instance can handle any request</li>
                    <li>Fault tolerant - instance failure doesn't lose state</li>
                    <li>Simple deployment - no sticky sessions needed</li>
                  </ul>
                </div>
                <CodeBlock code={`// Stateless authentication with JWT

@RestController
public class AuthController {
    @PostMapping("/login")
    public TokenResponse login(@RequestBody LoginRequest request) {
        // Validate credentials
        User user = authService.authenticate(request);
        
        // Generate JWT (stateless token)
        String token = jwtService.generateToken(user);
        
        return new TokenResponse(token, "Bearer", 3600);
    }
}

// JWT contains user info - no server session needed
// {
//   "sub": "user123",
//   "roles": ["USER", "ADMIN"],
//   "exp": 1234567890
// }

// Store session data externally if needed
// - Redis for distributed cache
// - Database for persistent data

// application.yml
spring:
  session:
    store-type: redis  # Distributed session
  redis:
    host: redis-server
    port: 6379`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* DevOps Section */}
      {activeSection === 'devops' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center text-2xl">
              ⚙️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">DevOps & Tools</h2>
              <p className="text-dark-500 dark:text-dark-400">Git, build tools, and CI/CD basics</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="1. Git Basics" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`# Clone - copy remote repository
git clone https://github.com/user/repo.git
git clone git@github.com:user/repo.git  # SSH

# Pull - fetch + merge from remote
git pull origin main
git pull --rebase  # Rebase instead of merge

# Push - send commits to remote
git push origin main
git push -u origin feature  # Set upstream
git push --force  # Dangerous! Overwrites remote

# Common workflow
git clone <url>              # 1. Clone repo
git checkout -b feature      # 2. Create branch
# ... make changes ...
git add .                    # 3. Stage changes
git commit -m "message"      # 4. Commit
git push origin feature      # 5. Push
# Create Pull Request on GitHub

# Other essential commands
git status                   # Check status
git log --oneline           # View history
git diff                    # See changes
git branch -a               # List all branches
git checkout main           # Switch branch
git fetch                   # Download without merge`} />
              </div>
            </AccordionItem>

            <AccordionItem title="2. Git: Rebase vs Merge">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Merge</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Creates merge commit</li>
                      <li>Preserves history</li>
                      <li>Safe for shared branches</li>
                    </ul>
                  </div>
                  <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Rebase</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Linear history</li>
                      <li>Rewrites commits</li>
                      <li>Never on shared branches!</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`# Merge - preserves branch history
git checkout main
git merge feature-branch
# Creates merge commit

# Rebase - linear history
git checkout feature-branch
git rebase main
# Replays commits on top of main

# Interactive rebase - clean up commits
git rebase -i HEAD~3
# pick, squash, reword, drop commits

# Common workflow
git checkout feature
git rebase main          # Update feature with main
git checkout main
git merge feature        # Fast-forward merge

# Essential commands
git stash                # Save uncommitted changes
git stash pop            # Restore stashed changes
git cherry-pick abc123   # Apply specific commit
git reset --soft HEAD~1  # Undo commit, keep changes
git reset --hard HEAD~1  # Undo commit, discard changes
git reflog               # Recovery - see all operations`} />
              </div>
            </AccordionItem>

            <AccordionItem title="3. Maven vs Gradle">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-200 dark:border-dark-700">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2">Maven</th>
                        <th className="text-center py-2">Gradle</th>
                      </tr>
                    </thead>
                    <tbody className="text-dark-600 dark:text-dark-400">
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Config Format</td>
                        <td className="text-center">XML (pom.xml)</td>
                        <td className="text-center">Groovy/Kotlin DSL</td>
                      </tr>
                      <tr className="border-b border-dark-100 dark:border-dark-800">
                        <td className="py-2">Build Speed</td>
                        <td className="text-center">Slower</td>
                        <td className="text-center">Faster (incremental)</td>
                      </tr>
                      <tr>
                        <td className="py-2">Learning Curve</td>
                        <td className="text-center">Easier</td>
                        <td className="text-center">Steeper</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`# Maven commands
mvn clean install          # Clean, compile, test, package, install
mvn clean package -DskipTests
mvn dependency:tree        # View dependency tree
mvn versions:display-dependency-updates

# Gradle commands
./gradlew build            # Compile, test, package
./gradlew bootRun          # Run Spring Boot app
./gradlew dependencies     # View dependencies
./gradlew clean build -x test  # Skip tests

# Maven lifecycle phases:
# validate → compile → test → package → verify → install → deploy

# Gradle build.gradle (Kotlin DSL)
plugins {
    id("org.springframework.boot") version "3.2.0"
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="4. CI/CD Basics (Jenkins)">
              <div className="space-y-4">
                <CodeBlock code={`// Jenkinsfile (Pipeline as Code)
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'myapp'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/user/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh './gradlew clean build'
            }
        }
        
        stage('Test') {
            steps {
                sh './gradlew test'
            }
            post {
                always {
                    junit 'build/test-results/**/*.xml'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh "docker build -t \${DOCKER_IMAGE}:\${BUILD_NUMBER} ."
            }
        }
        
        stage('Deploy to Dev') {
            when {
                branch 'develop'
            }
            steps {
                sh './deploy.sh dev'
            }
        }
        
        stage('Deploy to Prod') {
            when {
                branch 'main'
            }
            steps {
                input 'Deploy to production?'
                sh './deploy.sh prod'
            }
        }
    }
    
    post {
        failure {
            mail to: 'team@example.com', subject: 'Build Failed'
        }
    }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="5. Environment Variables">
              <div className="space-y-4">
                <CodeBlock code={`# application.properties - using environment variables
spring.datasource.url=\${DATABASE_URL}
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
jwt.secret=\${JWT_SECRET:default-dev-secret}  # With default

# application.yml
spring:
  datasource:
    url: \${DATABASE_URL}
    username: \${DB_USERNAME:root}
    password: \${DB_PASSWORD}

# Setting environment variables

# Linux/Mac
export DATABASE_URL=jdbc:mysql://localhost:3306/db
java -jar app.jar

# Or inline
DATABASE_URL=jdbc:mysql://localhost:3306/db java -jar app.jar

# Docker
docker run -e DATABASE_URL=jdbc:mysql://db:3306/mydb myapp

# docker-compose.yml
services:
  app:
    environment:
      - DATABASE_URL=jdbc:mysql://db:3306/mydb
    env_file:
      - .env  # Load from file

# Kubernetes ConfigMap/Secret
kubectl create secret generic db-secret --from-literal=password=secret`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}
    </div>
  );
}

