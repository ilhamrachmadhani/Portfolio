import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <AnimatedRoute>
                <Projects />
              </AnimatedRoute>
            } 
          />
          <Route 
            path="/resume" 
            element={
              <AnimatedRoute>
                <Resume />
              </AnimatedRoute>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <AnimatedRoute>
                <Contact />
              </AnimatedRoute>
            } 
          />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;