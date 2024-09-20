import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/productSlice'
import DetailComp from '../components/DetailComp'
import Loading from '../components/Loading'

const Detail = () => {

  const {id} = useParams()
  const {productDetail,productDetailStatus} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct(id))
  },[dispatch,id])

  console.log(productDetail);
  
  return (
    <div>
      {
        productDetailStatus === "LOADING" ? <Loading/> : 
        <DetailComp productDetail={productDetail} key={id} />
      }
      
    </div>
  )
}

export default Detail
