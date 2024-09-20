import React, { useState } from 'react'
import Category from '../components/Category'
import Products from '../components/Products'

const Home = () => {

  const [category,setCategory] = useState("")

  return (
    <div className='flex mt-14'>
      <div className="w-1/6 bg-gray-300 h-[90vh]">
      <Category setCategory={setCategory} />
      </div>
      <Products category={category} />
    </div>
  )
}

export default Home
