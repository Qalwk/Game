import styles from './styles.module.scss'
import { ButtonInput } from '../../shared/ui/ButtonInput'
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function MainWindowLogin() {
  return (
    <div className={styles.MainWindowLogin}>
      <div className={styles.MainWindowLogin_wrap}>
        <div className={styles.MainWindowLogin_wrap_btn}>
          <ButtonInput variant='primary' color='white' message='Login'/>
          <ButtonInput variant='primary' color='white' message='Password'/>
          <div className={styles.MainWindowLogin_wrap_btn_login}>
            <ButtonDefault variant='primary' color='blue' message='Login'></ButtonDefault>
          </div>
        </div>
        <p className={styles.infoText}>Forgot your password?</p>
      </div>
      <p className={styles.infoText}>
      Round-the-clock technical support service:  
      <br />
      Telegram: ***
      </p>
    </div>
  )
}