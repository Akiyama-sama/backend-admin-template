import { Header } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { AppSidebar } from "@/components/layout/app-sidebar"
function Index() {
  return (
    <div className="flex w-full">
      {/* 侧边栏 */}
      <AppSidebar />
      {/* 主内容区域 */}
      <div className="flex-col w-full">
        <Header/>
        <Main />
      </div>
    </div>
  )
}

export default Index;