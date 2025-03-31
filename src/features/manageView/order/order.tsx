import { DataTable } from "./components/order-data-table"
import { columns } from "./components/columns"
import { orderData } from "./order-data"
import { OrderHeader } from "./components/order-header"

export default function Order() {
    return (
        <div>
            <OrderHeader />
            <DataTable columns={columns} data={orderData} />
        </div>
        
    )
}
