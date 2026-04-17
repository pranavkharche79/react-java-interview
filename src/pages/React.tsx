import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';

export default function ReactPage() {
  const [activeSection, setActiveSection] = useState('fundamentals');

  const sections = [
    { id: 'fundamentals', label: 'Core Fundamentals', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    { id: 'hooks', label: 'React Hooks', icon: '🪝', color: 'from-purple-500 to-violet-600' },
    { id: 'lifecycle', label: 'Component Lifecycle', icon: '🔄', color: 'from-green-500 to-emerald-600' },
    { id: 'state-management', label: 'State Management', icon: '🏪', color: 'from-orange-500 to-red-600' },
    { id: 'performance', label: 'Performance', icon: '⚡', color: 'from-yellow-500 to-amber-600' },
    { id: 'forms', label: 'Forms & Validation', icon: '📝', color: 'from-pink-500 to-rose-600' },
    { id: 'routing', label: 'React Router', icon: '🧭', color: 'from-indigo-500 to-purple-600' },
    { id: 'api', label: 'API & Async', icon: '🌐', color: 'from-teal-500 to-cyan-600' },
    { id: 'errors', label: 'Error Handling', icon: '🛡️', color: 'from-red-500 to-orange-600' },
    { id: 'testing', label: 'Testing', icon: '🧪', color: 'from-lime-500 to-green-600' },
    { id: 'build', label: 'Build & Deploy', icon: '📦', color: 'from-slate-500 to-gray-600' },
    { id: 'best-practices', label: 'Best Practices', icon: '✨', color: 'from-amber-500 to-yellow-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="React Interview Questions"
        description="Complete guide to React interview questions with examples and best practices"
        gradient="blue"
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

      {/* 1️⃣ Core React Fundamentals */}
      {activeSection === 'fundamentals' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
              ⚛️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Core React Fundamentals</h2>
              <p className="text-dark-500 dark:text-dark-400">Essential concepts every React developer must know</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="What is React & Why use it?" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>React</strong> is a JavaScript library for building user interfaces, developed by Facebook. It uses a component-based architecture and Virtual DOM for efficient rendering.
                  </p>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">🎯 Why Use React?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Virtual DOM:</strong> Efficient updates without full page reloads</li>
                    <li><strong>Component-Based:</strong> Reusable, maintainable code</li>
                    <li><strong>Unidirectional Data Flow:</strong> Predictable state management</li>
                    <li><strong>Large Ecosystem:</strong> Rich library and community support</li>
                    <li><strong>React Native:</strong> Build mobile apps with same concepts</li>
                  </ul>
                </div>
                <CodeBlock code={`// React component example
import React from 'react';

function Welcome({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

// Usage
<Welcome name="John" />`} />
              </div>
            </AccordionItem>

            <AccordionItem title="SPA vs MPA - What's the difference?">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">📱 SPA (Single Page Application)</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Single HTML page loaded once</li>
                      <li>Content updates dynamically via JS</li>
                      <li>No full page reloads</li>
                      <li>Better user experience</li>
                      <li>Examples: Gmail, Facebook, Twitter</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">📄 MPA (Multi Page Application)</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Multiple HTML pages</li>
                      <li>Full page reload on navigation</li>
                      <li>Server renders each page</li>
                      <li>Better SEO (traditionally)</li>
                      <li>Examples: Amazon, eBay</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// SPA Routing (React Router)
// URL changes, but page doesn't reload
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// React renders components based on URL
// No server request for new pages!`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">💡 Interview Tip:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    React is primarily used for SPAs. Modern frameworks like Next.js provide SSR (Server-Side Rendering) combining benefits of both approaches.
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Virtual DOM & How it Works">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    The <strong>Virtual DOM</strong> is a lightweight JavaScript representation of the Real DOM. React uses it to optimize updates by comparing changes and updating only what's necessary.
                  </p>
                </div>
                <CodeBlock code={`// How Virtual DOM Works:

// 1. Initial Render - Creates Virtual DOM tree
const vDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: ['Hello'] },
    { type: 'p', props: {}, children: ['World'] }
  ]
};

// 2. State Changes - Creates NEW Virtual DOM
const newVDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: ['Hello'] },
    { type: 'p', props: {}, children: ['React!'] }  // Changed!
  ]
};

// 3. Diffing Algorithm (Reconciliation)
// React compares old vs new Virtual DOM
// Finds: Only <p> content changed

// 4. Batch Update - Updates only the <p> in Real DOM
// Real DOM manipulation is expensive!
// This process is called "Reconciliation"`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">🔄 The Process:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Render:</strong> Component returns JSX → Virtual DOM created</li>
                    <li><strong>Diff:</strong> Compare new Virtual DOM with previous</li>
                    <li><strong>Patch:</strong> Calculate minimum changes needed</li>
                    <li><strong>Update:</strong> Apply only those changes to Real DOM</li>
                  </ol>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="JSX - Why it's NOT HTML">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>JSX (JavaScript XML)</strong> is a syntax extension that looks like HTML but compiles to JavaScript. It's syntactic sugar for <code>React.createElement()</code>.
                  </p>
                </div>
                <CodeBlock code={`// JSX looks like HTML but it's NOT
function Greeting() {
  return <h1 className="title">Hello, World!</h1>;
}

// JSX compiles to:
function Greeting() {
  return React.createElement(
    'h1',
    { className: 'title' },
    'Hello, World!'
  );
}

// Key Differences from HTML:

// 1. className instead of class
<div className="container">  // ✅ JSX
<div class="container">      // ❌ HTML syntax

// 2. htmlFor instead of for
<label htmlFor="email">      // ✅ JSX
<label for="email">          // ❌ HTML syntax

// 3. camelCase for attributes
<input onClick={handleClick} readOnly />  // ✅ JSX
<input onclick="handleClick()" readonly>  // ❌ HTML

// 4. JavaScript expressions in curly braces
const name = "John";
<h1>Hello, {name}!</h1>      // ✅ Dynamic content

// 5. Self-closing tags MUST close
<img src="photo.jpg" />      // ✅ Required
<input type="text" />        // ✅ Required

// 6. Style as object
<div style={{ color: 'red', fontSize: '16px' }}>  // ✅ JSX
<div style="color: red; font-size: 16px;">        // ❌ HTML`} />
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">⚠️ Common JSX Mistakes:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Using <code>class</code> instead of <code>className</code></li>
                    <li>Forgetting to close self-closing tags</li>
                    <li>Using <code>for</code> instead of <code>htmlFor</code></li>
                    <li>Not wrapping multiple elements in a parent/Fragment</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Components: Function vs Class">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">⚡ Function Components (Modern)</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Simple JavaScript functions</li>
                      <li>Use Hooks for state & lifecycle</li>
                      <li>Less boilerplate code</li>
                      <li>Better performance</li>
                      <li>Recommended by React team</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">🏛️ Class Components (Legacy)</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>ES6 classes extending React.Component</li>
                      <li>Built-in state and lifecycle methods</li>
                      <li>More verbose syntax</li>
                      <li>Still supported but less common</li>
                      <li>Required for Error Boundaries</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// FUNCTION COMPONENT (Recommended ✅)
import { useState, useEffect } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// CLASS COMPONENT (Legacy)
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  
  componentDidUpdate() {
    document.title = \`Count: \${this.state.count}\`;
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ 
          count: this.state.count + 1 
        })}>
          Increment
        </button>
      </div>
    );
  }
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Interview Answer:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    "Function components with Hooks are the modern standard. They're simpler, easier to test, and hooks enable code reuse through custom hooks. Class components are still valid but mainly used for Error Boundaries."
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Props vs State">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">📦 Props</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Passed from parent to child</li>
                      <li><strong>Read-only</strong> (immutable)</li>
                      <li>Used to configure components</li>
                      <li>Can be any type (string, function, object)</li>
                      <li>Changes trigger re-render</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">🔄 State</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Managed within the component</li>
                      <li><strong>Mutable</strong> via setState/useState</li>
                      <li>Private to the component</li>
                      <li>Changes trigger re-render</li>
                      <li>Should be minimal and serializable</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// Props vs State Example

// Parent Component
function App() {
  const [username, setUsername] = useState('John');
  
  return (
    <div>
      {/* username is passed as PROP to child */}
      <Greeting name={username} />
      <button onClick={() => setUsername('Jane')}>
        Change Name
      </button>
    </div>
  );
}

// Child Component - receives props
function Greeting({ name }) {
  // name is a PROP - cannot modify it!
  // name = "Mike";  // ❌ ERROR: props are read-only
  
  // Component can have its own STATE
  const [showEmoji, setShowEmoji] = useState(false);
  
  return (
    <h1 onClick={() => setShowEmoji(!showEmoji)}>
      Hello, {name}! {showEmoji && '👋'}
    </h1>
  );
}

// Key Differences:
// ┌─────────────┬──────────────────┬──────────────────┐
// │             │ Props            │ State            │
// ├─────────────┼──────────────────┼──────────────────┤
// │ Source      │ Parent           │ Component itself │
// │ Mutability  │ Read-only        │ Can change       │
// │ Who updates │ Parent           │ Component        │
// │ Purpose     │ Configure/Pass   │ Track changes    │
// └─────────────┴──────────────────┴──────────────────┘`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Controlled vs Uncontrolled Components">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    The difference lies in <strong>who manages the form data</strong> - React (controlled) or the DOM (uncontrolled).
                  </p>
                </div>
                <CodeBlock code={`// CONTROLLED COMPONENT
// React controls the input value through state
function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });  // Values from state
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}           // Value from state
        onChange={(e) => setName(e.target.value)}  // Updates state
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// UNCONTROLLED COMPONENT
// DOM controls the input value, accessed via ref
function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values directly from DOM
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} defaultValue="" />
      <input type="email" ref={emailRef} defaultValue="" />
      <button type="submit">Submit</button>
    </form>
  );
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ When to use which?</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-emerald-200 dark:border-emerald-800">
                        <th className="text-left py-2">Controlled</th>
                        <th className="text-left py-2">Uncontrolled</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Real-time validation</td>
                        <td>Simple forms</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Conditional disable/submit</td>
                        <td>File inputs</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Formatting (phone, credit card)</td>
                        <td>Integration with non-React code</td>
                      </tr>
                      <tr>
                        <td className="py-2">Dynamic forms</td>
                        <td>Quick implementation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Conditional Rendering">
              <div className="space-y-4">
                <CodeBlock code={`// Multiple ways to conditionally render in React

function ConditionalExamples({ isLoggedIn, user, items, status }) {
  
  // 1. If/Else (outside JSX)
  if (!isLoggedIn) {
    return <LoginPage />;
  }
  
  // 2. Ternary Operator (most common)
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginPage />}
      
      {/* 3. Logical AND (&&) - render or nothing */}
      {user.isAdmin && <AdminPanel />}
      
      {/* 4. Logical OR (||) - fallback value */}
      <h1>Welcome, {user.name || 'Guest'}</h1>
      
      {/* 5. Nullish Coalescing (??) */}
      <p>Items: {items ?? 'Loading...'}</p>
      
      {/* 6. Switch-like with object */}
      {
        {
          'loading': <Spinner />,
          'error': <Error />,
          'success': <Data />
        }[status]
      }
      
      {/* 7. IIFE for complex logic */}
      {(() => {
        if (status === 'loading') return <Spinner />;
        if (status === 'error') return <Error />;
        return <Data />;
      })()}
    </div>
  );
}

// ⚠️ Gotcha with && operator
// 0 && <Component /> renders "0", not nothing!
// Fix: Use explicit boolean
{items.length > 0 && <List items={items} />}  // ✅
{!!items.length && <List items={items} />}    // ✅`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Lists & Keys - Why Keys are Important">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Keys</strong> help React identify which items have changed, been added, or removed. They should be <strong>stable, unique, and predictable</strong>.
                  </p>
                </div>
                <CodeBlock code={`// Rendering Lists with Keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        // key helps React track each item
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// ✅ GOOD: Using unique, stable ID
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

// ❌ BAD: Using array index as key
{users.map((user, index) => (
  <UserCard key={index} user={user} />  // Problematic!
))}

// ❌ BAD: Using random values
{users.map(user => (
  <UserCard key={Math.random()} user={user} />  // New key every render!
))}`} />
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">🔥 Why NOT use array index as key?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Reordering:</strong> If items are reordered, indices change but React thinks items are the same</li>
                    <li><strong>Insertion/Deletion:</strong> Adding/removing items shifts all indices</li>
                    <li><strong>State Loss:</strong> Component state gets associated with wrong items</li>
                    <li><strong>Performance:</strong> More DOM updates than necessary</li>
                  </ul>
                </div>
                <CodeBlock code={`// Example: Index as key problem

// Initial list: ["Apple", "Banana", "Cherry"]
// Indices:      [0,        1,        2]

// After deleting "Banana": ["Apple", "Cherry"]
// Indices:                 [0,       1]

// React sees:
// - key=0 still exists (Apple ✅)
// - key=1 changed from "Banana" to "Cherry" 
//   (React updates existing DOM instead of removing!)
// - key=2 removed

// With proper IDs:
// Initial: [{id:1, Apple}, {id:2, Banana}, {id:3, Cherry}]
// After:   [{id:1, Apple}, {id:3, Cherry}]
// React correctly removes id:2, keeps id:1 and id:3`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 When IS index okay as key?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>List is static (never changes)</li>
                    <li>Items have no IDs and won't be reordered</li>
                    <li>List will never be filtered or sorted</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 2️⃣ React Hooks */}
      {activeSection === 'hooks' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-2xl">
              🪝
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">React Hooks</h2>
              <p className="text-dark-500 dark:text-dark-400">Interviewers LOVE hooks - master these!</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="useState - Managing Component State" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useState</strong> is the most fundamental hook. It lets you add state to functional components.
                  </p>
                </div>
                <CodeBlock code={`import { useState } from 'react';

// Basic Usage
function Counter() {
  // Syntax: const [state, setState] = useState(initialValue);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Multiple State Variables
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  // Or use single object state
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  // Update object state (spread operator!)
  const updateName = (newName) => {
    setUser(prev => ({ ...prev, name: newName }));
  };
}

// Functional Updates (when new state depends on old)
function Counter() {
  const [count, setCount] = useState(0);
  
  // ❌ May not work correctly with rapid clicks
  const incrementWrong = () => setCount(count + 1);
  
  // ✅ Always correct - uses previous state
  const incrementRight = () => setCount(prev => prev + 1);
  
  // Why? React batches updates, 'count' may be stale
}

// Lazy Initial State (expensive computation)
function ExpensiveComponent() {
  // ❌ Runs every render
  const [data, setData] = useState(expensiveCalculation());
  
  // ✅ Runs only on initial render
  const [data, setData] = useState(() => expensiveCalculation());
}`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">⚠️ Important Rules:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>setState is asynchronous - don't expect immediate update</li>
                    <li>Never mutate state directly: <code>state.push(item)</code> ❌</li>
                    <li>Always create new reference for objects/arrays</li>
                    <li>Use functional updates when new state depends on old</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="useEffect - Side Effects & Lifecycle">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useEffect</strong> handles side effects: API calls, subscriptions, DOM manipulation, timers. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount.
                  </p>
                </div>
                <CodeBlock code={`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Basic Effect
  useEffect(() => {
    console.log('Component mounted or updated');
  });  // No dependency array = runs on EVERY render
  
  // With Dependency Array
  useEffect(() => {
    console.log('UserId changed:', userId);
    fetchUser(userId);
  }, [userId]);  // Only runs when userId changes
  
  // Empty Dependency Array (Mount only)
  useEffect(() => {
    console.log('Component mounted');
    fetchInitialData();
  }, []);  // Empty array = runs ONCE on mount
  
  // With Cleanup Function (Unmount)
  useEffect(() => {
    const subscription = subscribeToUser(userId);
    
    // Cleanup function - runs before next effect or unmount
    return () => {
      subscription.unsubscribe();
      console.log('Cleaned up subscription');
    };
  }, [userId]);
  
  // API Call Example
  useEffect(() => {
    let isMounted = true;  // Prevent state update after unmount
    
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        if (isMounted) {
          setUser(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    fetchUser();
    
    return () => {
      isMounted = false;  // Cleanup
    };
  }, [userId]);
  
  return loading ? <Spinner /> : <UserCard user={user} />;
}`} />
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">🔥 Why does useEffect run twice in development?</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm mb-2">
                    In React 18 with StrictMode, React intentionally mounts, unmounts, then remounts components to:
                  </p>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Help find bugs in cleanup logic</li>
                    <li>Prepare for future features (like preserving state on unmount)</li>
                    <li>Ensure effects are properly cleaned up</li>
                  </ul>
                  <p className="text-dark-600 dark:text-dark-400 text-sm mt-2">
                    <strong>Solution:</strong> Don't disable StrictMode. Instead, ensure your effects handle cleanup correctly!
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="useRef - Mutable References">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useRef</strong> creates a mutable reference that persists across renders. Unlike state, changing ref doesn't cause re-render.
                  </p>
                </div>
                <CodeBlock code={`import { useRef, useEffect, useState } from 'react';

// 1. DOM Element Reference
function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();  // Access DOM node
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// 2. Storing Previous Values
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;  // Update after render
  });
  
  return (
    <p>
      Current: {count}, Previous: {prevCountRef.current}
    </p>
  );
}

// 3. Storing Mutable Values (no re-render)
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  
  const start = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };
  
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// 4. Tracking Mounted State
function useMounted() {
  const isMounted = useRef(true);
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  return isMounted;
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">🔍 useRef vs useState</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-emerald-200 dark:border-emerald-800">
                        <th className="text-left py-2">useRef</th>
                        <th className="text-left py-2">useState</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Doesn't trigger re-render</td>
                        <td>Triggers re-render on change</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Mutable (.current)</td>
                        <td>Immutable (new value)</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">Sync updates</td>
                        <td>Async updates (batched)</td>
                      </tr>
                      <tr>
                        <td className="py-2">DOM refs, timers, previous values</td>
                        <td>UI state, form inputs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="useContext - Avoiding Prop Drilling">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useContext</strong> allows you to consume context values without nesting Consumer components. Perfect for global state like themes, auth, language.
                  </p>
                </div>
                <CodeBlock code={`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext(null);

// 2. Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook for easier consumption
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. Use in any nested component
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={theme}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </header>
  );
}

// 5. Wrap your app
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

// Without Context (Prop Drilling):
// App → Layout → Sidebar → Button (pass theme through each!)

// With Context:
// App (Provider) → ... → Button (consume directly!)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="useReducer - Complex State Logic">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useReducer</strong> is an alternative to useState for complex state logic. It's like having Redux at component level.
                  </p>
                </div>
                <CodeBlock code={`import { useReducer } from 'react';

// Reducer function - pure function
// (currentState, action) => newState
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    
    default:
      return state;
  }
}

// Initial state
const initialState = {
  todos: [],
  filter: 'all'
};

function TodoApp() {
  // useReducer returns [state, dispatch]
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };
  
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };
  
  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };
  
  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <TodoList 
        todos={state.todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 useState vs useReducer</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-blue-200 dark:border-blue-800">
                        <th className="text-left py-2">useState</th>
                        <th className="text-left py-2">useReducer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Simple state (primitives)</td>
                        <td>Complex state (objects)</td>
                      </tr>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Independent values</td>
                        <td>Related values that change together</td>
                      </tr>
                      <tr>
                        <td className="py-2">Simple updates</td>
                        <td>Multiple ways to update</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Custom Hooks - Code Reuse">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Custom Hooks</strong> let you extract component logic into reusable functions. Name must start with "use".
                  </p>
                </div>
                <CodeBlock code={`// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  // Works like useState but persists!
}

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });
    
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <UserCard user={user} />;
}

// Custom Hook: useWindowSize
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 3️⃣ Component Lifecycle */}
      {activeSection === 'lifecycle' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
              🔄
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Component Lifecycle</h2>
              <p className="text-dark-500 dark:text-dark-400">Understanding when React components update</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Lifecycle Phases: Mount, Update, Unmount" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">🌱 Mounting</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      Component is being created and inserted into the DOM for the first time.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔄 Updating</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      Component is re-rendering due to changes in props or state.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">💀 Unmounting</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      Component is being removed from the DOM.
                    </p>
                  </div>
                </div>
                <CodeBlock code={`// Class Component Lifecycle Methods
class LifecycleDemo extends React.Component {
  // MOUNTING
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log('1. Constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps');
    return null;  // Return object to update state, or null
  }
  
  componentDidMount() {
    console.log('4. componentDidMount - Component in DOM!');
    // Good for: API calls, subscriptions, DOM manipulation
  }
  
  // UPDATING
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return true;  // Return false to prevent re-render
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null;  // Passed to componentDidUpdate
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate');
    // Good for: Reacting to prop/state changes
  }
  
  // UNMOUNTING
  componentWillUnmount() {
    console.log('8. componentWillUnmount');
    // Good for: Cleanup - cancel subscriptions, timers
  }
  
  render() {
    console.log('3. Render');
    return <div>{this.state.data}</div>;
  }
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Hooks Equivalents for Lifecycle">
              <div className="space-y-4">
                <CodeBlock code={`import { useState, useEffect, useLayoutEffect, useRef } from 'react';

function LifecycleWithHooks() {
  const [data, setData] = useState(null);
  const prevDataRef = useRef();
  
  // componentDidMount
  useEffect(() => {
    console.log('Component Mounted');
    fetchData();
  }, []);  // Empty array = run once on mount
  
  // componentDidUpdate
  useEffect(() => {
    console.log('Component Updated (data changed)');
    // This runs on mount AND when data changes
  }, [data]);
  
  // componentDidUpdate (only on updates, not mount)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;  // Skip first render
    }
    console.log('Data updated from', prevDataRef.current, 'to', data);
    prevDataRef.current = data;
  }, [data]);
  
  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component will unmount - cleanup!');
      // Cancel subscriptions, clear timers, etc.
    };
  }, []);
  
  // getDerivedStateFromProps equivalent
  // Just compute during render!
  const derivedValue = computeFromProps(props);
  
  // getSnapshotBeforeUpdate equivalent
  // Use useLayoutEffect for synchronous DOM measurements
  useLayoutEffect(() => {
    // Runs synchronously after DOM mutations
    // Good for measuring DOM before browser paints
  }, [dependency]);
  
  return <div>{data}</div>;
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">📊 Lifecycle Method → Hook Mapping</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-emerald-200 dark:border-emerald-800">
                        <th className="text-left py-2">Class Method</th>
                        <th className="text-left py-2">Hook Equivalent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">constructor</td>
                        <td>useState(initialValue)</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">componentDidMount</td>
                        <td>useEffect(() =&gt; {'{}'}, [])</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">componentDidUpdate</td>
                        <td>useEffect(() =&gt; {'{}'}, [deps])</td>
                      </tr>
                      <tr className="border-b border-emerald-100 dark:border-emerald-900">
                        <td className="py-2">componentWillUnmount</td>
                        <td>useEffect(() =&gt; {'{ return () => {}; }'}, [])</td>
                      </tr>
                      <tr>
                        <td className="py-2">shouldComponentUpdate</td>
                        <td>React.memo, useMemo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="How to Prevent Infinite Loops in useEffect">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">⚠️ Common Infinite Loop Causes:</h4>
                </div>
                <CodeBlock code={`// ❌ INFINITE LOOP #1: Missing dependency array
function BadComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1);  // Updates state
  });  // No dependency array = runs every render!
  // Render → Effect → setState → Re-render → Effect → ...
}

// ❌ INFINITE LOOP #2: Object/Array in dependency
function BadComponent({ id }) {
  const [data, setData] = useState(null);
  
  const options = { id };  // New object every render!
  
  useEffect(() => {
    fetchData(options);
  }, [options]);  // options is new reference each time!
}

// ✅ FIX: Use primitive values or useMemo
function GoodComponent({ id }) {
  const options = useMemo(() => ({ id }), [id]);
  
  useEffect(() => {
    fetchData(options);
  }, [options]);  // Now stable reference
}

// ❌ INFINITE LOOP #3: Setting state that's also a dependency
function BadComponent() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems([...items, 'new item']);  // items changes → effect runs again
  }, [items]);  // Infinite loop!
}

// ✅ FIX: Use functional update
function GoodComponent() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(prev => [...prev, 'new item']);
  }, []);  // Run once, use functional update
}

// ❌ INFINITE LOOP #4: Function in dependency
function BadComponent({ userId }) {
  const [user, setUser] = useState(null);
  
  const fetchUser = () => {  // New function every render!
    fetch(\`/api/users/\${userId}\`).then(setUser);
  };
  
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);  // Infinite loop!
}

// ✅ FIX: useCallback or move function inside effect
function GoodComponent({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = () => {  // Define inside effect
      fetch(\`/api/users/\${userId}\`).then(res => res.json()).then(setUser);
    };
    fetchUser();
  }, [userId]);  // Only depends on userId
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Prevention Checklist:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Always include dependency array</li>
                    <li>Use primitive values in dependencies when possible</li>
                    <li>Wrap objects/arrays with useMemo</li>
                    <li>Wrap functions with useCallback</li>
                    <li>Use functional updates for setState in effects</li>
                    <li>Move functions inside useEffect when possible</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 4️⃣ State Management */}
      {activeSection === 'state-management' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl">
              🏪
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">State Management</h2>
              <p className="text-dark-500 dark:text-dark-400">Managing data flow in React applications</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Lifting State Up" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    When multiple components need to share state, move it to their closest common ancestor (parent component).
                  </p>
                </div>
                <CodeBlock code={`// Before: State in each child (not synced)
function TemperatureInput() {
  const [value, setValue] = useState('');  // Each has own state
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

function App() {
  return (
    <div>
      <TemperatureInput />  {/* Celsius */}
      <TemperatureInput />  {/* Fahrenheit - not synced! */}
    </div>
  );
}

// After: State LIFTED to parent
function TemperatureInput({ value, onChange, scale }) {
  return (
    <fieldset>
      <legend>Temperature in {scale}:</legend>
      <input 
        value={value} 
        onChange={e => onChange(e.target.value)} 
      />
    </fieldset>
  );
}

function Calculator() {
  // State lifted to common parent
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');
  
  const handleCelsiusChange = (value) => {
    setScale('c');
    setTemperature(value);
  };
  
  const handleFahrenheitChange = (value) => {
    setScale('f');
    setTemperature(value);
  };
  
  // Convert for display
  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;
  
  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Prop Drilling Problem">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Prop Drilling</strong> is when you pass props through many intermediate components that don't need them, just to reach a deeply nested component.
                  </p>
                </div>
                <CodeBlock code={`// ❌ PROP DRILLING PROBLEM
// theme needs to reach Button, but passes through Layout and Sidebar

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <Layout theme={theme}>  {/* Doesn't use theme, just passes */}
      <Sidebar theme={theme}>  {/* Doesn't use theme, just passes */}
        <Navigation theme={theme}>  {/* Doesn't use theme, just passes */}
          <Button theme={theme}>  {/* Finally uses theme! */}
            Click me
          </Button>
        </Navigation>
      </Sidebar>
    </Layout>
  );
}

// Problems:
// 1. Components get unnecessary props
// 2. Hard to track data flow
// 3. Refactoring is painful
// 4. Component reuse is difficult

// ✅ SOLUTIONS:

// 1. Component Composition
function App() {
  const [theme, setTheme] = useState('light');
  
  // Pass the component itself instead of props
  return (
    <Layout sidebar={
      <Sidebar navigation={
        <Navigation button={
          <Button theme={theme}>Click</Button>  {/* Direct! */}
        } />
      } />
    } />
  );
}

// 2. Context API (for global state)
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Sidebar>
          <Navigation>
            <Button />  {/* Consumes context directly */}
          </Navigation>
        </Sidebar>
      </Layout>
    </ThemeContext.Provider>
  );
}

function Button() {
  const { theme } = useContext(ThemeContext);  // No prop drilling!
  return <button className={theme}>Click</button>;
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Context API - When to Use & Avoid">
              <div className="space-y-4">
                <CodeBlock code={`// Creating and Using Context

// 1. Create Context
const UserContext = createContext(null);

// 2. Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchCurrentUser().then(user => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  
  const login = async (credentials) => {
    const user = await loginAPI(credentials);
    setUser(user);
  };
  
  const logout = () => {
    logoutAPI();
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom Hook
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Usage anywhere in tree
function Header() {
  const { user, logout } = useUser();
  
  return (
    <header>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}`} />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Use Context For:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Theme (dark/light mode)</li>
                      <li>Current user / Auth state</li>
                      <li>Locale / Language preferences</li>
                      <li>UI state (sidebar open/close)</li>
                      <li>Feature flags</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Avoid Context For:</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Frequently changing data</li>
                      <li>Large data sets</li>
                      <li>Server state (use React Query)</li>
                      <li>Form state (use form libraries)</li>
                      <li>Data that could be props</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Redux Overview (Conceptual)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Redux</strong> is a predictable state container with a single source of truth. It uses actions, reducers, and a store.
                  </p>
                </div>
                <CodeBlock code={`// Redux Core Concepts

// 1. STORE - Single source of truth
// Holds the entire state tree of the application
const store = createStore(rootReducer);

// 2. ACTION - Describes what happened
// Plain JavaScript object with 'type' property
const addTodoAction = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux',
    completed: false
  }
};

// Action Creator - Function that returns action
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { id: Date.now(), text, completed: false }
});

// 3. REDUCER - Specifies state changes
// Pure function: (state, action) => newState
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

// 4. DISPATCH - Send actions to store
store.dispatch(addTodo('Learn Redux'));

// 5. SUBSCRIBE - Listen to state changes
store.subscribe(() => {
  console.log('State changed:', store.getState());
});

// Data Flow:
// UI → dispatch(action) → reducer(state, action) → new state → UI updates`} />
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">🔄 Redux Data Flow</h4>
                  <div className="text-dark-600 dark:text-dark-400 text-sm">
                    <code>User clicks button → dispatch(action) → reducer processes → store updates → components re-render</code>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Context vs Redux - When NOT to use Redux">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">📦 Context API</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Built into React (no extra package)</li>
                      <li>Simple setup</li>
                      <li>Good for low-frequency updates</li>
                      <li>No devtools (limited debugging)</li>
                      <li>Re-renders all consumers on change</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">🔮 Redux</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>External library</li>
                      <li>More boilerplate</li>
                      <li>Optimized for frequent updates</li>
                      <li>Excellent DevTools</li>
                      <li>Selective component updates</li>
                      <li>Middleware (thunk, saga)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">🔥 When would you NOT use Redux?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Small apps:</strong> Simple state needs don't justify Redux overhead</li>
                    <li><strong>Mostly UI state:</strong> Theme, modals, sidebar - Context is enough</li>
                    <li><strong>Server state:</strong> Use React Query/SWR instead</li>
                    <li><strong>Form state:</strong> Use Formik/React Hook Form</li>
                    <li><strong>When prop drilling isn't deep:</strong> 2-3 levels don't need global state</li>
                    <li><strong>Learning React:</strong> Master React state first before adding Redux</li>
                  </ul>
                </div>
                <CodeBlock code={`// Rule of thumb:
// Start with useState + props
// If prop drilling gets painful → try Context
// If Context re-renders too much or need debugging → consider Redux

// Modern alternatives to Redux:
// - Zustand (simpler, smaller)
// - Jotai (atomic state)
// - Recoil (Facebook, atoms + selectors)
// - React Query (server state)

// For most apps today:
// React Query (server state) + Context/Zustand (client state)
// is often simpler than Redux for everything`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 5️⃣ Performance Optimization */}
      {activeSection === 'performance' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Performance Optimization</h2>
              <p className="text-dark-500 dark:text-dark-400">Make your React apps blazing fast</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Re-rendering in React - When & Why" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    Understanding when React re-renders is crucial for optimization. A component re-renders when:
                  </p>
                </div>
                <CodeBlock code={`// CAUSES OF RE-RENDERS

// 1. State Change
function Counter() {
  const [count, setCount] = useState(0);
  console.log('Counter rendered');  // Logs every time count changes
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// 2. Props Change
function Child({ name }) {
  console.log('Child rendered');  // Re-renders when name changes
  return <p>Hello, {name}</p>;
}

// 3. Parent Re-renders
function Parent() {
  const [count, setCount] = useState(0);
  console.log('Parent rendered');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child name="John" />  {/* Re-renders even though name didn't change! */}
    </div>
  );
}

// 4. Context Value Changes
function ThemeConsumer() {
  const theme = useContext(ThemeContext);
  console.log('ThemeConsumer rendered');  // Re-renders when theme changes
  return <div className={theme}>Content</div>;
}

// HOW REACT DECIDES WHAT TO UPDATE:
// 1. State/Props change triggers render phase
// 2. React creates new Virtual DOM
// 3. Diffing algorithm compares old vs new
// 4. Only actual differences update Real DOM

// Note: Re-render ≠ DOM update
// A component can re-render but if output is same,
// React doesn't touch the DOM`} />
              </div>
            </AccordionItem>

            <AccordionItem title="React.memo - Preventing Unnecessary Re-renders">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>React.memo</strong> is a HOC that memoizes a component. It only re-renders if props change (shallow comparison).
                  </p>
                </div>
                <CodeBlock code={`import { memo, useState } from 'react';

// Without memo - re-renders on every parent render
function ExpensiveList({ items }) {
  console.log('ExpensiveList rendered');
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// With React.memo - only re-renders if items change
const MemoizedList = memo(function ExpensiveList({ items }) {
  console.log('MemoizedList rendered');
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

// Parent component
function App() {
  const [count, setCount] = useState(0);
  const items = [{ id: 1, name: 'Item 1' }];  // ⚠️ New array every render!
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <MemoizedList items={items} />  {/* Still re-renders! Why? */}
    </div>
  );
}

// ⚠️ PROBLEM: items is new array reference each render
// memo uses shallow comparison: [] !== []

// ✅ FIX: Move outside or use useMemo
const items = [{ id: 1, name: 'Item 1' }];  // Outside component

function App() {
  const [count, setCount] = useState(0);
  
  // Or use useMemo for computed data
  const items = useMemo(() => [{ id: 1, name: 'Item 1' }], []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <MemoizedList items={items} />  {/* Now properly memoized! */}
    </div>
  );
}

// Custom comparison function
const MemoizedUser = memo(
  function User({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);`} />
              </div>
            </AccordionItem>

            <AccordionItem title="useMemo - Memoizing Expensive Calculations">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useMemo</strong> caches the result of an expensive calculation and only recalculates when dependencies change.
                  </p>
                </div>
                <CodeBlock code={`import { useMemo, useState } from 'react';

function ProductList({ products, filterTerm }) {
  // ❌ Without useMemo - filters on EVERY render
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(filterTerm.toLowerCase())
  );
  
  // ✅ With useMemo - only filters when products or filterTerm change
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');  // Only logs when deps change
    return products.filter(p => 
      p.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }, [products, filterTerm]);
  
  return (
    <ul>
      {filteredProducts.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

// Good use cases for useMemo:

// 1. Expensive calculations
const sortedData = useMemo(() => {
  return [...data].sort((a, b) => a.value - b.value);
}, [data]);

// 2. Derived data from props/state
const statistics = useMemo(() => {
  return {
    total: items.length,
    completed: items.filter(i => i.done).length,
    average: items.reduce((a, b) => a + b.value, 0) / items.length
  };
}, [items]);

// 3. Creating stable object references for memo/useEffect
const options = useMemo(() => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}), []);  // Stable reference

// ❌ DON'T use useMemo for everything!
// Simple operations don't need memoization
const fullName = useMemo(() => \`\${firstName} \${lastName}\`, [firstName, lastName]);
// Better: just compute directly
const fullName = \`\${firstName} \${lastName}\`;`} />
              </div>
            </AccordionItem>

            <AccordionItem title="useCallback - Memoizing Functions">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>useCallback</strong> memoizes functions. It returns the same function reference unless dependencies change. Useful when passing callbacks to memoized children.
                  </p>
                </div>
                <CodeBlock code={`import { useCallback, useState, memo } from 'react';

// Child component (memoized)
const Button = memo(function Button({ onClick, children }) {
  console.log(\`Button "\${children}" rendered\`);
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // ❌ Without useCallback - new function every render
  const handleClick = () => {
    setCount(c => c + 1);
  };
  // Button re-renders even though it's memoized!
  // Because handleClick is new reference each time
  
  // ✅ With useCallback - same function reference
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);  // Empty deps = same function always
  
  // With dependencies
  const handleSubmit = useCallback(() => {
    console.log('Submitting:', text);
  }, [text]);  // New function only when text changes
  
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

// useCallback is shorthand for useMemo with function
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// Is equivalent to:
const handleClick = useMemo(() => {
  return () => console.log('clicked');
}, []);`} />
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">🔥 Why useCallback is NOT always a good idea?</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Overhead:</strong> useCallback itself has cost (comparing deps, caching)</li>
                    <li><strong>Premature optimization:</strong> Most components don't need it</li>
                    <li><strong>Only useful with memo:</strong> Without React.memo, child re-renders anyway</li>
                    <li><strong>Makes code harder to read:</strong> More complex for little gain</li>
                    <li><strong>Stale closure trap:</strong> Easy to forget dependencies</li>
                  </ul>
                </div>
                <CodeBlock code={`// When to use useCallback:
// ✅ Passing callback to memoized child
// ✅ Callback is a useEffect dependency
// ✅ Callback is expensive and passed to many children

// When NOT to use:
// ❌ Component doesn't receive the callback
// ❌ Child isn't memoized
// ❌ Simple handlers (onClick, onChange)

// Example of unnecessary useCallback:
function Form() {
  const [name, setName] = useState('');
  
  // ❌ Unnecessary - input isn't memoized
  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  
  // ✅ Just use inline function
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Lazy Loading with React.lazy & Suspense">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Code splitting</strong> lets you split your bundle into smaller chunks that load on demand. React.lazy enables dynamic imports.
                  </p>
                </div>
                <CodeBlock code={`import { lazy, Suspense, useState } from 'react';

// ❌ Without lazy loading - everything in one bundle
import Dashboard from './Dashboard';
import Settings from './Settings';
import Analytics from './Analytics';

// ✅ With lazy loading - separate chunks, load on demand
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

function App() {
  return (
    <Router>
      {/* Suspense shows fallback while loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// Multiple Suspense boundaries for better UX
function App() {
  return (
    <div>
      <Header />  {/* Always loaded */}
      
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
      
      <main>
        <Suspense fallback={<ContentSkeleton />}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

// Named exports require intermediate module
// ❌ Can't do this directly
const MyComponent = lazy(() => import('./MyModule').MyComponent);

// ✅ Do this instead
const MyComponent = lazy(() => 
  import('./MyModule').then(module => ({ default: module.MyComponent }))
);

// Error handling with Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Failed to load component.</h1>;
    }
    return this.props.children;
  }
}

<ErrorBoundary>
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Avoiding Unnecessary Renders - Best Practices">
              <div className="space-y-4">
                <CodeBlock code={`// 1. Keep state as local as possible
// ❌ State too high - re-renders entire app
function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <Header />  {/* Re-renders when inputValue changes! */}
      <SearchInput value={inputValue} onChange={setInputValue} />
      <ProductList />  {/* Re-renders when inputValue changes! */}
    </div>
  );
}

// ✅ State where it's needed
function App() {
  return (
    <div>
      <Header />
      <SearchSection />  {/* State is inside */}
      <ProductList />
    </div>
  );
}

function SearchSection() {
  const [inputValue, setInputValue] = useState('');
  return <SearchInput value={inputValue} onChange={setInputValue} />;
}

// 2. Move expensive components out of render
// ❌ Creates new ExpensiveTree on every render
function Parent({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveTree />  {/* Re-renders every time! */}
    </div>
  );
}

// ✅ ExpensiveTree is a prop, doesn't re-render
function Parent({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}

// Usage:
<Parent>
  <ExpensiveTree />  {/* Only renders once! */}
</Parent>

// 3. Avoid creating objects/arrays in render
// ❌ New style object every render
function Component() {
  return <div style={{ color: 'red', fontSize: 16 }}>Text</div>;
}

// ✅ Stable reference
const styles = { color: 'red', fontSize: 16 };
function Component() {
  return <div style={styles}>Text</div>;
}

// 4. Use key properly to avoid unnecessary DOM updates
// When list order changes, keys help React reuse DOM nodes`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">💡 Performance Optimization Checklist:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Profile first - don't optimize blindly (React DevTools)</li>
                    <li>Keep state local when possible</li>
                    <li>Use composition to move static content up</li>
                    <li>Memoize expensive calculations with useMemo</li>
                    <li>Wrap callbacks with useCallback when passing to memo'd children</li>
                    <li>Use React.memo for expensive pure components</li>
                    <li>Lazy load routes and heavy components</li>
                    <li>Virtualize long lists (react-window, react-virtualized)</li>
                  </ol>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 6️⃣ Forms & Validation */}
      {activeSection === 'forms' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl">
              📝
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Forms & Validation</h2>
              <p className="text-dark-500 dark:text-dark-400">Handling user input effectively</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Handling Form Inputs" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    React offers two approaches: <strong>Controlled</strong> (React controls the input) and <strong>Uncontrolled</strong> (DOM controls the input).
                  </p>
                </div>
                <CodeBlock code={`// Controlled Form - React manages all input values
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Generic handler for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit to API
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// Different input types handling
function InputTypes() {
  const [form, setForm] = useState({
    text: '',
    number: 0,
    date: '',
    select: '',
    radio: '',
    textarea: ''
  });
  
  return (
    <form>
      {/* Text Input */}
      <input type="text" value={form.text} 
        onChange={e => setForm({...form, text: e.target.value})} />
      
      {/* Number Input */}
      <input type="number" value={form.number}
        onChange={e => setForm({...form, number: parseInt(e.target.value)})} />
      
      {/* Select Dropdown */}
      <select value={form.select}
        onChange={e => setForm({...form, select: e.target.value})}>
        <option value="">Choose...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      
      {/* Radio Buttons */}
      <label>
        <input type="radio" name="plan" value="basic"
          checked={form.radio === 'basic'}
          onChange={e => setForm({...form, radio: e.target.value})} />
        Basic
      </label>
      
      {/* Textarea */}
      <textarea value={form.textarea}
        onChange={e => setForm({...form, textarea: e.target.value})} />
    </form>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Form Validation Logic">
              <div className="space-y-4">
                <CodeBlock code={`// Basic Form Validation
function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // Validation rules
  const validate = (data) => {
    const errors = {};
    
    // Email validation
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    
    // Password validation
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[0-9])/.test(data.password)) {
      errors.password = 'Password must contain a number';
    }
    
    // Confirm password
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    return errors;
  };
  
  // Validate on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    // Validate if field was touched
    if (touched[name]) {
      setErrors(validate(newFormData));
    }
  };
  
  // Mark field as touched on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all as touched
    setTouched({
      email: true,
      password: true,
      confirmPassword: true
    });
    
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    
    // If no errors, submit
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid!', formData);
      // API call here
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email ? 'error' : ''}
        />
        {touched.email && errors.email && (
          <span className="error-message">{errors.email}</span>
        )}
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>
      
      <button 
        type="submit" 
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Form Libraries (Formik & React Hook Form)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    For complex forms, libraries like <strong>React Hook Form</strong> and <strong>Formik</strong> handle validation, touched states, and submission.
                  </p>
                </div>
                <CodeBlock code={`// REACT HOOK FORM (Recommended - better performance)
import { useForm } from 'react-hook-form';

function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  
  const onSubmit = async (data) => {
    console.log(data);
    // API call
    await submitToAPI(data);
    reset();  // Reset form after success
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\\S+@\\S+$/i,
            message: 'Invalid email format'
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum 8 characters'
          }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// FORMIK (Popular alternative)
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .required('Required')
});

function FormikExample() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 React Hook Form vs Formik</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-blue-200 dark:border-blue-800">
                        <th className="text-left py-2">React Hook Form</th>
                        <th className="text-left py-2">Formik</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Uncontrolled inputs (faster)</td>
                        <td>Controlled inputs</td>
                      </tr>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Smaller bundle size</td>
                        <td>Larger bundle</td>
                      </tr>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Less re-renders</td>
                        <td>More re-renders</td>
                      </tr>
                      <tr>
                        <td className="py-2">Better performance</td>
                        <td>More features built-in</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="How to Handle Large Forms Efficiently">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">🔥 Real-world Question: How do you handle large forms efficiently?</h4>
                </div>
                <CodeBlock code={`// Strategies for Large Forms

// 1. USE UNCONTROLLED COMPONENTS (React Hook Form)
// Avoids re-rendering entire form on every keystroke
import { useForm } from 'react-hook-form';

function LargeForm() {
  const { register, handleSubmit } = useForm();
  // No state updates on every keystroke!
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 50+ fields without performance issues */}
    </form>
  );
}

