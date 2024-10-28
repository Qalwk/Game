import type { MouseEventHandler } from 'react'
import './ButtonInput.css'

interface ButtonInputProps {
  variant: 'primary' | 'secondary'
  color: 'White' | 'Dark' | 'Blue' | 'Green' | 'Yellow' | 'Red'
  onClick?: MouseEventHandler<HTMLButtonElement>
  message: string
  className?: string
  icon?: string
}

export function ButtonInput({
  variant = 'primary',
  color = 'White',
  onClick,
  className,
  message,
}: ButtonInputProps) {
  return (
    <button
      type="button"
      className = {
          `
          ButtonInput
          ${variant === 'primary' 
          ? 'primary' 
          : 'secondary'}  
          ${color}
          ${className}
          `
      }
      onClick={onClick}
    >
      <p className='ButtonInput-text'>
        {message}
      </p>
    </button>
  )
}