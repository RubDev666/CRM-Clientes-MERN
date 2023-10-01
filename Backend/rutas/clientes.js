import { Router } from "express";
import {clientes, nuevoCliente, actualizarCliente, borrarCliente, cliente} from "../controladores/clientesControllers.js";

const router = Router();

router.get('/clientes', clientes);

router.post('/clientes', nuevoCliente);

router.put('/clientes/:id', actualizarCliente);

router.delete('/clientes/:id', borrarCliente);

router.get('/clientes/:id', cliente);

export default router;