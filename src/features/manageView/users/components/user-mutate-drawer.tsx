import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { User, UserSchema } from '../data/schema'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: User
}


type UserForm = z.infer<typeof UserSchema>

export function UserMutateDrawer({ open, onOpenChange, currentRow }: Props) {
  const isUpdate = !!currentRow

  const form = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
    defaultValues: currentRow ?? {
      id: 0,
      userName: '',
      password: '',
      createDate: new Date(),
    },
  })

  const onSubmit = (data: UserForm) => {
    // do something with the form data
    onOpenChange(false)
    form.reset()
    toast({
      title: '您提交了以下值：',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        form.reset()
      }}
    >
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>{isUpdate ? '更新' : '创建'}用户</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? '通过提供必要信息更新用户。'
              : '通过提供必要信息添加新用户。'}
            完成后点击保存。
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='employee-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-5'
          >
            <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>用户名</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入用户名' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>密码</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入密码' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem className='relative space-y-3'>
                  <FormLabel>角色</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='admin' />
                        </FormControl>
                        <FormLabel className='font-normal'>管理员</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='user' />
                        </FormControl>
                        <FormLabel className='font-normal'>普通用户</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className='gap-2'>
          <SheetClose asChild>
            <Button variant='outline'>取消</Button>
          </SheetClose>
          <Button form='user-form' type='submit'>
            {isUpdate ? '更新' : '创建'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
