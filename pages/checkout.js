import React from "react";
import {IoIosArrowDown} from "react-icons/io"

const Checkout = () => {
  return (
    <div className="p-20 container md:w-2/3 m-auto">
      <div className="bg-white md:ml-auto md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Checkout
        </h2>
        <p classNameName="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div className="md:flex w-full md:space-x-5 mt-5">
          <div className="md:w-1/2 mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="md:flex w-full md:space-x-5">
          <div className="md:w-1/2 mb-4">
            <label for="address" className="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="md:flex w-full md:space-x-5">
          <div className="md:w-1/2 mb-4">
            <label for="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="md:w-1/2 mb-4">
            <label for="zip" className="leading-7 text-sm text-gray-600">
              Zip / Postal code
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="md:flex w-full md:space-x-5 items-center">
          <div className="md:w-1/2 mb-4">
            <label for="city" className="leading-7 text-sm text-gray-600">
              Shipping Country
            </label>
          <div className="flex">
            <select className="w-full cursor-pointer rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>France</option>
            </select>
            <span className="text-2xl relative right-10 items-center flex" > <IoIosArrowDown/></span>
          </div>
          </div>

          <div className="md:w-1/2 mb-4">
            <label for="city" className="leading-7 text-sm text-gray-600">
              Shipping Subdivision
            </label>
          <div className="flex">
            <select className="w-full cursor-pointer rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
              <option>andabar and nicobar islands</option>
              <option>jammu and kashmir</option>
              <option>jharkhand</option>
              <option>karnataka</option>
            </select>
            <span className="text-2xl relative right-10 items-center flex" > <IoIosArrowDown/></span>
          </div>
          </div>
        </div>

        <div className="w-full flex mt-5">
          <div className="w-1/2">
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Back to cart
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Next
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
