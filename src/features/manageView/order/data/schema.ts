import { z } from "zod";

export const OrderSchema = z.object({
    id: z.number(),
    orderNo: z.string(),
    customerNo: z.number(),
    employeeNo: z.string(),
    orderDate: z.date(),
    orderAmount: z.number(),
    invoiceNo: z.string(),
})

export type Order = z.infer<typeof OrderSchema>
export const OrderListSchema = z.array(OrderSchema)
