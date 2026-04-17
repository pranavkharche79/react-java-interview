import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Arrays from './pages/Arrays';
import Strings from './pages/Strings';
import ArrayList from './pages/collections/ArrayList';
import LinkedList from './pages/collections/LinkedList';
import Stack from './pages/collections/Stack';
import Queue from './pages/collections/Queue';
import HashSet from './pages/collections/HashSet';
import TreeSet from './pages/collections/TreeSet';
import LinkedHashSet from './pages/collections/LinkedHashSet';
import HashMap from './pages/collections/HashMap';
import TreeMap from './pages/collections/TreeMap';
import LinkedHashMap from './pages/collections/LinkedHashMap';

// Main Pages
import JavaInterview from './pages/JavaInterview';
import JavaTheory from './pages/JavaTheory';
import Annotations from './pages/Annotations';
import ReactPage from './pages/React';

// Interview Pages
import ArraysInterview from './pages/interview/ArraysInterview';
import StringsInterview from './pages/interview/StringsInterview';
import ArrayListInterview from './pages/interview/ArrayListInterview';
import LinkedListInterview from './pages/interview/LinkedListInterview';
import HashMapInterview from './pages/interview/HashMapInterview';
import StackInterview from './pages/interview/StackInterview';
import QueueInterview from './pages/interview/QueueInterview';
import HashSetInterview from './pages/interview/HashSetInterview';
import TreeSetInterview from './pages/interview/TreeSetInterview';
import LinkedHashSetInterview from './pages/interview/LinkedHashSetInterview';
import TreeMapInterview from './pages/interview/TreeMapInterview';
import LinkedHashMapInterview from './pages/interview/LinkedHashMapInterview';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/java" element={<JavaInterview />} />
            <Route path="/java-theory" element={<JavaTheory />} />
            <Route path="/annotations" element={<Annotations />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/arrays" element={<Arrays />} />
            <Route path="/strings" element={<Strings />} />
            <Route path="/collections/arraylist" element={<ArrayList />} />
            <Route path="/collections/linkedlist" element={<LinkedList />} />
            <Route path="/collections/stack" element={<Stack />} />
            <Route path="/collections/queue" element={<Queue />} />
            <Route path="/collections/hashset" element={<HashSet />} />
            <Route path="/collections/treeset" element={<TreeSet />} />
            <Route path="/collections/linkedhashset" element={<LinkedHashSet />} />
            <Route path="/collections/hashmap" element={<HashMap />} />
            <Route path="/collections/treemap" element={<TreeMap />} />
            <Route path="/collections/linkedhashmap" element={<LinkedHashMap />} />
            
            {/* Interview Pages */}
            <Route path="/interview/arrays" element={<ArraysInterview />} />
            <Route path="/interview/strings" element={<StringsInterview />} />
            <Route path="/interview/arraylist" element={<ArrayListInterview />} />
            <Route path="/interview/linkedlist" element={<LinkedListInterview />} />
            <Route path="/interview/hashmap" element={<HashMapInterview />} />
            <Route path="/interview/stack" element={<StackInterview />} />
            <Route path="/interview/queue" element={<QueueInterview />} />
            <Route path="/interview/hashset" element={<HashSetInterview />} />
            <Route path="/interview/treeset" element={<TreeSetInterview />} />
            <Route path="/interview/linkedhashset" element={<LinkedHashSetInterview />} />
            <Route path="/interview/treemap" element={<TreeMapInterview />} />
            <Route path="/interview/linkedhashmap" element={<LinkedHashMapInterview />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
