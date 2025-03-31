import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Employee } from '../components/columns'

type EmployeeDialogType = 'create' | 'update' | 'delete'|'import'

interface EmployeeContextType {
  open: EmployeeDialogType | null
  setOpen: (str: EmployeeDialogType | null) => void
  currentRow: Employee | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Employee | null>>
}

const EmployeeContext = React.createContext<EmployeeContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function EmployeeProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<EmployeeDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Employee | null>(null)
  return (
    <EmployeeContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </EmployeeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployee = () => {
  const employeeContext = React.useContext(EmployeeContext)

  if (!employeeContext) {
    throw new Error('useEmployee has to be used within <EmployeeContext>')
  }

  return employeeContext
}
