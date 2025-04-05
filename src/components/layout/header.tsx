import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import { ThemeSwitch } from "../theme-switch"
export function Header() {
    const managementItems=[
        {name:'数据总览',path:'/'},
        {name:'订单管理',path:'/manageView/order'},
        {name:'员工管理',path:'/manageView/employee'},
    ]

    return (
        <header className="mt-4">
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-4">
                    <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
                    <Separator orientation='vertical' className='h-6' />
                    <div className="flex items-center gap-4">
                        {managementItems.map((item) => (
                            <Link 
                                to={item.path} 
                                key={item.name}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <ThemeSwitch/>
                    
                </div>
            </div>
        </header>
    )
}
