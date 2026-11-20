import AppError from "../utils/AppError.js";

export default function validate(schema) {
    return function (req, res, next) {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return next(
                new AppError("Validation failed", 400, result.error.issues),
            );
        }

        req.validatedBody = result.data;
        next();
    };
}
