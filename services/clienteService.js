const fs = require('fs').promises;
const path = require('path');

const archivo = path.join(__dirname, '..', 'clientes.json');

async function asegurarArchivo() {
    try {
        await fs.access(archivo);
    } catch {
        await fs.writeFile(archivo, '[]');
    }
}

async function leerClientes() {
    await asegurarArchivo();

    const data = await fs.readFile(archivo, 'utf-8');
    return JSON.parse(data);
}

async function guardarClientes(clientes) {
    await fs.writeFile(
        archivo,
        JSON.stringify(clientes, null, 2)
    );
}

function validarCliente(cliente) {
    const { nombre, apellido, dni, email } = cliente;

    if (!nombre || !apellido || !dni || !email) {
        throw new Error('Todos los campos son obligatorios');
    }

    if (nombre.length < 3 || nombre.length > 50) {
        throw new Error('Nombre inválido');
    }

    if (apellido.length < 3 || apellido.length > 50) {
        throw new Error('Apellido inválido');
    }

    if (!/^\d{8}$/.test(dni)) {
        throw new Error('El DNI debe tener 8 dígitos');
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error('Email inválido');
    }
}

async function obtenerClientes() {
    return await leerClientes();
}

async function crearCliente(cliente) {
    validarCliente(cliente);

    const clientes = await leerClientes();

    const dniExiste = clientes.some(c => c.dni === cliente.dni);
    if (dniExiste) {
        throw new Error('El DNI ya se encuentra registrado');
    }

    const emailExiste = clientes.some(c => c.email === cliente.email);
    if (emailExiste) {
        throw new Error('El Email ya se encuentra registrado');
    }

    const nuevoCliente = {
        id: Date.now().toString(),
        ...cliente
    };

    clientes.push(nuevoCliente);

    await guardarClientes(clientes);
}

async function actualizarCliente(id, datos) {
    validarCliente(datos);

    const clientes = await leerClientes();

    const index = clientes.findIndex(c => c.id === id);

    if (index === -1) {
        throw new Error('Cliente no encontrado');
    }

    const dniDuplicado = clientes.some(
        c => c.dni === datos.dni && c.id !== id
    );

    if (dniDuplicado) {
        throw new Error('El DNI ya se encuentra registrado');
    }

    const emailDuplicado = clientes.some(
        c => c.email === datos.email && c.id !== id
    );

    if (emailDuplicado) {
        throw new Error('El Email ya se encuentra registrado');
    }

    clientes[index] = {
        id,
        ...datos
    };

    await guardarClientes(clientes);
}

async function eliminarCliente(id) {
    const clientes = await leerClientes();

    const nuevosClientes = clientes.filter(c => c.id !== id);

    await guardarClientes(nuevosClientes);
}

module.exports = {
    obtenerClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};
