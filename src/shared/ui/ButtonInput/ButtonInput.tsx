import type { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonInputProps {
  variant: 'primary' | 'secondary'
  color: 'white' | 'dark' | 'blue' | 'green' | 'yellow' | 'red'
  onClick?: MouseEventHandler<HTMLButtonElement>
  message: string
  className?: string
  icon?: string
}

export function ButtonInput({
  variant = 'primary',
  color = 'white',
  onClick,
  className,
  message,
}: ButtonInputProps) {
  return (
    <button
      type="button"
      className = {
          `
          ${styles.default}
          ${variant === 'primary' 
          ? 'primary' 
          : 'secondary'}  
          ${color}
          ${className}
          `
      }
      onClick={onClick}
    >
      <p className={styles.text}>
        {message}
      </p>
    </button>
  )
}