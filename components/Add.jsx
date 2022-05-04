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

  const changePrice = (e,index) =>{
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices)
  }

  const handleExtraInput = (e) =>{
    setExtra({...extra,[e.target.name]: e.target.value})
  };

  const handleExtra = (e) =>{
    setExtraOPtions(prev=>[...prev,extra])
  }

  const handleCreate = async()=>{
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset","uploads");
    try {
      const uploadRes = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/upload`,data);

      const {url} = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url
      };

      await axios.post("http://localhost:3000/api/products", newProduct);

      setClose(true);
      console.log(uploadRes);
    } catch (error) {
      console.log({message: error});
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={()=>setClose(true)} className={styles.close}>X</span>
        <h1>Adicione uma nova Pizza</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Escolha uma imagem</label>
          <input type="file" name="" id="" onChange={(e)=>setFile(e.target.files[0])}/> {/* é [0] pq não serão multiplos arquivos */}
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Título</label>
          <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)} className={styles.input}/>
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Descrição</label>
          <textarea 
            type="text" 
            name="" 
            id="" 
            rows={4} 
            onChange={(e)=>setDesc(e.target.value)}
          
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Prices</label>

          <div className={styles.priceContainer}>
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
              onChange={(e)=>changePrice(e,1)}
            />
            <input 
              className={`${styles.input} ${styles.inputSm}`}
              type="number" 
              placeholder="Grande" 
              onChange={(e)=>changePrice(e,2)}
            />
          </div>
        </div>

        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input 
              className={`${styles.input} ${styles.inputSm}`}
              type="text" 
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
          <div className={styles.extraItems}>
            {extraOptions.map((option)=>(
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  ) 
}

export default Add;