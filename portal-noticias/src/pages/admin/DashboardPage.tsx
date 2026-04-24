import Sidebar from "../../components/layout/Sidebar";
import { noticias, cidades } from "../../data/data";

export default function DashboardPage() {
  const total = noticias.length;

  const publicadas = noticias.filter(n => n.publicada).length;

  const totalCidades = [
    ...new Set(noticias.map(n => n.cidadeId))
  ].length;

  return (
    <div className="layout">
      <Sidebar />

      <div className="container">
        <h1>Dashboard</h1>

        <div className="stats">
          <div className="stat-card">
            <h3>{total}</h3>
            <p>Total de Notícias</p>
          </div>

          <div className="stat-card">
            <h3>{publicadas}</h3>
            <p>Publicadas</p>
          </div>

          <div className="stat-card">
            <h3>{totalCidades}</h3>
            <p>Cidades com Notícias</p>
          </div>
        </div>
      </div>
    </div>
  );
}