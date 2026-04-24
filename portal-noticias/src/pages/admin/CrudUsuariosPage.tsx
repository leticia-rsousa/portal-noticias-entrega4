import React from 'react'
import Sidebar from '../../components/layout/Sidebar'

export default function CrudUsuariosPage() {
  const usuarios = [
    { nome: "João", perfil: "Autor" },
    { nome: "Maria", perfil: "Editor" }
  ]

  return (
    <div className="layout">
      <Sidebar />

      <div className="container">
        <h1>Usuários</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Perfil</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((u, i) => (
              <tr key={i}>
                <td>{u.nome}</td>
                <td>{u.perfil}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}