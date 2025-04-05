interface User {
  name: string
  email: string
  avatar: string
}


 type NavItem = {
  title: string,
  url: string,
  icon?: React.ElementType,
  items?: NavItem[]
}

interface NavGroupProps {
  title: string
  items: NavItem[]
}

interface SidebarData {
  user: User
  navGroups: NavGroupProps[]
}

export type { SidebarData, NavGroupProps, NavItem }
