
import styles from './styles.module.css'

export function Timer() {
 return (
  <div className={styles.container}>
    <div className={styles.timer}>
      <span>00</span>
      <span>:</span>
      <span>00</span>
    </div>
  </div>
 )
}
