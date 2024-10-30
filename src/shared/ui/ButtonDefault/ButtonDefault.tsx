import type { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonDefaultProps {
  variant: 'primary' | 'secondary'
  color: 'white' | 'dark' | 'blue' | 'green' | 'yellow' | 'red'
  onClick?: MouseEventHandler<HTMLButtonElement>
  message: string
  className?: string
  icon?: string
}

export function ButtonDefault({
  variant = 'primary',
  color = 'white',
  onClick,
  className,
  message,
  icon
}: ButtonDefaultProps) {
  return (
    <button
      type="button"
      className = {
          `
          ${styles.default}
          ${variant === 'primary' 
          ? 'primary' 
          : 'secondary'}  
          ${styles[color]}
          ${className}
          `
      }
      onClick={onClick}
    >
      <p className={`${styles.text} ${color !== 'white' ? styles.text_white : ''}`}>
        {message}
        {icon && <span className={styles.icon}>{icon}</span>}
      </p>
    </button>
  )
}