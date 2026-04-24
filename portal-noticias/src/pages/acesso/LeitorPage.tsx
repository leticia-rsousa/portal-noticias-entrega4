import React from "react";
import { useNavigate } from "react-router-dom";
import { noticias } from "../../data/data";

const LeitorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        padding: 30,
      }}
    >
      {/* BOTÃO VOLTAR */}
      <button
        className="btn-primary"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 999,
        }}
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>

      <div className="container">
        <h1 style={{ color: "white", marginBottom: 20 }}>
          Área do Leitor
        </h1>

        <div className="news-grid">
          {noticias.map((n) => (
            <div
              key={n.id}
              className="news-card"
              onClick={() => navigate(`/noticia/${n.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={n.imagemCapa} alt={n.titulo} />

              <div className="news-content">
                <h3>{n.titulo}</h3>
                <p>{n.subtitulo}</p>

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
      </div>
    </div>
  );
};

export default LeitorPage;