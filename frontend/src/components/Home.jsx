import React from 'react'
import { useGetProductsQuery } from '../slice/productApiSlice'

const Home = () => {

  const { data, isLoading,error } = useGetProductsQuery()
  console.log(data)
  return (
    <div>
     {data.map((product)=> (
      <img src = {product.image} />
     ))}
    </div>
  )}
export default Home
