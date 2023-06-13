import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar';
import Artistas from './paginas/artistas';
import Homepage from './paginas/homepage';
import Enterro from './paginas/opiniao/enterro';
import Mid from './paginas/opiniao/mid';
import Opinioes from './paginas/opinioes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="paginas/artistas" element={<Artistas />} />
        <Route path="paginas/opinioes" element={<Opinioes />} />
        <Route path="paginas/opiniao/mid" element={<Mid />} />
        <Route path="paginas/opiniao/enterro" element={<Enterro />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
