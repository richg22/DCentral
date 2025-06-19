import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personas from './pages/Personas';
import Tramos from './pages/Tramos';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/tramos" element={<Tramos />} />
      </Routes>
    </>
  );
}

export default App;
