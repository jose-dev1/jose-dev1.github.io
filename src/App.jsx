import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/styles/Header.css'
import './assets/styles/Theme.css'
import './assets/styles/Experiencie.css'
import './assets/styles/Skill.css'
import './assets/styles/Projects.css'
import './assets/styles/About.css'

import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skill'
import Projects from './components/Projects'
import AboutMe from './components/About'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',  
    });
  }, []);

  return (
    <main className='container-lg cont_main '>
      <div data-aos="fade-down">
        <Header />
      </div>
      <div data-aos="fade-right">
        <AboutMe />
      </div>
      <div data-aos="zoom-in-up">
        <Experience />
      </div>
      <div data-aos="fade-down">
        <Skills />
      </div>
      <div data-aos="fade-down">
        <Projects />
      </div>
    </main>
  )
}

export default App;
