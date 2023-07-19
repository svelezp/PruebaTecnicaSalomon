const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');


//get usuarios
router.get('/api/usuarios', async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});


//post usuarios
router.post('/api/usuarios', async (req, res) => {
    const { nombre, email, password } = req.body;
    const nuevousuario = new Usuario({ nombre, email, password });
    await nuevousuario.save();
    console.log(nuevousuario)
    res.json({ status: 'usuario guardado' });
})



module.exports = router;