// 2. SPLIT INTO SECTIONS/STEPS (Multi-step forms)
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };
  
  return (
    <div>
      {step === 1 && <PersonalInfo data={formData} onNext={updateFormData} />}
      {step === 2 && <AddressInfo data={formData} onNext={updateFormData} />}
      {step === 3 && <PaymentInfo data={formData} onSubmit={handleSubmit} />}
      
      <StepIndicator current={step} total={3} />
    </div>
  );
}

// 3. DEBOUNCE VALIDATION
import { useMemo } from 'react';
import debounce from 'lodash/debounce';

function DebouncedValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  
  const validateDebounced = useMemo(
    () => debounce((val) => {
      // Expensive validation
      if (val.length < 3) {
        setError('Too short');
      } else {
        setError('');
      }
    }, 300),
    []
  );
  
  const handleChange = (e) => {
    setValue(e.target.value);
    validateDebounced(e.target.value);
  };
  
  return <input value={value} onChange={handleChange} />;
}

// 4. MEMOIZE FORM SECTIONS
const PersonalInfoSection = memo(function PersonalInfo({ data, onChange }) {
  return (
    <fieldset>
      <legend>Personal Information</legend>
      <input name="firstName" defaultValue={data.firstName} onChange={onChange} />
      <input name="lastName" defaultValue={data.lastName} onChange={onChange} />
    </fieldset>
  );
});

