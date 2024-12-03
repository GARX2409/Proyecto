import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" exact component={LoginPage} />
            <Route path="/student" component={StudentDashboard} />
            <Route path="/admin" component={AdminDashboard} />
            {/* Agregar rutas para docente y mediador */}
        </Routes>
    </Router>
);

export default App;
