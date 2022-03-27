import React from 'react'
import Link from 'next/link'
import {BsCart2} from 'react-icons/bs'

const Navbar = () => {
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

      <div className='flex md:ml-auto my-auto justify-center flex-wrap'>
          <Link href={'/tshirts'}><a><BsCart2 className='text-3xl'/></a></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar