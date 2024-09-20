import { useState } from "react";
import "../CSS/detailProduct.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()
  
  const { id,title, price, image, description } = productDetail;
  //
  const increment = () => {
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const addBasket = () => {
    dispatch(addToCart({ id,title, price, image,quantity})) 
    console.log(productDetail);
  } 
  
  //
  return (
    <div className="detail-container">
      <img src={image} alt="" />
      <div className="detail-information">
        <span className="detail-title">{title}</span>
        <span className="detail-description">{description}</span>
        <span className="detail-price">{price} ₺</span>
        <div className="detail-counter">
          <CiCircleMinus onClick={decrement} className="minus"/>
          <span className="quantity">{quantity}</span>
          <CiCirclePlus onClick={increment} className="plus"/>
        </div>
        <button onClick={addBasket} className="button">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default DetailComp;
