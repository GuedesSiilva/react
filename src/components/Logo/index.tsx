import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css'

type LogoProps = {
 children?: React.ReactNode;
}
export function Logo({children}: LogoProps) {
 return (
  <div className={styles.logo}>
     <div className={styles.logoLink}> {children}
      {}
      <a className = {styles.logoLink} href="/">
        <TimerIcon />
        <span>Chronos</span>
      </a>
      
      </div>     
  </div>
 )
}