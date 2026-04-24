import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import { noticias, usuarios, cidades } from "../../data/data";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const getAutor = (id: number): string => {
    const autor = usuarios.find((u) => u.id === id);
    return autor ? autor.nome : "Autor desconhecido";
  };

  const getCidade = (id: number): string => {
    const cidade = cidades.find((c) => c.id === id);
    return cidade ? cidade.nome : "Local";
  };

  const listaNoticias = Array.isArray(noticias)
    ? noticias.slice(0, 15)
    : [];

  return (
    <div style={pageWrapper}>
      <Header />

      <div className="container">
        <h1 style={title}>Últimas Notícias</h1>

        {listaNoticias.length === 0 ? (
          <p>Nenhuma notícia disponível.</p>
        ) : (
          <div className="news-grid">
            {listaNoticias.map((n) => (
              <div
                key={n.id}
                className="news-card"
                onClick={() => navigate(`/noticia/${n.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={n.imagemCapa}
                  alt={n.titulo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/800x400";
                  }}
                />

                <div className="news-content">
                  <span className="tag">{getCidade(n.cidadeId)}</span>

                  <h3>{n.titulo}</h3>
                  <p>{n.subtitulo}</p>

                  <small>
                    Por {getAutor(n.autorId)} • {n.visualizacoes} views
                  </small>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/noticia/${n.id}`);
                    }}
                  >
                    Ler mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

/* ================= ESTILOS ================= */

const pageWrapper: React.CSSProperties = {
  minHeight: "100vh",
  background: `
    radial-gradient(circle at top left, #2563eb20, transparent 40%),
    radial-gradient(circle at bottom right, #dc262620, transparent 40%),
    #0f172a
  `,
};

const title: React.CSSProperties = {
  marginBottom: 20,
  color: "#fff",
};

export default HomePage;