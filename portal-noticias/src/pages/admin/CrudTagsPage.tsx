import React from 'react'
import Sidebar from '../../components/layout/Sidebar'

export default function CrudTagsPage() {
  const tags = ["Política", "Esportes", "Tecnologia"]

  return (
    <div className="layout">
      <Sidebar />

      <div className="container">
        <h1>Tags</h1>

        <div className="tag-list">
          {tags.map((tag, i) => (
            <div key={i} className="tag-card">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}