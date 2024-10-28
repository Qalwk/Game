import React from 'react'
import "./MainWindow.css"
import { ButtonInput } from '../../shared/ui/ButtonInput'
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function MainWindow() {
  return (
    <div className='MainWindow'>
      <div className='MainWindow-left'>
        <h2>Devices</h2>
        <ButtonInput variant='primary' color='White' message='Search'/>
      </div>
      <div className='MainWindow-line'></div>
      <div className='MainWindow-right'>
        <div className='MainWindow-right-info'>
          <div className='MainWindow-right-info-search'>
            <h2>Accounts</h2>
            <div className='MainWindow-right-info-search-wrap'>
              <ButtonInput variant='primary' color='White' message='Search'/>
            </div>
          </div>
          <div className='MainWindow-right-info-add'>
            <ButtonDefault variant='primary' color='Red' message='+ Add account'/>
          </div>
        </div>
        <div className='MainWindow-right-main'>

        </div>
      </div>
    </div>
  )
}