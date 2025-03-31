

interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: React.ElementType
  plan: string
}
interface BaseNavItem {
  title: string
  url: string
  icon?: React.ElementType
}
type NavItem = {
  title: string,
  url: string,
  icon?: React.ElementType,
}

interface NavGroupProps {
  title: string
  icon?: React.ElementType
  items: NavItem[]
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroupProps[]
}

export type { SidebarData, NavGroupProps, NavItem }
