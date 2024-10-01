// src/components/SidebarItem.jsx
import "./SidebarItem.css"; // Estilos específicos para cada ítem

function SidebarItem({ icon, text, active, to }) {
  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>

    </li>
  );
}

export default SidebarItem;
