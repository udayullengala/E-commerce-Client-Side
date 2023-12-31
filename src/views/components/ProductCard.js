import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <>
        <div className='product_card'>
          <Link to="/product_detail/" className='text-primary-color'>
            <div className='img position-relative overflow-hidden'>
                <img className='w-100' src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg" />
                <a className='btn-secondary addToCartBtn d-block text-center' style={{position: 'absolute', width: '100%', bottom: '-50px', left: '0px', transition: '0.3s'}}>
                    Add To Cart
                </a>
            </div>
            <div className='text-center p-2'>
              <h6 className='fw-bold'>Women’s Blue Training</h6>
                <div className='price d-flex justify-content-center align-items-center gap-1 pb-2'>
                    <del className='text-tertiary-color'>$999</del>
                    <span className='fw-medium'>$499</span>
                </div>
            </div>
          </Link>
        </div>
    </>
  )
}

export default ProductCard