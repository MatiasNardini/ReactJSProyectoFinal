import { useContext } from "react";
import { dataContext } from "../Context/DataContext"
import styles from "./products.scss"



const Produtcs = () => {
    const {data, buyProducts} = useContext(dataContext)
    
   

  return data.map((product)=> {
    return(
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"/>
            <h3>{product.name}</h3>
            <h3>{product.size}</h3>
            <h4>{product.price}$</h4>
            <button onClick={() =>buyProducts(product)}>buy</button>

        </div>
    )
  })
  
}

export default Produtcs