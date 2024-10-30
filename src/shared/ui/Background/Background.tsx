import styles from './styles.module.scss'

export function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.topleft}></div>
      <div className={styles.topright}></div>
      <div className={styles.bottomleft}></div>
      <div className={styles.bottomright}></div>
    </div>
  )
}

