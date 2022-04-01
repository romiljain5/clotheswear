import React, { useRef } from 'react'
import Link from 'next/link'
import {BsCart2} from 'react-icons/bs'
import {AiFillCloseSquare, AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import {FiTrash2} from 'react-icons/fi'

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subtotal}) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subtotal)
  // This function is used to toggle cart
  const toggleCart =()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }else if(!ref.current.classList.contains('transform-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()
  return (
    <div className='shadow-md sticky top-0 bg-white z-10 m-0 p-0'>
      <div className="container justify-start flex flex-col md:flex-row w-full mx-auto py-1">
      <div className='flex items-center justify-center'>
        <Link href={'/'}>
        <a className='flex'>
          <img src="/logo.png" width='40px' alt="" />
          <h5 className='my-auto ml-3 text-xl'>ClothesWear</h5>
        </a>
        </Link>
      </div>

      <div className='flex flex-wrap my-3'>
        <ul className='pl-8 my-auto flex space-x-3 md:py-2 mx-auto'>
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>

      <div onClick={toggleCart} className='cart cursor-pointer flex md:ml-auto my-auto justify-center flex-wrap'>
          <a><BsCart2 className='text-3xl'/></a>
      </div>

      </div>

      <div ref={ref} className="sidebar h-full z-10 shadow-xl  fixed top-0 right-0 bg-gray-300 py-10 md:w-2/6 px-8 w-3/5 transform transition-transform translate-x-full">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 text-3xl cursor-pointer text-red-600"><AiFillCloseSquare/></span>
        <ol className="list-decimal mt-7">
          {Object.keys(cart).length == 0 && <div className='text-xl'>No items in the cart</div>}
          {Object.keys(cart).map((k)=>{ return <li key={k} className="my-2">
            <div className="flex">
              <div className="w-2/3 text-xs md:text-base">{cart[k].name}</div>
              <div onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-10 flex items-center justify-center md:text-2xl text-xl cursor-pointer"><AiFillMinusCircle/></div>
              <div className="w-10 flex items-center justify-center bg-white">{cart[k].qty}</div>
              <div onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-10 flex items-center justify-center md:text-2xl text-xl cursor-pointer"><AiFillPlusCircle/></div>
            </div>
          </li>})}

        </ol>

        <div className="flex flex-col md:flex-row mt-10">
          <Link href={'/checkout'}>
          <button className="flex mr-3 text-white w-full md:w-auto bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded md:text-md text-sm">
            <BsBagCheck className="my-1 mr-2"/> Checkout
          </button>
          </Link>

          <button onClick={clearCart} className="flex md:mt-0 mt-5 w-full md:w-auto text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-orange-800 rounded md:text-md text-sm">
            <FiTrash2 className="my-1 mr-2"/> Empty Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar