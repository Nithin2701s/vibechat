import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js"
import { verifyUser } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", logout)
router.put("/update-profile", verifyUser, updateProfile)
router.get("/check", verifyUser, checkAuth);
export default router;