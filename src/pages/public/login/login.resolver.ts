import {z} from "zod";

export const loginResolver = z.object({
    email: z.string().email("Email inválido.").nonempty(),
    password: z.string()
});

export type LoginFormData = z.infer<typeof loginResolver>;

