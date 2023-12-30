import React from 'react'
import ProductCard from './components/ProductCard'

const Products = () => {
  return (
    <div className='container py-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h5 className='m-0'>Our Best Sellers</h5>
            <div className='link-view'>View All Best Sellers</div>
        </div>

        <div className='mt-4 row'>
            <div className='col-lg-3 col-md-4 col-sm-6'>
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default Products