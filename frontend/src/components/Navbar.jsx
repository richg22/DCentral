import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src="src/images/xd2.png" alt="logo" width="40" />
        Data Central
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate('/')}>Inicio</button>
        <button onClick={() => navigate('/personas')}>Personas</button>
        <button onClick={() => navigate('/tramos')}>Tramos</button>
      </div>
    </nav>
  );
};

export default Navbar;
