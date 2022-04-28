import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import {BsCart2} from 'react-icons/bs'
import {AiFillCloseSquare, AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import {FiTrash2} from 'react-icons/fi'
import {MdAccountCircle} from 'react-icons/md'

const Navbar = ({logout, user, cart, addToCart, removeFromCart, clearCart, subtotal}) => {
  const [dropdown, setDropdown] = useState(false)

  // console.log(cart, addToCart, removeFromCart, clearCart, subtotal)
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
      <div className='flex items-center md:justify-center justify-start ml-4 md:ml-0'>
        <Link href={'/'}>
        <a className='flex'>
          <img src="/logo.png" width='40px' alt="" />
          <h5 className='my-auto ml-3 text-xl'>ClothesWear</h5>
        </a>
        </Link>
      </div>

      <div className='flex flex-wrap my-3'>
        <ul className='pl-8 my-auto flex space-x-4 md:py-2 mx-auto font-semibold'>
          <Link href={'/tshirts'}><a className='hover:text-orange-700'><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a className='hover:text-orange-700'><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a className='hover:text-orange-700'><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a className='hover:text-orange-700'><li>Mugs</li></a></Link>
        </ul>
      </div>

      <div className='flex w-auto md:ml-auto absolute md:relative right-2'>
        <div className='cart text-4xl mr-2 md:mr-0 cursor-pointer w-1/2 justify-center md:justify-end md:w-auto flex md:ml-auto my-auto'>
       
       <a onMouseOver={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}}>
        {/* if user.value is not null only then render <MdAccountCircle> */}
        {user.value && <MdAccountCircle/>}
        
      {dropdown && <div onMouseOver={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}} className='absolute right-7 bg-red-600 text-white text-base top-13 rounded-md w-36'>
        
        <ul>
          <Link href={'/myaccount'}><a><li className='py-2 rounded-t-md border-b-2 border-red-500 px-3 hover:bg-red-700'>My Account</li> </a></Link>
          <Link href={'/orders'}><a><li className='py-2 border-b-2 border-red-500 px-3 hover:bg-red-700'>Orders</li></a></Link>
          <li onClick={logout} className='py-2 rounded-b-md border-b-2 border-red-500 px-3 hover:bg-red-700'>Logout</li>
        </ul>
      </div>}
      </a>

        {!user.value && <Link href={'/login'}>
          <button class="text-white md:text-base text-sm bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md">
            Login
          </button>
        </Link>}
        </div>
        <div onClick={toggleCart} className='cart cursor-pointer w-1/2 justify-center md:justify-end md:w-auto flex md:ml-5 my-auto justify-center flex-wrap'>
            <a><BsCart2 className='text-3xl'/></a>
        </div>
      </div>
      </div>

      <div ref={ref} className={`sidebar h-full overflow-y-scroll z-10 shadow-xl  fixed top-0 right-0 bg-gray-300 py-10 md:w-80 pl-8 w-72 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 text-3xl cursor-pointer text-red-600"><AiFillCloseSquare/></span>
        <ol className="list-decimal mt-7">
          {Object.keys(cart).length == 0 && <div className='text-xl'>No items in the cart</div>}
          {Object.keys(cart).map((k)=>{ return <li key={k} className="my-3 mb-4">
            <div className="flex">
              <div className="w-2/3 text-base mr-2">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
              <div onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-10 flex items-center justify-center md:text-2xl text-xl cursor-pointer"><AiFillMinusCircle/></div>
              <div className="w-10 flex items-center justify-center bg-white">{cart[k].qty}</div>
              <div onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="w-10 flex items-center justify-center md:text-2xl text-xl cursor-pointer"><AiFillPlusCircle/></div>
            </div>
          </li>})}

        </ol>
        <p className='text-lg font-semibold mt-5'>Rs {subtotal}</p>

        <div className="flex flex-col md:flex-row mt-10">
          <Link href={'/checkout'}>
          <button className="flex mr-3 text-white md:w-auto w-4/5 bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded md:text-md text-sm">
            <BsBagCheck className="my-1 mr-2"/> Checkout
          </button>
          </Link>

          <button onClick={clearCart} className="flex md:mt-0 mt-5 w-4/5 md:w-auto text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-orange-800 rounded md:text-md text-sm">
            <FiTrash2 className="my-1 mr-2"/> Empty Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar