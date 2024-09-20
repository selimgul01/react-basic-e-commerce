import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/CartComp'

const Cart = () => {

  const {carts,itemCount,totalAmount} = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartTotal())
  },[dispatch])

  const clearCartHandler = () => {
    dispatch(clearCart()) 
    dispatch(getCartTotal())
  }

  return (
    <div className='mt-28'>
      {
        carts.length > 0 
        ?<div>
          {
            carts.map((cart,i)=>(
              <CartComp cart={cart} key={i}/>
            ))
          }
        </div> 
        :<div> Sepetiniz Boş...</div>
      }
     {
      carts.length === 0 ? <div></div> 
      : 
      <div className='cart-total'>
      <span className='cart-price'>Toplam Tutar: {Math.floor(totalAmount)} ₺</span>
      <button onClick={clearCartHandler} className='cart-btn button'>Sepeti Boşalt</button>
    </div>
     }
    </div>
  ) 
}

export default Cart
