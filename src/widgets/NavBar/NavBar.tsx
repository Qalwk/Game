import styles from './styles.module.scss'
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function NavBar() {
  return (
    <div className={styles.NavBar}>
      <h2>Authorization</h2>
      <ButtonDefault variant='primary' color='white' message='Language'></ButtonDefault>
    </div>
  )
}
