import React from 'react'
import { useNavigate } from 'react-router-dom'

const Collections = () => {
    const navigate = useNavigate()
    return (
        
       <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <div onClick={() => navigate("/collections/men")} className='d-flex justify-content-center align-items-center cursor-pointer' style={{background: 'url(https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '600px'}}>
                        <h4 className='text-white-color'>MEN</h4>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div onClick={() => navigate("/collections/women")} className='d-flex justify-content-center align-items-center cursor-pointer' style={{background: 'url(https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '600px'}}>
                        <h4 className='text-white-color'>WOMEN</h4>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Collections