// src/routes/AppRouter.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import OrganicCompoundConcept from "../views/estudiantes/organicCompoundConcept";
import Projects from "../views/estudiantes/projects"

import PrivateRoutes from "./PrivateRoutes";
//import PublicRoutes from "./PublicRoutes";
import Estudiantes from "../views/estudiantes/Estudiantes"; 
import Profesores from "../views/profesores/Profesores"; 
import Admin from "../views/admin/Admin"; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas accesibles solo si no está autenticado */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas privadas accesibles solo si está autenticado */}
        <Route element={<PrivateRoutes />}>
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/profesores" element={<Profesores />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/organicCompoundConcept" element={<OrganicCompoundConcept />} />

          <Route path="/projects" element={<Projects />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
