import type { ReactNode } from 'react'
import './Layout.css'

interface ContentProps {
  children?: ReactNode
}

export function LayoutContent({ children }: ContentProps) {
  return <div className="layout-content">{children}</div>
}