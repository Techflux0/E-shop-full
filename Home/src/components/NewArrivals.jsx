import React, { useEffect, useState } from 'react'
import Item from './Item'


const NewArrivals = () => {

  const [new_collection, setNew_collection] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/newcollections').then((response)=> response.json()).then((data)=> setNew_collection(data));
  }, [])

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
    {/* title */}
    <div className='text-center max-w-xl mx-auto'>
      <h3 className='h3'>New Arrivals</h3>
      <p>Be the first to experience our latest arrivals, where cutting-edge innovation meets unparalleled style. Designed with the latest trends and technology in mind, these new additions to our collection are crafted to offer you superior quality and performance.</p>
    </div>
    {/* container */}
    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
      {new_collection.map((item)=> (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      ))}
    </div>
  </section>
  )
}

export default NewArrivals