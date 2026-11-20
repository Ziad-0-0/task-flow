import { registerSchema } from "./validators/auth.validator.js";

const result = registerSchema.safeParse({
    name: "A",
    email: "wrong-email",
    password: "123",
});

console.log(result);