// 5. VIRTUALIZE FOR VERY LONG FORMS
// Use react-window for forms with 100+ fields
import { FixedSizeList } from 'react-window';

function VirtualizedForm({ fields }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <input name={fields[index].name} placeholder={fields[index].label} />
    </div>
  );
  
  return (
    <FixedSizeList height={600} itemCount={fields.length} itemSize={50}>
      {Row}
    </FixedSizeList>
  );
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ Best Practices for Large Forms:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Use React Hook Form (uncontrolled inputs)</li>
                    <li>Split into logical sections/steps</li>
                    <li>Validate only on blur/submit, not every keystroke</li>
                    <li>Memoize static sections with React.memo</li>
                    <li>Save progress to localStorage for long forms</li>
                    <li>Show progress indicator for multi-step forms</li>
                    <li>Debounce async validation (API calls)</li>
                  </ol>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 7️⃣ Routing (React Router) */}
      {activeSection === 'routing' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
              🧭
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">React Router</h2>
              <p className="text-dark-500 dark:text-dark-400">Navigation in Single Page Applications</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="SPA Routing Concept" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    In SPAs, routing happens on the client side. The URL changes but no page reload occurs - React swaps components based on the URL.
                  </p>
                </div>
                <CodeBlock code={`// Traditional MPA (Multi-Page App)
// Click link → Browser sends request to server → Server returns new HTML page
// /home.html → /about.html → /contact.html

// SPA (Single Page App) with React Router
// Click link → JavaScript updates URL → React renders different component
// No server request for new pages!

// index.html (only HTML file)
// /           → renders <Home />
// /about      → renders <About />
// /contact    → renders <Contact />

// How it works:
// 1. Browser History API (pushState, replaceState)
// 2. React Router listens for URL changes
// 3. Matches URL to route config
// 4. Renders corresponding component

// Benefits:
// - Faster navigation (no page reload)
// - Preserves state between "pages"
// - Smooth transitions possible
// - Better user experience`} />
              </div>
            </AccordionItem>

            <AccordionItem title="BrowserRouter, Routes, Route">
              <div className="space-y-4">
                <CodeBlock code={`// React Router v6 Setup
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link,
  NavLink 
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        {/* Link - basic navigation */}
        <Link to="/">Home</Link>
        
        {/* NavLink - with active state styling */}
        <NavLink 
          to="/about"
          className={({ isActive }) => 
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </nav>
      
      {/* Route Configuration */}
      <Routes>
        {/* Basic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Nested routes */}
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// For nested routes, parent needs <Outlet />
import { Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet />  {/* Child routes render here */}
    </div>
  );
}

// Router types:
// BrowserRouter - Uses HTML5 history API (/about)
// HashRouter - Uses hash in URL (/#/about)
// MemoryRouter - No URL changes (for tests, React Native)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="useParams & useNavigate">
              <div className="space-y-4">
                <CodeBlock code={`import { 
  useParams, 
  useNavigate, 
  useLocation,
  useSearchParams 
} from 'react-router-dom';

// useParams - Access URL parameters
// Route: <Route path="/users/:userId" element={<UserProfile />} />
// URL: /users/123

function UserProfile() {
  const { userId } = useParams();  // { userId: "123" }
  
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>User ID: {userId}</div>;
}

// Multiple params
// Route: /posts/:postId/comments/:commentId
function Comment() {
  const { postId, commentId } = useParams();
  // Both available!
}

// useNavigate - Programmatic navigation
function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = async (credentials) => {
    await login(credentials);
    
    // Navigate to dashboard
    navigate('/dashboard');
    
    // With options
    navigate('/dashboard', { replace: true });  // Replace history
    navigate('/dashboard', { state: { from: 'login' } });  // Pass state
    
    // Go back
    navigate(-1);  // Same as browser back button
    navigate(-2);  // Go back 2 pages
  };
  
  return <form onSubmit={handleLogin}>...</form>;
}

// useLocation - Access current location
function CurrentPage() {
  const location = useLocation();
  
  console.log(location.pathname);  // "/products/123"
  console.log(location.search);    // "?sort=price"
  console.log(location.hash);      // "#reviews"
  console.log(location.state);     // State passed via navigate
  
  return <div>Current path: {location.pathname}</div>;
}

// useSearchParams - Query string handling
// URL: /products?category=electronics&sort=price
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const category = searchParams.get('category');  // "electronics"
  const sort = searchParams.get('sort');          // "price"
  
  const updateFilters = (newCategory) => {
    setSearchParams({ category: newCategory, sort });
  };
  
  return (
    <div>
      <select onChange={(e) => updateFilters(e.target.value)}>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Protected Routes">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    Protected routes restrict access based on authentication or authorization status.
                  </p>
                </div>
                <CodeBlock code={`import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();  // Your auth hook
  const location = useLocation();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!user) {
    // Redirect to login, save intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

// Usage in Routes
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      {/* Protected route group */}
      <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

// Role-based protected route
function RoleProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
}

// Usage
<Route
  path="/admin"
  element={
    <RoleProtectedRoute allowedRoles={['admin', 'superadmin']}>
      <AdminDashboard />
    </RoleProtectedRoute>
  }
/>

// Redirect after login
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';
  
  const handleLogin = async () => {
    await login(credentials);
    navigate(from, { replace: true });  // Go to intended page
  };
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="404 Page & Client vs Server Routing">
              <div className="space-y-4">
                <CodeBlock code={`// 404 Not Found Page
function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')}>
        Go Home
      </button>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

// Route configuration - catch all unmatched routes
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* Must be last - catches everything else */}
  <Route path="*" element={<NotFound />} />
</Routes>`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">🔥 Client-side vs Server-side Routing</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-amber-200 dark:border-amber-800">
                        <th className="text-left py-2">Client-side (React Router)</th>
                        <th className="text-left py-2">Server-side (Traditional)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-amber-100 dark:border-amber-900">
                        <td className="py-2">JavaScript handles routing</td>
                        <td>Server handles routing</td>
                      </tr>
                      <tr className="border-b border-amber-100 dark:border-amber-900">
                        <td className="py-2">No page reload</td>
                        <td>Full page reload</td>
                      </tr>
                      <tr className="border-b border-amber-100 dark:border-amber-900">
                        <td className="py-2">Faster navigation</td>
                        <td>Slower (network request)</td>
                      </tr>
                      <tr className="border-b border-amber-100 dark:border-amber-900">
                        <td className="py-2">SEO challenges</td>
                        <td>Better SEO by default</td>
                      </tr>
                      <tr>
                        <td className="py-2">Server returns same HTML for all routes</td>
                        <td>Server returns different HTML per route</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <CodeBlock code={`// Server configuration needed for client-side routing
// When user directly visits /about, server must return index.html

// nginx
location / {
  try_files $uri $uri/ /index.html;
}

// Express.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Netlify (_redirects file)
/*    /index.html   200

// Vercel (vercel.json)
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 8️⃣ API Integration & Async Handling */}
      {activeSection === 'api' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-2xl">
              🌐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">API Integration & Async Handling</h2>
              <p className="text-dark-500 dark:text-dark-400">Working with external data</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Fetch vs Axios" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// FETCH API (Built-in)
async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    // Fetch doesn't throw on HTTP errors!
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// POST with Fetch
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${token}\`
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  
  return response.json();
}

// AXIOS (External library)
import axios from 'axios';

// Create instance with defaults
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptors for auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// GET request
async function fetchUsers() {
  try {
    const { data } = await api.get('/users');
    return data;  // Already parsed!
  } catch (error) {
    // Axios throws on HTTP errors automatically
    console.error('Error:', error.response?.data);
    throw error;
  }
}

// POST request
async function createUser(userData) {
  const { data } = await api.post('/users', userData);
  return data;
}`} />
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Fetch vs Axios</h4>
                  <table className="w-full text-sm text-dark-600 dark:text-dark-400">
                    <thead>
                      <tr className="border-b border-blue-200 dark:border-blue-800">
                        <th className="text-left py-2">Fetch</th>
                        <th className="text-left py-2">Axios</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Built-in (no install)</td>
                        <td>Needs npm install</td>
                      </tr>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Manual JSON parsing</td>
                        <td>Auto JSON parsing</td>
                      </tr>
                      <tr className="border-b border-blue-100 dark:border-blue-900">
                        <td className="py-2">Doesn't throw on 404/500</td>
                        <td>Throws on HTTP errors</td>
                      </tr>
                      <tr>
                        <td className="py-2">No interceptors</td>
                        <td>Request/Response interceptors</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Loading & Error States">
              <div className="space-y-4">
                <CodeBlock code={`// Complete pattern for API calls in components
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    fetchUsers();
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  // Render states
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={() => window.location.reload()} 
      />
    );
  }
  
  if (users.length === 0) {
    return <EmptyState message="No users found" />;
  }
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Custom Hook for reusability
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Request failed');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  useEffect(() => {
    refetch();
  }, [refetch]);
  
  return { data, loading, error, refetch };
}

// Usage
function UserList() {
  const { data: users, loading, error, refetch } = useFetch('/api/users');
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} onRetry={refetch} />;
  return <UserTable users={users} />;
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Debouncing API Calls">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Debouncing</strong> delays function execution until user stops typing. Essential for search inputs to avoid excessive API calls.
                  </p>
                </div>
                <CodeBlock code={`// Without debouncing - API call on every keystroke!
// User types "react" → 5 API calls: r, re, rea, reac, react

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage in Search Component
function SearchUsers() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Debounce the search query (300ms delay)
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    
    async function search() {
      setLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${debouncedQuery}\`);
        const data = await response.json();
        setResults(data);
      } finally {
        setLoading(false);
      }
    }
    
    search();
  }, [debouncedQuery]);  // Only fires when debounced value changes
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      {loading && <Spinner />}
      <ul>
        {results.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Alternative: Debounce the function directly
import { useMemo } from 'react';
import debounce from 'lodash/debounce';

function SearchUsers() {
  const [results, setResults] = useState([]);
  
  const searchAPI = useMemo(
    () => debounce(async (query) => {
      if (!query) return;
      const response = await fetch(\`/api/search?q=\${query}\`);
      const data = await response.json();
      setResults(data);
    }, 300),
    []
  );
  
  // Cleanup on unmount
  useEffect(() => {
    return () => searchAPI.cancel();
  }, [searchAPI]);
  
  return (
    <input onChange={(e) => searchAPI(e.target.value)} />
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Where Should API Calls Be Made?">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">🔥 Tricky Question: Where should API calls be made—in component or elsewhere?</h4>
                </div>
                <CodeBlock code={`// Option 1: IN COMPONENT (useEffect)
// ✅ Good for: Simple apps, component-specific data
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);
  
  return <div>{user?.name}</div>;
}

// Option 2: CUSTOM HOOKS (Separation of concerns)
// ✅ Good for: Reusable data fetching logic
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    userAPI.getUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading };
}

