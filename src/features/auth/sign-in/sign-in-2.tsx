import ViteLogo from '@/assets/vite.svg'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn2() {
  return (
    <div className='container relative grid h-svh  items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden  h-full  flex-col bg-muted p-10 text-white dark:border-r lg:flex overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 transition-colors duration-500'/>
        <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 to-transparent'></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className='relative z-20 flex items-center text-xl font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6 text-blue-300'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          后台管理系统
        </div>

        <div className="relative flex justify-center items-center flex-1">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full blur-md bg-blue-400/20"></div>
            <img
              src={ViteLogo}
              className='relative z-10 animate-pulse-slow transform hover:scale-105 transition-transform duration-500'
              width={200}
              height={200}
              alt='Vite'
            />
          </div>
        </div>

        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2 border-l-2 border-blue-400/30 pl-4'>
            <p className='text-lg text-blue-50'>
              &ldquo;这个模板为我节省了无数小时的工作，
              帮助我比以往更快地向客户提供令人惊叹的设计。&rdquo;
            </p>
            <footer className='text-sm text-blue-200/70'>张三</footer>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>登录</h1>
            <p className='text-sm text-muted-foreground'>
              在下方输入您的邮箱和密码<br />
              以登录您的账户
            </p>
          </div>
          <div className="rounded-lg p-4 shadow-sm bg-card">
            <UserAuthForm />
          </div>
          <p className='px-4 text-center text-sm text-muted-foreground'>
            点击登录，即表示您同意我们的{' '}
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
            。
          </p>
        </div>
      </div>
    </div>
  )
}
