import { Noticia, Usuario, Cidade } from "../types";

/* ================= USUÁRIOS ================= */
export const usuarios: Usuario[] = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    perfil: "AUTOR",
    avatar: "",
    bio: "Autor tech",
    cidadeId: 1,
    ativo: true,
    criadoEm: "2024-01-01",
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    perfil: "EDITOR",
    avatar: "",
    bio: "Editora",
    cidadeId: 2,
    ativo: true,
    criadoEm: "2024-01-01",
  },
  {
    id: 3,
    nome: "Carlos Lima",
    email: "carlos@email.com",
    perfil: "LEITOR",
    avatar: "",
    bio: "Leitor",
    cidadeId: 3,
    ativo: true,
    criadoEm: "2024-01-01",
  },
  {
    id: 4,
    nome: "Ana Costa",
    email: "ana@email.com",
    perfil: "SUPERADMIN",
    avatar: "",
    bio: "Admin geral",
    cidadeId: 1,
    ativo: true,
    criadoEm: "2024-01-01",
  },
];

/* ================= CIDADES ================= */
export const cidades: Cidade[] = [
  { id: 1, nome: "São Paulo", ufId: 1 },
  { id: 2, nome: "Rio de Janeiro", ufId: 2 },
  { id: 3, nome: "Belo Horizonte", ufId: 3 },
  { id: 4, nome: "Curitiba", ufId: 4 },
];

