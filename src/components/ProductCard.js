import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils'
import { toast } from 'react-toastify'

const ProductCard = ({ data }) => {
  const navigate = useNavigate()
  const isStock =  data?.quntity > 0 ? true : false
  return (
    <>
        <div className='product_card'>
          <div onClick={() => {
              isStock ? navigate(`/product_detail/${data?.id}`) : toast.warn(`${data?.name} is out of stock`)
            }} className='text-primary-color cursor-pointer'>
            <div className='img position-relative overflow-hidden'>
                <img className='w-100' src={`${BASE_URL}${data?.image}`} />
                <a className='btn-secondary addToCartBtn d-block text-center' style={{position: 'absolute', width: '100%', bottom: '-50px', left: '0px', transition: '0.3s'}}>
                  {
                    isStock ? "View" : "Out Of Stock"
                  }
                </a>
            </div>
            <div className='text-center p-2'>
              <h6 className='fw-bold'>{data?.name}</h6>
                <div className='price d-flex justify-content-center align-items-center gap-1 pb-2'>
                    <del className='text-tertiary-color'>${data?.orginal_price}</del>
                    <span className='fw-medium'>${data?.discounted_price}</span>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductCard