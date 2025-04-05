import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'

export const sidebarData= {
  user: {
    username: 'admin',
    role: 'admin',
  },
  navGroups: [
    {
      title: '通用',
      items: [
        {
          title: '仪表盘',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: '订单',
          url: '/manageView/order',
          icon: IconChecklist,
        },
        {
          title: '员工',
          url: '/manageView/employee',
          icon: IconMessages,
        },
        {
          title: '用户',
          url: '/manageView/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: '页面',
      items: [
        {
          title: '认证',
          icon: IconLockAccess,
          items: [
            {
              title: '登录 (1)',
              url: '/auth/signin',
            },
            {
              title: '登录 (2)',
              url: '/auth/signin2',
            },
            {
              title: '注册',
              url: '/auth/signup',
            },
            {
              title: '忘记密码',
              url: '/auth/forgot-password',
            },
            {
              title: '验证码',
              url: '/auth/otp',
            },
          ],
        },
        {
          title: '错误',
          icon: IconBug,
          items: [
            {
              title: '未授权',
              url: '/errors/unauthorized',
              icon: IconLock,
            },
            {
              title: '禁止访问',
              url: '/errors/forbidden',
              icon: IconUserOff,
            },
            {
              title: '未找到',
              url: '/errors/not-found',
              icon: IconError404,
            },
            {
              title: '服务器错误',
              url: '/errors/general-error',
              icon: IconServerOff,
            },
            {
              title: '维护错误',
              url: '/errors/maintenance',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: '其他',
      items: [
        {
          title: '设置',
          icon: IconSettings,
          items: [
            
            {
              title: '账户',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: '外观',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: '通知',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: '显示',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: '帮助中心',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
