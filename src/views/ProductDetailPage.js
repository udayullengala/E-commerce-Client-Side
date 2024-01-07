import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { BASE_URL, get } from '../utils';
import Spinner from '../components/Spinner';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

const ProductDetailPage = () => {

    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [productData, setProductData] = useState({})
    const { product_id } = useParams()

    const dispatch = useDispatch()

    const getProductDetails = () => {
        get(`/products/?id=${product_id}`)
        .then((resp) => {
            console.log(resp)
            setProductData(resp?.data?.data)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getProductDetails()
    }, [])

    const addProduct = () => {
        const updatedData = {
            quantity: selectedQuantity,
            product_data: productData
        }

        dispatch(addToCart(updatedData))
        toast.success("Product added to the cart!")
    }

    return (
        <div className='container bg-light py-md-5'>
            {
                !isLoading ? (
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img style={{width: '90%'}} src={`${BASE_URL}${productData?.image}`} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='product-details'>
                                <h6 className='text-secondary-color'>{productData?.category?.category_name}</h6>
                                <h4>{productData?.name}</h4>
                                <p>
                                    {productData?.description}
                                </p>
                                <h4>
                                    <del className='text-tertiary-color me-2'>${productData?.orginal_price}</del>
                                    <span className='fw-medium'>${productData?.discounted_price}</span>
                                </h4>
                            </div>
                            <div className='action-btn mt-4'>
                                <div className='quantiity d-flex justify-content-start align-items-center'>
                                    <div onClick={() => setSelectedQuantity(selectedQuantity > 1 ? selectedQuantity - 1 : selectedQuantity)} className='minus d-flex border align-items-center cursor-pointer' style={{padding: '5px 10px', height: '40px'}}>
                                        <FaMinus size={'18px'} />
                                    </div>
                                    <div className='count d-flex border align-items-center' style={{width: '40px', height: '40px'}}>
                                        <input type="text" value={selectedQuantity} onChange={(e) => {
                                            if(!isNaN(e.target.value)) {
                                                setSelectedQuantity(Number(e.target.value) === 0 ? 1 : Number(e.target.value))
                                            }
                                        }} style={{background: 'transparent', border: 'none', outline: 'none', height: '100%', textAlign: "center", width: '100%'}} />
                                    </div>
                                    <div onClick={() => setSelectedQuantity(selectedQuantity + 1)} className='plus d-flex border align-items-center cursor-pointer' style={{padding: '5px 10px', height: '40px'}}>
                                        <FaPlus size={'18px'} />
                                    </div>
                                </div>
                                {
                                    productData?.quntity > 0 ? (
                                        <div className='d-flex justify-content-start aligin-items-center gap-2 mt-4'>
                                            <a className='btn-secondary' onClick={() => addProduct()}>
                                                Add To Cart
                                            </a>
                                            <a className='btn-main'>
                                                Buy Now
                                            </a>
                                        </div>
                                    ) : (
                                        <div className='d-flex justify-content-start aligin-items-center gap-2 mt-4'>
                                            <a className='btn-main'>
                                                Out Of Stock
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <Spinner />
                    </div>
                )
            }
            
        </div>
    )
}

export default ProductDetailPage