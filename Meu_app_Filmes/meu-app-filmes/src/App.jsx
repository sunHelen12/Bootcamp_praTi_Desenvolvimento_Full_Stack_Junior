import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa os componentes principais
import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';

// Importa um CSS global para a aplicação
import './App.css';

function App() {
  return (
    //  BrowserRouter envolve toda a aplicação para habilitar o roteamento
    <BrowserRouter>
      {/*  O Header fica fora do Routes para aparecer em todas as páginas */}
      <Header />

      {/*  O container principal da aplicação */}
      <main className="main-container">
        {/* Routes define a área onde as páginas serão trocadas */}
        <Routes>
          {/* Rota para a página inicial de Busca */}
          <Route path="/" element={<Search />} />

          {/* Rota para a página de Favoritos */}
          <Route path="/favorites" element={<Favorites />} />

          {/* Rota dinâmica para a página de Detalhes. O ':id' é um parâmetro. */}
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;