
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

import { useEffect, useState } from 'react';
type MenuProps = {
 children?: React.ReactNode;
}

type avaliableTheme = 'dark' | 'light';

export function Menu({children}: MenuProps) {
  const nextThemeIcon = (theme: avaliableTheme) => {
    return theme === 'dark' ? <SunIcon /> : <MoonIcon />;
  };
  

  const[theme, setTheme] = useState<avaliableTheme>(() => {
    const storageTheme = localStorage.getItem('theme') as avaliableTheme | null;
    return storageTheme ? storageTheme : 'dark';
  });

function handleThemeChange(
  
  event: React.MouseEvent<HTMLAnchorElement,MouseEvent>,
){
  event?.preventDefault(); 
  
 
  setTheme(prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme
  });

  document.documentElement.setAttribute('data-theme', theme);
 
}


useEffect(() => {  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);


 return (
  <nav className={styles.menu}>
    {}
     <div className={styles.menuLink}> {children}     
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Ir para home'
      title = 'Ir para a home'>
        <HouseIcon />
        
      </a>
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Histórico' 
      title = 'Histórico'>
        <HistoryIcon />
        
      </a>
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Configurações'
      title = 'Configurações'>
        <SettingsIcon />
        
      </a>
      {}
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Alternar tema"
        title="Alternar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon(theme)}
        
      </a>
      
      </div>     
  </nav>
 )
}
