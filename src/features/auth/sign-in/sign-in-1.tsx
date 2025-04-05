import { Card } from '@/components/ui/card'

import { UserAuthForm } from './components/user-auth-form'

export default function SignIn1() {
  return (
  
      <Card className='p-6'>
        <div className='flex flex-col space-y-2 text-left'>
          <h1 className='text-2xl font-semibold tracking-tight'>登录</h1>
          <p className='text-sm text-muted-foreground'>
            输入您的邮箱和密码登录您的账户
          </p>
        </div>
        <UserAuthForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          点击登录，您同意我们的{' '}
          <a
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            服务条款
          </a>{' '}
          and{' '}
          <a
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            隐私政策
          </a>
          .
        </p>
      </Card>
   
  )
}
