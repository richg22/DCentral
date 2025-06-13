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
      <h1 style={{ textAlign: 'center', paddingTop: '1rem' }}>MI PRIMERA PAGINA EN REACT JOJOJO</h1>

      {/* Carrusel a pantalla completa */}
      <div style={{ width: '100vw' }}>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img src="src/images/img1.jpg" alt="Imagen 1" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Texto de la imagen 1</p>
          </div>
          <div>
            <img src="src/images/img2.jpg" alt="Imagen 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Texto de la imagen 2</p>
          </div>
          <div>
            <img src="src/images/img3.jpg" alt="Imagen 3" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Texto de la imagen 3</p>
          </div>
        </Carousel>
      </div>

      {/* Texto y botones */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Gestiona personas, descuentos y tramos desde una interfaz amigable.</p>
        <button style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>Ver Personas</button>
        <button style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>Ver Tramos</button>
      </div>
    </div>
  );
}

export default Carrusel;