function UserProfile({ userId }) {
  const { user, loading } = useUser(userId);
  if (loading) return <Spinner />;
  return <div>{user.name}</div>;
}

// Option 3: API SERVICE LAYER (Clean architecture)
// ✅ Good for: Large apps, testability
// src/services/userService.js
export const userService = {
  getUser: (id) => api.get(\`/users/\${id}\`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(\`/users/\${id}\`, data)
};

// Option 4: DATA FETCHING LIBRARIES (Best for most apps)
// ✅ Good for: Caching, deduplication, background updates

// React Query
import { useQuery } from '@tanstack/react-query';

function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => userService.getUser(userId)
  });
  
  // Automatic caching, refetching, error handling!
}

// SWR
import useSWR from 'swr';

function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher
  );
}`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ Best Answer:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    "For most production apps, I'd use <strong>React Query or SWR</strong> for data fetching. They handle caching, loading states, error handling, and background updates automatically. The API calls themselves should be in a <strong>service layer</strong> for separation of concerns. Components should only know about hooks, not how data is fetched."
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 9️⃣ Error Handling */}
      {activeSection === 'errors' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-2xl">
              🛡️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Error Handling</h2>
              <p className="text-dark-500 dark:text-dark-400">Gracefully handling errors in React apps</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Error Boundaries" defaultOpen>
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Error Boundaries</strong> are React components that catch JavaScript errors in their child component tree, log them, and display a fallback UI.
                  </p>
                </div>
                <CodeBlock code={`// Error Boundary (Must be a class component!)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  // Called when error is thrown in child
  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }
  
  // Called after error is caught (for logging)
  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    console.error('Error caught:', error);
    console.error('Error info:', errorInfo.componentStack);
    
    // Send to monitoring service
    logErrorToService(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage - Wrap components that might error
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Header />
      <ErrorBoundary fallback={<SidebarError />}>
        <Sidebar />
      </ErrorBoundary>
      <ErrorBoundary fallback={<ContentError />}>
        <MainContent />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// Reusable with render prop
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  resetError = () => {
    this.setState({ hasError: false, error: null });
  };
  
  render() {
    if (this.state.hasError) {
      return this.props.fallbackRender({
        error: this.state.error,
        resetError: this.resetError
      });
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary
  fallbackRender={({ error, resetError }) => (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={resetError}>Retry</button>
    </div>
  )}
>
  <MyComponent />
</ErrorBoundary>`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Try/Catch in Async Calls">
              <div className="space-y-4">
                <CodeBlock code={`// Handling async errors in components
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          // Handle HTTP errors
          if (response.status === 404) {
            throw new Error('User not found');
          }
          if (response.status === 403) {
            throw new Error('Access denied');
          }
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
        
      } catch (err) {
        setError(err.message);
        // Optionally log to monitoring service
        logError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <UserCard user={user} />;
}

// Handling errors in event handlers
function SubmitButton() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      setError(null);
      await submitForm(data);
      showSuccessToast('Submitted!');
    } catch (err) {
      setError(err.message);
      // Don't throw - would crash the app
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <>
      {error && <Alert type="error">{error}</Alert>}
      <button onClick={handleSubmit} disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Why Error Boundaries Don't Catch Async Errors">
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">🔥 Higher Question: Why don't error boundaries catch async errors?</h4>
                </div>
                <CodeBlock code={`// Error Boundaries ONLY catch:
// ✅ Errors in render methods
// ✅ Errors in lifecycle methods
// ✅ Errors in constructors

// Error Boundaries DON'T catch:
// ❌ Event handlers (onClick, onSubmit)
// ❌ Async code (setTimeout, fetch, promises)
// ❌ Server-side rendering
// ❌ Errors thrown in the error boundary itself

// WHY?
// Error boundaries use React's render phase error handling
// Async code runs OUTSIDE React's render cycle
// By the time async code errors, render is already complete

// Example: This WON'T be caught by ErrorBoundary
function AsyncComponent() {
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        throw new Error('Processing error');  // NOT caught!
      });
  }, []);
  
  return <div>Content</div>;
}

