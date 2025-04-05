import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
        <Outlet />
      </div>
    </div>
  )
}
