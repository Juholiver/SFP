'use client'
import { useCartStore } from "../store/cartStore"
import styles from "./carrinho.module.css"
import Header from "../_components/header/Header"
import { useEffect } from "react"

export default function Carrinho() {
  const { cart, removeFromCart } = useCartStore()
  const { increaseQuantity } = useCartStore()
  const { decreaseQuantity } = useCartStore()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  useEffect(() => {
  const fetchCartFromDB = async () => {
    const res = await fetch("/api/cart");
    if (res.ok) {
      const data = await res.json();
      // Se sua API retornar o carrinho do banco, atualize o Zustand aqui
      // useCartStore.setState({ cart: data.produtos }); 
    }
  };

  fetchCartFromDB();
}, []);

  return (
    <>
    <Header />
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Carrinho</h1>

      {cart.length === 0 && (
        <p className={styles.empty}>Seu carrinho está vazio</p>
      )}

      <div className={styles.cartList}>
        {cart.map(item => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.image} />

            <div className={styles.info}>
              <h3 className={styles.titleInfo}>{item.title}</h3>
              <p >Quantidade: {item.quantity}</p>
              <p className={styles.price}>
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              className={styles.removeButton}
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
            <button
              className={styles.incresseButton}
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <button
              className={styles.decreaseButton}
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className={styles.summary}>
          <h2>Total: R$ {total.toFixed(2)}</h2>
          <button className={styles.checkoutButton}>
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
    </>
  )
}

function setCart(data: any): any {
  throw new Error("Function not implemented.")
}
