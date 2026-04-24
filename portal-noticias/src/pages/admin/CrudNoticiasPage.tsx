import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { noticias as dataInicial } from "../../data/data";
import { Noticia } from "../../types";

const CrudNoticiasPage: React.FC = () => {
  const [lista, setLista] = useState<Noticia[]>(
    Array.isArray(dataInicial) ? (dataInicial as Noticia[]) : []
  );

  const remover = (id: number) => {
    const confirmar = window.confirm("Deseja excluir esta notícia?");
    if (!confirmar) return;

    setLista((prev) => prev.filter((n) => n.id !== id));
  };

  const adicionar = () => {
    const nova: Noticia = {
      id: Date.now(),
      titulo: "Nova notícia criada",
      subtitulo: "Subtítulo automático",
      conteudo: "Conteúdo gerado automaticamente...",
      imagemCapa:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      autorId: 1,
      cidadeId: 1,
      tags: [1],
      publicada: false,
      criadoEm: new Date().toISOString(),
      atualizadoEm: new Date().toISOString(),
      visualizacoes: 0,
    };

    setLista((prev) => [nova, ...prev]);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="container">
        <h1>Gerenciar Notícias</h1>

        <button className="btn-primary" onClick={adicionar}>
          + Nova Notícia
        </button>

        {lista.length === 0 ? (
          <p>Nenhuma notícia cadastrada.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Status</th>
                <th>Visualizações</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {lista.map((n) => (
                <tr key={n.id}>
                  <td>{n.titulo}</td>
                  <td>{n.publicada ? "Publicada" : "Rascunho"}</td>
                  <td>{n.visualizacoes}</td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => remover(n.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CrudNoticiasPage;