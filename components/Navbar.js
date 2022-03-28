import React, { useRef } from 'react'
import Link from 'next/link'
import {BsCart2} from 'react-icons/bs'
import {AiFillCloseSquare, AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import {FiTrash2} from 'react-icons/fi'

const Navbar = () => {
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
    <div className='shadow-md m-0 p-0'>
      <div className="container w-11/12 justify-start flex flex-col md:flex-row w-full mx-auto py-1">
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

      <div ref={ref} className="sidebar h-full z-10 shadow-xl  fixed top-0 right-0 bg-orange-200 py-10 md:w-2/6 px-8 w-3/5 transform transition-transform translate-x-full">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 text-2xl cursor-pointer"><AiFillCloseSquare/></span>
        <ol className="list-decimal mt-7">
          <li className="my-2">
            <div className="flex">
              <div className="w-2/3">Tshirt - Green Topper</div>
              <div className="w-1/6 flex items-center justify-center text-2xl cursor-pointer"><AiFillMinusCircle/></div>
              <div className="w-1/6 flex items-center justify-center bg-white">1</div>
              <div className="w-1/6 flex items-center justify-center text-2xl cursor-pointer"><AiFillPlusCircle/></div>
            </div>
          </li>
        </ol>

        <div className="flex flex-col md:flex-row mt-10">
          <button className="flex mr-3 text-white bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded text-md">
            <BsBagCheck className="my-1 mr-2"/> Checkout
          </button>

          <button className="flex md:mt-0 mt-5 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded text-md">
            <FiTrash2 className="my-1 mr-2"/> Empty Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar