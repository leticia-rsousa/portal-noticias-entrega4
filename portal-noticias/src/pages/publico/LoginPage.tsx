import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
      }}
    >
      {/* 🔙 BOTÃO VOLTAR */}
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

      <div
        style={{
          width: 350,
          padding: 30,
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2>Login</h2>

        <input placeholder="E-mail" style={input} />
        <input placeholder="Senha" type="password" style={input} />

        <button style={btnPrimary}>Entrar</button>

        <p style={{ marginTop: 10 }}>
          Não tem conta?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </span>
        </p>

        <hr />

        <h4>Acesso Rápido</h4>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button style={btnRoleBlue} onClick={() => navigate("/leitor")}>
            LEITOR
          </button>

          <button style={btnRoleBlue} onClick={() => navigate("/autor")}>
            AUTOR
          </button>

          <button style={btnRoleBlue} onClick={() => navigate("/editor")}>
            EDITOR
          </button>

          <button style={btnRoleRed} onClick={() => navigate("/admin")}>
            SUPERADMIN
          </button>
        </div>
      </div>
    </div>
  );
};

const input = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const btnPrimary = {
  marginTop: 15,
  padding: 10,
  width: "100%",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

const btnRoleBlue = {
  flex: "1 1 45%",
  padding: 8,
  border: "2px solid #2563eb",
  background: "#2563eb",
  color: "white",
  borderRadius: 6,
  cursor: "pointer",
};

const btnRoleRed = {
  flex: "1 1 45%",
  padding: 8,
  border: "2px solid red",
  background: "red",
  color: "white",
  borderRadius: 6,
  cursor: "pointer",
};

export default LoginPage;