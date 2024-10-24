import type { ReactNode } from 'react'
import './Layout.css'

interface ViewMarkupProps {
  children: ReactNode
}

export function Layout({ children }: ViewMarkupProps) {
  return (
    <div className="layout">

      {children}

    </div>
  )
}