import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/publico/HomePage";
import LoginPage from "./pages/publico/LoginPage";
import CadastroPage from "./pages/publico/CadastroPage";
import NoticiaPage from "./pages/publico/NoticiaPage";

import LeitorPage from "./pages/acesso/LeitorPage";
import AutorPage from "./pages/acesso/AutorPage";
import EditorPage from "./pages/acesso/EditorPage";
import SuperAdminPage from "./pages/acesso/SuperAdminPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLICO */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/noticia/:id" element={<NoticiaPage />} />

        {/* ACESSO RAPIDO */}
        <Route path="/leitor" element={<LeitorPage />} />
        <Route path="/autor" element={<AutorPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/admin" element={<SuperAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;