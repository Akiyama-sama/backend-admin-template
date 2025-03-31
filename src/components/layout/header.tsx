import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
export function Header() {
    const managementItems=[
        {name:'数据总览',path:'/'},
        {name:'订单管理',path:'/manageView/order'},
        {name:'员工管理',path:'/manageView/employee'},
        {name:'产品管理',path:'/manageView/product'},
        {name:'客户管理',path:'/manageView/customer'},
    ]
    return (
        
        <header className="mt-5 flex-1">
           
            <div className="flex items-start">
            <SidebarTrigger variant='outline' className='scale-125 sm:scale-100 mr-2' />
            <Separator orientation='vertical' className='h-6 mr-2' />
                <div className="flex items-center gap-2">
                    {managementItems.map((item) => (
                        <Link to={item.path} key={item.name}
                        className="text-gray-500 hover:text-black cursor-pointer"
                        >{item.name}</Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
