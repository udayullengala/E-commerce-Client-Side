import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { get } from '../utils'
import Spinner from './Spinner'

const ProductSection = ({ title, gender }) => {

	const [productList, setProductList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getData = () => {
		get(`/products/${gender ? `?gender=${gender.toUpperCase()}` : ''}`)
		.then((resp) => {
			console.log(resp)
			setProductList(resp?.data?.data)
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			setIsLoading(false)
		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='container py-5'>
			<div className='d-flex justify-content-center align-items-center'>
				<h4 className='m-0 text-secondary-color text-uppercase'>{title}</h4>
			</div>

			<div className='mt-4 row'>
				{
					!isLoading ? (
						productList?.map((curElem) => {
							return (
								<div className='col-lg-3 col-md-4 col-sm-6'>
									<ProductCard data={curElem} />
								</div>
							)
						})

					)  : (
						<div className='w-100 d-flex justify-content-center align-items-center'>
							<Spinner />
						</div>
					)
				}
			</div>
		</div>
	)
}

export default ProductSection