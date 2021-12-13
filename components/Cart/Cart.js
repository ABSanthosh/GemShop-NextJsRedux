/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Cart.module.scss";
import Image from "next/image";
import { useStoreActions, useStoreState } from "easy-peasy";
import Link from "next/link";

function Cart() {
  const basket = useStoreState((state) => state.cart);
  const handleRemoveFromCart = useStoreActions(
    (actions) => actions.removeFromCart
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [basket]);

  return (
    <div className={styles.CartWrapper}>
      <div className={styles.CartWrapper__top}>
        <h3>Cart</h3>
        {basket.map((item, index) => (
          <div key={index} className={styles.CartWrapper__item}>
            <img
              className={styles.CartWrapper__item__close}
              src="/Assets/Img/removeItem.png"
              alt="Remove one item"
              onClick={() => {
                handleRemoveFromCart(item);
                setTotal((t) => t - item.price);
              }}
            />
            <Image src={item.image} height={50} width={50} alt="cart-item" />
            <i>x{item.quantity}</i>
          </div>
        ))}
      </div>
      <div className={styles.CartWrapper__bottom}>
        <h3>Sub Total</h3>
        <p>${total}</p>
        {total > 0 && <Link href="/checkout">Checkout</Link>}
      </div>
    </div>
  );
}

Cart.propTypes = {
  // bla: PropTypes.string,
};

Cart.defaultProps = {
  // bla: 'test',
};

export default Cart;
