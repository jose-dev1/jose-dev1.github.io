import Card from './Card'
import Optima1 from '../assets/imagenes/OptimaL.png'
import OptimaSolid from '../assets/imagenes/OptimaSolid.png'
import OptimaRegistro from '../assets/imagenes/OprimaRegistro.png'
import Fuegos from '../assets/imagenes/100Fuegos.png'
import Banner from '../assets/imagenes/Banner.png'
import MCVperfil from '../assets/imagenes/MCV perfil.png'
import MCVregistro from '../assets/imagenes/MCV Servis.png'



function Projects() {
  return (
    <article id='projects'>
      <header className='col-lg-12'>
        <h2 className='subtitles'>Proyectos</h2>
        <p className='w-75 mx-auto mt-4 wrap-balance'>Estos son algunos de los proyectos en los que he trabajado tanto individualmente como en equipo, a lo largo de mi formación académica y experiencia laboral.</p>
      </header>

      <section className='row'>
        <div className="col-lg-6 mb-3">
          <Card
            id='project1'
            project="Licores 100 Fuegos"
            description="Aplicación web para la gestión de inventario y ventas de una licorería. fui el encargado de la implementación de la lógica de negocio y la integración con la base de datos."
            link='http://'
            img1={Fuegos}
            img2={Fuegos}
            img3={Fuegos}

          >
            <span className="proj_target">React</span>
            <span className="proj_target">Material UI</span>
            <span className="proj_target">FireBase</span>
          </Card>
        </div>
        <div className="col-lg-6 mb-3">
          <Card
            id='project2'
            project="Optima HRM"
            description="Aplicación web para la gestión de recursos humanos. con chat integreado y notificaciones manejando websokect asignacion de tarea, soliditud de vacaciones y permisos, registro de horario de entrada y salidas."
            link='http://'
            img1={Optima1}
            img2={OptimaSolid}
            img3={OptimaRegistro}
          >
            <span className="proj_target">React</span>
            <span className="proj_target">TypeScript</span>
            <span className="proj_target">NestJs</span>
            <span className="proj_target">MySQL</span>
          </Card>
        </div>
      </section>

      <section className='row mt-2'>
        <div className="col-lg-6 mb-3">
          <Card
            id='project3'
            project="MCV (Mi Can Veterinaria)"
            description="Aplicacion contruida para la gestion de una veterinaria, con registro de mascotas, citas y perfil de usuario, espacio de trabajo para auxiliares y veterinarios. Se diseño con interfaz amigable y facil de usar."
            link='http://'
            img1={Banner}
            img2={MCVregistro}
            img3={MCVperfil}
          >
            <span className="proj_target">React</span>
            <span className="proj_target">Express</span>
            <span className="proj_target">Material UI</span>
            <span className="proj_target">MySQL</span>
          </Card>
        </div>
        <div className="col-lg-6 mb-3">
        </div>
      </section>

      <footer className="row" id='contact'>
        <code className='text-center mt-4 text-secondary fs-8 text-white'>
         Jose Castaño - © 2025
        </code>
      </footer>

    </article>
  )
}

export default Projects