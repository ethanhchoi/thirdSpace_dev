import express from "express"

import {deleteProducts, putProducts, getProducts, postProducts} from "../controllers/controllers.User.js" 
import {deleteSettings, putSettings, postSettings, getSettings} from "../controllers/controllers.Settings.js"
import {deleteEvents, putEvents, getEvents, postEvents} from "../controllers/controllers.Events.js" 
import {deleteChatrooms, putChatrooms, postChatrooms, getChatrooms} from "../controllers/controllers.Chatrooms.js"

const routes = express.Router();

//UserSide
routes.delete("/", deleteProducts);
routes.put("/", putProducts);
routes.get("/", getProducts);
routes.post("/", postProducts);

routes.get("/settings", getSettings);
routes.post("/settings", postSettings);
routes.put("/settings", putSettings);
routes.delete("/settings", deleteSettings);

/*
routes.get("/settings", getSettings);
routes.post("/settings", postSettings);
routes.put("/settings", putSettings);
routes.delete("/settings", deleteSettings);

routes.get("/settings", getSettings);
routes.post("/settings", postSettings);
routes.put("/settings", putSettings);
routes.delete("/settings", deleteSettings);
*/


export default routes;