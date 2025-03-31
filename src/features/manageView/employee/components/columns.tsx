import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTableRowActions } from "./data-table-row-actions";
export type Employee = {
    id: number;
    employeeNo: string;
    name: string;
    gender: 'M' | 'F';
    birthDate: string;
    address: string;
    telephone: string;
    hireDate: Date;
    department: string;
    headship: string;
    salary: number;
}

export const columns: ColumnDef<Employee>[] = [
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
        accessorKey: "employeeNo",
        header: "员工编号",
      },
      {
        accessorKey: "name",
        header: "员工姓名",
      },
      {
        accessorKey: "gender",
        header:"性别",
        cell:({row})=>{
            return row.original.gender==='M'?'男':'女'
        }
      },
      {
        accessorKey: "birthDate",
        header: "出生日期",
        
      },
      {
        accessorKey: "address",
        header: "地址",
      },
      {
        accessorKey: "telephone",
        header: "电话",
      },
      {
        accessorKey: "hireDate",
        header: "入职日期",
      },
      {
        accessorKey: "department",
        header: "部门",
      },
      {
        accessorKey: "headship",
        header: "职务",
      },
      {
        accessorKey: "salary",
        header: "工资",
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
