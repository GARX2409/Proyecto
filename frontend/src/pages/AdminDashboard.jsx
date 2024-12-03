import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminDashboard = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <div>
            <h2>Dashboard del Administrador</h2>
            <button onClick={() => history.push('/admin/create-user')}>Crear Nuevo Usuario</button>
            <button onClick={() => history.push('/admin/manage-users')}>Editar Información de Usuarios</button>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default AdminDashboard;
