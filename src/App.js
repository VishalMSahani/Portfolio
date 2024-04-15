import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SocialMedia from './components/SocialMedia';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Home/>
      <Project/>
      <Skills />
      <SocialMedia />
      <Footer/>

    </div>
  );
}

export default App;
