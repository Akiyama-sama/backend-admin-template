import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean
}

export default function GeneralError({
  className,
  minimal = false,
}: GeneralErrorProps) {
  const navigate = useNavigate()
  return (
    <div className={cn('h-svh w-full', className)}>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        {!minimal && (
          <h1 className='text-[7rem] font-bold leading-tight'>500</h1>
        )}
        <span className='font-medium'>抱歉！出现了错误 {`:')`}</span>
        <p className='text-center text-muted-foreground'>
          我们为给您带来的不便道歉。<br />请稍后再试。
        </p>
        {!minimal && (
          <div className='mt-6 flex gap-4'>
            <Button variant='outline' onClick={() => navigate(-1)}>
              返回
            </Button>
            <Button onClick={() => navigate('/')}>返回首页</Button>
          </div>
        )}
      </div>
    </div>
  )
}