// Solutions:

// 1. Try/catch with state for async errors
function AsyncComponent() {
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        processData(data);
      } catch (err) {
        setError(err);  // Handle in component
      }
    }
    fetchData();
  }, []);
  
  if (error) throw error;  // Now ErrorBoundary catches it!
  return <div>Content</div>;
}

// 2. Global error handler for unhandled rejections
useEffect(() => {
  const handleError = (event) => {
    console.error('Unhandled error:', event.error);
    // Show global error UI or log to service
  };
  
  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleError);
  
  return () => {
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleError);
  };
}, []);

// 3. Use React Query or similar (handles errors automatically)
const { data, error } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  // Automatic error state!
});`} />
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">💡 Interview Answer:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    "Error boundaries work during React's render phase and use the component lifecycle. Async code like promises and event handlers run outside React's render cycle, so by the time they error, React has already completed rendering. For async errors, we need try/catch with state management, or libraries like React Query that handle error states automatically."
                  </p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Global Error Handling Strategy">
              <div className="space-y-4">
                <CodeBlock code={`// Comprehensive error handling strategy

// 1. Create error tracking context
const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [globalError, setGlobalError] = useState(null);
  
  // Handle unhandled errors
  useEffect(() => {
    const handleError = (event) => {
      setGlobalError({
        message: event.error?.message || 'Unknown error',
        stack: event.error?.stack
      });
      // Log to service
      logToMonitoring(event.error);
    };
    
    const handleRejection = (event) => {
      setGlobalError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack
      });
      logToMonitoring(event.reason);
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);
  
  const clearError = () => setGlobalError(null);
  
  return (
    <ErrorContext.Provider value={{ globalError, setGlobalError, clearError }}>
      {globalError && (
        <GlobalErrorModal 
          error={globalError} 
          onClose={clearError} 
        />
      )}
      {children}
    </ErrorContext.Provider>
  );
}

