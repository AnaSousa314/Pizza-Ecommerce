import Image from "next/image";
import React from "react";
import styles from "../styles/Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quatity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover"/>
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover"/>
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>

        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CARRINHO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>R$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>R$79.60
          </div>

          <button className={styles.button}>FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
