// src/views/FileDashboard.jsx

import React from 'react';
import { FaFolder, FaFileAlt, FaFilePdf, FaImage, FaUserCircle } from 'react-icons/fa';
import './assets/css/FileDashboard.css';
import Navbar from './navbar';  // Importa el componente de navegación
import Sidebar from './Sidebar'; // Importa el componente de sidebar
import { Link } from 'react-router-dom';


const FileDashboard = () => {
  const quickAccess = [
    
    { name: 'Design Files', icon: <FaFolder />,  users: ['user1', 'user2', 'user3'] },
    { name: 'Google Photos', icon: <FaFolder />, users: ['user4', 'user5'] },
    { name: 'Training Materials', icon: <FaFolder />, users: ['user6', 'user7'] },
    { name: 'English Class Summary', icon: <FaFileAlt />, users: ['user8'] },
  ];

  const allFiles = [
    { name: 'Compuestos organicos', icon: <FaFileAlt />, date: 'Sept 8, 2019' },
    { name: 'Compuestos inorganicos', icon: <FaFileAlt />, date: 'Sept 7, 2019' },
    { name: 'estequiometria', icon: <FaFilePdf />, date: 'Sept 6, 2019'},
    { name: 'Quimica transformadora', icon: <FaFileAlt />, date: 'Sept 5, 2019' },
    { name: 'nomenclatura', icon: <FaImage />, date: 'Sept 4, 2019' },
    { name: 'sistemas dispersos', icon: <FaImage />, date: 'July 15, 2019'},
  ];

  return (
    <div>
      {/* Aquí incluimos el Navbar */}
      <Navbar />

      <div className="dashboard-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal: el dashboard de archivos */}
        <div className="dashboard">
          <div className="quick-access">
            <h3>Archivos</h3>
            <div className="quick-access-items">
              {quickAccess.map((item, index) => (
                <div key={index} className="quick-access-item">
                  <div className="quick-access-icon">{item.icon}</div>
                  <div className="quick-access-details">
                    <span>{item.name}</span>
                    <div className="shared-users">
                      {item.users.map((user, index) => (
                        <FaUserCircle key={index} className="user-icon" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="all-files">
            <h3>Temas</h3>
            <table className="files-table">
              <thead>
                <tr>
                  <th>nombre</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {allFiles.map((file, index) => (
                  <tr key={index}>
                    <td>
                      <div className="file-name">
                        {file.icon} <span>{file.name}</span>
                      </div>
                    </td>
                    <td>{file.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FileDashboard;
