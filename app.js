const express = require('express');
const path = require('path');
require('dotenv').config();

const clienteService = require('./services/clienteService');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const clientes = await clienteService.obtenerClientes();

        const editId = req.query.edit;
        let clienteEditar = null;

        if (editId) {
            clienteEditar = clientes.find(c => c.id === editId);
        }

        res.render('index', {
            clientes,
            error: null,
            clienteEditar
        });
    } catch (error) {
        console.error(error);

        res.render('index', {
            clientes: [],
            error: 'Error al cargar clientes',
            clienteEditar: null
        });
    }
});

app.post('/guardar', async (req, res) => {
    try {
        await clienteService.crearCliente(req.body);
        res.redirect('/');
    } catch (error) {
        console.error(error);

        const clientes = await clienteService.obtenerClientes();

        res.render('index', {
            clientes,
            error: error.message,
            clienteEditar: null
        });
    }
});

app.post('/actualizar/:id', async (req, res) => {
    try {
        await clienteService.actualizarCliente(req.params.id, req.body);
        res.redirect('/');
    } catch (error) {
        console.error(error);

        const clientes = await clienteService.obtenerClientes();

        res.render('index', {
            clientes,
            error: error.message,
            clienteEditar: {
                id: req.params.id,
                ...req.body
            }
        });
    }
});

app.post('/eliminar/:id', async (req, res) => {
    try {
        await clienteService.eliminarCliente(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
