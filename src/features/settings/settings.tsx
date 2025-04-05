import { Outlet } from 'react-router-dom'
import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
  
} from '@tabler/icons-react'
import { Separator } from '@/components/ui/separator'
import SidebarNav from './components/sidebar-nav'

export default function Settings() {
  return (
    <>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            设置
          </h1>
          <p className='text-muted-foreground'>
            管理您的账户设置和电子邮件偏好。
          </p>
        </div>
        <Separator className='my-4 lg:my-6' />
        <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex w-full overflow-y-hidden p-1 pr-4'>
            <Outlet />
          </div>
        </div>
    </>
  )
}

const sidebarNavItems = [
  {
    title: '账户',
    icon: <IconTool size={18} />,
    href: '/settings/account',
  },
  {
    title: '外观',
    icon: <IconPalette size={18} />,
    href: '/settings/appearance',
  },
  {
    title: '通知',
    icon: <IconNotification size={18} />,
    href: '/settings/notifications',
  },
  {
    title: '显示',
    icon: <IconBrowserCheck size={18} />,
    href: '/settings/display',
  },
]
