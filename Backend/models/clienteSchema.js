import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required:  true
    },
    notas: {
        type: String,
        required: true
    }
});

export default mongoose.model('clientes', clienteSchema);