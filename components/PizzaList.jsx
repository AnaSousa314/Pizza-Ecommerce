import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"


const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>A MELHOR PIZZA DA CIDADE</h1>
            <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias fuga quo pariatur cumque distinctio iste aliquam aspernatur ut accusamus? Saepe ea rerum repellendus voluptatibus ratione, delectus vero earum quisquam cumque?
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza)=>{
                    return(
                        <PizzaCard key={pizza._id} pizza={pizza}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PizzaList;