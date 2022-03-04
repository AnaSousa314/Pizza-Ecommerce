import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from 'next/image';
function Featured() {

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png"
  ]


  return (
    <div className={styles.container}>

      <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt='' layout='fill'/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>

          {images.map((img, i)=>(
            <Image src="/img/featured.png" key={i} alt='' layout="fill"/>
          ))}

        </div>
        
      </div>

      <div className={styles.arrowContainer}>
        <Image src="/img/arrowr.png" alt='' layout='fill'/>
      </div>
    </div>
  )
}

export default Featured