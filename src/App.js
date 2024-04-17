import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Extra from './components/pages/Extra';
import Graphic from './components/pages/Graphic';
import Contact from './components/pages/Contact';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className='dark:bg-richblack-900' >
      <Navbar toogleDark={toggleDarkMode} isDarkMode={isDarkMode} />
      
    <Routes>
      <Route path='/' element={
        <div>
          <Home />
          <Project />
          <Skills /> 
          <Graphic/>   
          <Contact/>   
        </div>
       } />
      <Route path='coming-soon' element={<Extra/>} ></Route>
    </Routes>
      <Footer/>

    </div>
    </div>
  );
}

export default App;
