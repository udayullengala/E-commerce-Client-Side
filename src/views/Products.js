import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
	return (
		<div className='container py-5'>
			<div className='d-flex justify-content-center align-items-center'>
				<h4 className='m-0 text-secondary-color'>Our Best Sellers</h4>
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