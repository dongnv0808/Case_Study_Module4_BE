import bodyParser from "body-parser";
import express from "express";
import { routes } from "./src/routes/routes";
import dataSource from "./src/data-source";
import cors from 'cors';

let PORT = 3000;
const app = express();
dataSource.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("", routes);
app.listen(PORT, () => {
    console.log(`Running http://localhost:${PORT}`);
});