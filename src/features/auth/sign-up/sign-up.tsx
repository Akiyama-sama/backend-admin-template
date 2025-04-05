import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'

import { SignUpForm } from './components/sign-up-form'

export default function SignUp() {
  return (
    
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-lg font-semibold tracking-tight'>
            创建一个账户
          </h1>
          <p className='text-sm text-muted-foreground'>
            输入您的邮箱和密码创建一个账户。 <br />
            已经有账户了？{' '}
            <Link
              to='/auth/signin'
              className='underline underline-offset-4 hover:text-primary'
            >
              登录
            </Link>
          </p>
        </div>
        <SignUpForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          创建一个账户，即表示您同意我们的{' '}
          <a
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            服务条款
          </a>{' '}
          和{' '}
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
