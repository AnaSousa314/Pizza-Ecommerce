import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";


const Product = ({pizza}) =>{

  const [price, setPrice] = useState(pizza.prices[0]);
  const[size,setSize] = useState(0);//posição do array price
  const[quantity,setQuantity] = useState(1);//posição do array price

  const [extras, setExtras] = useState([]);

  const changePrice = (number)=>{
    setPrice(price+number);
  }

  // console.log(pizza)

  const handleSize = (sizeIndex) =>{
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }

  const handleChange = (e,option) =>{
    const checked = e.target.checked;
    
    if(checked){
      changePrice(option.price)
      setExtras(prev=>[...prev,option])
    }else{
      changePrice(-option.price)
      setExtras(extras.filter(extra=>extra._id !== option._id))
    }
  }

  console.log(extras)


  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain"  alt=""/>    
          
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>R${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>

        <h3 className={styles.choose}>Escolha o tamanho</h3>
        
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={()=>handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={()=>handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Escolha outros Igredientes</h3>
        <div className={styles.igredients}>

          {pizza.extraOptions.map((option)=>{
            return(
              <div className={styles.option} key={option._id}>
                <input 
                  type="checkbox" 
                  name={option.text} 
                  id={option.text} 
                  className={styles.checkbox}
                  onChange={(e)=>handleChange(e,option)}
                />
                <label htmlFor="double">{option.text}</label>  
              </div>
            )
          })}

        </div>

        <div className={styles.add}>
          <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} name="" id="" className={styles.quantity}/>
          <button className={styles.button}>Adicionar ao Carrinho</button>
        </div>

      </div>
    </div>
  )
}

export default Product


export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return{
    props:{
      pizza: res.data,
    }
  }
}