// 2. Wrap app with error providers
function App() {
  return (
    <ErrorProvider>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Router>
          <Routes>...</Routes>
        </Router>
      </ErrorBoundary>
    </ErrorProvider>
  );
}

// 3. Use in components
function MyComponent() {
  const { setGlobalError } = useContext(ErrorContext);
  
  const handleAction = async () => {
    try {
      await riskyOperation();
    } catch (error) {
      if (error.critical) {
        setGlobalError(error);  // Show global error UI
      } else {
        // Handle locally
        setLocalError(error.message);
      }
    }
  };
}`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 🔟 Testing Basics */}
      {activeSection === 'testing' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center text-2xl">
              🧪
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Testing Basics</h2>
              <p className="text-dark-500 dark:text-dark-400">Awareness level - fundamental concepts</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Why Testing is Important" defaultOpen>
              <div className="space-y-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ Benefits of Testing:</h4>
                  <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li><strong>Catch bugs early:</strong> Find issues before they reach production</li>
                    <li><strong>Documentation:</strong> Tests show how code should work</li>
                    <li><strong>Refactoring confidence:</strong> Change code without fear of breaking things</li>
                    <li><strong>Better design:</strong> Testable code tends to be cleaner code</li>
                    <li><strong>Faster debugging:</strong> Narrow down where issues are</li>
                    <li><strong>Team collaboration:</strong> Others understand expected behavior</li>
                  </ul>
                </div>
                <CodeBlock code={`// What to test in React:

