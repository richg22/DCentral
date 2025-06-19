import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const irAInicio = () => navigate('/');
  const irAPersonas = () => navigate('/personas');
  const irATramos = () => navigate('/tramos');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/images/xd2.png" alt="logo" width="50px" height="50px" />
        Data Central
      </div>
      <div className="navbar-links">
        <button onClick={irAInicio}>Inicio</button>
        <button onClick={irAPersonas}>Personas</button>
        <button onClick={irATramos}>Tramos</button>
      </div>
    </nav>
  );
};

export default Navbar;