/* ================= NOTÍCIAS ================= */
export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Árvore cai no centro de São Paulo após tempestade",
    subtitulo: "Queda bloqueou trânsito e assustou pedestres",
    conteudo: `
Uma forte tempestade atingiu a capital paulista na tarde desta terça-feira, provocando a queda de uma árvore de grande porte na região central.

O incidente causou congestionamento e mobilizou equipes da prefeitura. Felizmente, não houve feridos graves, mas veículos foram danificados.

Especialistas alertam para a necessidade de manutenção preventiva em árvores urbanas.
    `,
    imagemCapa: "https://picsum.photos/seed/sp1/800/400",
    autorId: 1,
    cidadeId: 1,
    tags: [1],
    publicada: true,
    criadoEm: "2024-01-01",
    atualizadoEm: "2024-01-01",
    visualizacoes: 230,
  },

  {
    id: 2,
    titulo: "Praias do Rio registram lotação máxima no verão",
    subtitulo: "Turistas impulsionam economia local",
    conteudo: `
O calor intenso levou milhares de turistas às praias cariocas neste fim de semana.

Hotéis registraram ocupação máxima e comerciantes comemoram o aumento nas vendas.

Autoridades reforçaram a segurança para garantir tranquilidade aos visitantes.
    `,
    imagemCapa: "https://picsum.photos/seed/rj2/800/400",
    autorId: 2,
    cidadeId: 2,
    tags: [2],
    publicada: true,
    criadoEm: "2024-01-02",
    atualizadoEm: "2024-01-02",
    visualizacoes: 410,
  },

  {
    id: 3,
    titulo: "Startup brasileira desenvolve IA inovadora",
    subtitulo: "Tecnologia promete revolucionar o mercado",
    conteudo: `
Uma startup nacional apresentou uma solução de inteligência artificial capaz de automatizar processos complexos.

O projeto já chamou atenção de investidores internacionais e pode colocar o Brasil em destaque no setor.
    `,
    imagemCapa: "https://picsum.photos/seed/ia3/800/400",
    autorId: 1,
    cidadeId: 1,
    tags: [1],
    publicada: true,
    criadoEm: "2024-01-03",
    atualizadoEm: "2024-01-03",
    visualizacoes: 320,
  },

  {
    id: 4,
    titulo: "Hospital de BH recebe novos equipamentos",
    subtitulo: "Modernização melhora atendimento",
    conteudo: `
O principal hospital público de Belo Horizonte recebeu novos equipamentos de última geração.

A modernização promete reduzir filas e melhorar a qualidade dos atendimentos.
    `,
    imagemCapa: "https://picsum.photos/seed/bh4/800/400",
    autorId: 4,
    cidadeId: 3,
    tags: [4],
    publicada: true,
    criadoEm: "2024-01-04",
    atualizadoEm: "2024-01-04",
    visualizacoes: 150,
  },

  {
    id: 5,
    titulo: "Curitiba investe em transporte sustentável",
    subtitulo: "Novos ônibus elétricos começam a circular",
    conteudo: `
A cidade de Curitiba iniciou a implementação de ônibus elétricos em sua frota.

A iniciativa visa reduzir a emissão de poluentes e melhorar a mobilidade urbana.
    `,
    imagemCapa: "https://picsum.photos/seed/ctba5/800/400",
    autorId: 3,
    cidadeId: 4,
    tags: [5],
    publicada: true,
    criadoEm: "2024-01-05",
    atualizadoEm: "2024-01-05",
    visualizacoes: 190,
  },

  // 👉 restante segue padrão (com nomes únicos)

  {
    id: 6,
    titulo: "Educação online cresce no Brasil",
    subtitulo: "Plataformas digitais ganham espaço",
    conteudo: "Cursos online estão se tornando cada vez mais populares...",
    imagemCapa: "https://picsum.photos/seed/edu6/800/400",
    autorId: 3,
    cidadeId: 1,
    tags: [6],
    publicada: true,
    criadoEm: "2024-01-06",
    atualizadoEm: "2024-01-06",
    visualizacoes: 120,
  },

  {
    id: 7,
    titulo: "Mercado financeiro surpreende analistas",
    subtitulo: "Bolsa fecha em alta",
    conteudo: "O mercado apresentou crescimento inesperado...",
    imagemCapa: "https://picsum.photos/seed/fin7/800/400",
    autorId: 2,
    cidadeId: 2,
    tags: [3],
    publicada: true,
    criadoEm: "2024-01-07",
    atualizadoEm: "2024-01-07",
    visualizacoes: 280,
  },

  {
    id: 8,
    titulo: "Festival cultural atrai multidões",
    subtitulo: "Evento bate recorde de público",
    conteudo: "O festival reuniu milhares de pessoas...",
    imagemCapa: "https://picsum.photos/seed/cultura8/800/400",
    autorId: 4,
    cidadeId: 3,
    tags: [8],
    publicada: true,
    criadoEm: "2024-01-08",
    atualizadoEm: "2024-01-08",
    visualizacoes: 200,
  },

  {
    id: 9,
    titulo: "E-commerce dispara no país",
    subtitulo: "Compras online crescem 30%",
    conteudo: "O comércio eletrônico segue em alta...",
    imagemCapa: "https://picsum.photos/seed/shop9/800/400",
    autorId: 1,
    cidadeId: 2,
    tags: [3],
    publicada: true,
    criadoEm: "2024-01-09",
    atualizadoEm: "2024-01-09",
    visualizacoes: 260,
  },

  {
    id: 10,
    titulo: "Setor aéreo se recupera",
    subtitulo: "Número de voos aumenta",
    conteudo: "A aviação volta a crescer...",
    imagemCapa: "https://picsum.photos/seed/plane10/800/400",
    autorId: 2,
    cidadeId: 2,
    tags: [9],
    publicada: true,
    criadoEm: "2024-01-10",
    atualizadoEm: "2024-01-10",
    visualizacoes: 180,
  },

  {
    id: 11,
    titulo: "Energia solar cresce no Brasil",
    subtitulo: "Investimentos aumentam",
    conteudo: "Energia renovável ganha força...",
    imagemCapa: "https://picsum.photos/seed/solar11/800/400",
    autorId: 3,
    cidadeId: 4,
    tags: [7],
    publicada: true,
    criadoEm: "2024-01-11",
    atualizadoEm: "2024-01-11",
    visualizacoes: 210,
  },

  {
    id: 12,
    titulo: "Indústria de games bate recorde",
    subtitulo: "Mercado cresce globalmente",
    conteudo: "Jogos digitais estão em alta...",
    imagemCapa: "https://picsum.photos/seed/game12/800/400",
    autorId: 1,
    cidadeId: 1,
    tags: [1],
    publicada: true,
    criadoEm: "2024-01-12",
    atualizadoEm: "2024-01-12",
    visualizacoes: 300,
  },

  {
    id: 13,
    titulo: "Tecnologia 5G avança",
    subtitulo: "Cobertura aumenta",
    conteudo: "Expansão da rede 5G continua...",
    imagemCapa: "https://picsum.photos/seed/5g13/800/400",
    autorId: 2,
    cidadeId: 3,
    tags: [1],
    publicada: true,
    criadoEm: "2024-01-13",
    atualizadoEm: "2024-01-13",
    visualizacoes: 270,
  },

  {
    id: 14,
    titulo: "Mobilidade urbana melhora",
    subtitulo: "Novos projetos em andamento",
    conteudo: "Cidades investem em transporte...",
    imagemCapa: "https://picsum.photos/seed/mobi14/800/400",
    autorId: 4,
    cidadeId: 3,
    tags: [10],
    publicada: true,
    criadoEm: "2024-01-14",
    atualizadoEm: "2024-01-14",
    visualizacoes: 190,
  },

  {
    id: 15,
    titulo: "Inovação tecnológica acelera",
    subtitulo: "Novas soluções surgem",
    conteudo: "Empresas apostam em inovação...",
    imagemCapa: "https://picsum.photos/seed/tech15/800/400",
    autorId: 1,
    cidadeId: 1,
    tags: [1],
    publicada: true,
    criadoEm: "2024-01-15",
    atualizadoEm: "2024-01-15",
    visualizacoes: 340,
  },
];