// 1. Component renders without crashing
// 2. Component renders correct output for given props
// 3. User interactions work (clicks, inputs)
// 4. State changes correctly
// 5. API calls are made correctly
// 6. Error states are handled

// Testing Pyramid (from most to least):
//
//        /\\
//       /  \\   E2E Tests (few)
//      /----\\  Integration Tests (some)
//     /------\\ Unit Tests (many)
//    /________\\
//
// Unit: Test individual functions/components
// Integration: Test components working together  
// E2E: Test full user flows in browser`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Jest Basics">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>Jest</strong> is a JavaScript testing framework by Facebook. It comes pre-configured with Create React App.
                  </p>
                </div>
                <CodeBlock code={`// Jest Test Structure
// filename.test.js or filename.spec.js

// describe - groups related tests
describe('Calculator', () => {
  
  // it or test - individual test case
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

// Common Jest Matchers
expect(value).toBe(5);              // Exact equality (===)
expect(value).toEqual({a: 1});      // Deep equality (objects)
expect(value).toBeTruthy();         // Truthy value
expect(value).toBeFalsy();          // Falsy value
expect(value).toBeNull();           // null
expect(value).toBeDefined();        // not undefined
expect(value).toBeGreaterThan(3);   // >
expect(value).toContain('item');    // Array/string contains
expect(value).toHaveLength(3);      // Length check
expect(fn).toThrow();               // Function throws error

// Async Testing
test('fetches user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('John');
});

// Mock Functions
const mockFn = jest.fn();
mockFn('arg1');
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('arg1');
expect(mockFn).toHaveBeenCalledTimes(1);

// Mock Return Values
const mockFn = jest.fn()
  .mockReturnValue(10)
  .mockReturnValueOnce(5);  // First call only

// Setup and Teardown
beforeEach(() => {
  // Runs before each test
});

afterEach(() => {
  // Runs after each test (cleanup)
});

beforeAll(() => {
  // Runs once before all tests
});

afterAll(() => {
  // Runs once after all tests
});`} />
              </div>
            </AccordionItem>

            <AccordionItem title="React Testing Library (Concept)">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    <strong>React Testing Library</strong> tests components the way users interact with them. Focus on behavior, not implementation details.
                  </p>
                </div>
                <CodeBlock code={`// React Testing Library Philosophy:
// "The more your tests resemble the way your software is used,
//  the more confidence they can give you."

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Basic Component Test
test('renders greeting', () => {
  render(<Greeting name="John" />);
  
  // Query by text visible to user
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});

// Testing User Interactions
test('increments counter on click', async () => {
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  await userEvent.click(button);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

// Testing Form Input
test('submits form with user data', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'password123');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});

// Testing Async Behavior
test('loads and displays users', async () => {
  render(<UserList />);
  
  // Initially shows loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});

// Query Priority (use in this order):
// 1. getByRole - accessible elements (button, heading)
// 2. getByLabelText - form fields
// 3. getByPlaceholderText - inputs
// 4. getByText - text content
// 5. getByTestId - last resort (data-testid attribute)`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Unit vs Integration Testing">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔬 Unit Tests</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Test single function/component in isolation</li>
                      <li>Mock all dependencies</li>
                      <li>Fast to run</li>
                      <li>Pinpoint exact failure location</li>
                      <li>Many small tests</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">🔗 Integration Tests</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Test multiple components together</li>
                      <li>Less mocking, more real behavior</li>
                      <li>Slower but more realistic</li>
                      <li>Tests actual user flows</li>
                      <li>Catches issues between components</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// UNIT TEST - Testing Counter in isolation
test('Counter increments', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

// INTEGRATION TEST - Testing Counter with Parent
test('App shows counter and can reset', () => {
  render(<App />);  // Includes Counter and ResetButton
  
  // Increment counter
  fireEvent.click(screen.getByText('Increment'));
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('2')).toBeInTheDocument();
  
  // Reset (tests interaction between components)
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('0')).toBeInTheDocument();
});

// E2E TEST (Cypress/Playwright) - Full user flow
// Tests in real browser with real API
describe('Login Flow', () => {
  it('user can login and see dashboard', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, User').should('be.visible');
  });
});`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 1️⃣1️⃣ Build & Deployment */}
      {activeSection === 'build' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center text-2xl">
              📦
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Build & Deployment</h2>
              <p className="text-dark-500 dark:text-dark-400">From development to production</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="npm vs yarn" defaultOpen>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">📦 npm</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Comes with Node.js</li>
                      <li>Default package manager</li>
                      <li>Uses package-lock.json</li>
                      <li>Larger community</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🧶 yarn</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>Developed by Facebook</li>
                      <li>Faster installs (parallel)</li>
                      <li>Uses yarn.lock</li>
                      <li>Workspaces for monorepos</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`# Common Commands Comparison

# Install all dependencies
npm install          |  yarn install (or just: yarn)

# Add a package
npm install react    |  yarn add react

# Add dev dependency
npm install -D jest  |  yarn add -D jest

# Remove package
npm uninstall axios  |  yarn remove axios

# Run script
npm run start        |  yarn start
npm run build        |  yarn build
npm run test         |  yarn test

# Global install
npm install -g create-react-app  |  yarn global add create-react-app

# Update packages
npm update           |  yarn upgrade

# Clean cache
npm cache clean      |  yarn cache clean

# Create new React app
npx create-react-app my-app  |  yarn create react-app my-app

