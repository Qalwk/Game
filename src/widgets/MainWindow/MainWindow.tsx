import React from 'react'
import "./MainWindow.css"
import { ButtonInput } from '../../shared/ui/ButtonInput'

export function MainWindow() {
  return (
    <div className='MainWindow'>
      <div className='MainWindow-left'>
        <h2>Devices</h2>
        <ButtonInput variant='primary' color='White' message='Search'/>
      </div>
      <div className='MainWindow-right'>
        <h2>Devices</h2>
        <ButtonInput variant='primary' color='White' message='Search'/>
      </div>
    </div>
  )
}