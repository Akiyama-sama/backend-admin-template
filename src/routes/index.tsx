import {createBrowserRouter} from 'react-router-dom';
import Order from '../features/manageView/order/order.tsx';
import Index from '../features/app/layout';
import Dashboard from '../features/dashboard/dashboard';
import Employee from '../features/manageView/employee/employee';
export const router =createBrowserRouter([
    {
        path:'/',
        element:<Index/>,
        children:[{
            index:true,
            element:<Dashboard />
        },
        {
            path:'manageView/order',
            element:<Order />
        },
        {
            path:'manageView/employee',
            element:<Employee />
        }
    ]
    },
    
])
