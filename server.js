const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const app = express();
const port = 3000;


const uri = 'mongodb+srv://admin:admin@cluster0.acc1is2.mongodb.net/users_db?retryWrites=true&w=majority&appName=Cluster0';;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error.message));

app.use(cors({
  origin: '*', // Permite solicitudes desde esta URL
  methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
}));

app.use(express.json());

app.use('/', userRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

