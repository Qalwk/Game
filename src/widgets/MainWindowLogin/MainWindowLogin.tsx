import React from 'react'
import "./MainWindowLogin.css"
import { ButtonInput } from '../../shared/ui/ButtonInput'
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function MainWindowLogin() {
  return (
    <div className='MainWindowLogin'>
      <div className='MainWindowLogin-wrap'>
        <div className='MainWindowLogin-wrap-btn'>
          <ButtonInput variant='primary' color='White' message='Login'/>
          <ButtonInput variant='primary' color='White' message='Password'/>
          <div className='MainWindowLogin-wrap-btn-login'>
            <ButtonDefault variant='primary' color='Blue' message='Login'></ButtonDefault>
          </div>
        </div>
        <p className='MainWindowLogin-infoText'>Forgot your password?</p>
      </div>
      <p className='MainWindowLogin-infoText'>
      Round-the-clock technical support service:  
      <br />
      Telegram: ***
      </p>
    </div>
  )
}