import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SidebarProvider} from "@/components/ui/sidebar"
import './index.css'
import { RouterProvider } from "react-router-dom";
import {router} from './routes/index.tsx'
import { ThemeProvider } from './context/theme-context.tsx'
import { FontProvider } from './context/font-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <SidebarProvider>
        <FontProvider>
            <RouterProvider router={router}/>
        </FontProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
