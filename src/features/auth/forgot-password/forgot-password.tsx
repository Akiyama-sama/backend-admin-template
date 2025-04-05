import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'

import { ForgotForm } from './components/forgot-password-form'

export default function ForgotPassword() {
  return (
  
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-md font-semibold tracking-tight'>
            找回密码
          </h1>
          <p className='text-sm text-muted-foreground'>
            输入您的注册邮箱，我们将发送一个链接来重置您的密码。
          </p>
        </div>
        <ForgotForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          没有账号？{' '}
          <Link
            to='/auth/sign-up'
            className='underline underline-offset-4 hover:text-primary'
          >
            注册
          </Link>
          .
        </p>
      </Card>

  )
}
