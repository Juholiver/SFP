import { z } from "zod"

export const userSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  cep: z.string().min(8),
  numeroCasa: z.string(),
  senha: z.string().min(6)
})