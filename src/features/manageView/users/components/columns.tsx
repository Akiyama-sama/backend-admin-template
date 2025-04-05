import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { DataTableRowActions } from "./data-table-row-actions";
import { User } from "../data/schema";

export const columns: ColumnDef<User>[] = [
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
        accessorKey: "userName",
        header: "用户名",
      },
      {
        accessorKey: "role",
        header: "角色",
      },
      {
        accessorKey: "password",
        header: "密码",
      },
      {
        accessorKey: "createDate",
        header: "创建日期",
        cell: ({row}) => {
          return row.original.createDate ? format(row.original.createDate, 'yyyy-MM-dd') : ''
        }

      },
      {
        id: "actions",
        cell: ({row}) => {
          return (
            <DataTableRowActions row={row} />
          )
        },
      },
]
