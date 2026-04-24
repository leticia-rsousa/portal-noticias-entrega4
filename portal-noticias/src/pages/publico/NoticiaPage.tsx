import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import { noticias, usuarios, cidades } from "../../data/data";

const NoticiaPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) return <div>Notícia não encontrada</div>;

  const autor = usuarios.find((u) => u.id === noticia.autorId);
  const cidade = cidades.find((c) => c.id === noticia.cidadeId);

  return (
    <>
      <Header />

      <div className="container">
        <img
          src={noticia.imagemCapa}
          alt={noticia.titulo}
          style={{ width: "100%", borderRadius: 10 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/1200x600";
          }}
        />

        <h1>{noticia.titulo}</h1>
        <h3>{noticia.subtitulo}</h3>

        <p>
          {autor?.nome} • {cidade?.nome}
        </p>

        <p>{noticia.conteudo}</p>

        <button onClick={() => navigate("/")}>Voltar</button>
      </div>

      <Footer />
    </>
  );
};

export default NoticiaPage;