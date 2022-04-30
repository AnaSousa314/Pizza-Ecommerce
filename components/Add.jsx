import styles from "../styles/Add.module.css"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const Add = ({setClose}) =>{
  const [file,setFile] = useState(null)
  const [title,setTitle] = useState(null)
  const [desc,setDesc] = useState(null)
  const [prices,setPrices] = useState([])
  const [extra,setExtra] = useState(null)
  const [extraOptions,setExtraOPtions] = useState([])

  const handleExtraInput = (e) =>{
    setExtra({...extra,[e.target.name]: e.target.value})
  }

  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={()=>setClose(true)} className={styles.close}>X</span>
        <h1>Adicione uma nova Pizza</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Escolha uma imagem</label>
          <input type="file" name="" id="" />
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Título</label>
          <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Descrição</label>
          <input type="text" name="" id="" rows={4} onChange={(e)=>setDesc(e.target.value)}/>
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Prices</label>
          <input 
            className={`${styles.input} ${styles.inputSm}`}
            type="number" 
            placeholder="Pequena" 
            onChange={(e)=>changePrice(e,0)}
          />
          <input 
            className={`${styles.input} ${styles.inputSm}`}
            type="number" 
            placeholder="Media" 
            onChange={(e)=>changePrice(e,0)}
          />
          <input 
            className={`${styles.input} ${styles.inputSm}`}
            type="number" 
            placeholder="Grande" 
            onChange={(e)=>changePrice(e,0)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Extra</label>
          <input 
            className={`${styles.input} ${styles.inputSm}`}
            type="number" 
            placeholder="Item" 
            onChange={handleExtraInput}
            name="text"
          />
          <input 
            className={`${styles.input} ${styles.inputSm}`}
            type="number" 
            placeholder="Price" 
            onChange={handleExtraInput}
            name="price"
          />
          <button className={styles.extraButton} onClick={handleExtra}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  ) 
}

export default Add;