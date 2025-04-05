import { toast } from '@/hooks/use-toast'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { useEmployee } from '../context/employeeContext'

import { EmployeeMutateDrawer } from './employee-mutate-drawer'

export function EmployeeDialogs() {
  const { open, setOpen, currentRow, setCurrentRow} = useEmployee()
  return (
    <>
      <EmployeeMutateDrawer
        key='employee-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />
      
      {currentRow && (
        <>
          <EmployeeMutateDrawer
            key={`employee-update-${currentRow.id}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key='employee-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              setOpen(null)
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
              toast({
                title: '以下员工已被删除：',
                description: (
                  <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                      {JSON.stringify(currentRow, null, 2)}
                    </code>
                  </pre>
                ),
              })
            }}
            className='max-w-md'
            title={`删除这个员工: ${currentRow.id} ?`}
            desc={
              <>
                你确定要删除这个员工吗？{' '}
                <strong>{currentRow.id}</strong>. <br />
                这个操作无法撤销。
              </>
            }
            confirmText='删除'
          />
        </>
      )}
    </>
  )
}
