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

  return (
    <main className='container-lg cont_main '>
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
