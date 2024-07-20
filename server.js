const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes');
const app = express();
const port = 5000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/users_db', {
  
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

