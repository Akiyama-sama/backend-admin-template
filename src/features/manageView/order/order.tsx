import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { orderData } from "./data/order-data"
import { OrderHeader } from "./components/order-header"
import { OrderDialogs } from "./components/order-dialog"
import OrderProvider from "./context/orderContext"
export default function Order() {
    return (
        <OrderProvider>
            <OrderHeader />
            <DataTable columns={columns} data={orderData} />
            <OrderDialogs />
        </OrderProvider>
    )
}
