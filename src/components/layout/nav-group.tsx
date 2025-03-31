import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
  } from '@/components/ui/sidebar'
import { NavGroupProps } from './types'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
export function NavGroup({title,items}:NavGroupProps) {
    return (
    <SidebarGroup>
        <SidebarGroupLabel>{title}</SidebarGroupLabel>
        <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.url}`
          return (
            <SidebarMenuItem key={key}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>{item.title}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
        </SidebarMenu>
    </SidebarGroup>
    )
}



