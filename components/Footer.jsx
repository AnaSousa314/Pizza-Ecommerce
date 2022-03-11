import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" objectFit='cover' alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SÓ AQUI VOCÊ A FATIA DE PIZZA CROCANTE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ACHE NOSSOS RESTAURANTES</h1>
          <p className={styles.text}>
            Rua Dom nº 1654
            <br /> Bairro Boa Vista
            <br /> (00) 0 0000-0000 
          </p>
          <p className={styles.text}>
            Rua Chicago nº 1796
            <br /> Bairro América
            <br /> (00) 0 0000-0000 
          </p>
          <p className={styles.text}>
            Rua Marte nº 165
            <br /> Bairro Planetas
            <br /> (00) 0 0000-0000 
          </p>
          <p className={styles.text}>
            Rua Ouro nº 758
            <br /> Bairro Minérios
            <br /> (00) 0 0000-0000 
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORÁRIO DE FUNCIONAMENTO</h1>
          <p className={styles.text}>
            SEGUNDA A SEXTA-FEIRA 
            <br /> 9:00 - 22:00 
          </p>
          <p className={styles.text}>
            SÁBADO - DOMINGO 
            <br /> 12:00 - 00:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer