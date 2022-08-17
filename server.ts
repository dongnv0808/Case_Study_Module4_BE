import bodyParser from "body-parser";
import express from "express";
import { routes } from "./src/routes/routes";
import dataSource from "./src/data-source";

let PORT = 3000;
const app = express();
dataSource.connect();
app.use(bodyParser.json());
app.use(express.json());
app.set('views', './src/views');
app.use("", routes);
app.listen(PORT, () => {
    console.log(`Running http://localhost:${PORT}`);
})