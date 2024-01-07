import React from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems)

    return (
        <div className='container py-md-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <h4 className='m-0 text-secondary-color border-bottom'>Cart</h4>
            </div>

            <div className='py-5'>
                {
                    cartItems.length > 0 ? <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {/* <th scope="col">Sr No.</th> */}
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItems?.map((curElem, key) => {
                                    return (
                                        <tr key={key}>
                                            {/* <th scope="row">{key + 1}</th> */}
                                            <td>
                                                <div className='d-flex justify-content-start align-items-start gap-1'>
                                                    <img width={'100px'} height={'100px'} src={`${BASE_URL}${curElem?.product_data?.image}`} />
                                                     
                                                    <h6>{curElem?.product_data?.name}</h6>
                                                    
                                                </div>
                                            </td>
                                            <td>{curElem?.quantity}</td>
                                            <td>${curElem?.product_data?.discounted_price * curElem?.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </table> : (
                        <div className='text-center'>
                            <h5>Cart is Empty</h5>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default Cart