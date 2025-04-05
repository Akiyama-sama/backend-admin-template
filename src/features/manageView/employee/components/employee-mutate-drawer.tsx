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
import { Employee, EmployeeSchema } from '../data/schema'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Employee
}


type EmployeeForm = z.infer<typeof EmployeeSchema>

export function EmployeeMutateDrawer({ open, onOpenChange, currentRow }: Props) {
  const isUpdate = !!currentRow

  const form = useForm<EmployeeForm>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: currentRow ?? {
      id: 0,
      employeeNo: '',
      name: '',
      gender: 'M',
      birthDate: '',
      address: '',
      telephone: '',
      hireDate: new Date(),
      department: '',
      headship: '',
    },
  })

  const onSubmit = (data: EmployeeForm) => {
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
      <SheetContent className='flex flex-col overflow-visible'>
        <SheetHeader className='text-left'>
          <SheetTitle>{isUpdate ? '更新' : '创建'} 员工</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? '更新员工所需信息。'
              : '添加新员工所需信息。'}
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
              name='employeeNo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工编号</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工编号' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工姓名</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工姓名' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='gender'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工性别</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工性别' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工地址</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工地址' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              
            />
            <FormField
              control={form.control}
              name='telephone'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工电话</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工电话' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='department'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工部门</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工所在部门' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='headship'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工职位</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工职位' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='salary'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工工资</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='请输入员工工资' />
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
          <Button form='employee-form' type='submit'>
            {isUpdate ? '更新' : '创建'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
