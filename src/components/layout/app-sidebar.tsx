import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  import { sidebarData } from "./data/siderbar-data"
  import { NavGroup } from "./nav-group"


  export function AppSidebar() {
    return (
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader>
            <div className="border-b border-border py-2 text-lg font-bold text-center">
                后台管理系统
            </div>
        </SidebarHeader>
        <SidebarContent>
            {sidebarData.navGroups.map((group) => (
            <NavGroup key={group.title} title={group.title} items={group.items} />
            ))}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  