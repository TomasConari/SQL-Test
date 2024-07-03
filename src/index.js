import express from "express";
import morgan from "morgan";
import { connection } from "./database/database.js";
import languageRoutes from "./routes/language.routes.js";

const app = express();

const port = 3000;

app.use(morgan("dev"));

//routes
app.use(languageRoutes);

connection();

app.listen(3000, () => {
    console.log(`server run in http://localhost:${port}`)
});