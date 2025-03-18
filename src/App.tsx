import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import Section from './components/Section';
import Jotform from './components/Jotform';
import ElevenLabsAgent from './components/ElevenLabsAgent';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// Lazy load sections
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="bg-dark text-gray-100">
      <Navbar />
      <Jotform />
      <ElevenLabsAgent />
      
      <Suspense fallback={<LoadingSpinner />}>
        {/* Hero Section */}
        <Section id="home" title="" className="flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-100">M.KARTHIK</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  AI & Blockchain
                </span>
                <br />Developer
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Building innovative solutions with AI, blockchain, and Flutter
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:karm131005@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <img
                  src="/images/profile1.jpg"
                  alt="M. Karthik Profile"
                  className="rounded-full object-cover animate-float w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            </motion.div>
          </div>
        </Section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;