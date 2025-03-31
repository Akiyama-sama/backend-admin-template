import { ColumnDef } from "@tanstack/react-table"
/**
 * https://ui.shadcn.com/docs/components/data-table#installation
 * 定义table的列
 */
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
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
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
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
        cell: ({ row }) => {
          const order = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(order.orderNo)}
                >
                  Copy orderNo
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>删除订单</DropdownMenuItem>
                <DropdownMenuItem>修改订单</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
];

