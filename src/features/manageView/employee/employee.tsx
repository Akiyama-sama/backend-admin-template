import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { employeeData } from "./data/employee-data";
import { EmployeeHeader } from "./components/employee-header";
import EmployeeProvider from './context/employeeContext'
import { EmployeeDialogs } from "./components/employee-dialog";
export default function Employee() {
    return (
        <EmployeeProvider>
            <EmployeeHeader />
            <DataTable columns={columns} data={employeeData} />
            <EmployeeDialogs />
        </EmployeeProvider>
    )
}
