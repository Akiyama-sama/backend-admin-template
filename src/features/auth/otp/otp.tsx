import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { OtpForm } from './components/otp-form'

export default function Otp() {
  return (
   
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-md font-semibold tracking-tight'>
            验证码
          </h1>
          <p className='text-sm text-muted-foreground'>
            请输入验证码。 <br /> 我们已经将验证码发送到了您的邮箱。
          </p>
        </div>
        <OtpForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          没有收到验证码？{' '}
          <Link
            to='/auth/signin'
            className='underline underline-offset-4 hover:text-primary'
          >
            重新发送验证码。
          </Link>
          .
        </p>
      </Card>
    
  )
}
