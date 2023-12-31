import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1)

  return (
    <div className='container bg-light py-md-5'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='w-90' src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg' />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='product-details'>
                    <h6 className='text-secondary-color'>Training, Women</h6>
                    <h4>Women’s Peach Training</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore itaque incidunt at et, cupiditate omnis. Dolores aspernatur corporis iure officiis?
                    </p>
                    <h4>
                        <del className='text-tertiary-color me-2'>$999</del>
                        <span className='fw-medium'>$499</span>
                    </h4>
                </div>
                <div className='action-btn mt-4'>
                    <div className='quantiity d-flex justify-content-start align-items-center'>
                        <div onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} className='minus d-flex border align-items-center cursor-pointer' style={{padding: '5px 10px', height: '40px'}}>
                            <FaMinus size={'18px'} />
                        </div>
                        <div className='count d-flex border align-items-center' style={{width: '40px', height: '40px'}}>
                            <input type="text" value={quantity} onChange={(e) => {
                                if(!isNaN(e.target.value)) {
                                    setQuantity(Number(e.target.value) === 0 ? 1 : Number(e.target.value))
                                }
                            }} style={{background: 'transparent', border: 'none', outline: 'none', height: '100%', textAlign: "center", width: '100%'}} />
                        </div>
                        <div onClick={() => setQuantity(quantity + 1)} className='plus d-flex border align-items-center cursor-pointer' style={{padding: '5px 10px', height: '40px'}}>
                            <FaPlus size={'18px'} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-start aligin-items-center gap-2 mt-4'>
                        <a className='btn-secondary'>
                            Add To Cart
                        </a>
                        <a className='btn-main'>
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail