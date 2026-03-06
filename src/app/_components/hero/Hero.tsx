import styles from './hero.module.css';
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>São Francisco Personalizados</h1>
        <p>Brindes • Camisetas • Canecas • Lembranças</p>
        
      </div>
    </section>
  );
}