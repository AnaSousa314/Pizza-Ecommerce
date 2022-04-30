import styles from "../styles/Add.module.css"

const AddButton = ({setClose}) =>{
  return <div 
      className={styles.mainAddButton}
      onClick={()=>setClose(false)}
    >
      Adicione Nova Pizza
    </div>
}

export default AddButton;