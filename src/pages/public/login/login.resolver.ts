import {z} from "zod";

export const loginResolver = z.object({
    email: z.string().email("Email inválido.").max(255, 'Email deve ter no máximo 255 caracteres.').nonempty(),
    password: z.string().
        min(8, "A senha deve ter no mínimo 8 caracteres.").
        max(20, "A senha deve ter no máximo 20 caracteres.").
        refine((val) => /[0-9]/.test(val), "A senha deve possuir ao menos um número.").
        refine((val) => /[A-Z]/.test(val), "A senha deve possuir ao menos uma letra maiúscula.").
        refine((val) => /[a-z]/.test(val), "A senha deve possuir ao menos uma letra minúscula.").
        refine((val) => /[^a-zA-Z0-9]/.test(val), "A senha deve possuir ao menos um caractere especial.")
});

export type LoginFormData = z.infer<typeof loginResolver>;

