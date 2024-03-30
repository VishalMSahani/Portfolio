import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <SocialMedia />
    </div>
  );
}

export default App;
