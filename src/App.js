import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => (
  <main className='text-gray-400 bg-gray-900 body-font'>
    <NavBar />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
);

export default App;
