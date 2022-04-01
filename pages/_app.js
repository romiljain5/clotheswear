import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)

  useEffect(()=>{
    console.log("run from _app.js")
    //if cart is their or not in localstoragee, if user visited earlier then it should be saved in localstorage
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }, [])

  // to save in local storage
  const saveCart = (myCart) => {
    localStorage.setItem("cart",JSON.stringify(myCart))

    //setting total amount of products in cart
    let subt = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubtotal(subt)
  }

  //add button for cart
  const addToCart =(itemCode, qty, price, name, size, variant)=> {
    let newCart = cart
    // if item is available already then add more to it
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    //if not then create one and add
    else{
      newCart[itemCode] = {qty:1, price, name, size, variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  //remove item button for cart
  const removeFromCart =(itemCode, qty, price, name, size, variant)=>{
    let newCart = cart
    // if item is available already then remove item from it
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    //if quantity of item is less than or equal to 0 then remove item from list
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart =()=>{
    setCart({})
    saveCart({})
  }
  return (<>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}/>
    {/* below component props gets pases to all */}
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} /> 
    <Footer/>
    </>)
}

export default MyApp
