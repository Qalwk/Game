import type { MouseEventHandler } from 'react'
import './ButtonDefault.css'

interface ButtonDefaultProps {
  variant: 'primary' | 'secondary'
  color: 'White' | 'Dark' | 'Blue' | 'Green' | 'Yellow' | 'Red'
  onClick?: MouseEventHandler<HTMLButtonElement>
  message: string
  className?: string
  icon?: string
}

export function ButtonDefault({
  variant = 'primary',
  color = 'White',
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
          ButtonDefault
          ${variant === 'primary' 
          ? 'primary' 
          : 'secondary'}  
          ${color}
          ${className}
          `
      }
      onClick={onClick}
    >
      <p className={`ButtonDefault-text ${color}`}>
        {message}
        {icon && <span className="icon">{icon}</span>}
      </p>
    </button>
  )
}