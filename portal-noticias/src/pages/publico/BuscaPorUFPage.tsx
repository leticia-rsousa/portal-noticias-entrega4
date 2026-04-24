import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const BuscaPorUFPage: React.FC = () => {
  const { sigla } = useParams<{ sigla: string }>();

  return (
    <>
      <Header />

      <div className="container">
        <h1>Busca por UF</h1>
        <p>UF selecionada: {sigla}</p>
      </div>

      <Footer />
    </>
  );
};

export default BuscaPorUFPage;