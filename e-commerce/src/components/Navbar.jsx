import { CiSearch,CiHeart,CiShoppingCart   } from "react-icons/ci";
import "../CSS/navbar.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  const {carts} = useSelector(state => state.cart)

  return (
    <div className='navbar-wrapper'>
      <div onClick={()=>navigate("/")} className="navbar-left">
          ShopZone
      </div>
      <div className="navbar-center">
          <input type="text" placeholder="Ara..." />
          <CiSearch size={28} />
      </div>
      <div className="navbar-right">
        <CiHeart size={28}/>
        <div onClick={()=>navigate(`/cart`)} className="shopping-count">
          <div className="count">{carts.length}</div>
          <CiShoppingCart  size={28}/>
        </div>
      </div>
    </div>
  ) 
}

export default Navbar
