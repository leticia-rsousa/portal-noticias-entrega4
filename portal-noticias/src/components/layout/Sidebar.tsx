import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>

      <Link to="/admin/dashboard" className="menu-item">
        Dashboard
      </Link>

      <Link to="/admin/noticias" className="menu-item">
        Notícias
      </Link>

      <Link to="/admin/tags" className="menu-item">
        Tags
      </Link>

      <Link to="/admin/usuarios" className="menu-item">
        Usuários
      </Link>
    </aside>
  );
};

export default Sidebar;