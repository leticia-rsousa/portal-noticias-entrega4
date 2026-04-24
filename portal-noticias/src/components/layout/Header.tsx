import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">📰 Portal Notícias</div>

      <nav className="nav">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/cadastro" className="nav-btn">Cadastro</Link>
      </nav>
    </header>
  );
};

export default Header;