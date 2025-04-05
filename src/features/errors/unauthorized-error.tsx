import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function UnauthorisedError() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] font-bold leading-tight'>401</h1>
        <span className='font-medium'>未授权访问</span>
        <p className='text-center text-muted-foreground'>
          请使用适当的凭证登录<br />以访问此资源。
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => navigate(-1)}>
            返回
          </Button>
          <Button onClick={() => navigate('/')}>返回首页</Button>
        </div>
      </div>
    </div>
  )
}
