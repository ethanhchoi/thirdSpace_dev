import express from "express"

import {deleteProducts, putProducts, getProducts, postProducts, postSettings, getSettings} from "../controllers/controllers.js"

const routes = express.Router();

routes.delete("/", deleteProducts);

routes.put("/", putProducts);
routes.get("/", getProducts);
routes.get("/settings", getSettings);

routes.post("/", postProducts);
routes.post("/settings", postSettings);
export default routes;