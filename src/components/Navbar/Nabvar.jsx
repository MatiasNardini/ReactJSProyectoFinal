import styles from "./navbar.scss"
import { Link } from "react-router-dom"
import ContadorItems from "../CartContent/ContadorItems"

const Nabvar = () => {
  return (
    <div className="nav-continer">
        <nav className="navbar"> 
        <Link to={"/"}>
        <h1 className="navbar-logo">HOME</h1> </Link>
        <a href="" className="navbar-logo-2">SOBRE NOSOTROS</a>
        <a href=""className="navbar-logo-2">PRODUCTOS</a>
        <a href=""className="navbar-logo-2">GUIA DE TALLES</a>
        
        <Link className="seeCarrito" to={"/cart"}>🛒
        <ContadorItems/>
        </Link>          
        </nav>
    </div>
  )
}

export default Nabvar