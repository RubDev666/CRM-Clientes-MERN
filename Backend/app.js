import express from "express";
import clientesRoutes from './rutas/clientes.js'; 
import cors from "cors"; 

const app = express();

app.use(cors());

app.use(express.json());

app.use(clientesRoutes);

export default app;