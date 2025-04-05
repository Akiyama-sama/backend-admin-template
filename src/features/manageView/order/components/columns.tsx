import { ColumnDef } from "@tanstack/react-table"
/**
 * https://ui.shadcn.com/docs/components/data-table#installation
 * 定义table的列
 */
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { ArrowUpDown } from "lucide-react"
import { DataTableRowActions } from "./data-table-row-actions"
export type Order = {
    id: number;
    orderNo: string;
    customerNo: number;
    employeeNo: string;
    orderDate: Date;
    orderAmount: number;
    invoiceNo: string;
}
export const columns: ColumnDef<Order>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="全选"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="选择行"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {   
        header: "订单编号",
        accessorKey: "orderNo",
        
    },
    {
        header: "客户编号",
        accessorKey: "customerNo",
    },
    {
        header: "员工编号",
        accessorKey: "employeeNo",
    },
    {
        header: "订单日期",
        accessorKey: "orderDate",
        cell: ({ row }) => {
            const date = row.original.orderDate;
            return date ? date.toLocaleDateString() : "无";
        }
    },
    {
        accessorKey: "orderAmount",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                订单金额
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        header: "发票编号",
        accessorKey: "invoiceNo",
    },
    {
        id: "actions",
        cell: ({row}) => {
          return (
            <DataTableRowActions row={row} />
          )
        },
      },
];

