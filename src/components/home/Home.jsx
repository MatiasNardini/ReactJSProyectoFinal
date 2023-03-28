import Nabvar from "../Navbar/Nabvar"
import Banner from "../Banner/Banner"
import Produtcs from "../Products/Produtcs"


const Home = () => {
    return ( 
        <>
        <Nabvar/>
        <Banner />
        <div className="product-card-container">
        <Produtcs/>
        </div>
    
        </>)
}

export default Home