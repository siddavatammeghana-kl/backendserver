import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

dotenv.config();

app.get("/", async (req, res) => {
    res.json({
        code: 200,
        message: "server is running"
    });
});

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log("server is running on http://localhost:" + PORT);
});