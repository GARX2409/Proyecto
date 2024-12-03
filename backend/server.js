const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
const mediationRoutes = require('./routes/mediationRoutes');
app.use('/api/users', userRoutes);
app.use('/api/mediations', mediationRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
