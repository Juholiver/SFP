import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">São Francisco<span>Personalizados</span></Link>
        </div>

        {/* Checkbox para controlar o menu no mobile */}
        <input type="checkbox" id="menuToggle" className={styles.checkbox} />
        
        {/* Ícone do Hambúrguer */}
        <label htmlFor="menuToggle" className={styles.menuIcon}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/#produtos">Produtos</Link></li>
            <li><Link href="/#sobre">Sobre Nós</Link></li>
            <li className={styles.mobileCart}>
               <Link href="/carrinho"><span>🛒</span> Carrinho</Link>
            </li>
            <li className={styles.sair}>
              <Link href="/login">Sair</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}