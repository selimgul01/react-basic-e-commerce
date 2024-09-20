import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getProducts } from '../redux/productSlice'
import Product from './Product'
import "../CSS/product.css"
import Loading from './Loading'


const Products = ({category}) => {

  const {products,productsStatus} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory(category))
    dispatch(getProducts())
  },[dispatch,category])

  console.log(products);
  
  
  return ( 
    <div className='products'>
      {productsStatus === "LOADING" ? <Loading/> : 
        products.map((product,i)=>(
          <Product product={product} key={i} />
        ))
      }
    </div>
  )
}

export default Products
