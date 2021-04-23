import styles from './header.module.scss';

export default function Header() {
  return(
    <header className={styles.containerHeader}>
    <div className={styles.headerContent}>
      <a href="/">
      <label className={styles.xsolarText}>X Solar</label>
      </a>
     <a href="/cadastros">
     <label htmlFor="">Cadastros</label>
     </a>
      <a href="/">
      <label htmlFor="">Home</label>
      </a>

      
    </div>
  </header>
  )
 
}
