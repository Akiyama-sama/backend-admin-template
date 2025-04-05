import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Order } from '../data/schema'

type OrderDialogType = 'create' | 'update' | 'delete'|'import'

interface OrderContextType {
  open: OrderDialogType | null
  setOpen: (str: OrderDialogType | null) => void
  currentRow: Order | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Order | null>>
}

const OrderContext = React.createContext<OrderContextType | null>(null)

interface Props {
  children: React.ReactNode
}


export default function OrderProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<OrderDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Order | null>(null)
  
  return (
    <OrderContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </OrderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => {
  const orderContext = React.useContext(OrderContext)

  if (!orderContext) {
    throw new Error('useOrder has to be used within <OrderContext>')
  }

  return orderContext
}
