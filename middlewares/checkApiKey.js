export default function checkApiKey(req, res, next) {
    const apiKey = process.env.API_KEY;
    const requestApiKey = req.headers["x-api-key"];

    if (!apiKey) {
        return res.status(500).json({
            status: "error",
            message: "API key is not configured",
        });
    }

    if (requestApiKey !== apiKey) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized",
        });
    }

    next();
}
