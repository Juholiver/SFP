"use client"; // Necessário para interações e hooks do Zustand

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../../store/cartStore'; // Ajuste o caminho conforme seu projeto
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleLogout = async () => {
    console.log("Iniciando logout...");
    try {
      // 1. Chama a API para remover o cookie de autenticação
      const res = await fetch("/api/auth/logout", { method: "POST" });

      if (res.ok) {
        // 2. Limpa o carrinho no Zustand (e localStorage)
        clearCart();

        // 3. Redireciona para o login e força atualização para o Middleware validar
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  const closeMenu = () => {
    const checkbox = document.getElementById('menuToggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            São Francisco<span>Personalizados</span>
          </Link>
        </div>

        <input type="checkbox" id="menuToggle" className={styles.checkbox} />
        
        <label htmlFor="menuToggle" className={styles.menuIcon}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <nav className={styles.nav}>
          <ul>
            <li><Link href="/" onClick={closeMenu}>Início</Link></li>
            <li><Link href="/#produtos" onClick={closeMenu}>Produtos</Link></li>
            <li><Link href="/#sobre" onClick={closeMenu}>Sobre Nós</Link></li>
            <li className={styles.mobileCart}>
               <Link href="/carrinho" onClick={closeMenu}>
                 <span>🛒</span> Carrinho
               </Link>
            </li>
            <li className={styles.sair}>
              {/* Botão de Logout Estilizado como item de menu */}
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}