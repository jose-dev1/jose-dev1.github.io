import Universidad from '../assets/imagenes/manuela_beltran.png'
function Experience() {

  return (
    <article className="row" id='experience'>
      <header className='col-lg-12'>
        <h2 className='subtitles d-flex justify-content-center'>Experiencia</h2>
        <br />
      </header>

      <section className='col-lg-12 card_experience'>
        <header>
          <a href="https://www.americasbps.com.co/" target="_blank" rel="noopener noreferrer">
          <img src={Universidad} alt="Universidad" width="100px"/>
          </a>
          <span>- Desarrollador .Net</span>
        </header>
        <p className='ps-1'>Practicas laborales</p>
        <ul>
          <li>Realicé mis prácticas en la Universidad Manuela Beltrán como asistente de programación, contribuyendo al desarrollo de formularios en ASP.NET. </li>
          <li>Realice nuevos formularios para un seminario generando codigos QR para las invitaciones. </li>
          <li>Contribui en realizar nuevas funciones en JS para la plataforma de canvas.</li>
          <li>Contribui como analista de requrimientos en otros proyectos de la universidad.</li>
        </ul>
      </section>
    </article>
  )
}

export default Experience