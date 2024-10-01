// src/components/Sidebar.jsx
import SidebarItem from "./SidebarItem";
import { Home, LayoutDashboard, StickyNote, Calendar, Layers, Flag, Settings, LifeBuoy } from "lucide-react";

import "./Sidebar.css"; // Importamos el CSS específico para el Sideba<


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        
      <a href="/home"> <style color="red"></style><SidebarItem icon={<Home size={20} />} text="Home" /> </a>
        <SidebarItem icon={<StickyNote size={20} />} text="Projects" />
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