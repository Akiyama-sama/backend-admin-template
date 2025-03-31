import { Outlet } from "react-router-dom";
export function Main() {
    return (
    <div className="relative flex min-h-screen w-full p-10 sm:p-6 md:p-8 lg:p-10">
        {/* 主内容区域 */}
        <main className="flex-1  lg:pl-0"> 
            <div className="container mx-auto relative">
                <Outlet />
            </div>
        </main>
    </div>
    )
}
