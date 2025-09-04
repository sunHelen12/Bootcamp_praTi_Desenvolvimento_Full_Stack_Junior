import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa'; // Importando um ícone de filme
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      {/* Link no logo/título para voltar para a página inicial */}
      <Link to="/" className="logo">
        <FaFilm size={28} />
        <h1>CineBusca</h1>
      </Link>
      
      {/* Navegação principal */}
      <nav>
        <ul>
          <li>
            {/* NavLink adiciona uma classe 'active' automaticamente ao link da página atual */}
            <NavLink to="/" end>
              Buscar
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              Meus Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;