import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Navbar />

      <h1 style={{ textAlign: 'center', paddingTop: '1rem' }}>
        BASE DE DATOS CENTRALIZADA DEL MEJOR PAIS DE CHILE
      </h1>

      <div style={{ width: '100vw' }}>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img src="src/images/img1.jpg" alt="Imagen 1" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Manejamos los datos de todos los chilenos</p>
          </div>
          <div>
            <img src="src/images/img2.png" alt="Imagen 2" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <p className="legend">Conoce los tramos de asignación a beneficios</p>
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
            Somos una plataforma dedicada a la gestión eficiente de información básica de personas de todo el territorio chileno...
          </p>
        </div>

        <div className="info-block">
          <h1>¿Cómo protegemos tus datos?</h1>
          <p>
            La seguridad de tus datos es nuestra prioridad...
          </p>
        </div>
      </div>

      <div className="info-section_2">
        <h1>Nuestra historia</h1>
        <p></p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Gestiona personas, descuentos y tramos desde una interfaz amigable.</p>
        <button
          onClick={() => navigate('/personas')}
          style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}
        >
          Ver Personas
        </button>
        <button
          onClick={() => navigate('/tramos')}
          style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}
        >
          Ver Tramos
        </button>
      </div>
    </div>
  );
}

export default Home;
