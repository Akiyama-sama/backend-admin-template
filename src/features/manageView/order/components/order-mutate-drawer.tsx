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
import { Order, OrderSchema } from '../data/schema'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Order
}


type OrderForm = z.infer<typeof OrderSchema>

export function OrderMutateDrawer({ open, onOpenChange, currentRow }: Props) {
  const isUpdate = !!currentRow

  const form = useForm<OrderForm>({
    resolver: zodResolver(OrderSchema),
    defaultValues: currentRow ?? {
      id: 0,
      orderNo: '',
      customerNo: 0,
      employeeNo: '',
      orderDate: new Date(),
      orderAmount: 0,
      invoiceNo: '',
    },
  })

  const onSubmit = (data: OrderForm) => {
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
          <SheetTitle>{isUpdate ? '更新' : '创建'}订单</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? '通过提供必要信息更新订单。'
              : '通过提供必要信息添加新订单。'}
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
              name='orderNo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>订单号</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入订单号' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='customerNo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>客户编号</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入客户编号' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
              control={form.control}
              name='employeeNo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>员工编号</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入员工编号' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='orderAmount'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>订单金额</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入订单金额' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='invoiceNo'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>发票号</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='输入发票号' />
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
