import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Navbar from './components/Navbar';
import Personas from './pages/personas';
import Tramos from './pages/tramos';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
        <Route path="/tramos" element={<Tramos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
