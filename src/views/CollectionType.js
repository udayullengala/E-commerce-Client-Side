import React from 'react'
import { useParams } from 'react-router-dom'
import ProductSection from '../components/ProductSection'

const CollectionType = () => {

    const { gender } = useParams()

    return (
        <ProductSection title={gender} gender={gender} />
    )
}

export default CollectionType