import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/tasks.controller.js";
import checkApiKey from "../middlewares/checkApiKey.js";

import express from "express";
const router = express.Router();
router.get("/", checkApiKey, getAllTasks);
router.get("/:id", checkApiKey, getTaskById);
router.post("/", checkApiKey, createTask);
router.put("/:id", checkApiKey, updateTask);
router.delete("/:id", checkApiKey, deleteTask);
export default router;
