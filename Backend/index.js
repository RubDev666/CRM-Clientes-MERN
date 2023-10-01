import { conectarMONGO } from "./mongoDB.js";
import { PORT } from "./config.js"; 
import app from "./app.js"; 

conectarMONGO();

app.listen(PORT);

console.log('Servidor oyendo en...', PORT);
