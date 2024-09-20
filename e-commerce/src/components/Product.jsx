import { useNavigate } from "react-router-dom"
import "../CSS/product.css"

const Product = ({product}) => {

  const { id,title,price,image,description } = product

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/products/${id}`)} className="product">
      <img src={image} alt="" />
      <div className="information">
        <p className="title">{title}</p>
        <p className="price">{price} ₺</p>
      </div>
    </div>
  )
}

export default Product
 