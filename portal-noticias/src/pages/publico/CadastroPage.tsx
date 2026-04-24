import React, { useState } from "react";

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Cadastro</h1>

        <input placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
        <input placeholder="Confirmar senha" type="password" />

        <button className="btn-primary">Criar Conta</button>
      </div>
    </div>
  );
};

export default CadastroPage;