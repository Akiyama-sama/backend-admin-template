import UserProvider from "./context/userContext"
import { UserHeader } from "./components/user-header"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { UserData } from "./data/user-data"
import { UserDialogs } from "./components/user-dialog"
export default function User() {
    return (
        <UserProvider>
            <UserHeader />
            <DataTable columns={columns} data={UserData} />
            <UserDialogs />
        </UserProvider>
    )
}
