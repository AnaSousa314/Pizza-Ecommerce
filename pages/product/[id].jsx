import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";


const Product = () =>{

  const[size,setSize] = useState(0)//posição do array price

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9,23.9,27.9],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam amet minima, accusantium eius quis tempore! Accusamus id iste optio eum dolores eligendi fugiat facilis, nam officiis itaque ipsa esse."
  };




  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain"  alt=""/>    
          
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>R${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>

        <h3 className={styles.choose}>Escolha o tamanho</h3>
        
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={()=>setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={()=>setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Escolha outros Igredientes</h3>
        <div className={styles.igredients}>

          <div className={styles.option}>
            <input 
              type="checkbox" 
              name="double" id="double" 
              className={styles.checkbox}
            />
            <label htmlFor="double">Igredientes em Dobro</label>  
          </div>

          <div className={styles.option}>
            <input 
              type="checkbox" 
              name="cheese" id="cheese" 
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Queijo Extra</label>  
          </div>

          <div className={styles.option}>
            <input 
              type="checkbox" 
              name="spicy" id="spicy" 
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Molho Picante</label>  
          </div>

          <div className={styles.option}>
            <input 
              type="checkbox" 
              name="garlic" id="garlic" 
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Molho de Alho</label>  
          </div>
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} name="" id="" className={styles.quantity}/>
          <button className={styles.button}>Adicionar ao Carrinho</button>
        </div>

      </div>
    </div>
  )
}

export default Product