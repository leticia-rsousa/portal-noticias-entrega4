import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noticias } from "../../data/data";

const EditorPage: React.FC = () => {
  const navigate = useNavigate();
  const [lista, setLista] = useState(noticias);

  const aprovar = (id: number) => {
    alert("Notícia aprovada");
    setLista((prev) => prev.filter((n) => n.id !== id));
  };

  const rejeitar = (id: number) => {
    alert("Notícia rejeitada");
    setLista((prev) => prev.filter((n) => n.id !== id));
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
          Área do Editor
        </h1>

        {lista.map((n) => (
          <div
            key={n.id}
            className="card"
            style={{
              marginBottom: 15,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
            }}
          >
            <div>
              <h3>{n.titulo}</h3>
              <p>{n.subtitulo}</p>
            </div>

            <div>
              <button
                className="btn-primary"
                onClick={() => aprovar(n.id)}
              >
                Aprovar
              </button>

              <button
                className="btn-danger"
                style={{ marginLeft: 10 }}
                onClick={() => rejeitar(n.id)}
              >
                Rejeitar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorPage;