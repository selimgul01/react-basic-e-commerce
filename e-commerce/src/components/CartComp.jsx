import { useDispatch } from "react-redux"
import "../CSS/cartcomp.css"
import { useEffect } from "react"
import { clearCart, removeFromCart } from "../redux/cartSlice"

const CartComp = ({cart}) => {
  const dispatch = useDispatch()
  const {id,title,image,quantity,price} = cart

  const removeProduct = () => {
    dispatch(removeFromCart({id})) 
    dispatch(getCartTotal())
  }

  return (
    <div className="cart-wrapper"> 
      <img className="cart-image" src={image} alt="" />
      <div className="cart-title">{title}</div>
      <div className="cart-price">{price}₺ ({quantity})</div>
      <button onClick={()=>removeProduct(id)} className="cart-btn button">Ürünü sil</button>
    </div>
  )
}

export default CartComp
