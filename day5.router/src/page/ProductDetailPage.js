import React from 'react';
import { useParams } from "react-router-dom"

const ProductDetailPage = () => {
    const {id} = useParams()
   
  return (
    <h1>Show Product Detail {id}</h1>
  )
}

export default ProductDetailPage