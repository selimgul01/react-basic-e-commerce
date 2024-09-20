import { useDispatch, useSelector } from "react-redux"
import "../CSS/category.css"
import { useEffect } from "react"
import { getCategories } from "../redux/categorySlice"

const Category = ({setCategory}) => {

    const {categories} = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])
 
  return (
    <div className="category-wrapper">
      <h1>KATEGORİ</h1>
      <div className="categories">
        {
          categories?.map((category,i)=>(
            <div onClick={()=>setCategory(category)} key={i} className="category">{category}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Category
