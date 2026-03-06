import Card from "../card/Card";
import styles from "./Protudos.module.css";

export default function ListaProdutos() {
  const produtos = [
    { id: 1, title: "Camiseta Preta", description: "Camiseta branca de algodão personalizada", price: 45.00, img: "/Camisetapreta.jpg" },
    { id: 2, title: "Camiseta Branca", description: "Camiseta preta de algodão personalizada.", price: 50.00, img: "/camisetabranca.jpg" },
    { id: 3, title: "Caneca", description: "Caneca de porcelana personalizada.", price: 40.00, img: "/caneca.jpg" },
    { id: 4, title: "Almofada", description: "Almofada de algodão personalizada.", price: 55.00, img: "/almofada.jpg" },
    { id: 5, title: "Almochaveiro", description: "Almochaveiro personalizado.", price: 5.00, img: "/almochaveiro.jpg" },
    { id: 6, title: "Almochaveiro", description: "Almochaveiro personalizado.", price: 5.00, img: "/almochaveiro.jpg" },
    { id: 7, title: "Almochaveiro", description: "Almochaveiro personalizado.", price: 5.00, img: "/almochaveiro.jpg" },
    { id: 8, title: "Almochaveiro", description: "Almochaveiro personalizado.", price: 5.00, img: "/almochaveiro.jpg" },

  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Produtos</h2>
      <div className={styles.grid}>
        {produtos.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
            img={p.img}
          />
        ))}
      </div>
    </div>
  );
}