// src/components/Sidebar.jsx
import SidebarItem from "./SidebarItem";
import { Home, StickyNote, Calendar, Layers, Flag, LifeBuoy } from "lucide-react";
import { Link } from 'react-router-dom';


import "./Sidebar.css"; // Importamos el CSS específico para el Sideba<


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>

      <Link to='/estudiantes'> <SidebarItem icon={<Home size={20} color="white" />} text="Home" /></Link>

    <Link to='/projects'> <SidebarItem icon={<StickyNote size={20} color="white" />} text="Projects" /></Link>
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarItem icon={<Layers size={20} />} text="Tabla Periodica" />
        <hr />
        <SidebarItem icon={<Flag size={20} />} text="Reporting" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </ul>
    </div>
  );
}

export default Sidebar;