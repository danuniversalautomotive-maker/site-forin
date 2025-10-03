import './App.css';
import Header from './assets/componentes/header/header';
import Banner from './assets/componentes/banner/banner';
import ProdutosServicos from './assets/componentes/produtosServicos/produtosServicos';
import Sobre from './assets/componentes/sobre/sobre';
import Footer from './assets/componentes/footer/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Orcamento from './orcamento';
import Portifolio from './portifolio';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Página inicial */}
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <ProdutosServicos />
              <Sobre />
            </>
          } 
        />

        {/* Página de contato */}
        <Route path="/contato" element={<Contato />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/portifolio" element={<Portifolio />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
