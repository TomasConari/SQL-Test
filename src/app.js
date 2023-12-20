import express from "express";
import morgan from "morgan";

const app = express();

//settings

app.set("port", 8000);

//middleware
app.use(morgan("dev"));

export default app;