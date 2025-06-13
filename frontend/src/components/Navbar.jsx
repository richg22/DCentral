import './Navbar.css'; 
import React from 'react';
import { Link } from 'react-router-dom'; // <-- ESTA LÍNEA FALTABA

const Navbar = () => {
  console.log("Navbar cargado");
  return (
    <nav className="navbar">
     

        <div className="navbar-logo">  
                <img src="src/images/xd2.png" alt="Imagen 1" width="50px" height="50px"/>
             Data Central </div>

        <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/personas">Personas</Link></li>
            <li><Link to="/tramos">Tramos</Link></li>
        </ul>
    </nav>  
  );
}

export default Navbar;
