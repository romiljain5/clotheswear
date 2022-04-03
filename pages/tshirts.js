import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const Tshirts = ({products}) => {
  // console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => {
            return <Link key={item._id} href={`/product/${item.slug}`}>
              <div className="lg:w-auto md:w-auto md:m-2 p-5 m-3 w-full cursor-pointer shadow-xl">
                <a className="flex justify-center relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[35vh] md:h-[36vh] block"
                    src={item.img}
                  />
                </a>
                <div className="mt-4 md:text-left text-center">
                  <h3 className="text-gray-500 text-xs capitalize tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">₹{item.price}</p>
                  <p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </div>
            </Link> })}
          </div>
        </div>
      </section>
    </div>
  );
};

//Using this function we are passing server side data in form of props to tshirts.js
export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
    // MONGO_URI is in .env.local where database link is stored
    await mongoose.connect(process.env.MONGO_URI);
  }
    
    // In mongo find() method returns all databases which contains category as tshirt
    let products = await Product.find({category: 'tshirt'});
  return {
    props: {products: JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  };
}

export default Tshirts;
