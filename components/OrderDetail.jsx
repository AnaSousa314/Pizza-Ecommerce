import { useState } from "react"
import styles from "../styles/OrderDetail.module.css"

const OrderDetail = ({total, createOrder}) =>{
  const [customer,setCustomer] = useState("");
  const [address,setAddress] = useState("");

  const handleClick = () =>{
    createOrder({customer,address,total,method:0});
  }

  return(
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Você pagará R$12 pela entrega</h1>
          <div className={styles.item}>
            <label className={styles.label}>Nome Completo</label>
            <input 
              type="text"  
              placeholder="John Doe" 
              className={styles.input} 
              onChange={(e)=>setCustomer(e.target.value)}
            />
          </div>

          <div className={styles.item}>
            <label className={styles.label}>Telefone</label>
            <input 
              type="text"  
              placeholder="(xx) x xxxx - xxxx" 
              className={styles.input} 
              // onChange={(e)=>setCustomer(e.target.value)}
            />
          </div>


          <div className={styles.item}>
            <label className={styles.label}>Endereço</label>
            <textarea
              rows={5}
              type="text"  
              placeholder="Rua Cobra Nº 00" 
              className={styles.textarea} 
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>

          <button className={styles.button} onClick={handleClick}>
            Order
          </button>

        </div>
      </div>
    </>
  )
}

export default OrderDetail;