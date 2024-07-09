import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={`/product/${id}`} className='bg-white p-4 rounded-xl relative'>
        <div className='flexCenter'>
            <img src={image} alt="" height={211} width={211} className='rounded-lg drop-shadow-xl absolute bottom-44'/>
        </div>
        <div className='flex flex-col gap-y-3 pt-24'>
            <h4 className='line-clamp-2 medium-16'>{name}</h4>
            <p>Get The product at affordable price, tap to see more about the product!</p>
            <div className='flexBetween'>
                <div className='flex gap-x-4 medium-16'>
                    <span>${new_price}.00</span>
                    <span className='line-through text-secondary'>${old_price}.00</span>
                </div>
                <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-secondary'/>
            </div>
        </div>
    </Link>
  )
}

export default Item