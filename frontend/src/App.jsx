import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import Navbar from './components/Navbar';

function Carrusel() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />  {/* No uses fragmentos innecesarios aquí */}

      {/* Título */}
      <h1 style={{ textAlign: 'center', paddingTop: '1rem' }}>BASE DE DATOS CENTRALIZADA DEL MEJOR PAIS DE CHILE </h1>

      {/* Carrusel a pantalla completa */}
      <div style={{ width: '100vw' }}>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img src="src/images/img1.jpg" alt="Imagen 1" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Manejamos los datos de todos los chilenos </p>
          </div>
          <div>
            <img src="src/images/img2.png" alt="Imagen 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Conoce los tramos de asignaciíon a beneficios</p>
          </div>
          <div>
            <img src="src/images/img3.jpg" alt="Imagen 3" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Texto de la imagen 3</p>
          </div>
        </Carousel>
      </div>

  
    <div className="info-section">
        <div className="info-block">
          <h1>¿Quiénes somos?</h1>
          <p>
          Somos una plataforma dedicada a la gestión eficiente de información básica de personas de todo el territorio chileno, creada con el propósito de centralizar datos y que estos esten
          disponibles para todas las personas que desean usarlos.
          </p>
        </div>

        <div className="info-block">
          <h1>¿Cómo protegemos tus datos?</h1>
          <p>
          La seguridad de tus datos es nuestra prioridad. Utilizamos cifrado de extremo a extremo, protocolos de seguridad avanzados para resguardar la información. Utilizamos un 
          software propio para esta misión. Nosotros no andamos con cuentos...
          </p>
      </div>
  
    </div>
      
      <div className="info-section_2">

            <h1> Nuestra historia</h1>
          <p>
            
          </p>
          
      </div>



        
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Gestiona personas, descuentos y tramos desde una interfaz amigable.</p>
        <button style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>Ver Personas</button>
        <button style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>Ver Tramos</button>
      </div>
    </div>

    
  );
}

export default Carrusel;
