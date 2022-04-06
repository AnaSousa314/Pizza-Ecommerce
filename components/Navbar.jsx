import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

import { useSelector } from "react-redux"
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            width={32}
            height={32}
            alt="telephone"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 333 156</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Homepage
          </li>

          <li className={styles.listItem}>
            Product
          </li>

          <li className={styles.listItem}>
            Menu
          </li>

          <Image src="/img/logo.png" alt="Logo" width={160} height={69}
          />

          <li className={styles.listItem}>
            Events
          </li>

          <li className={styles.listItem}>
            Blog
          </li>

          <li className={styles.listItem}>
            Contact
          </li>
        </ul>  
      </div>
      <Link href={"/cart"} passHref>
        <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="Logo" width=  {30} height={30}/>
              <div className={styles.counter}>{quantity}</div>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
