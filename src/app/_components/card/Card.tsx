'use client'
import styles from "./Card.module.css"
import { useCartStore } from "../../store/cartStore"

interface CardProps {
  id: number
  title: string
  description: string
  price: number
  img: string
}

export default function Card({ id, title, description, price, img }: CardProps) {

  const addToCart = useCartStore(state => state.addToCart)

  const handleAdd = () => {
    addToCart({
      id,
      title,
      description,
      price,
      img,
      quantity: 1
    })

    alert(`${title} foi adicionado ao carrinho!`)
  }

  return (
    <div className={styles.card}>
      <img src={img} className={styles.imagePlaceholder} alt={title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>R$ {price.toFixed(2)}</span>
          <button
            className={styles.addButton}
            onClick={handleAdd}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}