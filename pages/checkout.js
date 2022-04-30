import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
  const InitiatePayment = async () => {

    let oid = Math.floor(Math.random() * Date.now());
    // Get a transaction token from api in API folder
    const data = {cart, subtotal, oid, email:email}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
    let txnRes = await a.json()
    console.log(txnRes)
    let txnToken = txnRes.txnToken

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid /* update order id */,
        token: txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: subtotal /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error) {
        console.log("error => ", error);
      });
  };

  return (
    <div className="md:p-20 p-5 container md:w-2/3 m-auto">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        
      />

      <div className="bg-white md:ml-auto md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-xl font-bold mb-1 font-medium title-font">
          Checkout
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Please fill the details below
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
              <span className="text-2xl relative right-10 items-center flex">
                {" "}
                <IoIosArrowDown />
              </span>
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
              <span className="text-2xl relative right-10 items-center flex">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Review cart items */}
      <div className="h-full mt-10 w-full">
        <h2 className="text-xl font-bold">Review Shopping Cart</h2>
        <ol className="list-decimal mt-7 p-5">
          {Object.keys(cart).length == 0 && (
            <div className="text-xl">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="my-2">
                <div className="flex md:text-lg text-sm">
                  <div className="w-5/6">{cart[k].name}</div>
                  <div
                    onClick={() => {
                      removeFromCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="w-10 flex items-center justify-center text-2xl cursor-pointer"
                  >
                    <AiFillMinusCircle />
                  </div>
                  <div className="w-10 flex items-center justify-center bg-white">
                    {cart[k].qty}
                  </div>
                  <div
                    onClick={() => {
                      addToCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="w-10 flex items-center justify-center text-2xl cursor-pointer"
                  >
                    <AiFillPlusCircle />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 md:text-lg text-sm border-2 border-green-800 py-2 px-8 text-black">
          <p>
            Your subtotal is{" "}
            <span className="font-semibold text-green-700">₹{subtotal}</span>{" "}
          </p>
        </div>

        <div className="w-full flex mt-5 space-y-2 md:space-y-0 md:flex-row flex-col">
          <div className="w-full flex md:justify-end">
            <button
              onClick={InitiatePayment}
              className="text-white bg-red-500 border-0 py-2 px-6 w-full md:w-auto focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Proceed to pay ₹{subtotal}
            </button>
          </div>
        </div>
      </div>
      {/* review cart ended */}
    </div>
  );
};

export default Checkout;
