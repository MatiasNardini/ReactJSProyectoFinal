import { useContext } from "react";
import { dataContext } from "../Context/DataContext"

const ContadorItems = () => {
  const { cart } = useContext(dataContext)
  const ItemsQuanty = cart.reduce((acc, el ) => acc + el.quanty, 0)
  return <span className="cart-items.total">{ItemsQuanty}</span>
}

export default ContadorItems