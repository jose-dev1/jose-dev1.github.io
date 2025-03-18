import DownloadCV from './DownloadCV.jsx'

function AboutMe() {
  return (
    <>
      <article className="row" id='about'>
        <header>
          <h2 className='subtitles d-flex justify-content-center'>Acerca de mí</h2>
          <br />
        </header>

        <section className='col-lg-8 card_about'>
          <p>Hola, soy Jose Castaño. Llevo mas de 2 años construyendo aplicaciones web full stack y APIs utilizando tecnologias como Express y .NET CORE. Me enfoco en la creación de la logica de negocio en el backend aplicancando buenas practicas, principios SOLID y POO generando asi un buena arquitectura.</p>
          <p>He trabajado en proyectos tanto empresariales como propios, siempre buscando la escalabilidad y funcionalidad del código. Soy capaz de resolver problemas complejos, buscando siempre la mejor solución.</p>
          <p>Estoy interesado en encontrar un trabajo en el cual pueda seguir aprendiendo, creciendo profesionalmente y aportando mis conocimientos en el desarrollo de proyectos. </p>
        </section>
      </article>

      <footer className="row" id='contact'>
        <section className='col-lg-12 mb-3'>
          < DownloadCV className="text-bg-light" text={"Descargar CV"} />
        </section>
      </footer>
    </>
  )
}

export default AboutMe