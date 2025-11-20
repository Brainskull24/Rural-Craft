import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} className="text-craft-brown cursor-pointer craft-card group">
      <div className='overflow-hidden rounded-lg border-2 border-craft-tan bg-white'>
        <img src={image[0]} className='hover:scale-110 transition ease-in-out duration-500' alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm group-hover:text-craft-rust transition-colors'>{name}</p>
      <p className='text-sm font-bold text-craft-rust'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem