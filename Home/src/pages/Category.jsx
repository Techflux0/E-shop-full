import React, { useContext } from 'react'
import { VscSettings } from 'react-icons/vsc'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext"

const Category = ({ banner, category }) => {

  const {all_products} = useContext(ShopContext)

  return (
    <section className='max-padd-container bg-primary'>
      <div>
        <div className='pt-6'>
          <img src={banner} alt="" className='block mb-7 mx-auto'/>
        </div>
        <div className='flexBetween my-10 mx-2'>
          <h5><span className='font-bold'>Showing 1-12</span> out of 36 products</h5>
          <Link to={'/'}><VscSettings className='text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white'/></Link>
        </div>
        {/* container */}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32 '>
          {all_products.map((item)=> {
            if (category === item.category) {
              return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          })}
        </div>
        <div className='py-16 text-center'>
          <button className='btn-dark rounded-xl'>Load more</button>
        </div>
      </div>
    </section>
  )
}

export default Category