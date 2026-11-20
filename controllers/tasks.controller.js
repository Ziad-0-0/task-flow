import {
    getAllTasks as getAllTasksService,
    getTaskById as getTaskByIdService,
    createTask as createTaskService,
    updateTask as updateTaskService,
    deleteTask as deleteTaskService,
} from "../services/tasksService.js";
import AppError from "../utils/AppError.js";

export async function getAllTasks(req, res) {
    const tasks = await getAllTasksService();
    res.json(tasks);
}

export async function getTaskById(req, res) {
    const task = await getTaskByIdService(Number(req.params.id));
    if (!task) {
        throw new AppError("Task Not Found", 404);
    }
    res.json(task);
}

export async function createTask(req, res) {
    if (
        !req.body ||
        !req.body.title ||
        typeof req.body.title !== "string" ||
        req.body.title.trim() === ""
    ) {
        throw new AppError("Title must be a non-empty string", 400);
    }
    const task = await createTaskService(req.body.title);
    res.status(201).json(task);
}

export async function updateTask(req, res) {
    if (
        !req.body ||
        !req.body.title ||
        typeof req.body.title !== "string" ||
        req.body.title.trim() === "" ||
        req.body.completed === undefined ||
        typeof req.body.completed !== "boolean"
    ) {
        throw new AppError(
            "Title must be a non-empty string and completed must be a boolean",
            400,
        );
    }
    const task = await updateTaskService(
        req.body.title,
        req.body.completed,
        Number(req.params.id),
    );
    if (!task) {
        throw new AppError("Task Not Found", 404);
    }
    res.status(200).json(task);
}

export async function deleteTask(req, res) {
    const task = await deleteTaskService(Number(req.params.id));
    if (!task) {
        throw new AppError("task not found", 404);
    }
    res.status(200).json(task);
}
