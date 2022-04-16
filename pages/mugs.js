import React from 'react'
import Link from 'next/link'
import Product from "../models/Product";
import mongoose from "mongoose";

const Mugs = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* if their are no products in database */}
            {Object.keys(products).length === 0 && <p>Sorry all the Mugs are currently out of stock. New stock comming soon, Stay Tuned!</p>}
            {Object.keys(products).map((item) => { 
              return <Link key={products[item]._id} href={`/product/${products[item].slug}`}>
              <div className="lg:w-1/4 md:w-1/3 md:m-0 p-4 m-2 cursor-pointer shadow-lg">
              <a className="relative flex justify-center rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto md:mx-0 h-[35vh] md:h-[36vh] block"
                  src={products[item].img}
                />
              </a>
              <div className="mt-4 md:text-left text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {products[item].category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                </h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  <div className="mt-1">
                    {products[item].size.includes('S') && <span className="border border-gray-600 px-1 mx-1">S</span>}
                    {products[item].size.includes('M') && <span className="border border-gray-600 px-1 mx-1">M</span>}
                    {products[item].size.includes('L') && <span className="border border-gray-600 px-1 mx-1">L</span>}
                    {products[item].size.includes('XL') && <span className="border border-gray-600 px-1 mx-1">XL</span>}
                    {products[item].size.includes('XXL') && <span className="border border-gray-600 px-1 mx-1">XXL</span>}
                  </div>

                  {/* color buttons */}
                  <div className="mt-2">
                      {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('gray') && <button className="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
              </div>
            </div>
            </Link> })}
          </div>
        </div>
      </section>
    </div>
  )
}

//Using this function we are passing server side data in form of props to tshirts.js
export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
    // MONGO_URI is in .env.local where database link is stored
    await mongoose.connect(process.env.MONGO_URI);
  }
    
    // In mongo find() method returns all databases which contains category as tshirt
    let products = await Product.find({category: 'mugs'});
    let mugs = {}

    for(let item of products){
        if(item.title in mugs){
            // Here we are matching title as unique and pushing it in same JSON object with different color, Because all 
            // other properties are same
            if(!mugs[item.title].color.includes(item.color) && item.availableQty > 0){
              mugs[item.title].color.push(item.color)
            }
            // doing same for the size
            if(!mugs[item.title].size.includes(item.size) && item.availableQty > 0){
              mugs[item.title].size.push(item.size)
            }
        }else{
          mugs[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
              mugs[item.title].color = [item.color]
              mugs[item.title].size = [item.size]
            }
        }
    }

  return {
    props: {products: JSON.parse(JSON.stringify(mugs))}, // will be passed to the page component as props
  };
}

export default Mugs