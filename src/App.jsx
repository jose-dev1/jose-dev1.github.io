import { useEffect, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/styles/Header.css'
import './assets/styles/Theme.css'
import './assets/styles/Experiencie.css'
import './assets/styles/Skill.css'
import './assets/styles/Projects.css'
import './assets/styles/About.css'

const Header = lazy(() => import('./components/Header'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skill'));
const Projects = lazy(() => import('./components/Projects'));
const AboutMe = lazy(() => import('./components/About'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      throttleDelay: 100,
      mirror: false,
    });
  }, []);

  return (
    <main className='container-lg cont_main'>
        <div data-aos="fade-up">
          <Header />
        </div>
        <div data-aos="fade-up">
          <AboutMe />
        </div>
        <div data-aos="zoom-in">
          <Experience />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
      
    </main>
  );
}

export default App;
