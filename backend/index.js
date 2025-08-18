import express from 'express';
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from "cors"
dotenv.config()
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173", // your frontend URL
        credentials: true, // 🔥 this is the missing part
    })
);
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB()
    console.log("App running on PORT " + PORT)
})
