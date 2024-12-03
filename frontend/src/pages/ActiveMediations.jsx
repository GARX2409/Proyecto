import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ActiveMediations = () => {
    const [mediations, setMediations] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchMediations = async () => {
            const studentName = localStorage.getItem('username');
            const response = await axios.get(`http://localhost:5000/api/mediations/student/${studentName}`);
            setMediations(response.data);
        };

        fetchMediations();
    }, []);

    return (
        <div>
            <h2>Mediaciones Activas</h2>
            {mediations.map((mediation) => (
                <div key={mediation._id}>
                    <h3>{mediation.title}</h3>
                    <p>{mediation.description}</p>
                    <p>Estado: {mediation.status}</p>
                </div>
            ))}
            <button onClick={() => history.push('/student')}>Regresar</button>
        </div>
    );
};

export default ActiveMediations;
