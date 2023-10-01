import clienteSchema from '../models/clienteSchema.js';

export const clientes = async (req, res) => {
    try {
        const clientes = await clienteSchema.find(); 

        res.send(clientes);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}; 

export const nuevoCliente = async (req, res) => {
    try {
        const {nombre, email, telefono, notas, id} = req.body; 

        const newCliente = new clienteSchema({nombre, email, telefono, notas, id});
    
        await newCliente.save();

        return res.json(newCliente);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        const clienteActualizado = await clienteSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.send(clienteActualizado);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const borrarCliente = async (req, res) => {
    try {
        const clienteEliminado = await clienteSchema.findByIdAndDelete(req.params.id);

        if(!clienteEliminado) return res.sendStatus(404);
    
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
};

export const cliente = async (req, res) => {
    try {
        const cliente = await clienteSchema.findById(req.params.id);

        if(!cliente) return res.sendStatus(404);
    
        return res.send(cliente);
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
};
