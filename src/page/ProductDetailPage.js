import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id } = useParams()
  return (
    <div>
        <h1>show{id}</h1>
    </div>
  )
}

export default ProductDetailPage