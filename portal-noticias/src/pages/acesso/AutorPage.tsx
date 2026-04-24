import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noticias } from "../../data/data";

const AutorPage: React.FC = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const minhasNoticias = noticias.slice(0, 5);

  const publicar = () => {
    alert("Notícia publicada (simulação)");
    setTitulo("");
    setConteudo("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        padding: 30,
      }}
    >
      {/* 🔙 VOLTAR */}
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
          Área do Autor
        </h1>

        <div className="grid-2">
          {/* FORM */}
          <div className="card" style={{ padding: 20 }}>
            <h2>Nova Notícia</h2>

            <input
              className="input"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              style={{ marginTop: 10 }}
            />

            <textarea
              className="textarea"
              placeholder="Conteúdo"
              rows={6}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              style={{ marginTop: 10 }}
            />

            <button
              className="btn-primary"
              style={{ marginTop: 15 }}
              onClick={publicar}
            >
              Publicar
            </button>
          </div>

          {/* LISTA */}
          <div className="card" style={{ padding: 20 }}>
            <h2>Minhas Notícias</h2>

            {minhasNoticias.map((n) => (
              <div key={n.id} style={{ padding: 10 }}>
                <strong>{n.titulo}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutorPage;