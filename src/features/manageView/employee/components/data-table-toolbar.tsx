import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { TrashIcon } from "lucide-react"
import { useEmployee } from "../context/employeeContext"
interface DataTableToolbarProps<TData> {
  table: Table<TData>
}
export default function DateTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
    const {setOpen} = useEmployee()
  return (
    <div className="flex justify-between py-4">
        <div className="flex items-center space-x-2">
          {/* 搜索框 */}
        <Input
          placeholder="搜索员工..."
          value={(table.getColumn("employeeNo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("employeeNo")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
         {/*批量选中时，出现的删除按钮 */}
         {table.getFilteredSelectedRowModel().rows.length>0&&(
          <TrashIcon className="w-4 h-4" onClick={()=>{
            setOpen('delete')
          }}/>
         )}
        </div>
        
        
        <div className="flex items-center space-x-2">
         
          
          {/* 添加订单 */}
          <Button variant="outline" onClick={()=>{
            setOpen('create')
          }}>添加员工</Button>
          {/* 表格列选择 */}

          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              列选择
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>
  )
}
