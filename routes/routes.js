const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Asegúrate de que la ruta al modelo sea correcta

// Crear usuario
router.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Se requiere username y password' });
    }

    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario', details: error.message });
  }
});

module.exports = router;


