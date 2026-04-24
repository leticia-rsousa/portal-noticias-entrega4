import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const BuscaPorTagPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Header />

      <div className="container">
        <h1>Busca por Tag</h1>
        <p>Tag selecionada: {slug}</p>
      </div>

      <Footer />
    </>
  );
};

export default BuscaPorTagPage;