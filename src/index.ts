import dotenv from "dotenv";
import express from "express";
import cors, { CorsOptions } from 'cors';
import { route } from "./routes";

dotenv.config();

const app = express();

const corsOptions: CorsOptions = {
    origin: process.env.URL,
    methods: ['POST', "GET"]
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/', route);

app.listen(process.env.APP_PORT, () => console.log('Servidor na porta ' + process.env.APP_PORT));