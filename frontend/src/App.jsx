// src/App.jsx
import { useReducer } from "react";
import { UserProvider } from "./context/UserContext"; // Se usa UserProvider
import AppRouter from "./routes/AppRouter"; // Asegúrate de que la ruta sea correcta
import Sidebar from "./views/estudiantes/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}




export default App;