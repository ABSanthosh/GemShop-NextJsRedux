/* eslint-disable react-hooks/rules-of-hooks */
import { useStoreState } from "easy-peasy";
import Image from "next/image";
import styles from "../styles/Checkout.module.scss";

export default function checkout() {
  const basket = useStoreState((state) => state.cart);

  return (
    <main className={styles.Checkout}>
      <h1>Checkout</h1>
      <article className={styles.Checkout__Container}>
        <div className={styles.Checkout__Container__top}>
          <header className={styles.Checkout__Container__Header}>
            <h3>Order Summary</h3>
          </header>
          <section className={styles.Checkout__Container__Content}>
            <p>{basket.reduce((acc, item) => acc + item.quantity, 0)} Items</p>
            {basket.map((item, index) => (
              <div key={index} className={styles.Checkout__Container__item}>
                <Image alt="Gem" src={item.image} width={55} height={55} />
                <p>
                  {item.quantity} x {item.title}
                </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}
          </section>
        </div>
        <footer className={styles.Checkout__Container__Footer}>
          <h3>Total</h3>
          <p>
            ${basket.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </p>
        </footer>
      </article>
    </main>
  );
}
