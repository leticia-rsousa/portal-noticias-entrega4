import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  usuarios as dataUsuarios,
  noticias as dataNoticias,
  cidades as dataCidades,
} from "../../data/data";

import { Usuario, Noticia, Perfil, Cidade } from "../../types";

type UF = {
  id: number;
  nome: string;
  sigla: string;
};

const SuperAdminPage: React.FC = () => {
  const navigate = useNavigate();

  const [aba, setAba] = useState<
    "usuarios" | "noticias" | "criar" | "localizacao"
  >("usuarios");

  const [usuarios, setUsuarios] = useState<Usuario[]>(dataUsuarios);
  const [noticias, setNoticias] = useState<Noticia[]>(dataNoticias);
  const [cidades, setCidades] = useState<Cidade[]>(dataCidades);

  const [ufs, setUfs] = useState<UF[]>([
    { id: 1, nome: "São Paulo", sigla: "SP" },
    { id: 2, nome: "Rio de Janeiro", sigla: "RJ" },
    { id: 3, nome: "Minas Gerais", sigla: "MG" },
    { id: 4, nome: "Paraná", sigla: "PR" },
  ]);

  // 🎨 FUNDO
  const cores = [
    "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
    "linear-gradient(135deg, #111827, #374151, #6b7280)",
    "linear-gradient(135deg, #14532d, #166534, #22c55e)",
    "linear-gradient(135deg, #7f1d1d, #b91c1c, #ef4444)",
    "linear-gradient(135deg, #1e293b, #0f172a, #020617)",
  ];
  const [bg, setBg] = useState(cores[0]);

  // ================= USUÁRIOS =================

  const toggleAtivo = (id: number) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, ativo: !u.ativo } : u
      )
    );
  };

  const removerUsuario = (id: number) => {
    if (!window.confirm("Remover usuário?")) return;
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
  };

  const alterarCidade = (userId: number, cidadeId: number) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, cidadeId } : u
      )
    );
  };

  // ================= NOTÍCIAS =================

  const removerNoticia = (id: number) => {
    if (!window.confirm("Excluir notícia?")) return;
    setNoticias((prev) => prev.filter((n) => n.id !== id));
  };

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [tituloEdit, setTituloEdit] = useState("");
  const [subEdit, setSubEdit] = useState("");

  const iniciarEdicao = (n: Noticia) => {
    setEditandoId(n.id);
    setTituloEdit(n.titulo);
    setSubEdit(n.subtitulo);
  };

  const salvarEdicao = (id: number) => {
    setNoticias((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, titulo: tituloEdit, subtitulo: subEdit }
          : n
      )
    );
    setEditandoId(null);
  };

  const criarNovaNoticia = () => {
    const nova: Noticia = {
      id: Date.now(),
      titulo: "Nova notícia criada",
      subtitulo: "Resumo da nova notícia",
      conteudo: "Conteúdo...",
      imagemCapa: "https://picsum.photos/800/400",
      autorId: 1,
      cidadeId: 1,
      tags: [1],
      publicada: true,
      criadoEm: new Date().toISOString(),
      atualizadoEm: new Date().toISOString(),
      visualizacoes: 0,
    };

    setNoticias((prev) => [nova, ...prev]);
  };

  // ================= CRIAR USUÁRIO =================

  const [novoNome, setNovoNome] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novoPerfil, setNovoPerfil] = useState<Perfil>("LEITOR");

  const criarUsuario = () => {
    if (!novoNome || !novoEmail) return;

    const novo: Usuario = {
      id: Date.now(),
      nome: novoNome,
      email: novoEmail,
      perfil: novoPerfil,
      avatar: "",
      bio: "",
      cidadeId: 1,
      ativo: true,
      criadoEm: new Date().toISOString(),
    };

    setUsuarios((prev) => [...prev, novo]);

    setNovoNome("");
    setNovoEmail("");
    setNovoPerfil("LEITOR");

    setAba("usuarios");
  };

  // ================= LOCALIZAÇÃO =================

  const [novoUFNome, setNovoUFNome] = useState("");
  const [novaSigla, setNovaSigla] = useState("");

  const criarUF = () => {
    if (!novoUFNome || !novaSigla) return;

    setUfs((prev) => [
      ...prev,
      { id: Date.now(), nome: novoUFNome, sigla: novaSigla },
    ]);

    setNovoUFNome("");
    setNovaSigla("");
  };

  const [novaCidadeNome, setNovaCidadeNome] = useState("");
  const [ufSelecionada, setUfSelecionada] = useState(1);

  const criarCidade = () => {
    if (!novaCidadeNome) return;

    setCidades((prev) => [
      ...prev,
      { id: Date.now(), nome: novaCidadeNome, ufId: ufSelecionada },
    ]);

    setNovaCidadeNome("");
  };

  // ================= UI =================

  return (
    <div style={{ minHeight: "100vh", background: bg, padding: 30 }}>
      
      {/* 🔙 VOLTAR */}
      <button
        className="btn-primary"
        style={{ position: "fixed", top: 20, left: 20 }}
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>

      {/* 🎨 COR */}
      <button
        className="btn-danger"
        style={{ position: "fixed", top: 20, right: 20 }}
        onClick={() =>
          setBg(cores[Math.floor(Math.random() * cores.length)])
        }
      >
        🎨 Fundo
      </button>

      <div className="container">
        <h1 style={{ color: "white" }}>Super Admin</h1>

        {/* MENU */}
        <div style={{ marginBottom: 20 }}>
          <button className="btn-primary" onClick={() => setAba("usuarios")}>
            Usuários
          </button>
          <button className="btn-primary" style={{ marginLeft: 10 }} onClick={() => setAba("noticias")}>
            Notícias
          </button>
          <button className="btn-primary" style={{ marginLeft: 10 }} onClick={() => setAba("criar")}>
            Criar Usuário
          </button>
          <button className="btn-primary" style={{ marginLeft: 10 }} onClick={() => setAba("localizacao")}>
            Localização
          </button>
        </div>

        {/* NOTÍCIAS */}
        {aba === "noticias" && (
          <>
            <button className="btn-primary" onClick={criarNovaNoticia}>
              + Nova Notícia
            </button>

            {noticias.map((n) => (
              <div key={n.id} className="card" style={{ padding: 15, marginBottom: 15 }}>
                {editandoId === n.id ? (
                  <>
                    <input value={tituloEdit} onChange={(e) => setTituloEdit(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />
                    <input value={subEdit} onChange={(e) => setSubEdit(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />
                    <button className="btn-primary" onClick={() => salvarEdicao(n.id)}>Salvar</button>
                  </>
                ) : (
                  <>
                    <strong>{n.titulo}</strong>
                    <p>{n.subtitulo}</p>
                  </>
                )}

                <div style={{ marginTop: 10 }}>
                  <button className="btn-primary" onClick={() => iniciarEdicao(n)}>
                    Editar
                  </button>
                  <button className="btn-danger" style={{ marginLeft: 10 }} onClick={() => removerNoticia(n.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* USUÁRIOS */}
        {aba === "usuarios" &&
          usuarios.map((u) => (
            <div key={u.id} className="card" style={{ padding: 15, marginBottom: 15 }}>
              <strong>{u.nome}</strong>
              <p>{u.email}</p>

              <select
                value={u.cidadeId}
                onChange={(e) => alterarCidade(u.id, Number(e.target.value))}
                style={{ width: "100%", marginTop: 10 }}
              >
                {cidades.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: 10 }}>
                <button className="btn-primary" onClick={() => toggleAtivo(u.id)}>
                  {u.ativo ? "Desativar" : "Ativar"}
                </button>
                <button className="btn-danger" style={{ marginLeft: 10 }} onClick={() => removerUsuario(u.id)}>
                  Remover
                </button>
              </div>
            </div>
          ))}

        {/* CRIAR */}
        {aba === "criar" && (
          <div className="card" style={{ padding: 20, maxWidth: 450 }}>
            <h2>Criar Usuário</h2>

            <input placeholder="Nome" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />
            <input placeholder="Email" value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />

            <select value={novoPerfil} onChange={(e) => setNovoPerfil(e.target.value as Perfil)} style={{ width: "100%", marginBottom: 10 }}>
              <option value="LEITOR">Leitor</option>
              <option value="AUTOR">Autor</option>
              <option value="EDITOR">Editor</option>
              <option value="SUPERADMIN">Admin</option>
            </select>

            <button className="btn-primary" style={{ width: "100%" }} onClick={criarUsuario}>
              Criar
            </button>
          </div>
        )}

        {/* LOCALIZAÇÃO */}
        {aba === "localizacao" && (
          <div className="card" style={{ padding: 20, maxWidth: 500 }}>
            <h2>Localização</h2>

            <input placeholder="Estado" value={novoUFNome} onChange={(e) => setNovoUFNome(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />
            <input placeholder="Sigla" value={novaSigla} onChange={(e) => setNovaSigla(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />

            <button className="btn-primary" style={{ width: "100%" }} onClick={criarUF}>
              Criar UF
            </button>

            <hr />

            <input placeholder="Cidade" value={novaCidadeNome} onChange={(e) => setNovaCidadeNome(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />

            <select value={ufSelecionada} onChange={(e) => setUfSelecionada(Number(e.target.value))} style={{ width: "100%", marginBottom: 10 }}>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.id}>
                  {uf.nome}
                </option>
              ))}
            </select>

            <button className="btn-primary" style={{ width: "100%" }} onClick={criarCidade}>
              Criar Cidade
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminPage;