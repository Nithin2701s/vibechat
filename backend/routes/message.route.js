import express from "express"
import { verifyUser } from "../middleware/auth.middleware.js";
import {getUsers,getMessages,sendMessage} from "../controllers/message.controller.js"
const router = express.Router();

router.get("/users",verifyUser,getUsers)
router.get("/messages/:id",verifyUser,getMessages)
router.post("/send/:id",verifyUser,sendMessage)
export default router;