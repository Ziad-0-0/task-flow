import pool from "../config/db.js";

export async function getAllTasks() {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
}

export async function getTaskById(id) {
    const tasks = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    return tasks.rows[0];
}

export async function createTask(title) {
    const newTask = await pool.query(
        "INSERT INTO tasks(title, completed) VALUES ($1, false) RETURNING *",
        [title.trim()],
    );
    return newTask.rows[0];
}

export async function updateTask(title, completed, id) {
    const task = await pool.query(
        `
        UPDATE tasks 
        SET title=$1, completed=$2 
        WHERE id = $3 RETURNING *
        `,
        [title.trim(), completed, id],
    );
    return task.rows[0];
}

export async function deleteTask(id) {
    const task = await pool.query(`DELETE FROM tasks WHERE id=$1 RETURNING *`, [
        id,
    ]);
    return task.rows[0];
}
