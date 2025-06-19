import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

// Imágenes
import imagen1 from '../images/img1.jpg';
import imagen2 from '../images/img2.png';
import imagen3 from '../images/img3.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Título principal */}
      <h1 style={{ textAlign: 'center', paddingTop: '1rem' }}>
        BASE DE DATOS CENTRALIZADA DEL MEJOR PAÍS DE CHILE
      </h1>

      {/* Carrusel de imágenes */}
      <div style={{ width: '100vw' }}>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img
              src={imagen1}
              alt="Imagen 1"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <p className="legend">Manejamos los datos de todos los chilenos</p>
          </div>
          <div>
            <img
              src={imagen2}
              alt="Imagen 2"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <p className="legend">Conoce los tramos de asignación a beneficios</p>
          </div>
          <div>
            <img
              src={imagen3}
              alt="Imagen 3"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <p className="legend">Texto de la imagen 3</p>
          </div>
        </Carousel>
      </div>

      {/* Sección de información */}
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

      {/* Historia */}
      <div className="info-section_2">
        <h1>Nuestra historia</h1>
        <p></p>
      </div>

      {/* Botones de navegación */}
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

      {/* Footer institucional */}
      <footer
        style={{
          backgroundColor: '#003366',
          color: 'white',
          padding: '2rem 1rem',
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <strong>Servicio Nacional de Datos Ciudadanos</strong><br />
          República de Chile – Todos los derechos reservados © {new Date().getFullYear()}
        </div>
        <div>
          <a
            href="https://www.gob.cl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', margin: '0 1rem', textDecoration: 'underline' }}
          >
            gob.cl
          </a>
          <a
            href="https://www.chileatiende.gob.cl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', margin: '0 1rem', textDecoration: 'underline' }}
          >
            ChileAtiende
          </a>
          <a
            href="/politicas-privacidad"
            style={{ color: '#ffffff', margin: '0 1rem', textDecoration: 'underline' }}
          >
            Políticas de Privacidad
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
