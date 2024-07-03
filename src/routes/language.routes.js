import { Router } from "express";
import { languageControllers } from "../controllers/language.controllers.js";

const route = Router();

route.get("/languages", (req, res) => languageControllers.getAll(req, res));

export default route;