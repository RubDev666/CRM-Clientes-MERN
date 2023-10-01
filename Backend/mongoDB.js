import mongoose from "mongoose";
import dotenv from 'dotenv'; 
import { MONGO_URI } from "./config.js"; 

dotenv.config();

export async function conectarMONGO() {
    try {
        const db = await mongoose.connect(MONGO_URI);
 
        console.log('conectado a mongo', db.connection.name);
    } catch (error) {
        console.log(error)
    }
};
