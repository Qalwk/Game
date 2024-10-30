import type { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ViewMarkupProps {
  children: ReactNode
}

export function Layout({ children }: ViewMarkupProps) {
  return (
    <div className={styles.layout}>

      {children}

    </div>
  )
}