import bcrypt from "bcrypt";
import pool from "../config/db.js";
import AppError from "../utils/appError.js";

export async function registerUser(name, email, password) {
    const normalizedemail = email.toLowercase();
    const pasowrdHash = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query(
            `
            INSERT INTO users (name, email, password_hash)
            VALUES($1, $2, $3)
            RETURNING id, name, email, created_at
            `,
        );
        return result.row[0];
    } catch (error) {
        if (error.code === "23505") {
            throw new AppError("Email already exists", 400);
        }
        throw error;
    }
}
