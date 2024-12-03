import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ManageUsers = () => {
    const history = useHistory();
    const [searchUsername, setSearchUsername] = useState('');
    const [user, setUser] = useState(null);
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [updatedRole, setUpdatedRole] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${searchUsername}`);
            setUser(response.data);
            setUpdatedUsername(response.data.username);
            setUpdatedPassword(response.data.password);
            setUpdatedRole(response.data.role);
        } catch (error) {
            alert('Usuario no encontrado');
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/users/${user._id}`, {
                username: updatedUsername,
                password: updatedPassword,
                role: updatedRole,
            });
            alert('Información actualizada correctamente');
            history.push('/admin');
        } catch (error) {
            alert('Error al actualizar información');
        }
    };

    return (
        <div>
            <h2>Editar Información de Usuarios</h2>
            <input
                type="text"
                placeholder="Buscar Usuario por Nombre"
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            {user && (
                <div>
                    <input
                        type="text"
                        placeholder="Nombre de Usuario"
                        value={updatedUsername}
                        onChange={(e) => setUpdatedUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={updatedPassword}
                        onChange={(e) => setUpdatedPassword(e.target.value)}
                    />
                    <select value={updatedRole} onChange={(e) => setUpdatedRole(e.target.value)}>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Docente">Docente</option>
                        <option value="Mediador">Mediador</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button onClick={handleUpdate}>Actualizar Usuario</button>
                </div>
            )}

            <button onClick={() => history.push('/admin')}>Regresar</button>
        </div>
    );
};

export default ManageUsers;
