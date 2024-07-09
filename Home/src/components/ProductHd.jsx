import React from 'react'
import { TbArrowRight } from 'react-icons/tb';

const ProductHd = (props) => {

    const {product} = props;

  return (
    <div className='max-padd-container flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize bg-primary'>Home <TbArrowRight /> Shop <TbArrowRight /> {product.category} <TbArrowRight /> {product.name}</div>
  )
}

export default ProductHd