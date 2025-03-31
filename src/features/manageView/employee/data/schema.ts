import { z } from "zod";

export const EmployeeSchema = z.object({
    id: z.number(),
    employeeNo: z.string(),
    name: z.string(),
    gender: z.enum(['M','F']),
    birthDate: z.string(),
    address: z.string(),
    telephone: z.string(),
    hireDate:z.date(),
    department: z.string(),
    headship: z.string(),
    salary: z.number(),
})

export type Employee = z.infer<typeof EmployeeSchema>
export const EmployeeListSchema = z.array(EmployeeSchema)
