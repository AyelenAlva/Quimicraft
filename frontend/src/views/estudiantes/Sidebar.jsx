// src/components/Sidebar.jsx
import SidebarItem from "./SidebarItem";
import { StickyNote, Calendar, Layers, Flag, Settings, LifeBuoy } from "lucide-react";
import { Link } from 'react-router-dom';


import "./Sidebar.css"; // Importamos el CSS específico para el Sideba<


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        
    <Link to='/projects'> <SidebarItem icon={<StickyNote size={20} />} text="Projects" /></Link>
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