import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  return (
    <div style={{padding: '0px 120px', backgroundColor: '#F5F5FA' }}>
      <span style={{color: 'rgb(128, 128, 137)', fontSize: '14px'}}>Trang chủ</span>
      <ProductDetailsComponent />
    </div>
  )
}

export default ProductDetailsPage