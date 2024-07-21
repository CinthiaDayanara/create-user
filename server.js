const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/users_db', {
  
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

app.use(cors({
  origin: '*', // Permite solicitudes desde esta URL
  methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
}));

app.use(express.json());

app.use('/', userRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

