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
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '@/components/ui/collapsible'
import { ChevronRight } from 'lucide-react'

import { NavGroupProps, NavItem } from './types'
import { Link } from 'react-router-dom'
export function NavGroup({title,items}:NavGroupProps) {
    return (
    <SidebarGroup>
        <SidebarGroupLabel>{title}</SidebarGroupLabel>
        <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.url || ''}`
          if (!item.items)
            return <SidebarMenuLink key={key} item={item}/>

          return (
            <SidebarMenuCollapsible key={key} item={item} />
          )
        })}
        </SidebarMenu>
    </SidebarGroup>
    )
}

function SidebarMenuLink({item}:{item:NavItem}){
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={item.title}
      >
        {item.url ? (
          <Link to={item.url} onClick={() => setOpenMobile(false)}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Link>
        ) : (
          <div className="flex items-center">
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </div>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function SidebarMenuCollapsible({item}:{item:NavItem}){
    const { setOpenMobile } = useSidebar()
    return (
      <>
      <Collapsible asChild className='group/collapsible'>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton asChild>
            {item.url ? (
              <Link to={item.url}>
                {item.icon && <item.icon />}
                {item.title}
                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
              </Link>
            ) : (
              <div className="flex items-center w-full">
                {item.icon && <item.icon />}
                {item.title}
                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
              </div>
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
          
        <CollapsibleContent className='CollapsibleContent'>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  {subItem.url ? (
                    <Link to={subItem.url} onClick={() => setOpenMobile(false)}>
                      {subItem.icon && <subItem.icon />}
                      <span>{subItem.title}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      {subItem.icon && <subItem.icon />}
                      <span>{subItem.title}</span>
                    </div>
                  )}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      
      </SidebarMenuItem>
    </Collapsible>
      </>
   
    )
}
