import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github-white.svg'


function Header() {

  return (
    <header className="row hd_content mb-5">
      <nav className='navbar_links mb-4 d-flex align-items-center gap-3'>
        <a href="#experience">Experiencia</a>
        <a href="#skills">Tecnologías</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Acerca de mí</a>
      </nav>

      <section className='col-lg-12 hd_presentation'>
        <h1>Desarrollador de Software</h1>
        <h1>Jose Castaño</h1>
        <span>Desarrollador Full Stack</span>
      </section>

      <section className='col-lg-12 hd_links'>
        <a href="https://www.linkedin.com/in/jose-alfredo-casta%C3%B1o-mu%C3%B1oz-270565319/" target="_blank" rel="noopener noreferrer" className='btn hd_btns'>
          <img src={linkedinIcon} alt="LinkedIn Icon" height="24px" />
          LinkedIn
        </a>
        <a href="https://github.com/jose-dev1" target="_blank" rel="noopener noreferrer" className='btn hd_btns'>
          <img src={githubIcon} alt="GitHub Icon" height="24px" />
          GitHub
        </a>
      </section>
    </header>
  )
}

export default Header
