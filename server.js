import "dotenv/config";
import express from "express";
import tasksRouter from "./routes/tasks.routes.js";
import pool from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/tasks", tasksRouter);

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "TaskFlow API is running",
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: err.status || "error",
        message: statusCode < 500 ? err.message : "Internal Server Error",
        ...(err.errors && { errors: err.errors }),
    });
});

async function startServer() {
    try {
        await pool.query("SELECT 1");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();
