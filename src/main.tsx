import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SidebarProvider} from "@/components/ui/sidebar"
import './index.css'
import { RouterProvider } from "react-router-dom";
import {router} from './routes/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router}/>
    </SidebarProvider>
  </StrictMode>,
)
