import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    userName: z.string(),
    role: z.enum(['admin', 'user']),
    password: z.string(),
    createDate: z.date(),
})

export type User = z.infer<typeof UserSchema>
export const UserListSchema = z.array(UserSchema)
