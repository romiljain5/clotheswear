import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)
  const [user, setuser] = useState({value:null})
  const [key, setkey] = useState(0)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
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
    // getting token that is saved in localstorage via JWT json web tokens
    const token = localStorage.getItem('token')
    if(token){
      setuser({value: token})
      setkey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('token')
    setuser({value:null})
    setkey(Math.random())
  }

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

  // For buy now button 
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {itemCode: {qty: 1, price, name, size, variant}}
    setCart(newCart)
    saveCart(newCart)
    console.log(newCart)
    router.push('/checkout')

  }

  const clearCart =()=>{
    setCart({})
    saveCart({})
  }
  return (<>
    <LoadingBar
      color='#DC2626'
      progress={progress}
      waitingTime={400}
      height={3}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}/>
    {/* below component props gets pases to all */}
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} /> 
    <Footer/>
    </>)
}

export default MyApp
