# 📰 Portal de Notícias — Sistema Web com Controle de Acesso

Aplicação web desenvolvida em *React + TypeScript* que simula um portal de notícias completo, com múltiplos níveis de acesso e funcionalidades administrativas.

---

## ⚙️ 1. Configuração do Ambiente

Antes de executar o projeto, é necessário possuir:

### Pré-requisitos

* *Node.js* (versão 18 ou superior)
  https://nodejs.org/

* *npm* (incluso no Node) ou *yarn*

---

## 📦 2. Instalação do Projeto

Clone o repositório e instale as dependências:

bash
git clone https://github.com/leticia-rsousa/portal-noticias-entrega4.git
cd portal-noticias
npm install


---

## ▶️ 3. Execução da Aplicação

Para iniciar o projeto em ambiente de desenvolvimento:

bash
npm run dev


A aplicação será iniciada em:

👉 http://localhost:5173

---

## 🧾 4. Descrição do Sistema

O sistema consiste em um *portal de notícias com arquitetura modular*, permitindo a gestão de conteúdo e usuários com base em níveis de permissão.

A aplicação simula um ambiente real de produção, incluindo:

* Gerenciamento de usuários
* CRUD completo de notícias
* Organização por localização (UF e cidade)
* Interface responsiva e moderna
* Controle de acesso por perfil

---

## 👥 5. Perfis de Usuário

### 👤 Leitor

* Visualiza notícias
* Filtra por cidade/UF

### ✍️ Autor

* Criação de notícias

### 🛠️ Editor

* Edição e gerenciamento de conteúdo

### 👑 Super Admin

* Controle total do sistema:

  * Gerenciamento de usuários
  * Gerenciamento de notícias
  * Cadastro de estados (UF) e cidades
  * Personalização visual do sistema

---

## 🚀 6. Funcionalidades Implementadas

### 📰 Notícias

* Criação, edição e exclusão
* Listagem dinâmica
* Estrutura com título, subtítulo e conteúdo

### 👤 Usuários

* Cadastro de novos usuários
* Ativação/desativação
* Remoção
* Associação com cidade

### 🌎 Localização

* Cadastro de UF (estado)
* Cadastro de cidades vinculadas

### 🎨 Interface

* Sistema de temas com múltiplos gradientes
* Componentes reutilizáveis (cards, inputs, botões)
* Layout responsivo

---

## 🧱 7. Tecnologias Utilizadas

* *React* — biblioteca para construção da interface
* *TypeScript* — tipagem estática
* *Vite* — ferramenta de build e desenvolvimento
* *React Router DOM* — navegação entre páginas
* *CSS puro* — estilização com design system próprio

---

## 📁 8. Estrutura do Projeto

bash
src/
├── components/
│   ├── layout/       # Header, Footer, Sidebar
│   └── ui/           # Componentes reutilizáveis
│
├── pages/
│   ├── acesso/       # Páginas por perfil (Leitor, Autor, etc)
│   ├── admin/        # CRUD e dashboard administrativo
│   └── publico/      # Páginas públicas (login, home, etc)
│
├── data/             # Dados mockados
├── types/            # Tipagens TypeScript
├── styles/           # Estilos globais
│
├── App.tsx
└── main.tsx


---

## 📊 9. Fonte de Dados

Os dados utilizados são *mockados localmente*, simulando uma API:

bash
src/data/data.ts


---

## 🔧 10. Scripts Disponíveis

bash

npm run dev      # execução em desenvolvimento

npm run build    # build para produção

npm run preview  # visualização do build


---

## 🎯 11. Objetivo Acadêmico

Este projeto foi desenvolvido com o objetivo de:

* Aplicar conceitos de *desenvolvimento frontend moderno*
* Trabalhar com *componentização e reutilização*
* Implementar *controle de acesso por perfil*
* Simular um sistema real com *CRUD completo*
* Desenvolver organização de código em larga escala

---

## 🚀 12. Possíveis Melhorias

* Integração com API backend
* Persistência em banco de dados
* Sistema de autenticação (JWT)
* Upload de imagens
* Dashboard analítico
* Notificações em tempo real

---

## 👨‍💻 Autor

Mateus Vitor

Letícia Rodrigues

---

## 📄 Licença

Uso educacional.