# Lock files - DON'T mix!
# If project has package-lock.json → use npm
# If project has yarn.lock → use yarn`} />
              </div>
            </AccordionItem>

            <AccordionItem title="package.json Explained">
              <div className="space-y-4">
                <CodeBlock code={`// package.json - Project configuration
{
  "name": "my-react-app",         // Package name
  "version": "1.0.0",             // Semantic versioning
  "private": true,                // Prevent accidental publish
  
  // Entry point (for libraries)
  "main": "dist/index.js",
  
  // Scripts - npm run <script-name>
  "scripts": {
    "start": "react-scripts start",    // Development server
    "build": "react-scripts build",    // Production build
    "test": "react-scripts test",      // Run tests
    "lint": "eslint src/",             // Lint code
    "format": "prettier --write src/"  // Format code
  },
  
  // Production dependencies
  "dependencies": {
    "react": "^18.2.0",           // ^ = compatible with 18.x.x
    "react-dom": "^18.2.0",
    "axios": "~1.4.0"             // ~ = patch updates only (1.4.x)
  },
  
  // Development only dependencies
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "jest": "^29.0.0"
  },
  
  // Peer dependencies (for libraries)
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  
  // Supported browsers
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead"
    ],
    "development": [
      "last 1 chrome version"
    ]
  }
}

// Version Ranges:
// "react": "18.2.0"   - Exact version
// "react": "^18.2.0"  - 18.x.x (major locked)
// "react": "~18.2.0"  - 18.2.x (minor locked)
// "react": ">=18.0.0" - 18.0.0 or higher
// "react": "*"        - Any version`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Build Process">
              <div className="space-y-4">
                <div className="bg-dark-50 dark:bg-dark-800 rounded-lg p-4">
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    The build process transforms your source code into optimized static files ready for production.
                  </p>
                </div>
                <CodeBlock code={`# What happens during npm run build:

# 1. Transpilation (Babel)
# - Converts JSX to JavaScript
# - Converts ES6+ to ES5 for older browsers
# - Converts TypeScript to JavaScript

# 2. Bundling (Webpack/Vite)
# - Combines all JS files into few bundles
# - Resolves imports/exports
# - Tree shaking (removes unused code)

# 3. Minification
# - Removes whitespace, comments
# - Shortens variable names
# - Reduces file size

# 4. Asset Processing
# - Optimizes images
# - Processes CSS (PostCSS, autoprefixer)
# - Generates hashed filenames (cache busting)

# Build output (dist/ or build/ folder):
# ├── index.html              # Entry HTML
# ├── static/
# │   ├── js/
# │   │   ├── main.a1b2c3.js    # Main bundle (hashed)
# │   │   └── chunk.d4e5f6.js   # Code-split chunks
# │   ├── css/
# │   │   └── main.g7h8i9.css   # Styles (hashed)
# │   └── media/
# │       └── logo.j0k1l2.png   # Assets (hashed)
# └── asset-manifest.json       # Maps files to hashed names

# Analyze bundle size
npm run build -- --stats
npx source-map-explorer build/static/js/*.js`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Environment Variables">
              <div className="space-y-4">
                <CodeBlock code={`// Environment Variables in React

// Create React App uses .env files
// .env                 - Default
// .env.local           - Local overrides (git ignored)
// .env.development     - Development only
// .env.production      - Production only
// .env.test            - Test only

// Priority: .env.local > .env.development > .env

// .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
REACT_APP_FEATURE_FLAG=true

// IMPORTANT: Variables MUST start with REACT_APP_
// Other variables are ignored for security

// Usage in code
const apiUrl = process.env.REACT_APP_API_URL;
const version = process.env.REACT_APP_VERSION;

// Vite uses different prefix
VITE_API_URL=https://api.example.com
// Access: import.meta.env.VITE_API_URL

// ⚠️ Security Warning:
// Environment variables are EMBEDDED in the build
// They are visible in the browser!
// NEVER put secrets (API keys, passwords) in frontend env vars

// Safe:
REACT_APP_API_URL=https://api.example.com  // Public URL
REACT_APP_GOOGLE_ANALYTICS_ID=UA-12345     // Public ID

// NOT Safe:
REACT_APP_SECRET_KEY=abc123  // ❌ Anyone can see this!
REACT_APP_DATABASE_PASSWORD=password  // ❌ Never do this!

// For secrets: Use backend API that has the secrets`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Production vs Development Build">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">🔧 Development</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>npm start / yarn start</li>
                      <li>Hot Module Replacement (HMR)</li>
                      <li>Source maps for debugging</li>
                      <li>Detailed error messages</li>
                      <li>React DevTools warnings</li>
                      <li>No minification</li>
                      <li>Larger bundle size</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">🚀 Production</h4>
                    <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                      <li>npm run build / yarn build</li>
                      <li>Minified and optimized</li>
                      <li>No source maps (optional)</li>
                      <li>Generic error messages</li>
                      <li>No development warnings</li>
                      <li>Tree shaking applied</li>
                      <li>Smallest possible bundle</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock code={`// Check current environment in code
if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
  // Enable debugging tools
}

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');
  // Disable console.logs, enable analytics
}

// Conditional imports (tree shaking works here)
if (process.env.NODE_ENV === 'development') {
  const devTools = require('./devTools');
  devTools.init();
}

// Common deployment platforms:
// Vercel:    vercel deploy
// Netlify:   netlify deploy
// GitHub Pages: gh-pages -d build
// AWS S3:    aws s3 sync build/ s3://bucket-name
// Firebase:  firebase deploy

// Serving static build locally for testing
npm install -g serve
serve -s build  # Serves build folder on localhost:3000`} />
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}

      {/* 1️⃣2️⃣ Best Practices */}
      {activeSection === 'best-practices' && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-2xl">
              ✨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">React Best Practices</h2>
              <p className="text-dark-500 dark:text-dark-400">Interview Gold - answers that impress</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem title="Folder Structure" defaultOpen>
              <div className="space-y-4">
                <CodeBlock code={`// Option 1: Feature-based (Recommended for large apps)
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authService.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts           // Public API
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   └── cart/
│       ├── components/
│       └── index.ts
│
├── shared/                    // Shared across features
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Modal.tsx
│   ├── hooks/
│   │   └── useDebounce.ts
│   └── utils/
│       └── formatDate.ts
│
├── App.tsx
└── main.tsx

// Option 2: Type-based (Good for small-medium apps)
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── features/
│       ├── LoginForm.tsx
│       └── ProductCard.tsx
│
├── hooks/
│   ├── useAuth.ts
│   └── useFetch.ts
│
├── services/
│   └── api.ts
│
├── utils/
│   └── helpers.ts
│
├── types/
│   └── index.ts
│
├── pages/
│   ├── Home.tsx
│   └── Dashboard.tsx
│
└── App.tsx`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Reusable Components">
              <div className="space-y-4">
                <CodeBlock code={`// GOOD: Reusable, flexible button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...rest  // Pass remaining props to button
}: ButtonProps) {
  const baseStyles = 'rounded font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}

// Usage
<Button variant="primary" size="lg" leftIcon={<SaveIcon />}>
  Save Changes
</Button>

<Button variant="danger" isLoading={isDeleting}>
  Delete
</Button>`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Separation of Concerns">
              <div className="space-y-4">
                <CodeBlock code={`// BAD: Everything in one component
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* 200 more lines of JSX */}
    </div>
  );
}

// GOOD: Separated concerns

// 1. Custom Hook for data fetching
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    userService.getUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading, error };
}

// 2. Service layer for API calls
const userService = {
  getUser: (id) => api.get(\`/users/\${id}\`),
  updateUser: (id, data) => api.put(\`/users/\${id}\`, data)
};

// 3. Presentational component (just UI)
function UserCard({ user }) {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// 4. Container component (logic + composition)
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);
  
  if (loading) return <Skeleton />;
  if (error) return <Error message={error} />;
  
  return <UserCard user={user} />;
}

// Benefits:
// - UserCard is reusable anywhere
// - useUser hook is reusable
// - Easy to test each piece
// - Clear responsibilities`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Avoiding Inline Functions">
              <div className="space-y-4">
                <CodeBlock code={`// WHY AVOID INLINE FUNCTIONS?
// New function created every render → can cause unnecessary re-renders

// BAD: Inline function in render
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // New function every render!
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
}

// GOOD: Define handler outside JSX
function TodoList({ todos }) {
  const handleDelete = useCallback((id) => {
    deleteTodo(id);
  }, []);
  
  const handleToggle = useCallback((id) => {
    toggleTodo(id);
  }, []);
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

// Child receives stable function reference
const TodoItem = memo(({ todo, onDelete, onToggle }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

// HOWEVER: Don't over-optimize!
// For simple handlers that don't affect memoized children,
// inline functions are fine:

function SimpleButton() {
  const [count, setCount] = useState(0);
  
  // This is fine - button isn't memoized
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`} />
              </div>
            </AccordionItem>

            <AccordionItem title="Clean Code Principles">
              <div className="space-y-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✨ React Clean Code Checklist:</h4>
                  <ol className="list-decimal list-inside text-dark-600 dark:text-dark-400 text-sm space-y-1">
                    <li>Components should do ONE thing (Single Responsibility)</li>
                    <li>Keep components small (&lt;200 lines)</li>
                    <li>Use meaningful, descriptive names</li>
                    <li>Extract reusable logic into custom hooks</li>
                    <li>Avoid prop drilling (use Context or composition)</li>
                    <li>Keep state as local as possible</li>
                    <li>Use TypeScript for better documentation</li>
                    <li>Write self-documenting code (good names &gt; comments)</li>
                  </ol>
                </div>
                <CodeBlock code={`// NAMING CONVENTIONS

// Components: PascalCase
function UserProfile() {}
function NavigationBar() {}

// Hooks: camelCase starting with "use"
function useAuth() {}
function useFetch() {}
function useLocalStorage() {}

// Event handlers: handle + Event
const handleClick = () => {};
const handleSubmit = () => {};
const handleInputChange = () => {};

// Boolean props: is/has/should prefix
<Button isLoading={true} />
<Modal isOpen={showModal} />
<User hasPermission={canEdit} />

// Constants: SCREAMING_SNAKE_CASE
const MAX_ITEMS = 100;
const API_BASE_URL = 'https://api.example.com';

// Files: 
// Components: PascalCase.tsx (UserProfile.tsx)
// Hooks: camelCase.ts (useAuth.ts)
// Utils: camelCase.ts (formatDate.ts)

// DESTRUCTURING BEST PRACTICES

// Props destructuring
function UserCard({ name, email, avatar, onEdit }) {
  // Not: function UserCard(props) { props.name }
}

// With defaults
function Button({ 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  children 
}) {}

// EARLY RETURNS for cleaner code
function UserProfile({ user, loading, error }) {
  if (loading) return <Skeleton />;
  if (error) return <Error message={error} />;
  if (!user) return <NotFound />;
  
  // Main render - no nesting!
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}`} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">💡 Interview Golden Answer:</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    "I follow the principle of keeping components small and focused on a single responsibility. I separate business logic into custom hooks, API calls into services, and use TypeScript for self-documenting code. I prefer composition over prop drilling and keep state as close to where it's needed as possible. Performance optimization comes last - I profile first, then optimize only what's needed."
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      )}
    </div>
  );
}

