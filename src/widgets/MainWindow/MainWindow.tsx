import styles from './styles.module.scss'
import { ButtonInput } from '../../shared/ui/ButtonInput'
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function MainWindow() {
  return (
    <div className={styles.MainWindow}>
      <div className={styles.left}>
        <h2>Devices</h2>
        <ButtonInput variant='primary' color='white' message='Search'/>
      </div>
      <div className={styles.line}></div>
      <div className={styles.right}>
        <div className={styles.right_info}>
          <div className={styles.right_info_search}>
            <h2>Accounts</h2>
            <div className={styles.right_info_search_wrap}>
              <ButtonInput variant='primary' color='white' message='Search'/>
            </div>
          </div>
          <div className={styles.right_info_add}>
            <ButtonDefault variant='primary' color='white' message='+ Add account'/>
            <ButtonDefault variant='primary' color='dark' message='+ Add account'/>
            <ButtonDefault variant='primary' color='blue' message='+ Add account'/>
            <ButtonDefault variant='primary' color='green' message='+ Add account'/>
            <ButtonDefault variant='primary' color='yellow' message='+ Add account'/>
            <ButtonDefault variant='primary' color='red' message='+ Add account'/>
          </div>
        </div>
        <div className={styles.right_main}>

        </div>
      </div>
    </div>
  )
}