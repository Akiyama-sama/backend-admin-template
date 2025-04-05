import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function ForbiddenError() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] font-bold leading-tight'>403</h1>
        <span className='font-medium'>禁止访问</span>
        <p className='text-center text-muted-foreground'>
          您没有必要的权限<br />
          查看此资源。
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
